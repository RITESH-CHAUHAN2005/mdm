
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service sections animation
      gsap.fromTo('.service-section', 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.services-container',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Design theme animation
      gsap.to('.design-particle', {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
        stagger: 0.5
      });

      gsap.to('.design-orbit', {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none"
      });

      // Technology theme animation
      gsap.to('.tech-circuit', {
        strokeDashoffset: 0,
        duration: 3,
        repeat: -1,
        ease: "power2.inOut",
        stagger: 0.2
      });

      gsap.to('.tech-node', {
        scale: 1.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });

      // Marketing theme animation
      gsap.to('.marketing-wave', {
        x: 50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.1
      });

      gsap.to('.marketing-pulse', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
        stagger: 0.5
      });

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="services" ref={servicesRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="fade-up text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We're a global creative agency that<br />
            combines design expertise with technology<br />
            and intelligence.
          </h2>
        </div>

        <div className="services-container space-y-32">
          
          {/* Design Section */}
          <div className="service-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Design</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Brand Identity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Web Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Mobile App Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Graphic Design</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <circle className="design-orbit" cx="160" cy="160" r="120" fill="none" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="5,5" />
                  <circle className="design-orbit" cx="160" cy="160" r="80" fill="none" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3,3" />
                  
                  <circle className="design-particle fill-red-500" cx="280" cy="160" r="8" />
                  <circle className="design-particle fill-pink-500" cx="240" cy="280" r="6" />
                  <circle className="design-particle fill-purple-500" cx="80" cy="240" r="7" />
                  <circle className="design-particle fill-orange-500" cx="40" cy="160" r="5" />
                  <circle className="design-particle fill-yellow-500" cx="160" cy="40" r="6" />
                  
                  <circle className="fill-gradient-to-r from-red-500 to-pink-500" cx="160" cy="160" r="20" />
                  <text x="160" y="165" textAnchor="middle" className="fill-white font-bold text-sm">D</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="service-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Technology</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Backend Systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Mobile Applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>API Development</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 flex justify-center">
              <div className="relative w-80 h-80">
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <path className="tech-circuit stroke-blue-500" d="M50,160 Q160,50 270,160 Q160,270 50,160" fill="none" strokeWidth="2" strokeDasharray="300" strokeDashoffset="300" />
                  <path className="tech-circuit stroke-cyan-500" d="M80,160 Q160,80 240,160 Q160,240 80,160" fill="none" strokeWidth="2" strokeDasharray="250" strokeDashoffset="250" />
                  
                  <circle className="tech-node fill-blue-500" cx="50" cy="160" r="6" />
                  <circle className="tech-node fill-cyan-500" cx="270" cy="160" r="6" />
                  <circle className="tech-node fill-indigo-500" cx="160" cy="50" r="5" />
                  <circle className="tech-node fill-teal-500" cx="160" cy="270" r="5" />
                  
                  <rect className="fill-blue-600" x="140" y="140" width="40" height="40" rx="8" />
                  <text x="160" y="165" textAnchor="middle" className="fill-white font-bold text-sm">T</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Marketing Section */}
          <div className="service-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Marketing</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Digital Strategy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                  <span>SEO & SEM</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Content Marketing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Analytics & Insights</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <g className="marketing-waves">
                    <ellipse className="marketing-wave stroke-purple-300" cx="160" cy="160" rx="40" ry="20" fill="none" strokeWidth="2" />
                    <ellipse className="marketing-wave stroke-violet-300" cx="160" cy="160" rx="60" ry="30" fill="none" strokeWidth="2" />
                    <ellipse className="marketing-wave stroke-fuchsia-300" cx="160" cy="160" rx="80" ry="40" fill="none" strokeWidth="2" />
                    <ellipse className="marketing-wave stroke-rose-300" cx="160" cy="160" rx="100" ry="50" fill="none" strokeWidth="2" />
                  </g>
                  
                  <circle className="marketing-pulse fill-purple-500" cx="160" cy="160" r="8" />
                  <circle className="marketing-pulse fill-violet-500" cx="200" cy="140" r="6" />
                  <circle className="marketing-pulse fill-fuchsia-500" cx="120" cy="180" r="7" />
                  
                  <circle className="fill-purple-600" cx="160" cy="160" r="18" />
                  <text x="160" y="165" textAnchor="middle" className="fill-white font-bold text-sm">M</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
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
