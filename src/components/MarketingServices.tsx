
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MarketingServices = () => {
  const marketingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.marketing-content', 
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.marketing-section',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.marketing-animation', 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.marketing-section',
            start: "top 70%"
          }
        }
      );

      // Marketing wave animation
      gsap.to('.marketing-wave', {
        scale: 1.2,
        opacity: 0.3,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, marketingRef);

    return () => ctx.revert();
  }, []);

  const marketingServices = [
    {
      title: "Social Media Management",
      description: "Daily posts, story curation, reel creation, platform management (Insta, LinkedIn, FB, YouTube)"
    },
    {
      title: "Performance Marketing", 
      description: "Meta Ads, Google Ads, Targeted Campaigns, A/B Testing"
    },
    {
      title: "Branding & Strategy",
      description: "Logo design, brand identity systems, tone of voice, content calendar planning"
    },
    {
      title: "Influencer & PR Campaigns",
      description: "Influencer outreach, collabs, PR mentions, product seeding"
    },
    {
      title: "SEO & Lead Generation",
      description: "On-page & off-page SEO, keyword optimization, funnel-based lead generation"
    },
    {
      title: "Email Marketing & Automation",
      description: "Campaigns, workflows, newsletter creation, retargeting"
    }
  ];

  const platforms = [
    "HubSpot", "Meta", "Hootsuite", "Google Ads", "SEMrush", "Mailchimp", 
    "LinkedIn", "Instagram", "Facebook", "YouTube", "TikTok", "Twitter"
  ];

  return (
    <div id="marketing" ref={marketingRef} className="marketing-section py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Animation */}
          <div className="marketing-animation flex justify-center lg:order-1">
            <div className="relative w-80 h-80">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                {/* Marketing Waves */}
                <circle className="marketing-wave stroke-[#d4df42]" cx="160" cy="160" r="40" fill="none" strokeWidth="3" opacity="0.8" />
                <circle className="marketing-wave stroke-blue-500" cx="160" cy="160" r="60" fill="none" strokeWidth="2" opacity="0.6" />
                <circle className="marketing-wave stroke-purple-500" cx="160" cy="160" r="80" fill="none" strokeWidth="2" opacity="0.4" />
                <circle className="marketing-wave stroke-pink-500" cx="160" cy="160" r="100" fill="none" strokeWidth="1" opacity="0.3" />
                
                {/* Network Nodes */}
                <circle className="fill-[#d4df42]" cx="160" cy="80" r="6" />
                <circle className="fill-blue-500" cx="220" cy="140" r="5" />
                <circle className="fill-purple-500" cx="220" cy="180" r="5" />
                <circle className="fill-pink-500" cx="160" cy="240" r="6" />
                <circle className="fill-green-500" cx="100" cy="180" r="5" />
                <circle className="fill-orange-500" cx="100" cy="140" r="5" />
                
                {/* Center Hub */}
                <circle className="fill-gradient-to-r from-[#d4df42] to-[#a8b832]" cx="160" cy="160" r="25" />
                <text x="160" y="168" textAnchor="middle" className="fill-white font-bold text-xs">GROWTH</text>
                
                {/* Connection Lines */}
                <line x1="160" y1="80" x2="160" y2="135" stroke="#d4df42" strokeWidth="2" opacity="0.7" />
                <line x1="220" y1="140" x2="185" y2="150" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                <line x1="220" y1="180" x2="185" y2="170" stroke="#8b5cf6" strokeWidth="2" opacity="0.7" />
                <line x1="160" y1="240" x2="160" y2="185" stroke="#ec4899" strokeWidth="2" opacity="0.7" />
                <line x1="100" y1="180" x2="135" y2="170" stroke="#10b981" strokeWidth="2" opacity="0.7" />
                <line x1="100" y1="140" x2="135" y2="150" stroke="#f97316" strokeWidth="2" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="marketing-content lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MARKETING</h2>
            <p className="text-lg text-[#d4df42] font-medium mb-8 italic">
              "Where creativity meets performance to drive growth."
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">What We Offer</h3>
            
            <div className="space-y-6">
              {marketingServices.map((service, index) => (
                <div key={index} className="marketing-content p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#d4df42] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies & Platforms Section */}
        <div className="mt-20 bg-gray-900 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Technologies & Platforms We Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-[#d4df42] hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                <span className="text-white hover:text-gray-900 font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;
