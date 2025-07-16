
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
          
          {/* Left Content - Marketing Visual */}
          <div className="marketing-animation flex justify-center lg:order-1">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
                alt="Marketing Strategy - Business Growth"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white">
                  <h4 className="font-bold text-lg mb-2">Growth Marketing</h4>
                  <p className="text-sm opacity-90">Data-driven strategies</p>
                </div>
              </div>
              
              {/* Marketing badges */}
              <div className="absolute top-4 left-4 bg-[rgb(162,156,62)]/90 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                ROI Focused
              </div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{animationDelay: '1s'}}>
                Performance
              </div>
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
