
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
    window.addEventListener('scroll', handleScroll);
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

  const handleDropdownToggle = (itemName: string) => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" onClick={closeAllMenus} className="font-bold text-xl sm:text-2xl text-gray-900 hover:text-[#d4df42] transition-colors">
            MDM Consulting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative dropdown-container"
              >
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center px-4 py-2 text-gray-700 hover:text-[#d4df42] font-medium transition-colors duration-200 rounded-md hover:bg-gray-50 ${
                        item.dropdownItems.some(subItem => location.pathname === subItem.path) ? 'text-[#d4df42]' : ''
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
                            className={`block px-4 py-3 text-gray-700 hover:bg-[#d4df42]/10 hover:text-[#d4df42] transition-colors duration-200 ${
                              location.pathname === subItem.path ? 'text-[#d4df42] bg-[#d4df42]/5' : ''
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
                    className={`px-4 py-2 text-gray-700 hover:text-[#d4df42] font-medium transition-colors duration-200 rounded-md hover:bg-gray-50 ${
                      location.pathname === item.path ? 'text-[#d4df42]' : ''
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
            className="md:hidden p-2 text-gray-700 hover:text-[#d4df42] transition-colors rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0 pb-2 last:pb-0">
                  {item.dropdownItems ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`flex items-center justify-between w-full py-3 px-2 text-left text-gray-700 hover:text-[#d4df42] font-medium transition-colors rounded-md hover:bg-gray-50 ${
                          item.dropdownItems.some(subItem => location.pathname === subItem.path) ? 'text-[#d4df42] bg-[#d4df42]/5' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {activeDropdown === item.name && (
                        <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={closeAllMenus}
                              className={`block py-2 px-3 text-sm text-gray-600 hover:text-[#d4df42] hover:bg-[#d4df42]/5 transition-colors rounded-md ${
                                location.pathname === subItem.path ? 'text-[#d4df42] bg-[#d4df42]/10 font-medium' : ''
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
                      className={`block py-3 px-2 text-gray-700 hover:text-[#d4df42] font-medium transition-colors rounded-md hover:bg-gray-50 ${
                        location.pathname === item.path ? 'text-[#d4df42] bg-[#d4df42]/5' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
