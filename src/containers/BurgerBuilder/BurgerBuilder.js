import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldQty = this.state.ingredients[type];
    const updatedQty = oldQty + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedQty
    };
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredientHandler = type => {
    const oldQty = this.state.ingredients[type];
    const updatedQty = oldQty >= 1 ? oldQty - 1 : 0;
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedQty
    };
    const updatedPrice =
      oldQty >= 1
        ? this.state.totalPrice - INGREDIENT_PRICES[type]
        : this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
