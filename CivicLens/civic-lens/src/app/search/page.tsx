"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sample search suggestions
  const suggestions = [
    "Highway Expansion Project",
    "City Water Treatment Plant",
    "Public Library Upgrade",
    "Park Renovation Initiative",
    "Transportation Department"
  ];

  // Simulate search results
  const searchResults = [
    {
      id: 1,
      title: "Highway Expansion Project",
      type: "Project",
      department: "Transportation Department",
      description: "Expansion of Highway 101 to accommodate increased traffic flow.",
      budget: 50000000,
      status: "In Progress"
    },
    {
      id: 2,
      title: "City Water Treatment Plant",
      type: "Project",
      department: "Public Works Department",
      description: "Modernization of the city's water treatment facility.",
      budget: 75000000,
      status: "Planning"
    },
    {
      id: 3,
      title: "Transportation Department",
      type: "Department",
      department: "Transportation Department",
      description: "Responsible for highway and transportation infrastructure projects.",
      budget: null,
      status: "Active"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setShowSuggestions(false);
    
    // Simulate API call
    setTimeout(() => {
      setResults(searchResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.department.toLowerCase().includes(query.toLowerCase())
      ));
      setLoading(false);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    // Trigger search
    setTimeout(() => {
      const event = new Event('submit', { cancelable: true, bubbles: true });
      const form = document.getElementById('search-form') as HTMLFormElement;
      if (form) form.dispatchEvent(event);
    }, 10);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Search</h1>
          <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
          <form id="search-form" onSubmit={handleSearch} className="relative">
            <div className="flex">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search projects, departments, or keywords..."
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium"
              >
                Search
              </button>
            </div>
            
            {/* Suggestions */}
            {showSuggestions && query && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 shadow-lg rounded-md">
                <div className="py-1">
                  {suggestions
                    .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
                    .map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {suggestion}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Results */}
        <div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-300">Searching...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
              <p className="text-gray-500 dark:text-gray-300">No results found for "{query}"</p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Search Results ({results.length})
              </h2>
              <div className="space-y-4">
                {results.map((result) => (
                  <div key={result.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{result.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        result.type === 'Project' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {result.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{result.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Department: {result.department}</span>
                      {result.budget && (
                        <span className="text-gray-500 dark:text-gray-400">Budget: ${result.budget.toLocaleString()}</span>
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        result.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 
                        result.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                        result.status === 'Planning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' : 
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {result.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}