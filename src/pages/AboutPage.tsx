
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#d4df42]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About MDM Consulting
            </h1>
            <p className="text-2xl text-gray-600 mb-8 italic">
              "Mission Driven Marketing - Where Purpose Meets Performance"
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                At MDM Consulting, we don't just market; we move with mission. Born out of a passion 
                to help brands stand for something more, we combine strategy, creativity, and digital 
                excellence to build marketing ecosystems that deliver results — not just impressions.
              </p>
              <p className="text-lg text-gray-600">
                We are a full-service marketing and creative consulting firm helping startups, 
                businesses, and creators establish, grow, and sustain their digital identity. 
                From your first logo to your next million views — we walk every step with you.
              </p>
            </div>
            <div className="fade-up">
              <div className="bg-gradient-to-br from-[#d4df42]/20 to-transparent p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower brands with purpose-driven marketing strategies that create meaningful 
                  connections, drive sustainable growth, and make a positive impact in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Mission",
                description: "Every strategy is purpose-driven and aligned with your brand's core mission."
              },
              {
                icon: "💡",
                title: "Driven",
                description: "We're relentless in pursuing excellence and innovative solutions for our clients."
              },
              {
                icon: "📢",
                title: "Marketing",
                description: "Expert execution across all channels to maximize your brand's reach and impact."
              }
            ].map((value, index) => (
              <div key={index} className="fade-up text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 fade-up">Why Choose MDM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "240+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="fade-up text-center">
                <div className="text-4xl font-bold text-[#d4df42] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
