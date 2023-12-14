
import React, { useState } from 'react';
import './HelpandSupport.css';

const HelpandSupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', { name, email, message });
  };

  return (
    <div className="help-and-support-container">
      <h2>Help and Support</h2>

      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>Q: How do I report a missing grade?</h4>
          <p>A: You can report a missing grade using the Missing Grade Form on your the Missing Grade Page.</p>
          <p>B: You can also use the form below to access our support team for any additional enquires.</p>
        </div>
        {}
      </section>

      <section className="contact-form-section">
        <h3>Contact Technical Support</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpandSupport;
