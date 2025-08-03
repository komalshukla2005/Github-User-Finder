import React, { useState } from 'react';
import TechSkills from './TechSkills';
import RepoStats from './RepoStats';

const UserCard = ({ user }) => {
  const [likedRepos, setLikedRepos] = useState(new Set());

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleLike = (repoId) => {
    setLikedRepos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(repoId)) {
        newSet.delete(repoId);
      } else {
        newSet.add(repoId);
      }
      return newSet;
    });
  };

  return (
    <div className="max-w-6xl lg:max-w-7xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-4">
      <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
        {/* Header with profile info */}
        <div className="relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-gray-800/80 via-blue-900/20 to-purple-900/20 border-b border-gray-700/50">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl sm:rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl sm:rounded-3xl border-4 border-gray-700 shadow-2xl group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-green-500 to-emerald-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl border-4 border-gray-800 flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight">
                {user.name || user.login}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-bold mb-3 sm:mb-4">@{user.login}</p>
              {user.bio && (
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed">{user.bio}</p>
              )}
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                {user.location && (
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-200 bg-gray-700/70 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-600/50 shadow-lg hover:scale-105 transition-all duration-200">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">{user.location}</span>
                  </div>
                )}
                {user.company && (
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-200 bg-gray-700/70 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-600/50 shadow-lg hover:scale-105 transition-all duration-200">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">{user.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 sm:gap-3 text-gray-200 bg-gray-700/70 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-600/50 shadow-lg hover:scale-105 transition-all duration-200">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-base lg:text-lg">Joined {formatDate(user.created_at)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="p-4 sm:p-6 lg:p-10 bg-gray-800/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-blue-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 mb-1 sm:mb-2 lg:mb-3">{user.public_repos}</div>
              <div className="text-blue-300 font-bold text-sm sm:text-base lg:text-lg">Repositories</div>
            </div>
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-green-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-400 mb-1 sm:mb-2 lg:mb-3">{user.followers}</div>
              <div className="text-green-300 font-bold text-sm sm:text-base lg:text-lg">Followers</div>
            </div>
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-purple-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-400 mb-1 sm:mb-2 lg:mb-3">{user.following}</div>
              <div className="text-purple-300 font-bold text-sm sm:text-base lg:text-lg">Following</div>
            </div>
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-orange-900/50 to-orange-800/30 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-orange-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 mb-1 sm:mb-2 lg:mb-3">{user.public_gists}</div>
              <div className="text-orange-300 font-bold text-sm sm:text-base lg:text-lg">Gists</div>
            </div>
          </div>
        </div>

        {/* Tech Skills */}
        {user.techSkills && user.techSkills.length > 0 && (
          <div className="p-4 sm:p-6 lg:p-10 border-t border-gray-700/50 bg-gray-800/30">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              Tech Skills & Languages
            </h3>
            <TechSkills skills={user.techSkills} />
          </div>
        )}

        {/* Repository Statistics */}
        {user.repositories && user.repositories.length > 0 && (
          <div className="p-4 sm:p-6 lg:p-10 border-t border-gray-700/50">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              Repository Statistics
            </h3>
            <RepoStats repositories={user.repositories} />
          </div>
        )}

        {/* Recent Repositories */}
        {user.repositories && user.repositories.length > 0 && (
          <div className="p-4 sm:p-6 lg:p-10 border-t border-gray-700/50 bg-gray-800/30">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl sm:rounded-2xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              Recent Repositories
            </h3>
            <div className="grid gap-4 sm:gap-6">
              {user.repositories.slice(0, 5).map((repo, index) => (
                <div 
                  key={repo.id} 
                  className="group relative bg-gray-700/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 sm:gap-3 group/link"
                          >
                            {repo.name}
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:scale-110 group-hover/link:translate-x-1 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </a>
                        </h4>
                      </div>
                      
                      {/* Interactive stats */}
                      <div className="flex flex-col items-start sm:items-end gap-3">
                        <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base">
                          {repo.language && (
                            <span className="flex items-center gap-1.5 sm:gap-2 text-gray-200 bg-gray-600/50 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full font-medium group-hover:bg-gray-500/70 transition-all duration-300 text-xs sm:text-sm">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 group-hover:scale-110 transition-transform duration-300"></div>
                              {repo.language}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="flex items-center gap-1.5 sm:gap-2 text-gray-300 font-medium group-hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="group-hover:scale-105 transition-transform duration-300">{repo.stargazers_count}</span>
                          </span>
                          <span className="flex items-center gap-1.5 sm:gap-2 text-gray-300 font-medium group-hover:text-green-300 transition-colors duration-300 text-sm sm:text-base">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="group-hover:scale-105 transition-transform duration-300">{repo.forks_count}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom info with enhanced styling */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-gray-600/30 gap-2 sm:gap-0">
                      <span className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                        Updated {formatDate(repo.updated_at)}
                      </span>
                      
                      {/* Interactive action buttons */}
                      <div className="flex items-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => toggleLike(repo.id)}
                          className={`p-1.5 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            likedRepos.has(repo.id) 
                              ? 'bg-red-600/20 hover:bg-red-600/40' 
                              : 'bg-blue-600/20 hover:bg-blue-600/40'
                          }`}
                        >
                          <svg 
                            className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
                              likedRepos.has(repo.id) ? 'text-red-400' : 'text-blue-400'
                            }`} 
                            fill={likedRepos.has(repo.id) ? 'currentColor' : 'none'} 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="p-1.5 sm:p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-all duration-300 hover:scale-110">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {user.repositories.length > 5 && (
              <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                <a
                  href={`https://github.com/${user.login}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold rounded-xl sm:rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group text-sm sm:text-base"
                >
                  View all {user.repositories.length} repositories
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard; 