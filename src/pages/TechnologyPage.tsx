
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const TechnologyPage = () => {
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

  const wordpressPortfolio = [
    { domain: "miamiaesthetics.in", industry: "Aesthetic Clinic" },
    { domain: "drivewaydentistry.com", industry: "Dental Care" },
    { domain: "greenleaforganics.com", industry: "Organic Products" },
    { domain: "techsolutions.pro", industry: "IT Services" },
    { domain: "urbanfitness.studio", industry: "Fitness Center" }
  ];

  const ecommerceStores = [
    { domain: "fashionforward.store", industry: "Fashion & Apparel" },
    { domain: "homegardensupply.com", industry: "Home & Garden" },
    { domain: "techgadgets.shop", industry: "Electronics" },
    { domain: "artisancrafts.market", industry: "Handmade Crafts" }
  ];

  const customProjects = [
    {
      name: "Tradeling",
      description: "A robust B2B marketplace connecting suppliers with retailers across the Middle East",
      type: "B2B Trading Website"
    },
    {
      name: "Thrival Learning",
      description: "Interactive e-learning platform with live sessions and progress tracking",
      type: "E-learning Platform"
    }
  ];

  const techStack = [
    "Node.js", "React.js", "PHP", "WordPress", "Angular", "HTML5", 
    "Shopify", "Figma", "Adobe XD", "WooCommerce", "Express"
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Website Design & Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We build websites that reflect your brand identity and drive engagement.
            </p>
            <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-500 text-sm">Full-width responsive design</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-800">Desktop Layout</h3>
                    <p className="text-sm text-gray-600">Optimized for large screens</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-800">Mobile Layout</h3>
                    <p className="text-sm text-gray-600">Touch-friendly interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">
            WordPress Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordpressPortfolio.map((site, index) => (
              <div key={index} className="fade-up bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{site.domain}</h3>
                <p className="text-gray-600 mb-4">{site.industry}</p>
                <button className="w-full bg-[#d4df42] text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-[#a8b832] transition-colors duration-300">
                  Tap the link
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Stores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">
            E-commerce Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecommerceStores.map((store, index) => (
              <div key={index} className="fade-up bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{store.domain}</h3>
                <p className="text-gray-600 mb-4">{store.industry}</p>
                <button className="w-full bg-[#d4df42] text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-[#a8b832] transition-colors duration-300">
                  Tap the link
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom-Coded Websites */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">
            Custom-Coded Websites
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customProjects.map((project, index) => (
              <div key={index} className="fade-up bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-[#d4df42] font-semibold mb-4">{project.type}</p>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <button className="bg-[#d4df42] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-[#a8b832] transition-colors duration-300">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-8 fade-up">
            Technologies & Platforms We Work With
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 fade-up">
            At MDM Consulting (Mission Driven Marketing), we leverage a diverse range of modern technologies 
            and platforms to deliver high-performing digital solutions tailored to your business needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="fade-up bg-gray-800 rounded-lg p-4 text-center hover:bg-[#d4df42] hover:text-gray-900 transition-all duration-300">
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnologyPage;
