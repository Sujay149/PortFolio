
import { useFadeInOnScroll } from '@/hooks/useAnimations';
import { contact } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Contact() {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  
  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-12">
          <div 
            className={cn(
              "inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4 opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Get In Touch
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold opacity-0 transform translate-y-4 transition-all duration-500 delay-100",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Contact Me
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground mt-4 max-w-2xl mx-auto opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div 
            className={cn(
              "glass-panel p-6 rounded-xl opacity-0 transform translate-y-4 transition-all duration-500 delay-300",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-white/10 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-white/10 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-white/10 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-blue/80 to-neon-cyan/80 hover:from-neon-blue hover:to-neon-cyan text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-blue/20"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div 
            className={cn(
              "opacity-0 transform translate-y-4 transition-all duration-500 delay-400",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <div className="glass-panel p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-neon-blue mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href={`mailto:${contact.email}`} className="hover:text-neon-blue transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-neon-blue mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div>{contact.location}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-6">Connect with Me</h3>
              
              <div className="flex space-x-4">
                {contact.social.map((platform, index) => (
                  <a 
                    key={index}
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all group"
                  >
                    {platform.name === 'GitHub' && (
                      <svg className="w-5 h-5 group-hover:text-neon-blue transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    )}
                    {platform.name === 'LinkedIn' && (
                      <svg className="w-5 h-5 group-hover:text-neon-blue transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {platform.name === 'Twitter' && (
                      <svg className="w-5 h-5 group-hover:text-neon-blue transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
