import React from "react";
import Logo from "../Assets/Logo.svg";

import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="contact">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
        <div className="footer-icons">
         <BsWhatsapp/><a href="https://api.whatsapp.com/send?phone=905528618606" target='_blank'>Contact Us on WhatsApp</a>
        </div>

        <div className="footer-icons">
        <BsInstagram/><Link to="https://www.instagram.com/thesoftwarehouse/" target='_blank'>FoodIE</Link>
        </div>
        
        
        <div className="footer-icons">
        <BiLogoGmail/><Link to="https://mail.google.com/mail/?view=cm&fs=1&to=aisankheiri20@gmail.com" target='_blank'>FoodIE@gmail.com</Link>
        </div>
        <div>
          <h3 className="footer-the-end">
            Bu web site Aisan Kheiri tarafından örnek proje olarak yapılmıştır.
          </h3>
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
