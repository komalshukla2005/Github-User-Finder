import React from "react";

const TechSkills = ({ skills }) => {
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-600",
      Python: "bg-blue-500",
      Java: "bg-red-600",
      "C++": "bg-pink-600",
      "C#": "bg-purple-600",
      PHP: "bg-purple-500",
      Ruby: "bg-red-500",
      Go: "bg-cyan-500",
      Rust: "bg-orange-600",
      Swift: "bg-orange-500",
      Kotlin: "bg-purple-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
      SCSS: "bg-pink-500",
      Vue: "bg-green-500",
      React: "bg-blue-400",
      Angular: "bg-red-500",
      "Node.js": "bg-green-600",
      Docker: "bg-blue-500",
      Kubernetes: "bg-blue-600",
      AWS: "bg-orange-500",
      Azure: "bg-blue-600",
      GCP: "bg-blue-500",
      SQL: "bg-blue-600",
      MongoDB: "bg-green-500",
      Redis: "bg-red-500",
      PostgreSQL: "bg-blue-600",
      MySQL: "bg-blue-500",
    };
    return colors[language] || "bg-gray-500";
  };

  const getLanguageIcon = (language) => {
    const icons = {
      JavaScript: "⚡",
      TypeScript: "🔷",
      Python: "🐍",
      Java: "☕",
      "C++": "⚙️",
      "C#": "🎯",
      PHP: "🐘",
      Ruby: "💎",
      Go: "🚀",
      Rust: "🦀",
      Swift: "🍎",
      Kotlin: "🔶",
      HTML: "🌐",
      CSS: "🎨",
      SCSS: "💅",
      Vue: "💚",
      React: "⚛️",
      Angular: "🅰️",
      "Node.js": "🟢",
      Docker: "🐳",
      Kubernetes: "☸️",
      AWS: "☁️",
      Azure: "🔵",
      GCP: "☁️",
      SQL: "🗄️",
      MongoDB: "🍃",
      Redis: "🔴",
      PostgreSQL: "🐘",
      MySQL: "🐬",
    };
    return icons[language] || "💻";
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-gray-700/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-600/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getLanguageColor(
                        skill.language
                      )} flex items-center justify-center text-white font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {getLanguageIcon(skill.language)}
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full ${getLanguageColor(
                        skill.language
                      )} opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-bold text-white text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                      {skill.language}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.count} {skill.count === 1 ? "repo" : "repos"}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <span className="text-lg sm:text-xl font-black text-blue-400 bg-blue-900/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full group-hover:scale-110 group-hover:bg-blue-800/70 transition-all duration-300 shadow-lg">
                    {skill.count}
                  </span>
                  <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-600/50 rounded-full h-2 sm:h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{
                      width: `${Math.min(
                        (skill.count /
                          Math.max(...skills.map((s) => s.count))) *
                          100,
                        100
                      )}%`,
                      background:
                        "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                      backgroundSize: "200% 100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-sm"></div>
                  </div>
                </div>

                <div className="absolute -top-6 right-0 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Math.round(
                    (skill.count / Math.max(...skills.map((s) => s.count))) *
                      100
                  )}
                  %
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i <
                        Math.min(
                          Math.ceil(
                            (skill.count /
                              Math.max(...skills.map((s) => s.count))) *
                              5
                          ),
                          5
                        )
                          ? "bg-blue-400 group-hover:bg-blue-300"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.count >= Math.max(...skills.map((s) => s.count)) * 0.8
                    ? "Expert"
                    : skill.count >=
                      Math.max(...skills.map((s) => s.count)) * 0.6
                    ? "Advanced"
                    : skill.count >=
                      Math.max(...skills.map((s) => s.count)) * 0.4
                    ? "Intermediate"
                    : skill.count >=
                      Math.max(...skills.map((s) => s.count)) * 0.2
                    ? "Beginner"
                    : "Novice"}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute top-2 right-2 w-1 h-1 bg-blue-400/50 rounded-full animate-ping"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute bottom-4 left-3 w-0.5 h-0.5 bg-purple-400/50 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-blue-300/50 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 border border-blue-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm group hover:border-blue-600/50 transition-all duration-300">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-blue-200 font-semibold text-sm sm:text-base group-hover:text-blue-100 transition-colors duration-300">
              How skills are calculated
            </p>
            <p className="text-blue-100 text-xs sm:text-sm mt-1 group-hover:text-blue-50 transition-colors duration-300">
              Skills are analyzed from repositories and starred projects. Higher
              numbers indicate more experience and activity in that technology.
              The progress bars show relative proficiency levels.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Advanced</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
