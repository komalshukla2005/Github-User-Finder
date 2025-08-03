import React from 'react';
import { githubApi } from '../services/githubApi';

const RepoStats = ({ repositories }) => {
  const stats = githubApi.getRepositoryStats(repositories);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Main Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-blue-700/30 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{stats.totalRepos}</div>
          <div className="text-blue-300 font-medium text-sm sm:text-base">Total Repos</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-yellow-700/30 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">{stats.totalStars}</div>
          <div className="text-yellow-300 font-medium text-sm sm:text-base">Total Stars</div>
        </div>
        <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-green-700/30 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">{stats.totalForks}</div>
          <div className="text-green-300 font-medium text-sm sm:text-base">Total Forks</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-purple-700/30 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">{stats.totalWatchers}</div>
          <div className="text-purple-300 font-medium text-sm sm:text-base">Total Watchers</div>
        </div>
      </div>

      {/* Language Distribution */}
      <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-gray-600/50 shadow-lg">
        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Language Distribution
        </h4>
        <div className="space-y-3 sm:space-y-4">
          {Object.entries(stats.languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([language, count]) => (
              <div key={language} className="flex items-center justify-between">
                <span className="font-medium text-gray-200 text-sm sm:text-base">{language}</span>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-20 sm:w-24 lg:w-32 bg-gray-600 rounded-full h-2 sm:h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(count / stats.totalRepos) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-300 font-semibold w-8 sm:w-12 text-right text-sm sm:text-base">{count}</span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Top Repositories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {stats.mostStarred && (
          <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-gray-600/50 shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Most Starred
            </h4>
            <a
              href={stats.mostStarred.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-base sm:text-lg block mb-2"
            >
              {stats.mostStarred.name}
            </a>
            <p className="text-gray-300 text-sm sm:text-base">⭐ {stats.mostStarred.stargazers_count} stars</p>
          </div>
        )}
        
        {stats.recentlyUpdated && (
          <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-gray-600/50 shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Recently Updated
            </h4>
            <a
              href={stats.recentlyUpdated.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-base sm:text-lg block mb-2"
            >
              {stats.recentlyUpdated.name}
            </a>
            <p className="text-gray-300 text-sm sm:text-base">
              Updated {new Date(stats.recentlyUpdated.updated_at).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoStats; 