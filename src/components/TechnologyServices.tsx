
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TechnologyServices = () => {
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-content', 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.tech-section',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.tech-animation', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.tech-section',
            start: "top 70%"
          }
        }
      );

      // Tech stack animation
      gsap.to('.tech-icon', {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

    }, techRef);

    return () => ctx.revert();
  }, []);

  const techServices = [
    "Custom Web Design",
    "Front-End Development", 
    "Back-End Development",
    "WordPress Development",
    "E-Commerce Solutions",
    "ERP & CRM Integration",
    "CMS Platforms",
    "Custom Dashboards & Admin Panels",
    "SEO-Ready Development",
    "Automation Tools (Excel, Emails, APIs)",
    "Automated Data Workflows",
    "Maintenance & Upgrades"
  ];

  const techStack = [
    { name: "Node.js", color: "bg-green-500" },
    { name: "React.js", color: "bg-blue-500" },
    { name: "PHP", color: "bg-purple-500" },
    { name: "WordPress", color: "bg-blue-600" },
    { name: "Angular", color: "bg-red-500" },
    { name: "HTML5", color: "bg-orange-500" },
    { name: "Shopify", color: "bg-green-600" },
    { name: "Figma", color: "bg-pink-500" },
    { name: "Adobe XD", color: "bg-purple-600" },
    { name: "WooCommerce", color: "bg-purple-700" },
    { name: "Express", color: "bg-gray-700" }
  ];

  return (
    <div id="technology" ref={techRef} className="tech-section py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="tech-content">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">TECHNOLOGY</h2>
            <h3 className="text-2xl font-semibold text-[#d4df42] mb-8">What We Offer</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techServices.map((service, index) => (
                <div key={index} className="tech-content flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#d4df42] rounded-full"></div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Animation */}
          <div className="tech-animation flex justify-center">
            <div className="relative w-80 h-80">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                {/* Tech Circuit Background */}
                <circle cx="160" cy="160" r="120" fill="none" stroke="#d4df42" strokeWidth="2" strokeDasharray="10,5" opacity="0.3" />
                <circle cx="160" cy="160" r="80" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <circle cx="160" cy="160" r="40" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.3" />
                
                {/* Tech Nodes */}
                <circle className="fill-[#d4df42]" cx="160" cy="40" r="8" />
                <circle className="fill-blue-500" cx="280" cy="160" r="8" />
                <circle className="fill-purple-500" cx="160" cy="280" r="8" />
                <circle className="fill-green-500" cx="40" cy="160" r="8" />
                
                {/* Center Hub */}
                <circle className="fill-gray-900" cx="160" cy="160" r="20" />
                <text x="160" y="168" textAnchor="middle" className="fill-white font-bold text-sm">TECH</text>
                
                {/* Connecting Lines */}
                <line x1="160" y1="40" x2="160" y2="140" stroke="#d4df42" strokeWidth="2" opacity="0.6" />
                <line x1="280" y1="160" x2="180" y2="160" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                <line x1="160" y1="280" x2="160" y2="180" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
                <line x1="40" y1="160" x2="140" y2="160" stroke="#10b981" strokeWidth="2" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Technologies & Platforms We Work With</h3>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            At MDM Consulting (Mission Driven Marketing), we leverage a diverse range of modern technologies 
            and platforms to deliver high-performing digital solutions tailored to your business needs. 
            From sleek websites to scalable applications, we ensure optimal performance, security, 
            and seamless user experience across all devices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className={`tech-icon ${tech.color} px-4 py-2 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyServices;
