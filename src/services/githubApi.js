const GITHUB_API_BASE = 'https://api.github.com';
export const githubApi = {

  // Fetch user profile data
  async getUser(username) {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return response.json();
  },

  // Fetch user repositories
  async getUserRepositories(username) {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return response.json();
  },

  // Fetch user's starred repositories
  async getUserStarred(username) {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/starred?per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch starred repositories');
    }
    return response.json();
  },

  async getCompleteUserData(username) {
    const [userData, reposData, starredData] = await Promise.all([
      githubApi.getUser(username),
      githubApi.getUserRepositories(username),
      githubApi.getUserStarred(username)
    ]);

    const techSkills = githubApi.analyzeTechSkills(reposData, starredData);

    return {
      ...userData,
      repositories: reposData,
      techSkills
    };
  },

  analyzeTechSkills(repos, starred) {
    const skills = new Map();
    
    repos.forEach(repo => {
      if (repo.language) {
        skills.set(repo.language, (skills.get(repo.language) || 0) + 1);
      }
    });

    starred.forEach(repo => {
      if (repo.language) {
        skills.set(repo.language, (skills.get(repo.language) || 0) + 0.5);
      }
    });

    return Array.from(skills.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([language, count]) => ({ 
        language, 
        count: Math.round(count) 
      }));
  },

  getRepositoryStats(repositories) {
    if (!repositories || repositories.length === 0) {
      return {
        totalRepos: 0,
        totalStars: 0,
        totalForks: 0,
        totalWatchers: 0,
        languages: {},
        topLanguage: ['None', 0],
        mostStarred: null,
        recentlyUpdated: null
      };
    }

    const stats = {
      totalRepos: repositories.length,
      totalStars: repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalForks: repositories.reduce((sum, repo) => sum + repo.forks_count, 0),
      totalWatchers: repositories.reduce((sum, repo) => sum + repo.watchers_count, 0),
      languages: {},
      topLanguage: ['None', 0],
      mostStarred: null,
      recentlyUpdated: null
    };

    repositories.forEach(repo => {
      if (repo.language) {
        stats.languages[repo.language] = (stats.languages[repo.language] || 0) + 1;
      }
    });

    const languageEntries = Object.entries(stats.languages);
    if (languageEntries.length > 0) {
      stats.topLanguage = languageEntries.sort((a, b) => b[1] - a[1])[0];
    }

    stats.mostStarred = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)[0];

    stats.recentlyUpdated = repositories.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))[0];

    return stats;
  },

  async searchUsers(query, page = 1, perPage = 10) {
    const response = await fetch(
      `${GITHUB_API_BASE}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error('Failed to search users');
    }
    return response.json();
  },

  // user followers
  async getUserFollowers(username, page = 1, perPage = 30) {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/followers?page=${page}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch followers');
    }
    return response.json();
  },

  // user following
  async getUserFollowing(username, page = 1, perPage = 30) {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/following?page=${page}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch following');
    }
    return response.json();
  }
};

export default githubApi; 