import React from 'react'
import Contact from "./Header/Contact"
import Dropdownbtn from './Component/Dropdownbtn';
import HeroSection from './Component/HeroSection';
import Category from './Category/Category'
import "./Component/ComponentsStyling/style.css"
import Cards from "./Card/Card";
import { data, responsive } from './Component/Data';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Showmore from './Component/Showmore';
import Topoffer from './Component/Topoffer';
import Fruitesandveg from './Component/Fruitesandveg'
import Dailystaples from './Component/Dailystaples'
import Beverages from './Component/Beverages'
import BeautyandHygiene from './Component/BeautyandHygiene'
import HomeandKitchen from './Component/HomeandKitchen'
import Bottomsection from './Component/Bottomsection'
import SectionEight from './Component/SectionEight'
import FooterOne from './Footer/FooterOne'
import Footertwo from './Footer/Footertwo'
import Footerthree from './Footer/Footerthree';
import Footerend from './Footer/Footerend'
import { CartProvider } from 'react-use-cart';



function App() {
  const datalist = data.map((data, index) => {
    return (
      <>
        <Cards
          key={data.key}
          img={data.img}
          name={data.name}
          category={data.category}
          quantity={data.quantity}
          price={data.price}
          data={data}
        />
      </>
    );
  });
  return (
    <>
      <CartProvider>

        <Contact />
        <Dropdownbtn />
        <HeroSection />
        <Category />
        <Showmore />
        <div className="cards-container"><Carousel responsive={responsive}>{datalist}</Carousel></div>
        <Topoffer />
        <Fruitesandveg />
        <Dailystaples />
        <Beverages />
        <BeautyandHygiene />
        <HomeandKitchen />
        <Bottomsection />
        <SectionEight />
        <FooterOne />
        <Footertwo />
        <Footerthree />
        <Footerend />
      </CartProvider>

    </>
  )
}

export default App

