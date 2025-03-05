
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
    title: "Neural Interface",
    description: "A minimalist application that connects humans and AI through a sleek, intuitive interface.",
    tags: ["React", "TypeScript", "AI", "WebGL"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/neural",
    github: "https://github.com/example/neural-interface"
  },
  {
    id: "project-2",
    title: "Quantum Dashboard",
    description: "Real-time data visualization platform with advanced filtering and customizable views.",
    tags: ["React", "D3.js", "Realtime", "Dashboard"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://example.com/quantum"
  },
  {
    id: "project-3",
    title: "Ethereal OS",
    description: "A concept operating system interface that reimagines human-computer interaction.",
    tags: ["Design", "Prototyping", "UX Research"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/example/ethereal-os"
  }
];

// About section data
export const about = {
  headline: "Designer & Developer",
  bio: "I create digital experiences that merge aesthetics with functionality. Specializing in 3D interfaces and interactive design, I build products that feel intuitive and memorable.",
  skills: [
    "3D Modeling & Animation",
    "UI/UX Design",
    "Frontend Development",
    "React.js / Three.js",
    "WebGL & GLSL"
  ],
  experience: [
    {
      company: "Future Labs",
      position: "Senior Interface Designer",
      period: "2022 - Present"
    },
    {
      company: "Digital Architects",
      position: "Frontend Developer",
      period: "2019 - 2022"
    },
    {
      company: "Creative Solutions",
      position: "UI Designer",
      period: "2017 - 2019"
    }
  ]
};

// Contact information
export const contact = {
  email: "hello@example.com",
  location: "San Francisco, CA",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/example"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/example"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/example"
    }
  ]
};
