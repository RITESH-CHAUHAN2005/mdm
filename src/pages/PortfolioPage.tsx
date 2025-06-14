
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
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

  const portfolioItems = [
    {
      title: "Journey Makers",
      category: "Travel Agency",
      description: "₹25 Lakhs in sales in just 4 months through Meta Ads & content marketing",
      services: ["Meta Ads Management", "Social Media Marketing", "Content Creation", "Branding"],
      image: "bg-blue-500"
    },
    {
      title: "MycoMed",
      category: "Health Supplements",
      description: "Complete brand identity and eCommerce solution for health supplements",
      services: ["Brand Identity", "Packaging Design", "eCommerce Website", "Product Photography"],
      image: "bg-green-500"
    },
    {
      title: "Combine Air Training",
      category: "Aviation Training",
      description: "Comprehensive digital presence for aviation training institute",
      services: ["Logo Design", "Brand Guidelines", "Social Media Management", "Website Development"],
      image: "bg-purple-500"
    },
    {
      title: "Plus27 Digital",
      category: "Digital Agency",
      description: "Modern web design with advanced UI/UX and SEO optimization",
      services: ["Web Design", "UI/UX", "SEO Optimization", "Content Strategy"],
      image: "bg-red-500"
    },
    {
      title: "Beast Nutrition",
      category: "Fitness Supplements",
      description: "300% Engagement Growth through influencer strategy execution",
      services: ["Branding", "Social Media Marketing", "Content Creation", "Influencer Strategy"],
      image: "bg-orange-500"
    },
    {
      title: "DPS Chhatarpur",
      category: "Education",
      description: "Complete digital transformation for premium educational institution",
      services: ["Social Media Management", "Website Design", "Photography", "SEO"],
      image: "bg-indigo-500"
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#d4df42]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              "240+ Projects Delivered with Purpose & Performance"
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="fade-up group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Project Image */}
                  <div className={`h-64 ${item.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-sm opacity-90">{item.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    {/* Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#d4df42]/10 text-[#d4df42] text-xs rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">View Details</span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#d4df42] transition-colors duration-300">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your next success story starts here.
            </p>
            <button className="bg-[#d4df42] text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-[#a8b832] transition-colors duration-300 text-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
