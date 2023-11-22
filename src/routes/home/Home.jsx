// import React from 'react'
import Header from '../../components/header/Header.jsx'
import MainBaner from '../../components/MainBaner/MainBaner.jsx'
import MainFilter from '../../components/MainFilter/MainFilter.jsx'
import MainImtiyoz from '../../components/MainImtiyoz/MainImtiyoz.jsx'
import MainNews from '../../components/MainNews/MainNews.jsx'
import MainProcess from '../../components/MainProcess/MainProcess.jsx'

const Home = () => {
  return (
    <>
    
        <Header/>
        <MainBaner/>
        <MainImtiyoz/>
        <MainProcess/>
        <MainFilter/>
        <MainNews/>
    
    </>
  )
}

export default Home