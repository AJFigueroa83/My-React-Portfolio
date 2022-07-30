import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div>
            <label className="header" htmlFor="name">Name:</label>
            <input className="input" type="text" id="name" required />
        </div>
        <div>
            <label className="header" htmlFor="email">Email:</label>
            <input className="input" type="email" id="email" required />
        </div>
        <div>
            <label className="header" htmlFor="message">Message:</label>
            <textarea className="input-message" id="message" required />
        </div>
        <button className="submitBtn" type="submit">{status}</button>
        </form>
    </div>
  );
};

export default ContactForm;