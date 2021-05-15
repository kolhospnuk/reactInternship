import React, { useState } from 'react';
import styles from '../scss/Form.module.css';
import OrangeBtn from '../../../components/orangeBtn/OrangeBtn';

/* Footer Form */
const Form = () => {
  const { footerForm, footerFormTxt } = styles;
  const [email, setEmail] = useState('');
  console.log(email);

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Email sent');
  };

  return (
    <div className={footerForm}>
      <div className={footerFormTxt}>
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
        <OrangeBtn
          // setModalWindow={setModalWindow}
          nameBtn="Subscribe"
        />
      </form>
    </div>
  );
};

export default Form;
