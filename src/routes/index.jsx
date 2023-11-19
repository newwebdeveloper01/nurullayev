import { Route , Routes } from 'react-router-dom'
import Home from './home/Home.jsx'
import {Container} from './index.js'


const AllRoutes = () => {
  return (
    <Container>
      
        <Routes>
      
        <Route path='/'  element={<Home/>}/>
        {/* <Route path='/auth' element={<Auth/>}/>
        <Route path='/xisobot' element={<Report/>} />
        <Route path='/oquvchilar' element={<Students/>}/>
        <Route path='/tolov' element={<Payment/>} />
        <Route path='/guruh' element={<Group/>} />
        <Route path='/davomat' element={<Attendance/>} />
        <Route path='/guruh/:id' element={<OneGroup/>}/>
      <Route path='/davomat/:id' element={<Attendance_one/>} /> */}
    
     
        </Routes>
     
    </Container>
      
  )
}

export default AllRoutes
