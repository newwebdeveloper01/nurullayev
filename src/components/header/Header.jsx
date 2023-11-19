import React from 'react'
import { Container } from './Header'
import LOGO from  '../../assets/logo.png'
import { IconButton } from '../../utils/Container'

const Header = () => {
  return (
    <>
    
<Container className='d-flex align-items-center'>
    
            <Container.Img src={LOGO}/>
            <p className='mt-4'>Magistratura</p>
            <Container.Many>
             
              <ul className='d-flex'>
                <li ><a href='#'> Asosiy</a></li>
                <li ><a href='#'>Imtiyozlar</a></li>
                <li ><a href='#'>Yangiliklar</a></li>
                <li ><a href='#'>Statistika</a></li>
              </ul>
              <IconButton title={"Kirish"} link={"/login"}/>

            </Container.Many>

            
            
        
</Container>
    
    </>
  )
}

export default Header