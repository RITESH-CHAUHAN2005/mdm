
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesOverview = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { y: 80, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.services-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Icon animations
      gsap.to('.service-icon', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Technology",
      description: "Custom web development, e-commerce solutions, CRM integration, and automation tools.",
      icon: (
        <svg className="w-16 h-16 text-[rgb(162,156,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Custom Web Development", "E-Commerce Solutions", "CRM Integration", "Cloud Infrastructure"]
    },
    {
      title: "Marketing",
      description: "Performance marketing, social media management, SEO, and comprehensive digital strategies.",
      icon: (
        <svg className="w-16 h-16 text-[rgb(162,156,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      features: ["Social Media Management", "Performance Marketing", "SEO & Lead Generation", "Analytics & Insights"]
    },
    {
      title: "Media Production",
      description: "Visual content creation, video production, photography, and creative ad visuals.",
      icon: (
        <svg className="w-16 h-16 text-[rgb(162,156,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM9 9l2 2 4-4" />
        </svg>
      ),
      features: ["Product Photography", "Video Production", "Motion Graphics", "Brand Visuals"]
    }
  ];

  return (
    <div id="services" ref={servicesRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            OUR CORE SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your brand and drive measurable results
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="service-card group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[rgb(162,156,62)]/30">
                
                {/* Service Icon */}
                <div className="service-icon mb-6 flex justify-center">
                  {service.icon}
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[rgb(162,156,62)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 text-sm text-gray-500">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[rgb(162,156,62)] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
