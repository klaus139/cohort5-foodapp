import React from "react";
import classes from "./home.module.css";
import Hero from "../hero/Hero";
import image1 from '../../assets/images/male-delivery-guy-riding-scooter.svg'
import image2 from '../../assets/images/delivery-location.svg'
import image3 from '../../assets/images/deliveryman-with-pizza.svg'
import Foods from "../foods/Foods";
import NewsLetter from "../newsletter/NewsLetter";
//import Delivery from '../delivery/Delivery';

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery Service</span>
            <h2 className={classes.deliveryTitle}>Always on time for you</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={image1} alt='' className={classes.firstImg}/>
              <h3>Our delivery is always on time</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={image2} alt='' className={classes.secondImg}/>
              <h3>He works very hard</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={image3} alt='' className={classes.thirdImg}/>
              <h3>He is friendly and social</h3>
            </div>

          </div>
        </div>
        <Foods />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
