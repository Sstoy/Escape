import React, { useRef, useState } from 'react';
import firebase from '../firebase'
import Success from '../Success/Success'
import styles from './Reg.module.css'

function Registration() {
  const inputPhone = useRef(null)
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    let number = inputPhone.current.value
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      let code = prompt('Enter your otp', '') //сделать не промпт, а инпут. как?????????????
      if (code == null) return;
      e.confirm(code).then(function (result) {
        console.log(result.user, 'user')
        setModal(true)
      }).catch((error) => {
        console.log(error)
      })
    })
    console.log(inputPhone.current.value)
    
  }
  return (
    <>
    {modal? <Success /> : <div className={styles.form}>
      <div className={styles.title}>Компьютерный клуб ESCAPE</div>
      <div className={styles.subtitle}></div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input ref={inputPhone} id="phone" className={styles.input} type="tel" placeholder=" " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        <div className={styles.cut}></div>
        <label htmlFor="phone" className={styles.placeholder}>Телефон</label>
      </div>
      <div id="recaptcha-container"></div>
      <span></span>
      <button type="text" onClick={handleClick} className={styles.submit}>Отправить</button>
    </div>}
    </>
  );
}

export default Registration;
