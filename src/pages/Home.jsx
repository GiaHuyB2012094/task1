import React from 'react'
import Nav from '../components/Navgation/Nav'
import Header from '../components/Header/Header'
import Feature from '../components/Feature/Feature'
import New from '../components/New/New'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Intro/>
      <Feature/>
      <New/>
      <Footer/>
    </div>
  )
}

export default Home
