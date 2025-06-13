
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

      // Enhanced Network animation with more creative nodes
      gsap.set('.network-dot', { scale: 0 });
      gsap.to('.network-dot', {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

      // Animated lines appearing
      gsap.set('.network-line', { strokeDashoffset: 200 });
      gsap.to('.network-line', {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Multiple moving balls with different paths
      gsap.to('.moving-ball-1', {
        motionPath: {
          path: "M160,80 Q240,120 240,160 Q200,200 160,240 Q120,200 80,160 Q120,120 160,80",
          autoRotate: false,
        },
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.moving-ball-2', {
        motionPath: {
          path: "M80,160 Q160,80 240,160 Q160,240 80,160",
          autoRotate: false,
        },
        duration: 6,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.moving-ball-3', {
        motionPath: {
          path: "M200,120 Q160,200 120,200 Q160,120 200,120",
          autoRotate: false,
        },
        duration: 4,
        repeat: -1,
        ease: "none"
      });

      // Floating animation for network container
      gsap.to('.network-container', {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Pulsing effect for main nodes
      gsap.to('.main-node', {
        scale: 1.3,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Mission icons animation
      gsap.fromTo('.mission-icon', 
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)", delay: 1 }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-left">
          <h1 className="hero-title text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            WHERE PURPOSE<br />
            MEETS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4df42] to-[#a8b832]">
              PERFORMANCE
            </span>
          </h1>
          
          <div className="hero-subtitle mb-8">
            <p className="text-lg text-gray-600 mb-6">
              At <span className="font-bold text-[#d4df42]">MDM CONSULTING</span>, we don't just market; we move with mission. 
              Born out of a passion to help brands stand for something more, we combine strategy, creativity, 
              and digital excellence to build marketing ecosystems that deliver results — not just impressions.
            </p>
            <p className="text-lg text-gray-600">
              We are a full-service marketing and creative consulting firm helping startups, businesses, 
              and creators establish, grow, and sustain their digital identity. From your first logo to 
              your next million views — we walk every step with you.
            </p>
          </div>

          {/* Mission Keywords with Icons */}
          <div className="hero-description flex flex-wrap gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="mission-icon w-12 h-12 bg-gradient-to-r from-[#d4df42] to-[#a8b832] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-gray-700 font-bold text-lg">MISSION</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="mission-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-gray-700 font-bold text-lg">DRIVEN</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="mission-icon w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="text-gray-700 font-bold text-lg">MARKETING</span>
            </div>
          </div>
        </div>

        {/* Right Content - Enhanced Creative Network Visualization */}
        <div className="flex justify-center lg:justify-end">
          <div className="network-container relative w-80 h-80">
            <svg className="w-full h-full" viewBox="0 0 320 320">
              {/* Enhanced Network Lines - More interconnected */}
              <g className="network-lines">
                <line className="network-line stroke-gray-300" x1="160" y1="80" x2="240" y2="160" strokeWidth="2" strokeDasharray="200" />
                <line className="network-line stroke-gray-300" x1="160" y1="80" x2="80" y2="160" strokeWidth="2" strokeDasharray="200" />
                <line className="network-line stroke-gray-300" x1="240" y1="160" x2="160" y2="240" strokeWidth="2" strokeDasharray="200" />
                <line className="network-line stroke-gray-300" x1="80" y1="160" x2="160" y2="240" strokeWidth="2" strokeDasharray="200" />
                <line className="network-line stroke-[#d4df42]/30" x1="160" y1="80" x2="200" y2="120" strokeWidth="1" strokeDasharray="200" />
                <line className="network-line stroke-[#d4df42]/30" x1="160" y1="80" x2="120" y2="120" strokeWidth="1" strokeDasharray="200" />
                <line className="network-line stroke-[#d4df42]/30" x1="240" y1="160" x2="200" y2="200" strokeWidth="1" strokeDasharray="200" />
                <line className="network-line stroke-[#d4df42]/30" x1="80" y1="160" x2="120" y2="200" strokeWidth="1" strokeDasharray="200" />
                
                {/* Additional Creative Connections */}
                <line className="network-line stroke-blue-300" x1="200" y1="120" x2="200" y2="200" strokeWidth="1" strokeDasharray="150" />
                <line className="network-line stroke-purple-300" x1="120" y1="120" x2="120" y2="200" strokeWidth="1" strokeDasharray="150" />
                <line className="network-line stroke-cyan-300" x1="120" y1="120" x2="200" y2="200" strokeWidth="1" strokeDasharray="150" />
                <line className="network-line stroke-pink-300" x1="200" y1="120" x2="120" y2="200" strokeWidth="1" strokeDasharray="150" />
              </g>
              
              {/* Main Network Dots - More nodes */}
              <circle className="network-dot main-node fill-[#d4df42]" cx="160" cy="80" r="12" />
              <circle className="network-dot main-node fill-blue-500" cx="240" cy="160" r="10" />
              <circle className="network-dot main-node fill-[#d4df42]" cx="160" cy="240" r="12" />
              <circle className="network-dot main-node fill-purple-500" cx="80" cy="160" r="10" />
              
              {/* Secondary Nodes - More creative positioning */}
              <circle className="network-dot fill-yellow-500" cx="200" cy="120" r="6" />
              <circle className="network-dot fill-pink-500" cx="120" cy="120" r="6" />
              <circle className="network-dot fill-indigo-500" cx="200" cy="200" r="6" />
              <circle className="network-dot fill-cyan-500" cx="120" cy="200" r="6" />
              
              {/* Additional Creative Nodes */}
              <circle className="network-dot fill-green-400" cx="280" cy="120" r="4" />
              <circle className="network-dot fill-orange-400" cx="40" cy="120" r="4" />
              <circle className="network-dot fill-red-400" cx="280" cy="200" r="4" />
              <circle className="network-dot fill-violet-400" cx="40" cy="200" r="4" />
              <circle className="network-dot fill-teal-400" cx="160" cy="40" r="5" />
              <circle className="network-dot fill-rose-400" cx="160" cy="280" r="5" />
              
              {/* Multiple Moving Balls with Different Paths */}
              <circle className="moving-ball-1 fill-[#d4df42]" cx="160" cy="80" r="3" opacity="0.8" />
              <circle className="moving-ball-2 fill-blue-400" cx="80" cy="160" r="3" opacity="0.8" />
              <circle className="moving-ball-3 fill-purple-400" cx="200" cy="120" r="3" opacity="0.8" />
              <circle className="moving-ball-1 fill-cyan-400" cx="160" cy="80" r="2" opacity="0.6" />
              <circle className="moving-ball-2 fill-pink-400" cx="80" cy="160" r="2" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#d4df42] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d4df42] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
