import React, { useRef } from 'react';
import firebase from '../firebase'
import styles from './reg.module.css'

function Registration() {
  const inputName = useRef(null)
  const inputPhone = useRef(null)
  const inputEmail = useRef(null)

  const handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    let number = inputPhone.current.value
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      let code = prompt('Enter your otp', '')
      if (code == null) return;
      e.confirm(code).then(function (result) {
        console.log(result.user, 'user')
        document.querySelector('span').textContent = "Скажите номер телефона администратору"
      }).catch((error) => {
        console.log(error)
      })
    })
    console.log(inputName.current.value, inputPhone.current.value, inputEmail.current.value)
    
  }
  return (
    <div className={styles.form}>
      <div className={styles.title}>Welcome</div>
      <div className={styles.subtitle}>Let's create your account!</div>
      <div className={`${styles.input_container} ${styles.ic1}`}>
        <input ref={inputName} id="firstname" className={styles.input} type="text" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="firstname" className={styles.placeholder}>First name</label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input ref={inputPhone} id="phone" className={styles.input} type="tel" placeholder=" " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        <div className={styles.cut}></div>
        <label htmlFor="phone" className={styles.placeholder}>Phone</label>
      </div>
      <div className={`${styles.input_container} ${styles.ic2}`}>
        <input ref={inputEmail} id="email" className={styles.input} type="email" placeholder=" " />
        <div className={`${styles.cut} ${styles.cut_short}`}></div>
        <label htmlFor="email" className={styles.placeholder}>Email</label>
      </div>
      <div id="recaptcha-container"></div>
      <span></span>
      <button type="text" onClick={handleClick} className={styles.submit}>submit</button>
    </div>
  );
}

export default Registration;
