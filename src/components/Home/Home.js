import React from "react";
import "./Home.css";
import Product from "../Products/Product";

function Home(props) {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12341"
          title="Amazon Brand - Solimo Griggio 100% PEVA Shower Curtain, 72 inch x 79 inch, Green"
          price={10}
          rating={4}
          image="https://m.media-amazon.com/images/I/912NjFoFdGL._AC_UL320_.jpg"
        />
        <Product
          id="12342"
          title="Alexa Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (White)"
          price={15}
          rating={5}
          image="https://m.media-amazon.com/images/I/61kkf1dkHjL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12343"
          title="IRedmi K20 Pro (Carbon Black, 8GB RAM, 256GB Storage)"
          price={155}
          rating={5}
          image="https://m.media-amazon.com/images/I/71FringFilL._AC_UL320_.jpg"
        />
        <Product
          id="12344"
          title="Homwell Stainless Steel Heavy Duty 5 Pipe X 5 Feet Wall Mounted Cloth Dryer Stand Foldable Hold N Dry"
          price={45}
          rating={5}
          image="https://m.media-amazon.com/images/I/71uxMyuzXfL._AC_UL320_.jpg"
        />
        <Product
          id="12345"
          title="Amazon Brand - Solimo Fabric Foldable Storage Organiser, Black"
          price={5}
          rating={4}
          image="https://m.media-amazon.com/images/I/91-ElwMBDtL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12346"
          title="ASTHA FEB 100% Microfiber Double Bedsheet for Double Bed with 2 Pillow Cover, Heavy Microfiber King Size Double "
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71HsvfzZvML._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
