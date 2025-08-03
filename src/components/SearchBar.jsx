import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
      <form onSubmit={handleSubmit} className="relative group">
        <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          
          {/* Main input container */}
          <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-6 flex items-center pointer-events-none">
              <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter GitHub username..."
              className="w-full pl-12 sm:pl-20 pr-20 sm:pr-32 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl bg-transparent border-none outline-none placeholder-gray-400 font-medium text-white"
            />
            
            <button
              type="submit"
              className="absolute right-1 sm:right-2 top-1 sm:top-2 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-lg text-sm sm:text-base"
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">Search</span>
                <span className="sm:hidden">Go</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        
        <div className="text-center mt-4 sm:mt-6 lg:mt-8">
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium mb-3 sm:mb-4">
            Try searching for popular developers
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['torvalds', 'gaearon', 'addyosmani', 'sindresorhus', 'tj'].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onSearch(suggestion)}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-300 hover:bg-gray-700/80 hover:scale-105 transition-all duration-200 text-xs sm:text-sm font-medium shadow-sm"
              >
                @{suggestion}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar; 