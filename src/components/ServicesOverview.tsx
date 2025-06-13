
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
        <svg className="w-16 h-16 text-[#d4df42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Custom Web Design", "E-Commerce Solutions", "CRM Integration", "Automation Tools"]
    },
    {
      title: "Marketing",
      description: "Performance marketing, social media management, SEO, and comprehensive digital strategies.",
      icon: (
        <svg className="w-16 h-16 text-[#d4df42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      features: ["Social Media Management", "Performance Marketing", "SEO & Lead Generation", "Email Marketing"]
    },
    {
      title: "Media Production",
      description: "Visual content creation, video production, photography, and creative ad visuals.",
      icon: (
        <svg className="w-16 h-16 text-[#d4df42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Product Photoshoots", "Video Production", "Motion Graphics", "Creative Ad Visuals"]
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
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d4df42]/30">
                
                {/* Service Icon */}
                <div className="service-icon mb-6 flex justify-center">
                  {service.icon}
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#d4df42] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 text-sm text-gray-500">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#d4df42] rounded-full"></div>
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
