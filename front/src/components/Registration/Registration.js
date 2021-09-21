import React, { useRef, useState } from 'react';
import firebase from '../firebase'
import Success from '../Success/Success'
import Fail from '../Fail/Fail'
import styles from './Reg.module.css'

function Registration() {
  const inputPhone = useRef(null)
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [code, setCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);


  const updateCode = (event) => {
    setCode(event.target.value);
  }

  const handleBase = () => {
    fetch('http://localhost:5000/api/user', {
      method: 'POST',
      body: JSON.stringify({ userPhone: inputPhone.current.value }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.message) {
          let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
          let number = inputPhone.current.value
          setMessage(null)
          firebase
            .auth()
            .signInWithPhoneNumber(number, recaptcha)
            .then(function (e) {
              setShowCodeInput(true);
              console.log(e)
              // let code = prompt('Enter your otp', '') //сделать не промпт, а инпут. как?????????????
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
  }

  return (
    <>
      {modal ? <Success /> :
        <>
          <div className={styles.form}>
            <div className={styles.title}>Компьютерный клуб ESCAPE</div>
            <div className={styles.subtitle}></div>
            <div className={`${styles.input_container} ${styles.ic2}`}>
              <input ref={inputPhone}
                id="phone"
                className={styles.input}
                type="tel"
                placeholder=" "
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              <div className={styles.cut}></div>
              <label htmlFor="phone" className={styles.placeholder}>Телефон</label>
            </div><br/>
            <div id="recaptcha-container"></div>
            <span>{message ? <Fail /> : ''}</span>
            <button type="text" onClick={handleBase} className={styles.submit}>Отправить</button>
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
              {/* )} */}
          </div>

        </>
      }
    </>
  );
}

export default Registration;
