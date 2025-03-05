
// Project data for the portfolio
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Neurodivergent-Friendly Platform",
    description: "A web platform designed for neurodivergent users featuring brain training games, sensory-friendly tools, and AI-powered recommendations. Includes text-to-speech, customizable themes, and focus/relaxation tools.",
    tags: ["React", "Accessibility", "OpenDyslexic", "AI"],
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/neurodivergent-platform",
    github: "https://github.com/sujaybabu/neurodivergent-platform"
  },
  {
    id: "project-2",
    title: "MERN Full-stack Application",
    description: "Comprehensive web application for Gujarat SIH (Smart India Hackathon) to manage research, IPR, innovation, and startup growth with centralized data management tools.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/sih-gujarat"
  },
  {
    id: "project-3",
    title: "Notes-Taking Application",
    description: "Feature-rich notes-taking application developed during a Python Full-stack internship at IDIT Blackbucks with CRUD operations and user-friendly interface.",
    tags: ["Python", "Django", "CRUD", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/sujaybabu/notes-app"
  }
];

// About section data
export const about = {
  name: "Thota Sujay Babu",
  headline: "Full-Stack Developer",
  bio: "I'm Thota Sujay Babu, a passionate Full-Stack Developer with a B.Tech in Computer Science from SRKR Engineering College. I specialize in creating innovative, accessible solutions with a focus on user experience and performance optimization.",
  skills: [
    "React, Node.js, HTML5, CSS3",
    "MongoDB, SQLite, MySQL",
    "Python, JavaScript",
    "Frontend Design (Figma)",
    "Cloud Deployment & Server Management",
    "Accessibility Implementation"
  ],
  experience: [
    {
      company: "Wonderkids School Website",
      position: "Full-Stack Developer",
      period: "OCT - NOV"
    },
    {
      company: "IDIT Blackbucks",
      position: "Python Full-Stack Intern",
      period: "May 2024 - July 2024"
    },
    {
      company: "Google",
      position: "Android Developer (Virtual Internship)",
      period: "OCT-DEC 2024"
    }
  ]
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
