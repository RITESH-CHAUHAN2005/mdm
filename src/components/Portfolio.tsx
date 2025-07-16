
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
      title: "TechCorp Solutions",
      subtitle: "Enterprise Digital Platform",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      description: "Complete digital transformation for enterprise solutions with modern UI/UX design and cloud infrastructure."
    },
    {
      title: "FinanceFlow",
      subtitle: "Modern Banking App",
      color: "from-emerald-600 to-teal-600", 
      bgColor: "bg-gradient-to-br from-emerald-600 to-teal-600",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      description: "Revolutionary mobile banking application with seamless user experience and advanced security features."
    },
    {
      title: "EcoMarket",
      subtitle: "Sustainable E-commerce Platform", 
      color: "from-green-600 to-lime-600",
      bgColor: "bg-gradient-to-br from-green-600 to-lime-600",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      description: "Full-stack e-commerce solution promoting sustainable products with integrated marketing campaigns."
    },
    {
      title: "HealthTech Pro",
      subtitle: "Medical Management System",
      color: "from-purple-600 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-600 to-violet-600", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      description: "Comprehensive healthcare management platform with patient portals and analytics dashboard."
    },
    {
      title: "FoodieHub",
      subtitle: "Restaurant Discovery App",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb", 
      description: "Social dining platform connecting food lovers with personalized recommendations and booking system."
    },
    {
      title: "EduLearn",
      subtitle: "Online Learning Platform",
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-gradient-to-br from-indigo-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      description: "Interactive e-learning platform with video courses, assessments, and progress tracking features."
    }
  ];

  return (
    <div id="work" ref={portfolioRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fade-up text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our Portfolio
          </h2>
          <p className="fade-up text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing successful projects across various industries with measurable results
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item.title} className="portfolio-item group cursor-pointer relative">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                
                {/* Portfolio Image */}
                <div className="portfolio-image h-64 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${item.bgColor} opacity-80 mix-blend-multiply`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Portfolio Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[rgb(162,156,62)] font-medium">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-[rgb(162,156,62)]/10 flex items-center justify-center group-hover:bg-[rgb(162,156,62)]/20 transition-colors duration-300">
                      <svg className="w-4 h-4 text-[rgb(162,156,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
