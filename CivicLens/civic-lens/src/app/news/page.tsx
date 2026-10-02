"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch news
    const fetchNews = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      // In a real app, this would be an API call to backend or GNews API
      setNews([
        {
          id: 1,
          title: "New Infrastructure Bill Passes Congress",
          description: "The new federal infrastructure bill allocates $1.2 trillion for modernizing America's infrastructure.",
          source: "Government Times",
          publishedAt: "2024-05-15T08:30:00Z",
          url: "#",
          imageUrl: "/images/news1.jpg"
        },
        {
          id: 2,
          title: "City Council Approves New Bridge Project",
          description: "The city council has approved funding for a new bridge connecting downtown to the industrial district.",
          source: "Local News Network",
          publishedAt: "2024-05-16T14:45:00Z",
          url: "#",
          imageUrl: "/images/news2.jpg"
        },
        {
          id: 3,
          title: "Federal Funding for Public Transit Expansion",
          description: "The Department of Transportation announces $500 million in funding for public transit improvements.",
          source: "Transportation Today",
          publishedAt: "2024-05-17T10:15:00Z",
          url: "#",
          imageUrl: "/images/news3.jpg"
        },
        {
          id: 4,
          title: "Water Infrastructure Modernization Initiative",
          description: "A comprehensive plan to upgrade the city's water infrastructure system is unveiled.",
          source: "Public Works Journal",
          publishedAt: "2024-05-18T16:20:00Z",
          url: "#",
          imageUrl: "/images/news4.jpg"
        },
        {
          id: 5,
          title: "Sustainable Energy Projects Receive Funding",
          description: "Several green energy infrastructure projects are approved for federal funding.",
          source: "Environment News",
          publishedAt: "2024-05-19T09:30:00Z",
          url: "#",
          imageUrl: "/images/news5.jpg"
        }
      ]);
      setLoading(false);
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Latest News</h1>
          <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-300">Loading news...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <div key={article.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {article.source}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                  <a 
                    href={article.url}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/30"
                  >
                    Read Full Article
                    <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}