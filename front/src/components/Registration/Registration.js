import React, { useRef, useState } from 'react';
import firebase from '../firebase'
import Success from '../Success/Success'
import styles from './Reg.module.css'

function Registration() {
  const inputPhone = useRef(null)
  const [modal, setModal] = useState(false)
  const [code, setCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);

  const updateCode = (event) => {
    setCode(event.target.value);
  }

  const submitPhone = (event) => {
    const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const phone = inputPhone.current.value

    firebase
      .auth()
      .signInWithPhoneNumber(phone, recaptcha)
      // .then(() => setShowCodeInput(true))
      .then(function (e) {
        setShowCodeInput(true);
        console.log(e) // undefined
        // let code = prompt('Enter your otp', '') 

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
      {
        modal
          ? <Success />
          : (
            <div className={styles.form}>
              <div className={styles.title}>Компьютерный клуб ESCAPE</div>
              <div className={styles.subtitle}></div>
              <div className={`${styles.input_container} ${styles.ic2}`}>
                <input
                  ref={inputPhone}
                  id="phone"
                  className={styles.input}
                  type="tel"
                  placeholder=" "
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                <div className={styles.cut}></div>
                <label htmlFor="phone" className={styles.placeholder}>Телефон</label>
              </div>
              <span></span><br></br>
              <div id="recaptcha-container"></div>
              <span></span>
              <button type="button" onClick={submitPhone} className={styles.submit}>Отправить</button>

              {/* {
                showCodeInput && ( */}
              <div className={`${styles.input_container} ${styles.ic2}`}>
                <form>
                  <input
                    className={styles.input}
                    onChange={updateCode}
                    value={code}
                    placeholder="После проверки введите СМС"
                  />
                  <button className={styles.submitMini}>OK</button>
                </form>
              </div>
              {/* )
              } */}


            </div>
          )
      }

    </>
  );
}

export default Registration;
