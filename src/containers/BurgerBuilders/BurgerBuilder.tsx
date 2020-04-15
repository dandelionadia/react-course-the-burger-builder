import React, { Component } from "react";
import { Burger } from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }
  state = {
    ingredients: {
      salat: 1,
      bacon: 3,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </>
    );
  }
}

export { BurgerBuilder };
