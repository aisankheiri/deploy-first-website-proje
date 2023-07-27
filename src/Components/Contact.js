import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Aklında Soru Var Mı?</h1>
      <h1 className="primary-heading">Sana yardım edelim</h1>
      <div className="contact-form-container">

        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=aisankheiri20@gmail.com" target='_blank'>FoodIE@gmail.com</Link>
        
      </div>
    </div>
  );
};

export default Contact;
