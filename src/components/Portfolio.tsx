
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

      // Red theme animation (BEAR)
      gsap.to('.red-particle', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });

      // Blue theme animation (FRAN)
      gsap.to('.blue-wave', {
        scaleX: 1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      });

      // Purple theme animation (Mental Bang)
      gsap.to('.purple-spiral', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.purple-dot', {
        scale: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.4
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
            <div key={item.title} className="portfolio-item group cursor-pointer relative">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 mb-8">
                
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

              {/* Animated Theme Under Card */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-16">
                {index === 0 && (
                  // Red theme for BEAR
                  <svg className="w-full h-full" viewBox="0 0 128 64">
                    <circle className="red-particle fill-red-400" cx="20" cy="40" r="4" opacity="0.6" />
                    <circle className="red-particle fill-pink-400" cx="40" cy="30" r="3" opacity="0.7" />
                    <circle className="red-particle fill-red-500" cx="60" cy="45" r="5" opacity="0.5" />
                    <circle className="red-particle fill-pink-500" cx="80" cy="35" r="3" opacity="0.6" />
                    <circle className="red-particle fill-red-300" cx="100" cy="40" r="4" opacity="0.8" />
                  </svg>
                )}
                
                {index === 1 && (
                  // Blue theme for FRAN
                  <svg className="w-full h-full" viewBox="0 0 128 64">
                    <ellipse className="blue-wave fill-blue-300" cx="64" cy="32" rx="20" ry="8" opacity="0.4" />
                    <ellipse className="blue-wave fill-blue-400" cx="64" cy="32" rx="30" ry="6" opacity="0.3" />
                    <ellipse className="blue-wave fill-blue-500" cx="64" cy="32" rx="40" ry="4" opacity="0.2" />
                    <circle className="fill-blue-600" cx="64" cy="32" r="6" />
                  </svg>
                )}
                
                {index === 2 && (
                  // Purple theme for Mental Bang
                  <svg className="w-full h-full" viewBox="0 0 128 64">
                    <g className="purple-spiral" style={{ transformOrigin: '64px 32px' }}>
                      <path className="stroke-purple-400" d="M64,32 Q74,22 84,32 Q74,42 64,32 Q54,22 44,32 Q54,42 64,32" fill="none" strokeWidth="2" opacity="0.6" />
                    </g>
                    <circle className="purple-dot fill-purple-500" cx="50" cy="32" r="3" />
                    <circle className="purple-dot fill-pink-500" cx="78" cy="32" r="3" />
                    <circle className="purple-dot fill-purple-400" cx="64" cy="20" r="2" />
                    <circle className="purple-dot fill-pink-400" cx="64" cy="44" r="2" />
                  </svg>
                )}
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
