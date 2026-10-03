export type DemoProject = {
  id: number;
  name: string;
  description: string;
  status: string;
  budget: number;
  department: string;
  progress: number;
};

export const demoProjects: DemoProject[] = [
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
      ];
