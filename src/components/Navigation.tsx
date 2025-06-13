
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { 
      name: 'Services', 
      id: 'services',
      submenu: [
        { name: 'Technology', id: 'technology' },
        { name: 'Marketing', id: 'marketing' },
        { name: 'Media Production', id: 'media-production' }
      ]
    },
    { name: 'Work', id: 'work' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="nav-item flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0401220c-3f1c-4145-8704-5c86c9ce11b6.png" 
              alt="MDM Consulting Logo" 
              className="h-12 w-auto"
            />
            <span className="font-bold text-xl text-gray-900">MDM Consulting</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => item.submenu ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : scrollToSection(item.id)}
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                  className="nav-item text-gray-700 hover:text-[#d4df42] font-medium transition-colors duration-300 relative group flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4df42] transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => scrollToSection(subItem.id)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#d4df42]/10 hover:text-[#d4df42] transition-colors duration-200"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.submenu ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-gray-700 hover:text-[#d4df42] font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
                {item.submenu && activeDropdown === item.name && (
                  <div className="ml-4 mt-2">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => scrollToSection(subItem.id)}
                        className="block w-full text-left py-2 text-gray-600 hover:text-[#d4df42] transition-colors duration-200"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
