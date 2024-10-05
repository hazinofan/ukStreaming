import React from 'react';
import '../index.css';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href="https://api.whatsapp.com/send?phone=447453930081&text=Bonjour! Je suis intéressé par le prix actuel de l’abonnement Platinium. Pourriez-vous s'il vous plaît fournir les détails?" className="float animate-bounce" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
  );
};

export default WhatsAppButton;
