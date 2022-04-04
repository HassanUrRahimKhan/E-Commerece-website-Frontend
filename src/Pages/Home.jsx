
import React from 'react'
import Slider from '../Components/Slider'
import { Announcement } from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  )
}

export default Home