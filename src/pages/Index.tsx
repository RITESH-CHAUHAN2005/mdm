
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import DesignSection from '../components/DesignSection';
import TechnologySection from '../components/TechnologySection';
import MarketingSection from '../components/MarketingSection';
import AccelerateSection from '../components/AccelerateSection';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll animations
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-up",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <DesignSection />
      <TechnologySection />
      <MarketingSection />
      <AccelerateSection />
      <Portfolio />
      <Team />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
