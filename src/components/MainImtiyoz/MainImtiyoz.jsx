// import React from "react"
import { FaMedal  , FaWpforms , FaWheelchair} from "react-icons/fa6";

import { Card, CarsIcons, Container, Items } from "./MainImtiyoz.js"
import { NavLink } from "react-router-dom";

const MainImtiyoz = () => {
  return (
    <Container>
      <p>Magistraturaga topshiruvchilar <br/> uchun imtiyozlar</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <NavLink to="/imtiyoz">
  <Items>
    <div className="card h-100 d-flex align-items-center p-4">
  <CarsIcons>

    <FaMedal size={40} color="#fff" />
  </CarsIcons>  

      <Card>
        <h5 className="card-title mt-4">Yutuqlar</h5>
        <p className="card-text mt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </Card>
      
    </div>
  </Items>

      </NavLink>
      <NavLink to="/imtiyoz">
  <Items>
    <div className="card h-100 d-flex align-items-center p-4">
    <CarsIcons>

    <FaWpforms size={40} color="#fff"/>
    </CarsIcons>

      <Card>
        <h5 className="card-title mt-4">Card title</h5>
        <p className="card-text mt-3">This card has supporting text below as a natural lead-in to additional content.</p>
      </Card>
      
    </div>
  </Items>

      </NavLink>
      <NavLink to="/imtiyoz">
  <Items>
    <div className="card h-100 d-flex align-items-center p-4">
    <CarsIcons>

    <FaWheelchair size={40} color="#fff"/>
    </CarsIcons>

      <Card>
        <h5 className="card-title mt-4">Card title</h5>
        <p className="card-text mt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </Card>
      
    </div>
  </Items>

      </NavLink>
</div>
    </Container>
  )
}

export default MainImtiyoz
