
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact section animation
      gsap.fromTo('.contact-content', 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.contact-section',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Form elements animation
      gsap.fromTo('.form-element', 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.contact-form',
            start: "top 80%",
            delay: 0.3
          }
        }
      );

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div id="contact" ref={contactRef} className="contact-section py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="contact-content text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Let's create a measurable<br />
            impact on your business.
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="form-element">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 text-white placeholder-white/60"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-element">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 text-white placeholder-white/60"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-element">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 text-white placeholder-white/60 resize-none"
                placeholder="Tell us about your project"
                required
              />
            </div>

            <div className="form-element">
              <button
                type="submit"
                className="w-full bg-white text-purple-900 font-bold py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-content mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-white/80">hello@leo9studio.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-white/80">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-white/80">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
