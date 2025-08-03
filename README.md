# GitHub User Finder

A modern, beautiful React application that allows you to search for GitHub users and discover their profile information, repositories, tech skills, and more.

## ✨ Features

- **🔍 User Search**: Search for any GitHub user by their username
- **👤 Profile Information**: Display user's profile picture, name, bio, location, and company
- **📊 Repository Statistics**: View total repositories, stars, forks, and watchers
- **💻 Tech Skills Analysis**: Automatically analyze and display programming languages and tech skills based on repositories and starred projects
- **📈 Repository Analytics**: Detailed statistics about user's repositories including language distribution
- **🌟 Recent Repositories**: Show the most recent and most starred repositories
- **🎨 Modern UI**: Beautiful gradient design with glassmorphism effects
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/komalshukla2005/Github-User-Finder.git>
cd github-user-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub API** - RESTful API for fetching user data
- **Vite** - Fast build tool and development server

## 📱 How to Use

1. **Search for a User**: Enter any GitHub username in the search bar
2. **View Profile**: See the user's profile picture, bio, location, and join date
3. **Explore Stats**: Check out repository counts, followers, and following
4. **Analyze Skills**: Discover what programming languages and technologies the user works with
5. **Browse Repositories**: View recent repositories with descriptions and statistics

## 🔧 API Usage

The app uses the public GitHub API to fetch:
- User profile information
- Repository data
- Starred repositories (for skill analysis)

**Note**: The GitHub API has rate limits for unauthenticated requests. For production use, consider adding authentication.

## 🎨 Features in Detail

### Tech Skills Analysis
The app analyzes a user's tech skills by:
- Counting programming languages used in their repositories
- Analyzing starred repositories to understand interests
- Weighting skills based on repository count and activity

### Repository Statistics
- Total repositories, stars, forks, and watchers
- Language distribution with visual progress bars
- Most starred and recently updated repositories
- Links to view all repositories on GitHub

### Responsive Design
- Mobile-first approach
- Beautiful glassmorphism effects
- Smooth animations and transitions
- Accessible design with proper contrast

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy coding! 🚀**
