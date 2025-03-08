
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import CustomCursor from '@/components/CustomCursor';
import { loadDynamicData } from '@/lib/data';

const BlogPage = () => {
  const [fontFamily, setFontFamily] = useState('Inter');
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await loadDynamicData();
      setDataLoaded(true);
    };
    
    loadData();
  }, []);

  if (!dataLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Sample blog posts - this would typically come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to set up your first project.",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Power of TypeScript",
      excerpt: "Why TypeScript is essential for modern web development.",
      date: "April 22, 2024",
      image: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      excerpt: "Best practices for creating web applications that everyone can use.",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div 
      className={`min-h-screen bg-black text-white relative ${fontFamily === 'opendyslexic' ? 'font-dyslexic' : ''} 
      ${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : ''}
      ${highContrast ? 'high-contrast' : ''} 
      ${reducedMotion ? 'motion-reduce' : ''}`}
    >
      <CustomCursor />
      <AccessibilityPanel 
        fontFamily={fontFamily} 
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
      />
      <Navbar />
      <div className="pt-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4">
            Blog
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Articles
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="glass-panel rounded-lg overflow-hidden hover-lift transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-neon-blue mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.id}`} 
                  className="text-neon-blue hover:text-neon-blue/80 inline-flex items-center gap-1 text-sm font-medium"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
