
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

          {/* Right Content - Technology Image */}
          <div className="tech-animation flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
                alt="Technology Solutions - Circuit Board"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white">
                  <h4 className="font-bold text-lg mb-2">Advanced Technology</h4>
                  <p className="text-sm opacity-90">Building the future today</p>
                </div>
              </div>
              
              {/* Tech stack badges */}
              <div className="absolute top-4 left-4 bg-[rgb(162,156,62)]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                React
              </div>
              <div className="absolute top-4 right-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                Node.js
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                Cloud
              </div>
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
              <div key={index} className="tech-icon bg-gradient-to-r from-[rgb(162,156,62)] to-[rgb(132,124,52)] px-4 py-2 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
