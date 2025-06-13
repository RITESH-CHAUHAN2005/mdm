
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Team member cards animation
      gsap.fromTo('.team-member', 
        { y: 80, opacity: 0, rotationY: 45 },
        { 
          y: 0, 
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.team-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for team photos
      gsap.to('.team-photo', {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, teamRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="team" ref={teamRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fade-up text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Meet The<br />
            Team
          </h2>
          <p className="fade-up text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of creative professionals brings together years of experience 
            in design, technology, and strategic thinking.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member, index) => (
            <div key={member} className="team-member group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-500 hover:shadow-lg">
                
                {/* Team Member Photo */}
                <div className="team-photo w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {['J', 'S', 'A', 'M'][index]}
                    </span>
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {['John Doe', 'Sarah Smith', 'Alex Johnson', 'Maria Garcia'][index]}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {['Creative Director', 'Lead Designer', 'Tech Lead', 'Project Manager'][index]}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                      <span className="text-xs font-bold">in</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                      <span className="text-xs font-bold">tw</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "240+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={stat.label} className="fade-up text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
