
import { useFadeInOnScroll } from '@/hooks/useAnimations';
import { contact } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create mailto URL with subject and body
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the default mail client
      window.location.href = mailtoUrl;
      
      // Show success message
      toast({
        title: "Success!",
        description: "Your email client has been opened. Please send the email to complete your message.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-b from-background/80 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4">
            Contact
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In Touch
          </h2>
          
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div 
            className={cn(
              "transform transition-all duration-1000 glass-panel p-8 rounded-xl shadow-xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-black font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div 
            className={cn(
              "transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="glass-panel p-8 rounded-xl shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href={`mailto:${contact.email}`} className="hover:text-neon-blue transition-colors break-all">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div>{contact.location}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
              
              <div className="flex space-x-4">
                {contact.social.map((platform, index) => {
                  const Icon = platform.name === 'GitHub' ? Github : Linkedin;
                  
                  return (
                    <a 
                      key={index}
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center hover:bg-neon-blue/40 transition-all group"
                      aria-label={`Connect on ${platform.name}`}
                    >
                      <Icon className="w-6 h-6 group-hover:text-neon-blue transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
