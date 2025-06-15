
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      dropdownItems: [
        { name: 'Technology', path: '/services/technology' },
        { name: 'Marketing', path: '/services/marketing' },
        { name: 'Media Production', path: '/services/media-production' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gpu-accelerated ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={closeAllMenus} 
            className="font-bold text-xl sm:text-2xl text-gray-900 hover:text-brand transition-colors z-50 relative"
          >
            MDM Consulting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative dropdown-container"
              >
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center px-4 py-2 text-gray-700 hover:text-brand font-medium transition-colors duration-200 rounded-md hover:bg-gray-50 ${
                        item.dropdownItems.some(subItem => location.pathname === subItem.path) ? 'text-brand' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Desktop Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeAllMenus}
                            className={`block px-4 py-3 text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors duration-200 ${
                              location.pathname === subItem.path ? 'text-brand bg-brand/5' : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    onClick={closeAllMenus}
                    className={`px-4 py-2 text-gray-700 hover:text-brand font-medium transition-colors duration-200 rounded-md hover:bg-gray-50 ${
                      location.pathname === item.path ? 'text-brand' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand transition-colors rounded-md z-50 relative"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-100 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}>
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.name} className={`${index !== menuItems.length - 1 ? 'border-b border-gray-100 pb-4 mb-4' : ''}`}>
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={(e) => handleDropdownToggle(item.name, e)}
                      className={`flex items-center justify-between w-full py-3 px-4 text-left text-gray-700 hover:text-brand font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 text-lg ${
                        item.dropdownItems.some(subItem => location.pathname === subItem.path) ? 'text-brand bg-brand/5' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-2 ml-4 space-y-1">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeAllMenus}
                            className={`block py-3 px-4 text-gray-600 hover:text-brand hover:bg-brand/5 transition-all duration-200 rounded-lg ${
                              location.pathname === subItem.path ? 'text-brand bg-brand/10 font-medium' : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    onClick={closeAllMenus}
                    className={`block py-3 px-4 text-gray-700 hover:text-brand font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 text-lg ${
                      location.pathname === item.path ? 'text-brand bg-brand/5' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
