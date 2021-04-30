import React, { useState } from 'react';
import '../scss/form.css';

/* Footer Form */
const Form = () => {
  const [email, setEmail] = useState('');
  console.log(email);

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Email sent');
  };

  return (
    <div className="footer-form">
      <div className="footer-form-txt">
        <h3>Subscribe to our newsletter</h3>
        <span>
          A monthly digest of the new WOODIES products, hot offers, and
          <br />
          resources.
        </span>
      </div>
      <form
        action="#"
        onSubmit={onSubmit}
      >
        <input
          name="email"
          type="email"
          placeholder="Your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="footer-form-btn orange-btn"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Form;
