"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    // Simulate API call to fetch projects
    const fetchProjects = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      // In a real app, this would be an API call to backend
      setProjects([
        {
          id: 1,
          name: "Highway Expansion Project",
          description: "Expansion of Highway 101 to accommodate increased traffic flow.",
          status: "In Progress",
          budget: 50000000,
          department: "Transportation Department",
          progress: 65,
        },
        {
          id: 2,
          name: "City Water Treatment Plant",
          description: "Modernization of the city's water treatment facility.",
          status: "Planning",
          budget: 75000000,
          department: "Public Works Department",
          progress: 20,
        },
        {
          id: 3,
          name: "Park Renovation Initiative",
          description: "Complete renovation of central park facilities.",
          status: "Completed",
          budget: 15000000,
          department: "Environment Department",
          progress: 100,
        },
        {
          id: 4,
          name: "Public Library Upgrade",
          description: "Modernization of the city's main public library.",
          status: "In Progress",
          budget: 8500000,
          department: "Education Department",
          progress: 40,
        },
        {
          id: 5,
          name: "City Hall Security System",
          description: "Installation of advanced security systems in city hall.",
          status: "Planning",
          budget: 3200000,
          department: "Public Safety Department",
          progress: 10,
        },
      ]);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "All" || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusOptions = ["All", "In Progress", "Completed", "Planning"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search Projects</label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filter by Status</label>
              <select
                id="status"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setFilterStatus("All");
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-300">Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-gray-500 dark:text-gray-300">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' : 
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300' : 
                        project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300' : 
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Department: {project.department}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">${project.budget.toLocaleString()}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-300">Progress</span>
                      <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div 
                        className={`h-2.5 rounded-full ${
                          project.progress === 100 ? 'bg-green-600' : 
                          project.progress >= 70 ? 'bg-blue-600' : 
                          project.progress >= 30 ? 'bg-yellow-500' : 'bg-red-600'
                        }`} 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/30"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}