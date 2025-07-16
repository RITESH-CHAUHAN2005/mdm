
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(162,156,62)] to-[rgb(132,124,52)]">
              PERFORMANCE
            </span>
          </h1>
          
          <div className="hero-subtitle mb-8">
            <p className="text-lg text-gray-600 mb-6">
              At <span className="font-bold text-[rgb(162,156,62)]">MDM CONSULTING</span>, we don't just market; we move with mission. 
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
              <div className="mission-icon w-12 h-12 bg-gradient-to-r from-[rgb(162,156,62)] to-[rgb(132,124,52)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <span className="text-gray-700 font-bold text-lg">STRATEGY</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="mission-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-gray-700 font-bold text-lg">GROWTH</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="mission-icon w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-bold text-lg">RESULTS</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-description">
            <button
              onClick={() => {
                const message = encodeURIComponent("Hello! I'm interested in starting a project with MDM Consulting. Can we discuss my requirements?");
                window.open(`https://wa.me/919818303762?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-[rgb(162,156,62)] to-[rgb(132,124,52)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Right Content - Digital Innovation Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
              alt="Digital Innovation - Code on MacBook"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white">
                <h4 className="font-bold text-lg mb-2">Digital Excellence</h4>
                <p className="text-sm opacity-90">Where code meets creativity</p>
              </div>
            </div>
            
            {/* Floating animation badges */}
            <div className="absolute top-4 right-4 bg-[rgb(162,156,62)]/90 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Innovation
            </div>
            <div className="absolute top-16 left-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{animationDelay: '1s'}}>
              Technology
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[rgb(162,156,62)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[rgb(162,156,62)] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
