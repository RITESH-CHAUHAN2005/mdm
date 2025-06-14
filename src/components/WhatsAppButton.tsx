
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+917982824113';
  const message = 'Hello! I would like to know more about your services.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
    </button>
  );
};

export default WhatsAppButton;
