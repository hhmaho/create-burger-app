import React from "react";
import Button from "../../UI/button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: "capitalize" }}>
            {ingredientKey}
          </span>
          : {props.ingredients[ingredientKey]}
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
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </div>
  );
};

export default orderSummary;
