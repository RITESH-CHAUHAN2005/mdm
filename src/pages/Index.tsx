
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import TechnologyServices from '../components/TechnologyServices';
import MarketingServices from '../components/MarketingServices';
import MediaProductionServices from '../components/MediaProductionServices';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling initialization
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

      // Parallax effect for hero elements
      gsap.to(".parallax-slow", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-slow",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <TechnologyServices />
      <MarketingServices />
      <MediaProductionServices />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
