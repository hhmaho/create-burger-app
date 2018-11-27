import React, { Component } from "react";
import Burger from "../../components/burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <div>Build Controls</div>
      </div>
    );
  }
}

export default BurgerBuilder;
