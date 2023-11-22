// import React from 'react'
import { NavLink } from 'react-router-dom'
import { Baner, Container, Filtr } from './MainFilter.js'
import { FaTelegramPlane } from "react-icons/fa";


const MainFilter = () => {
  return (
    <>
      <Container>
        
        <p>OTMlar va yo‘nalishlar kesimida <br/> arizalar statistikasi</p>

        <Filtr>
            <p>Filtr</p>
            <div className='d-flex'>
            <select className="form-select col" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="form-select col" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button type="submit col">Natija</button>
            </div>

        </Filtr>
        <Baner className='banner align-items-center'>
          <p>Telegram orqali bildirishnomlarni tez <br/> va oson qabul qiling!</p>
          <NavLink to='https://t.me/nurullayev_akbar' className="d-flex justify-content-center align-items-center">
          <FaTelegramPlane/>
          Telegramda qabul qiling</NavLink>
        </Baner>
        
      </Container>  
    </>
  )
}

export default MainFilter