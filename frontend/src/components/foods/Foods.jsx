import React from "react";
import classes from "./food.module.css";
import { foodTypes } from "../../data/data";
import { Link } from "react-router-dom";

//console.log(foodTypes)

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subTitle}>What we offer</h4>
        <h2 className={classes.title}>Best meals in the city</h2>
        <div className={classes.foods}>
          {foodTypes.map((foodType) => (
            <Link
              to={`/foods/${foodType.name}`}
              key={foodType.id}
              className={classes.food}
            >
                <h4>{foodType.name}</h4>
                <div className={classes.imgContainer}>
                    <img src={foodType.img} alt='' />
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
