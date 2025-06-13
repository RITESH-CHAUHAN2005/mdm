
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

          {/* Right Animation */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                {/* Film Reel Background */}
                <circle className="film-reel stroke-gray-300" cx="160" cy="160" r="100" fill="none" strokeWidth="2" strokeDasharray="20,10" />
                <circle className="film-reel stroke-[#d4df42]" cx="160" cy="160" r="80" fill="none" strokeWidth="3" strokeDasharray="15,5" />
                
                {/* Camera Elements */}
                <rect className="camera-icon fill-gray-700" x="120" y="120" width="80" height="60" rx="10" />
                <circle className="fill-gray-900" cx="160" cy="150" r="20" />
                <circle className="fill-[#d4df42]" cx="160" cy="150" r="12" />
                
                {/* Lens Flare Effect */}
                <circle className="fill-[#d4df42]" cx="160" cy="150" r="8" opacity="0.8" />
                <circle className="fill-white" cx="160" cy="150" r="4" opacity="0.6" />
                
                {/* Media Icons Around */}
                <circle className="fill-red-500" cx="80" cy="100" r="8" />
                <text x="80" y="105" textAnchor="middle" className="fill-white font-bold text-xs">📷</text>
                
                <circle className="fill-blue-500" cx="240" cy="100" r="8" />
                <text x="240" y="105" textAnchor="middle" className="fill-white font-bold text-xs">🎬</text>
                
                <circle className="fill-purple-500" cx="80" cy="220" r="8" />
                <text x="80" y="225" textAnchor="middle" className="fill-white font-bold text-xs">✨</text>
                
                <circle className="fill-green-500" cx="240" cy="220" r="8" />
                <text x="240" y="225" textAnchor="middle" className="fill-white font-bold text-xs">🎨</text>
                
                {/* Connection Lines */}
                <line x1="80" y1="100" x2="140" y2="140" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
                <line x1="240" y1="100" x2="180" y2="140" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                <line x1="80" y1="220" x2="140" y2="180" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
                <line x1="240" y1="220" x2="180" y2="180" stroke="#10b981" strokeWidth="2" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaProductionServices;
