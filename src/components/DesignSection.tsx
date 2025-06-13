
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DesignSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.design-animation', 
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.design-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.design-items li', 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.design-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="design-section py-20 bg-gradient-to-r from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-20 h-20 bg-red-500 rounded-full mb-6"></div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Design</h2>
            <ul className="design-items space-y-4 text-xl">
              {['UI Design', 'UX Design', 'UX Consultancy', 'Design System', 'Animation', 'Illustrations'].map((item, index) => (
                <li key={index} className="text-gray-700 font-medium">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="design-animation relative">
            <img 
              src="/lovable-uploads/d4ba282d-5749-412c-b2f6-598f08c890bc.png" 
              alt="Design Animation" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
