import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/Form.module.css';
import OrangeBtn from '../../../components/orangeBtn/OrangeBtn';
import ModalWindow from '../../../components/modalWindow/ModalWindow';

/* Footer Form */
const Form = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();
  const {
    subscribe, monthly, resources, yourEmail, nameBtn, modalWindowName
  } = t('footer', { returnObjects: true });
  const { footerForm, footerFormTxt } = styles;
  console.log(email);

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Email sent');
  };

  return (
    <div className={footerForm}>
      <div className={footerFormTxt}>
        <h3>{subscribe}</h3>
        <span>
          {monthly}
          <br />
          {resources}
        </span>
      </div>
      <form
        action="#"
        onSubmit={onSubmit}
      >
        <input
          name="email"
          type="email"
          placeholder={yourEmail}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <OrangeBtn
          className="footer"
          setModalWindow={setModalWindow}
          nameBtn={nameBtn}
        />
        <ModalWindow
          modalWindowName={modalWindowName}
          modalWindow={modalWindow}
        />
      </form>
    </div>
  );
};

export default Form;
