// import React from 'react'
import { Container } from './MainBaner.js'
import { IconButton } from '../../utils/Container.jsx'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const MainBaner = () => {
  return (
    <Container>
        <h3>Magistratura uchun</h3>
        <p>Qabul 2023</p>
        <Container.P>Oliy talim muassasalarining magistratura bosqichiga kirish uchun onlayn ariza topshirish tizimi</Container.P>
        <IconButton title={"Ariza topshirish"}  icon={<HiOutlineArrowNarrowRight/>} />
        <Container.BG/>
    </Container>
  )
}

export default MainBaner