// Project data for the portfolio
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
  github?: string;
  previewImages?: string[]; // Added preview images array
};

// Updated Experience type to include url, github, description and previewImages fields
export type Experience = {
  company: string;
  position: string;
  period: string;
  url?: string;      // URL for visit site
  github?: string;   // GitHub for view code
  description?: string; // Description of the experience
  previewImages?: string[]; // Preview images for the experience
  tags?: string[];   // Technology tags used
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Neurodivergent-Friendly Platform",
    description: "A web platform designed for neurodivergent users featuring brain training games, sensory-friendly tools, and AI-powered recommendations. Includes text-to-speech, customizable themes, and focus/relaxation tools.",
    tags: ["React", "Accessibility", "OpenDyslexic", "AI"],
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/neurodivergent-platform",
    github: "https://github.com/sujaybabu/neurodivergent-platform",
    previewImages: [
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project-2",
    title: "MERN Full-stack Application",
    description: "Comprehensive web application for Gujarat SIH (Smart India Hackathon) to manage research, IPR, innovation, and startup growth with centralized data management tools.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/sih-gujarat",
    previewImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project-3",
    title: "Notes-Taking Application",
    description: "Feature-rich notes-taking application developed during a Python Full-stack internship at IDIT Blackbucks with CRUD operations and user-friendly interface.",
    tags: ["Python", "Django", "CRUD", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/sujaybabu/notes-app",
    previewImages: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// About section data
export const about = {
  name: "Thota Sujay Babu",
  headline: "Full-Stack Developer",
  bio: "I'm Thota Sujay Babu, a passionate Full-Stack Developer with a B.Tech in Computer Science from SRKR Engineering College. I specialize in creating innovative, accessible solutions with a focus on user experience and performance optimization.",
  // These will be loaded dynamically from the JSON file
  skills: [],
  experience: []
};

// Contact information
export const contact = {
  email: "sujayss149@gmail.com",
  phone: "+91 9346491221",
  location: "Bhimavaram, Andhra Pradesh",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/sujaybabu"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sujaybabu"
    }
  ]
};

// Function to load dynamic data
export async function loadDynamicData() {
  try {
    const response = await fetch('/portfolio-data.json');
    if (!response.ok) {
      throw new Error('Failed to load portfolio data');
    }
    const data = await response.json();
    about.skills = data.skills || [];
    about.experience = data.experience || [];
    return true;
  } catch (error) {
    console.error('Error loading dynamic data:', error);
    // Fallback to default values if loading fails
    about.skills = [
      "React, Node.js, HTML5, CSS3",
      "MongoDB, SQLite, MySQL",
      "Python, JavaScript",
      "Frontend Design (Figma)",
      "Cloud Deployment & Server Management",
      "Accessibility Implementation"
    ];
    about.experience = [
      {
        company: "Wonderkids School Website",
        position: "Full-Stack Developer",
        period: "OCT - NOV",
        url: "https://wonderkids-school.example.com",
        github: "https://github.com/sujaybabu/wonderkids-school"
      },
      {
        company: "IDIT Blackbucks",
        position: "Python Full-Stack Intern",
        period: "May 2024 - July 2024",
        url: "https://idit-blackbucks.example.com",
        github: "https://github.com/sujaybabu/idit-notes-app"
      },
      {
        company: "Google",
        position: "Android Developer (Virtual Internship)",
        period: "OCT-DEC 2024",
        url: "https://developers.google.com/training",
        github: "https://github.com/sujaybabu/android-basics"
      }
    ];
    return false;
  }
}
