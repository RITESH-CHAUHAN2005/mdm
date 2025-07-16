
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MediaProductionServices = () => {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.media-content', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.media-section',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Camera animation
      gsap.to('.camera-icon', {
        rotation: 5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to('.film-reel', {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1
      });

    }, mediaRef);

    return () => ctx.revert();
  }, []);

  const mediaServices = [
    "Product Photoshoots",
    "Video Production", 
    "Creative Ad Visuals",
    "Motion Graphics & Animations",
    "Editing & Post Production"
  ];

  return (
    <div id="media-production" ref={mediaRef} className="media-section py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Media Production & Visual Content Creation
          </h2>
          <p className="text-xl text-[#d4df42] font-medium italic">
            "Because people remember stories, not stats."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="media-content">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">What We Offer</h3>
            
            <div className="space-y-4">
              {mediaServices.map((service, index) => (
                <div key={index} className="media-content flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4df42] to-[#a8b832] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Description Block */}
            <div className="media-content mt-12 p-6 bg-white rounded-xl shadow-lg">
              <p className="text-gray-600 leading-relaxed">
                At MDM Consulting, we specialize in crafting premium, brand-aligned content that captivates, 
                converts, and communicates your message clearly. Our media production team ensures high-quality 
                visual narratives across platforms and formats.
              </p>
            </div>
          </div>

          {/* Right Content - Media Production Visual */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
                alt="Media Production - Creative Content"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white">
                  <h4 className="font-bold text-lg mb-2">Visual Storytelling</h4>
                  <p className="text-sm opacity-90">Captivating content creation</p>
                </div>
              </div>
              
              {/* Production badges */}
              <div className="absolute top-4 left-4 bg-[rgb(162,156,62)]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                4K Quality
              </div>
              <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                Creative
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                Professional
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaProductionServices;
