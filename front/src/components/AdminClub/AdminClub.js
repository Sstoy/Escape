import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './AdminClub.module.css';



function AdminClub({ club }) {
  const isAdmin = useSelector(state => state.isAdmin);
  const prices = useSelector(state => state.prices);
  const computers = useSelector(state => state.computers);
  const history = useHistory();
  const dispatch = useDispatch();

  const inputClubPhone = useRef(null);
  const inputClubComputers = useRef(null);

  const vipPrice1 = useRef(null);
  const vipPrice5 = useRef(null);
  const vipPrice24Hours = useRef(null);
  const vipPriceDay = useRef(null);
  const vipPriceWeekend = useRef(null);
  const vipPricePS = useRef(null);
  const vipPriceMorning = useRef(null);

  const Price1 = useRef(null);
  const Price5 = useRef(null);
  const Price24Hours = useRef(null);
  const PriceDay = useRef(null);
  const PriceWeekend = useRef(null);
  const PricePS = useRef(null);
  const PriceMorning = useRef(null);

  const currClubComputers = computers.filter((el) => el.ClubId === club.id);
  const currClubPrices = prices.filter((el) => el.ClubId === club.id);

  const changeClubInfo = () => {
    fetch('http://localhost:5000/api/club', {
      method: 'PUT',
      body: JSON.stringify({
        id: club.id,
        phone: inputClubPhone.current.value,
        computers: inputClubComputers.current.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(club => {
        if (club.id) {
          dispatch({ type: 'CHANGE_CLUB_INFO', payload: club })
          alert('Информация о клубах изменена')

          // history.push(`/user/`)
        } else {
          history.push('/user/absent')
        }
      })
  }

  const ChangeClubVipPrices = () => {
    fetch('http://localhost:5000/api/vip-prices', {
      method: 'PUT',
      body: JSON.stringify({
        id: currClubPrices[1].id,
        vipPrice1: vipPrice1.current.value,
        vipPrice5: vipPrice5.current.value,
        vipPrice24Hours: vipPrice24Hours.current.value,
        vipPriceDay: vipPriceDay.current.value,
        vipPriceWeekend: vipPriceWeekend.current.value,
        vipPricePS: vipPricePS.current.value,
        vipPriceMorning: vipPriceMorning.current.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(prices => {
        if (prices.id) {
          dispatch({ type: 'CHANGE_CLUB_VIP_PRICES', payload: prices })
          alert('Цены изменены')

          // history.push(`/user/`)
        } else {
          history.push('/user/absent')
        }
      })
  }

  const ChangeClubGeneralPrices = () => {
    fetch('http://localhost:5000/api/general-prices', {
      method: 'PUT',
      body: JSON.stringify({
        id: currClubPrices[0].id,
        Price1: Price1.current.value,
        Price5: Price5.current.value,
        Price24Hours: Price24Hours.current.value,
        PriceDay: PriceDay.current.value,
        PriceWeekend: PriceWeekend.current.value,
        PricePS: PricePS.current.value,
        PriceMorning: PriceMorning.current.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(prices => {
        if (prices.id) {
          dispatch({ type: 'CHANGE_CLUB_GENERAL_PRICES', payload: prices })
          alert('Цены изменены')
          // history.push(`/user/`)
        } else {
          history.push('/user/absent')
        }
      })
  }

  return (
    <div className={styles.container}>
    <div className={styles.buttonFlex}>
      <button onClick={() => history.goBack()}>Назад</button>
    </div>
    {isAdmin === true ?
    <>
      <div className={styles.card}>
        <div>
          <div className={styles.hrefClub}>
            <h2>
              {club?.name}
            </h2>
          </div>
          <p>{club?.address}</p>
          <input ref={inputClubPhone} type="text" defaultValue={club?.phone} />
          <p><input ref={inputClubComputers} type="text" defaultValue={club?.computers} /> игровых PC</p>
          <div className={styles.buttonFlex}>
            <button onClick={changeClubInfo}>Изменить данные о клубе</button>
          </div>
        </div>

        <div >
          <div >
            <div className="bigFlex">

              <div className="prices">
                <div className="price">

                  <p className="roomStyle">Общий зал:</p>


                  <p>Цена за 1 час: <input ref={Price1} type="text" defaultValue={currClubPrices[0]?.onehour} /></p>
                  <p>Цена за 5 часов: <input ref={Price5} type="text" defaultValue={currClubPrices[0]?.fivehours} /></p>
                  <p>Ночной пакет будни: <input ref={PriceDay} type="text" defaultValue={currClubPrices[0]?.nightweekday} /></p>
                  <p>Ночной пакет выходные: <input ref={PriceWeekend} type="text" defaultValue={currClubPrices[0]?.nightweekend} /></p>
                  <p>Утренний пакет: <input ref={PriceMorning} type="text" defaultValue={currClubPrices[0]?.morning} /></p>
                  <p>Цена за сутки: <input ref={Price24Hours} type="text" defaultValue={currClubPrices[0]?.twentyfourhours} /></p>

                  <p> Playstation за 1 час: <input ref={PricePS} type="text" defaultValue={currClubPrices[0]?.PS} /></p>
                  <div className={styles.buttonFlex}>
                    <button onClick={ChangeClubGeneralPrices}>Изменить цены Общего зала</button>
                  </div>

                  <p></p>

                </div>
                <div className="price">
                  <p className="roomStyle">VIP зал:</p>

                  <p>Цена за 1 час: <input ref={vipPrice1} type="text" defaultValue={currClubPrices[1]?.onehour} /></p>
                  <p>Цена за 5 часов: <input ref={vipPrice5} type="text" defaultValue={currClubPrices[1]?.fivehours} /></p>
                  <p>Ночной пакет будни: <input ref={vipPriceDay} type="text" defaultValue={currClubPrices[1]?.nightweekday} /></p>
                  <p>Ночной пакет выходные: <input ref={vipPriceWeekend} type="text" defaultValue={currClubPrices[1]?.nightweekend} /></p>
                  <p>Утренний пакет: <input ref={vipPriceMorning} type="text" defaultValue={currClubPrices[1]?.morning} /></p>
                  <p>Цена за сутки: <input ref={vipPrice24Hours} type="text" defaultValue={currClubPrices[1]?.twentyfourhours} /></p>

                  <p> Playstation за 1 час: <input ref={vipPricePS} type="text" defaultValue={currClubPrices[1]?.PS} /></p>
                  <div className={styles.buttonFlex}>
                    <button onClick={ChangeClubVipPrices}>Изменить цены VIP зала</button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
    :
    <>
      <div className={styles.adminForm}>
        <h3>Пройдите аутентификацию</h3>
        <div className={styles.form}>
          <button onClick={() => history.push('/admin')} type="text" className={styles.submit}>К форме аутентификации</button>
        </div>
      </div>
    </>}
    </div>
  );
}

export default AdminClub;
