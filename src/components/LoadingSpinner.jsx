import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 lg:mt-16">
      <div className="relative">
        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
        <div
          className="absolute inset-1.5 sm:inset-2 lg:inset-2 w-13 h-13 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>

        <div
          className="absolute inset-3 sm:inset-4 lg:inset-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 border-4 border-gray-500 border-t-blue-400 rounded-full animate-spin"
          style={{ animationDuration: "2s" }}
        ></div>

        <div className="absolute inset-4.5 sm:inset-6 lg:inset-6 w-7 h-7 sm:w-8 sm:h-8 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Searching GitHub...
        </h3>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
          Fetching user data and repositories
        </p>

        <div className="flex justify-center mt-3 sm:mt-4 space-x-1">
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500/30 rounded-full animate-ping"></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500/30 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/30 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
