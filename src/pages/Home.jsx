import React from 'react'
import Nav from '../components/Navgation/Nav'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import New from '../components/New/New'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Banner/>
      <New/>
      <Footer/>
    </div>
  )
}

export default Home
