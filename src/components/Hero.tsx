
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { about, contact, projects } from '@/lib/data';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 max-w-5xl mx-auto">
      <div className="mb-8">
        <img 
          src="/lovable-uploads/21df7402-11a1-44f0-8a17-b6614564593b.png" 
          alt={about.name} 
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-normal">
          Hey, I'm {about.name}. I'm a {about.headline} at <a href="#" className="underline">SRKR Engineering College</a>, I contribute to the development of several outstanding products.
        </h1>
        
        <p className="text-xl md:text-2xl font-normal">
          I also maintain projects like <a href={projects[0]?.github || '#'} className="underline">Neurodivergent-Friendly Platform</a>.
        </p>
        
        <div className="flex items-center space-x-5 mt-6 pt-2">
          <a 
            href="https://twitter.com/sujaybabu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          
          <a 
            href={contact.social[0]?.url || "https://github.com/sujaybabu"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          
          <a 
            href={contact.social[1]?.url || "https://linkedin.com/in/sujaybabu"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a 
            href={`mailto:${contact.email || "sujayss149@gmail.com"}`}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
