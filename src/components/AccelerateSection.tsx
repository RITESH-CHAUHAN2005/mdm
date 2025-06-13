
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AccelerateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.accelerate-network', 
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.accelerate-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.accelerate-content h2', 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.accelerate-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.accelerate-content p', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: '.accelerate-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="accelerate-section py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="accelerate-network relative">
            <img 
              src="/lovable-uploads/86e48ff0-3946-4662-a415-110c8ff9bc4e.png" 
              alt="Network Animation" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
          
          <div className="accelerate-content">
            <h2 className="text-6xl font-bold mb-8">
              Design<br />
              Transform<br />
              Accelerate
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              We Revolutionize User Experience
            </p>
            <p className="text-xl text-gray-300">
              Using Behavioural Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerateSection;
