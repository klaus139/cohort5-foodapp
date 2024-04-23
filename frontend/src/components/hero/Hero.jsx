import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import manEating from '../../assets/images/maneat2.png'

const Hero = () => {
  return (
    <section
      style={{ height: "100vh", }}
      id="home"
      className={classes.container}
    >
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do You Crave Delicious Food?</h2>
          <p className={classes.firstMsg}>
            But going out to take <span>Food costs time...</span>
          </p>
          <p className={classes.secondMsg}>
            Why not order <span>Pizza</span> or something <br />{" "}
            <span>Delicious</span> from our restaurant
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client above. They are our single
            most important thing for our business.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order Now!</button>
            <button className={classes.buttonSee}>
              <a href="#foods">
                See what's available <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
            <img src={manEating} alt='man' className={classes.manEatingImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
