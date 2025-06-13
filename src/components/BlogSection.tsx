
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-content', 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.blog-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.blog-image', 
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.blog-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="blog-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="blog-content">
            <div className="space-y-8">
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How To Enhance Motivation for Better Business Leads?
                </h3>
                <p className="text-gray-600 mb-4">
                  Read how businessmen must use UX design and enhancement of motivation for better business leads. Reveal the secret now!
                </p>
                <a href="#" className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">
                  Read More →
                </a>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  + 7 Ways Neuromarketing Impact Marketing Campaign
                </h3>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  + Can Good Design Grow Your Business And Customers?
                </h3>
              </div>
            </div>
          </div>
          
          <div className="blog-image relative">
            <img 
              src="/lovable-uploads/31d58963-2556-46b0-8a90-a608db57851c.png" 
              alt="Business Illustration" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
