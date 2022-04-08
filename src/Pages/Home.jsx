
import React from 'react';
import Slider from '../Components/Slider';
import { Announcement } from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  )
}

export default Home