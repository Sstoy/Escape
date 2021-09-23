import React, { useRef } from 'react';
import styles from './Footer.module.css'
import { useHistory } from 'react-router-dom'
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons"

function Footer(props) {

  const history = useHistory();
  const messageInput = useRef(null);
  const emailInput = useRef(null);
  const nameInput = useRef(null)

  const sendMessage = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/message', {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput.current.value,
        message: messageInput.current.value,
        name: nameInput.current.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    emailInput.current.value = '';
    messageInput.current.value = '';
    nameInput.current.value = '';
  }
  const redirectToYandexReviews = () => {
    history.push('/yandexreview');
  }

  return (
    <>
      <div className={styles.footer} >
        <div id={styles.wrapper}>
          <section id={styles.contact}>
            <div className={styles.inner}>
              <section className={styles.section_form}>
                <form method="post" action="#">
                  <div className={styles.fields}>
                    <div className={`${styles.field} ${styles.half}`}>
                      <label htmlFor="name">Ваше имя</label>
                      <input ref={nameInput} type="text" name="name" id="name" />
                    </div>
                    <div className={`${styles.field} ${styles.half}`}>
                      <label htmlFor="email">Ваш email</label>
                      <input ref={emailInput} type="text" name="email" id="email" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="message">Оставьте сообщение</label>
                      <textarea ref={messageInput} name="message" id="message" rows="6"></textarea>
                    </div>
                  </div>
                  <ul className={styles.actions}>
                    <li><input onClick={sendMessage} type="submit" value="Отправить" className={styles.primary} /></li>
                  </ul>
                  <div className={styles.inner}>
                    <div className={styles.icons}>
                      <p><a href="https://www.instagram.com/cyberclub_escape/" ><FontAwesomeIcon icon={faInstagram} style={{ "color": "white", "font-size": "52px"  }} /></a></p>
                      <p><a href="https://vk.com/cyberclubspb_escape" ><FontAwesomeIcon icon={faVk} style={{ "color": "white", "font-size": "60px" }} /></a></p>
                    </div>
                    <input type="submit" onClick={redirectToYandexReviews} className={styles.primary} value="Отзывы на Яндекс" />
                    <input type="submit" onClick={redirectToYandexReviews} className={styles.primary} value="Отзывы Вконтакте" />
                    <footer id={styles.footerMini}>
                      <ul className={styles.copyright}>
                        <li>&copy; Made by</li><li>Elbrus Team</li>
                      </ul>
                    </footer>
                  </div>
                </form>
              </section>
              <section className={styles.split}>
                <section>
                  <div className={styles.contact_method} >
                    <span className={`${styles.icon} ${styles.solid} ${styles.alt} `}><FontAwesomeIcon icon={faEnvelope} style={{ "color": "white" }} /></span>
                    <h3>Email</h3>
                    <span style={{ "color": "white" }}>georgy@escape24.ru</span>
                    <div className={styles.contact_method_phone}>
                      <span className={`${styles.icon_phone} ${styles.solid} ${styles.alt} `}><FontAwesomeIcon icon={faPhone} style={{ "color": "white" }} /></span>
                      <h3>Наши телефоны</h3>
                      <span style={{ "color": "white" }}>
                        <p>Escape Проспект Большевиков: </p> <a href="tel:+79315826324">+7 (931) 582 63 24</a><br />
                        <p>Escape Парнас: </p> <a href="tel:+79095773683">+7 (909) 577 36 83</a><br />
                        <p>Escape Чкаловская: </p> <a href="tel:+79315808281">+7 (931) 580 82 81</a><br />
                        <p>Escape Ленинский проспект: </p>  <a href="tel:+79533410192">+7 (953) 341 01 92</a><br />
                      </span>
                    </div>
                  </div>
                </section>
                <section>
                  <div className={styles.contact_method}>
                    <span className={`${styles.icon} ${styles.solid} ${styles.alt} `}><FontAwesomeIcon icon={faHome} style={{ "color": "white" }} /></span>

                    <span style={{ "color": "white" }}> ИП СПИРИДОНОВ Г.И.<br />
                      ИНН 784106878441<br />
                      ОГРН 319784700160219</span>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </div >
      </div>
    </>
  );
}

export default Footer;
