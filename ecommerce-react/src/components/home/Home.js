import "./Home.css";
import Product from "./products/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero_image"
        />

        <div className="home__row">
          <Product
            id="2231231"
            title="Amazon Basics 4-in-1 USB C Adapter with USB-C to HDMI, Ethernet Port, USB 3.0 and 100W Power Delivery"
            price={93.4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={4}
          />
          <Product
            id="2231232"
            title="VIZIO 65-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision"
            price={943.4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2231233"
            title="Amazon Basics 4-in-1 USB C Adapter with USB-C to HDMI, Ethernet Port, USB 3.0 and 100W Power Delivery"
            price={93.4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={4}
          />
          <Product
            id="2231234"
            title="VIZIO 65-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision"
            price={943.4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
          <Product
            id="2231235"
            title="Amazon Basics 4-in-1 USB C Adapter with USB-C to HDMI, Ethernet Port, USB 3.0 and 100W Power Delivery"
            price={93.4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="2231236"
            title="VIZIO 65-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision"
            price={943.4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
