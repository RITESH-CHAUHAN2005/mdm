
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const MarketingPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fade-up', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-up',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const marketingServices = [
    {
      title: "Social Media Management",
      description: "Daily posts, story curation, reel creation, platform management (Insta, LinkedIn, FB, YouTube)",
      icon: "📱"
    },
    {
      title: "Performance Marketing", 
      description: "Meta Ads, Google Ads, Targeted Campaigns, A/B Testing",
      icon: "🎯"
    },
    {
      title: "Branding & Strategy",
      description: "Logo design, brand identity systems, tone of voice, content calendar planning",
      icon: "🎨"
    },
    {
      title: "Influencer & PR Campaigns",
      description: "Influencer outreach, collabs, PR mentions, product seeding",
      icon: "🤝"
    },
    {
      title: "SEO & Lead Generation",
      description: "On-page & off-page SEO, keyword optimization, funnel-based lead generation",
      icon: "🔍"
    },
    {
      title: "Email Marketing & Automation",
      description: "Campaigns, workflows, newsletter creation, retargeting",
      icon: "📧"
    }
  ];

  const platforms = [
    "HubSpot", "Meta", "Hootsuite", "Google Ads", "SEMrush", "Mailchimp", 
    "LinkedIn", "Instagram", "Facebook", "YouTube", "TikTok", "Twitter"
  ];

  const internationalCampaigns = [
    { name: "Emirates", logo: "✈️" },
    { name: "Nike", logo: "👟" },
    { name: "Coca-Cola", logo: "🥤" },
    { name: "Samsung", logo: "📱" }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#d4df42]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Marketing Campaigns
            </h1>
            <p className="text-2xl text-[#d4df42] font-semibold mb-8">
              "Grow your audience, drive results"
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where creativity meets performance to drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="fade-up bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">
            International Marketing Campaigns
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {internationalCampaigns.map((campaign, index) => (
              <div key={index} className="fade-up bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{campaign.logo}</div>
                <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lindenberg Racing Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-up bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Lindenberg Racing Project</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#d4df42] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold">👁️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Reach</h3>
                      <p className="text-gray-300">2.5M+ impressions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#d4df42] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold">❤️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Engagement</h3>
                      <p className="text-gray-300">320% increase</p>
                    </div>
                  </div>
                </div>
                <button className="bg-[#d4df42] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-[#a8b832] transition-colors duration-300">
                  Tap to view
                </button>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Instagram Campaign</h3>
                  <p className="text-sm opacity-90">Racing content that drives engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Platforms */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 fade-up">
            Technologies & Platforms We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="fade-up bg-gray-800 rounded-lg p-4 text-center hover:bg-[#d4df42] hover:text-gray-900 transition-all duration-300">
                <span className="text-white hover:text-gray-900 font-semibold">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingPage;
