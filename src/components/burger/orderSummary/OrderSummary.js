import React from "react";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: "capitalize" }}>
            {ingredientKey}: {props.ingredients[ingredientKey]}
          </span>
        </li>
      );
    }
  );

  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </div>
  );
};

export default orderSummary;
