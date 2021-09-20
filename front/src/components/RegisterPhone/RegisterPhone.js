import React, { Component } from 'react';
import firebase from '../firebase'

// важна версия firebase (с другими, кроме 7.24.0 проблемы)
// ссылка на видео по подключению авторизации пользователя через sms через react и firebase 
// https://www.youtube.com/watch?v=FHnAN16WrQ8

export class RegisterPhone extends Component {

  handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    let number = '+79964233646'
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      let code = prompt('Enter your otp', '')
      if (code == null) return;
      e.confirm(code).then(function (result) {
        console.log(result.user, 'user')
        document.querySelector('label').textContent = result.user.phoneNumber + " Number verified"
      }).catch((error) => {
        console.log(error)
      })
    })
  }

render(){
  return(
    <>
  <div>
  <div id="recaptcha-container"></div>
    <label></label>
    <button onClick={this.handleClick}>Нажми меня</button>
  </div>
    </>
  );
}
}

export default RegisterPhone;
