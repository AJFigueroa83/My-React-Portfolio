import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className='contact-container'>
      <section className="container">
        <div className="project">
          <h2 className="top-title">Contact Me</h2>
          <hr></hr>
        </div>
        <ContactForm />
        
      </section>
    </div>
  ); 
}

export default Contact;