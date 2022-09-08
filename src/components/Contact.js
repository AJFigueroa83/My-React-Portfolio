import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className='contact-container'>
      <section className="container">
        <div className="project">
          <h2 className="top-title">Contact Me</h2><br></br>
          <h2 className="email"><a href="mailto:alfredojfigueroa@gmail.com">alfredojfigueroa@gmail.com</a></h2>
          <hr></hr>
        </div>
        <ContactForm />
        
      </section>
    </div>
  ); 
}

export default Contact;