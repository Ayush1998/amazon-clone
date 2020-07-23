import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      ></img>
      <div className="home_row">
        <Product
          id="123456"
          title="gym equip."
          price={12.36}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/414rqsisg9L._AC_SR400,600_.jpg"
        />
        <Product
          id="123456"
          title="gym equip."
          price={12.36}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/414rqsisg9L._AC_SR400,600_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456"
          title="gym equip."
          price={12.36}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/414rqsisg9L._AC_SR400,600_.jpg"
        />
        <Product
          id="123456"
          title="gym equip."
          price={12.36}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/414rqsisg9L._AC_SR400,600_.jpg"
        />
        <Product
          id="123456"
          title="gym equip."
          price={12.36}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/414rqsisg9L._AC_SR400,600_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
