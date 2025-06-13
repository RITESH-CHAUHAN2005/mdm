
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const MediaProductionPage = () => {
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

  const mediaServices = [
    {
      title: "Product Photoshoots",
      description: "Professional product photography that showcases your items in the best light",
      icon: "📸"
    },
    {
      title: "Video Production",
      description: "High-quality video content from concept to final edit",
      icon: "🎬"
    },
    {
      title: "Creative Ad Visuals",
      description: "Eye-catching advertising visuals that drive conversions",
      icon: "🎨"
    },
    {
      title: "Motion Graphics & Animations",
      description: "Dynamic animations that bring your brand to life",
      icon: "✨"
    },
    {
      title: "Editing & Post Production",
      description: "Professional editing services for all your visual content",
      icon: "🎞️"
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Media Production & Visual Content Creation
            </h1>
            <p className="text-2xl text-purple-600 font-semibold mb-8 italic">
              "Because people remember stories, not stats."
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
            {mediaServices.map((service, index) => (
              <div key={index} className="fade-up bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Production */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-up bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Premium Brand-Aligned Content
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              At MDM Consulting, we specialize in crafting premium, brand-aligned content that captivates, 
              converts, and communicates your message clearly. Our media production team ensures high-quality 
              visual narratives across platforms and formats.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">
            Our Production Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Concept", description: "We develop creative concepts aligned with your brand" },
              { step: "2", title: "Planning", description: "Detailed planning and pre-production preparation" },
              { step: "3", title: "Production", description: "Professional shooting and content creation" },
              { step: "4", title: "Post-Production", description: "Expert editing and final delivery" }
            ].map((phase, index) => (
              <div key={index} className="fade-up text-center">
                <div className="w-16 h-16 bg-[#d4df42] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with professional media production services.
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

export default MediaProductionPage;
