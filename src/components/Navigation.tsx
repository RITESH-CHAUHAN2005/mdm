
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.nav-item', 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="nav-item font-bold text-2xl text-gray-900">
            Leo9Studio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Work', 'Team', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-item text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden nav-item p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-900 block transition-all duration-300 h-0.5 w-6 transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 h-0.5 w-6 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 h-0.5 w-6 transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-6 shadow-xl">
            {['Home', 'Services', 'Work', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
