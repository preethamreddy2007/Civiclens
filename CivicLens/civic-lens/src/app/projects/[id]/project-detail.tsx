"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { demoProjects, type DemoProject } from "@/lib/demo-projects";

type ProjectDetails = DemoProject & {
  startDate: string;
  endDate: string;
  location: { lat: number; lng: number };
  milestones: { name: string; status: string; date: string; description: string }[];
  documents: { name: string; url: string }[];
};

export default function ProjectDetail({ id }: { id: string }) {
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch project details
    const fetchProject = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      // In a real app, this would be an API call to backend
      const selectedProject = demoProjects.find(project => String(project.id) === id);
      if (!selectedProject) { setLoading(false); return; }
      setProject({
        startDate: "2023-01-15",
        endDate: "2025-06-30",
        location: { lat: 34.0522, lng: -118.2437 },
        milestones: [
          {
            name: "Design Phase",
            status: "Completed",
            date: "2023-03-15",
            description: "Final design specifications completed"
          },
          {
            name: "Permitting",
            status: "In Progress",
            date: "2023-06-01",
            description: "Permits submitted and pending approval"
          },
          {
            name: "Construction",
            status: "Not Started",
            date: "2023-09-01",
            description: "Construction phase to begin after permit approval"
          }
        ],
        ...selectedProject,
        documents: [
          { name: "Project Proposal.pdf", url: "/docs/proposal.pdf" },
          { name: "Environmental Impact Report.pdf", url: "/docs/impact-report.pdf" },
          { name: "Budget Breakdown.xlsx", url: "/docs/budget-breakdown.xlsx" }
        ]
      });
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-300">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-300">Project not found</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Details</h1>
          <div className="flex space-x-2">
            <Link href="/projects" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              Back to Projects
            </Link>
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Project Header */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' :
              project.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300' :
              project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300' :
              'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}>
              {project.status}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">Department</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{project.department}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">Budget</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">${project.budget.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">Progress</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{project.progress}%</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-300">Project Progress</span>
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
        </div>

        {/* Timeline */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Timeline</h3>
          <div className="space-y-4">
            {project.milestones.map((milestone, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className={`w-3 h-3 rounded-full ${
                    milestone.status === 'Completed' ? 'bg-green-500' :
                    milestone.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}></div>
                  {index < project.milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                  )}
                </div>
                <div className="pb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">{milestone.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(milestone.date)}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{milestone.description}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                    milestone.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' :
                    milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.documents.map((doc, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className="flex items-center">
                  <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{doc.name}</h4>
                    <span className="text-xs text-gray-500">Demo document · unavailable</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Location</h3>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Interactive map would be displayed here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
