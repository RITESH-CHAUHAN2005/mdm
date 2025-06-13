
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/0401220c-3f1c-4145-8704-5c86c9ce11b6.png" 
                alt="MDM Consulting Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">MDM Consulting</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Mission Driven Marketing - We're a global creative agency that combines design expertise 
              with technology and intelligence to transform businesses and drive meaningful results.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d4df42] hover:text-gray-900 transition-colors duration-300"
                >
                  <span className="text-xs font-bold">
                    {social.substring(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4df42]">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {['Technology', 'Marketing', 'Media Production', 'Web Development', 'Social Media', 'Video Production'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-[#d4df42] transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4df42]">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {['About', 'Team', 'Portfolio', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#d4df42] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 MDM Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#d4df42] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4df42] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-[#d4df42] transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
