
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service cards animation
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
            trigger: '.services-container',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service icons animation
      gsap.fromTo('.service-icon', 
        { rotation: -180, scale: 0 },
        { 
          rotation: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.services-container',
            start: "top 70%",
            delay: 0.5
          }
        }
      );

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Design",
      items: ["UI/UX", "Branding", "Web Design", "App Design", "Graphic Design"],
      color: "from-red-500 to-pink-500",
      icon: "🎨"
    },
    {
      title: "Technology", 
      items: ["Development", "Frontend", "Backend", "Mobile Apps", "DevOps"],
      color: "from-blue-500 to-cyan-500",
      icon: "⚡"
    },
    {
      title: "Marketing",
      items: ["Strategy", "Social Media", "SEO/SEM", "Content", "Analytics"],
      color: "from-purple-500 to-indigo-500", 
      icon: "📈"
    }
  ];

  return (
    <div id="services" ref={servicesRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fade-up text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We're a global creative agency that<br />
            combines design expertise with technology<br />
            and intelligence.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="service-card group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                
                {/* Service Icon */}
                <div className={`service-icon w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>

                {/* Service Items */}
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={item} className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Decorative Elements */}
                <div className="mt-8 relative">
                  <div className="w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="fade-up text-lg text-gray-600 max-w-3xl mx-auto">
            As global leaders in UX/UI, technology, and marketing solutions, we partner with clients 
            to simplify, strengthen, and transform their businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
