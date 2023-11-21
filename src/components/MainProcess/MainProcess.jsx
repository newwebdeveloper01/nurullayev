import React from 'react'
import { Container, Line } from './MainProcess'
import { StepIcon } from '../../utils/Container'

const MainProcess = () => {
  return (
    <Container>
    
        <p>Ariza topshirish va uni qabul <br /> qilish jarayoni</p>
        <div className="row row-cols-1 row-cols-md-3">
    
  <div className="col p-0">
    <div className="h-100 position-relative">
    <StepIcon number={1}/>
      <Container.Card>
        <h5 className="card-title">Tizimdan ro‘yxatdan o‘tish hamda ariza topshirish</h5>
        <p className="card-text">Tizimdan telefon raqamingiz orqali ro‘yxatdan o‘ting va shaxsiy ma’lumotlaringizni to‘ldiring hamda ariza qoldiring!</p>
      </Container.Card>
    </div>
  </div>
  <div className="col p-0">
    <div className="h-100 position-relative">
    <StepIcon number={2}/>
      <Container.Card>
        <h5 className="card-title">Diplom va chet tilini bilish sertifikat ma’lumotlarini kiritish</h5>
        <p className="card-text">Diplom ma'lumotlar abituriyentning bitirgan OTM tomonidan tasdiqlanadi. Chet tilini bilish sertifikat ma'lumotlari tegishli maxsus ma'lumotlar bazalari orqali tekshiriladi hamda tasdiqlanadi.</p>
      </Container.Card>
    </div>
  </div>
  <div className="col">
    <div className="h-100 position-relative">
    <StepIcon number={3} classNam='left:"0px"'/>
      <Container.Card>
        <h5 className="card-title">Arizani qabul qilish</h5>
        <p className="card-text">Abituriyent tomonidan tanlangan mutaxassislik ta'lim olgan bakalavr ta'lim yo‘nalishi bo‘yicha mosligi tekshiriladi.</p>
      </Container.Card>
    </div>
  </div>
        </div>
        <Line></Line>
    
    </Container>
  )
}

export default MainProcess