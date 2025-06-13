
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarketingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.marketing-animation', 
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.marketing-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.marketing-items li', 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.marketing-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="marketing-section py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-20 h-20 bg-purple-500 rounded-full mb-6"></div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Marketing</h2>
            <ul className="marketing-items space-y-4 text-xl">
              {['Branding', 'Brand Name', 'Brand Guidelines', 'Strategy', 'Digital Marketing', 'S.E.O.'].map((item, index) => (
                <li key={index} className="text-gray-700 font-medium">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="marketing-animation relative">
            <img 
              src="/lovable-uploads/fa85b0da-8f60-43c0-b0de-cfbf197208b3.png" 
              alt="Marketing Animation" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
