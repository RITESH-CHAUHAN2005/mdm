
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animations
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo('.hero-description', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

      // Network animation
      gsap.set('.network-dot', { scale: 0 });
      gsap.to('.network-dot', {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 1
      });

      gsap.to('.network-line', {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.2,
        delay: 1.5
      });

      // Floating animation for network
      gsap.to('.network-container', {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-left">
          <h1 className="hero-title text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Design<br />
            Transform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Accelerate
            </span>
          </h1>
          <p className="hero-subtitle text-xl text-gray-600 mb-8 max-w-md">
            We're a global creative agency that combines design expertise with technology and intelligence.
          </p>
          <div className="hero-description space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-gray-700 font-medium">Design</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-gray-700 font-medium">Technology</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-gray-700 font-medium">Accelerate</span>
            </div>
          </div>
        </div>

        {/* Right Content - Network Visualization */}
        <div className="flex justify-center lg:justify-end">
          <div className="network-container relative w-80 h-80">
            <svg className="w-full h-full" viewBox="0 0 320 320">
              {/* Network Lines */}
              <g className="network-lines">
                <line 
                  className="network-line stroke-gray-300" 
                  x1="160" y1="80" x2="240" y2="160" 
                  strokeWidth="1" 
                  strokeDasharray="200" 
                  strokeDashoffset="200"
                />
                <line 
                  className="network-line stroke-gray-300" 
                  x1="160" y1="80" x2="80" y2="160" 
                  strokeWidth="1" 
                  strokeDasharray="200" 
                  strokeDashoffset="200"
                />
                <line 
                  className="network-line stroke-gray-300" 
                  x1="240" y1="160" x2="160" y2="240" 
                  strokeWidth="1" 
                  strokeDasharray="200" 
                  strokeDashoffset="200"
                />
                <line 
                  className="network-line stroke-gray-300" 
                  x1="80" y1="160" x2="160" y2="240" 
                  strokeWidth="1" 
                  strokeDasharray="200" 
                  strokeDashoffset="200"
                />
              </g>
              
              {/* Network Dots */}
              <circle className="network-dot fill-blue-500" cx="160" cy="80" r="8" />
              <circle className="network-dot fill-red-500" cx="240" cy="160" r="6" />
              <circle className="network-dot fill-purple-500" cx="160" cy="240" r="8" />
              <circle className="network-dot fill-green-500" cx="80" cy="160" r="6" />
              <circle className="network-dot fill-yellow-500" cx="200" cy="120" r="4" />
              <circle className="network-dot fill-pink-500" cx="120" cy="120" r="4" />
              <circle className="network-dot fill-indigo-500" cx="200" cy="200" r="4" />
              <circle className="network-dot fill-cyan-500" cx="120" cy="200" r="4" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
