import React, { useRef, useState } from 'react';
import firebase from '../firebase'
import Success from '../Success/Success'
import Fail from '../Fail/Fail'
import styles from './Reg.module.css'

function Registration() {
  const inputPhone = useRef(null)
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState(null)

  const handleBase = () => {

    // eslint-disable-next-line no-useless-escape
    const regexp = /[\+][7]\d{3}\d{3}\d{2}\d{2}/gm;
    // console.log(inputPhone.current.value)
    // console.log(inputPhone.current.value.match(regexp))
    if (inputPhone.current.value.match(regexp)) {
        fetch('http://localhost:5000/api/user', {
          method: 'POST',
          body: JSON.stringify({ userPhone: inputPhone.current.value }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            if (data.message) {
              let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
              let number = inputPhone.current.value
              setMessage(null)
              firebase
                .auth()
                .signInWithPhoneNumber(number, recaptcha)
                .then(function (e) {
                  console.log('YandexMap(function(e))', e)
                  let code = prompt('Enter your otp', '')
                  if (code == null) return;
                  e.confirm(code).then(function (result) {
                    console.log(result.user, 'user')
                    setModal(true)
                  }).catch((error) => {
                    console.log(error)
                  })
                })
            } else {
              setMessage('Вы уже зарегистрированы')
            }
          })

        } else {
          console.log('dsklfdsjf')
          document.getElementById('invalidPhone').textContent = 'Неправильный номер телефона'
        }
  }
    



  return (
    <>
      {modal ? <Success /> :
        <>
          <div className={styles.form}>
            <div className={styles.title}>ВВЕДИТЕ НОМЕР ТЕЛЕФОНА В ФОРМАТЕ +7ХХХХХХХХХХ</div>
            <div className={styles.subtitle}></div>
            <div className={`${styles.input_container} ${styles.ic2}`}>
              <input ref={inputPhone}
                id="phone"
                className={styles.input}
                type="tel"
                placeholder=" "
                // pattern="/[\+][7]\d{3}\d{3}\d{2}\d{3}/gm"
                reqired="true"
              />

              <div className={styles.cut}></div>
              <label htmlFor="phone" className={styles.placeholder}>Телефон</label>
            </div><br />
            <div id="recaptcha-container"></div>
            <span>{message ? <Fail /> : ''}</span>
            <span id="invalidPhone"></span>
            <button type="text" onClick={handleBase} className={styles.submit}>Отправить</button>
          </div>

        </>
      }
    </>
  );
}

export default Registration;
