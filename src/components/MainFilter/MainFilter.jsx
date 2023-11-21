import React from 'react'
import { Container, Filtr } from './MainFilter'

const MainFilter = () => {
  return (
    <>
      <Container>
        
        <p>OTMlar va yo‘nalishlar kesimida arizalar statistikasi</p>

        <Filtr>
            <p>Filtr</p>
            <div className='d-flex'>
            <select className="form-select col" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="form-select col" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button type="submit col">Natija</button>
            </div>

        </Filtr>
        
      </Container>  
    </>
  )
}

export default MainFilter