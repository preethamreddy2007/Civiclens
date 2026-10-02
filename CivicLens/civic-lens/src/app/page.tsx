import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-6">
          AI-Powered Government Infrastructure Intelligence Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
          Transform government infrastructure data into actionable insights with our advanced AI platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium inline-flex items-center justify-center">
            Explore Projects
          </Link>
          <Link href="/dashboard" className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-full text-lg font-medium inline-flex items-center justify-center">
            Dashboard
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to understand, track, and analyze government infrastructure projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant insights and answers to your infrastructure questions with our AI-powered assistant.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor project progress, budgets, and timelines across all government departments.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">News Feed</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay updated with the latest government infrastructure news and announcements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">1,250+</p>
              <p className="text-blue-100">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$2.4B</p>
              <p className="text-blue-100">Budget</p>
            </div>
            <div>
              <p className="text-3xl font-bold">85%</p>
              <p className="text-blue-100">On-Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold">42</p>
              <p className="text-blue-100">Departments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">© 2026 CivicLens. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Login
            </Link>
            <Link href="/signup" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Sign Up
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
