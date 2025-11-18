// components/WhatsAppButton.tsx

import React from 'react';
import { PiWhatsappLogoThin } from 'react-icons/pi';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}


const defaultPhoneNumber = '923043993990'; 
const defaultMessage = 'Hello, I saw your portfolio and would like to discuss a project.';

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = defaultPhoneNumber, 
  message = defaultMessage 
}) => {
  

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  const buttonClasses = `
    fixed bottom-8 right-6 z-50 
    my-8
    bg-[#25D366] text-white 
    rounded-full w-16 h-16 
    flex items-center justify-center 
    shadow-xl 
    transition-all duration-300 ease-in-out
    cursor-pointer
    hover:scale-105 hover:shadow-2xl
    animate-whatsapp-bounce
  `;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={buttonClasses} 
      aria-label="Chat on WhatsApp"
    >
 
      <PiWhatsappLogoThin 
      size={40}/>

    </a>
  );
};

export default WhatsAppButton;
