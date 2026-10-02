from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

# Initialize the FastAPI app
app = FastAPI(
    title="CivicLens API",
    description="AI-Powered Government Infrastructure Intelligence Platform",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Project(BaseModel):
    id: int
    name: str
    description: str
    status: str
    budget: float
    department: str
    progress: int
    start_date: str
    end_date: str
    location: dict
    milestones: List[dict]
    documents: List[dict]

class User(BaseModel):
    id: str
    email: str
    name: str
    avatar: Optional[str] = None

class NewsItem(BaseModel):
    id: int
    title: str
    description: str
    source: str
    published_at: str
    url: str
    image_url: Optional[str] = None

# Sample data - in a real app, this would come from a database
sample_projects = [
    Project(
        id=1,
        name="Highway Expansion Project",
        description="Expansion of Highway 101 to accommodate increased traffic flow.",
        status="In Progress",
        budget=50000000.0,
        department="Transportation Department",
        progress=65,
        start_date="2023-01-15",
        end_date="2025-06-30",
        location={"lat": 34.0522, "lng": -118.2437},
        milestones=[
            {"name": "Design Phase", "status": "Completed", "date": "2023-03-15"},
            {"name": "Permitting", "status": "In Progress", "date": "2023-06-01"},
            {"name": "Construction", "status": "Not Started", "date": "2023-09-01"}
        ],
        documents=[
            {"name": "Project Proposal.pdf", "url": "/docs/proposal.pdf"},
            {"name": "Environmental Impact Report.pdf", "url": "/docs/impact-report.pdf"}
        ]
    ),
    Project(
        id=2,
        name="City Water Treatment Plant",
        description="Modernization of the city's water treatment facility.",
        status="Planning",
        budget=75000000.0,
        department="Public Works Department",
        progress=20,
        start_date="2024-01-01",
        end_date="2026-12-31",
        location={"lat": 34.0689, "lng": -118.4057},
        milestones=[
            {"name": "Feasibility Study", "status": "Completed", "date": "2023-12-01"},
            {"name": "Design Phase", "status": "In Progress", "date": "2024-03-01"},
            {"name": "Construction", "status": "Not Started", "date": "2024-09-01"}
        ],
        documents=[
            {"name": "Feasibility Study.pdf", "url": "/docs/feasibility.pdf"}
        ]
    )
]

sample_news = [
    NewsItem(
        id=1,
        title="New Infrastructure Bill Passes Congress",
        description="The new federal infrastructure bill allocates $1.2 trillion for modernizing America's infrastructure.",
        source="Government Times",
        published_at="2024-05-15T08:30:00Z",
        url="https://example.com/news/infrastructure-bill-passes",
        image_url="/images/news1.jpg"
    ),
    NewsItem(
        id=2,
        title="City Council Approves New Bridge Project",
        description="The city council has approved funding for a new bridge connecting downtown to the industrial district.",
        source="Local News Network",
        published_at="2024-05-16T14:45:00Z",
        url="https://example.com/news/bridge-project-approved",
        image_url="/images/news2.jpg"
    )
]

# API Routes
@app.get("/")
async def root():
    return {"message": "Welcome to CivicLens API"}

@app.get("/projects", response_model=List[Project])
async def get_projects():
    return sample_projects

@app.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    for project in sample_projects:
        if project.id == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")

@app.get("/news", response_model=List[NewsItem])
async def get_news():
    return sample_news

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Run the app with: uvicorn main:app --reload

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)