import { Route , Routes } from 'react-router-dom'
import Home from './home/Home'
import Auth from './auth/Auth'
import Report from './report/Report'
import Students from './students/Students'
import Payment from './payment/Payment'
import Group from './group/Group'
import Attendance from './attendance/Attendance'
import OneGroup from './group/OneGroup'
import Attendance_one from './attendance/Attendance_one'


const AllRoutes = () => {
  return (
    <>
      
        <Routes>
      
        <Route path='/'  element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/xisobot' element={<Report/>} />
        <Route path='/oquvchilar' element={<Students/>}/>
        <Route path='/tolov' element={<Payment/>} />
        <Route path='/guruh' element={<Group/>} />
        <Route path='/davomat' element={<Attendance/>} />
        <Route path='/guruh/:id' element={<OneGroup/>}/>
        <Route path='/davomat/:id' element={<Attendance_one/>} />
     
        </Routes>
     
    </>
  )
}

export default AllRoutes
