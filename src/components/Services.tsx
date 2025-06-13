
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Design",
      color: "bg-red-500",
      items: ["UI Design", "UX Design", "UX Consultancy", "Design System", "Animation", "Illustrations"],
      icon: "🎨"
    },
    {
      title: "Technology",
      color: "bg-blue-500",
      items: ["Web Development", "Softwares", "Mobile Apps", "Web Apps", "Front-End", "Back-End"],
      icon: "💻"
    },
    {
      title: "Marketing",
      color: "bg-purple-500",
      items: ["Branding", "Brand Name", "Brand Guidelines", "Strategy", "Digital Marketing", "S.E.O."],
      icon: "📈"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions to transform your business through design, technology, and strategic marketing.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="service-card bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
