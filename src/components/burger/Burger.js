import React from "react";
import classes from "./Burger.css";
import BurgerIngedient from "./burgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngedient key={ingredientKey + i} type={ingredientKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Choose your ingredients</p>;
  }
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngedient type="bread-top" />
      {transformedIngredients}
      <BurgerIngedient type="bread-bottom" />
    </div>
  );
};

export default burger;
