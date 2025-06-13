
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Portfolio items animation
      gsap.fromTo('.portfolio-item', 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.portfolio-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Portfolio images scale animation
      gsap.set('.portfolio-image', { scale: 1.2 });
      gsap.to('.portfolio-image', {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: "top 70%",
        }
      });

    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  const portfolioItems = [
    {
      title: "BEAR",
      subtitle: "Vitamin Design Portfolio",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500"
    },
    {
      title: "FRAN",
      subtitle: "Financial Technology Platform",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-600"
    },
    {
      title: "Mental Bang",
      subtitle: "Creative Design Studio",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div id="work" ref={portfolioRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fade-up text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            240+ Projects Delivered
          </h2>
          <p className="fade-up text-lg text-gray-600 max-w-2xl mx-auto">
            Our work represents innovation and excellence across various industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item.title} className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                
                {/* Portfolio Image */}
                <div className={`portfolio-image h-64 ${item.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Portfolio Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">View Project</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="mt-16 text-center">
          <div className="fade-up flex flex-wrap justify-center gap-4">
            {['Figma', 'React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'GraphQL', 'TypeScript'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
