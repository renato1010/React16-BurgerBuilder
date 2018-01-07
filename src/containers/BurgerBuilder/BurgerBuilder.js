import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 8.6,
    showOrderModal: false
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
      oldQty >= 1 ? this.state.totalPrice - INGREDIENT_PRICES[type] : this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  showOrderModalHandler() {
    this.setState({ showOrderModal: true });
  }
  purchaseCancelHandler = () => {
    this.setState({ showOrderModal: false });
  };
  purchaseContinueHandler = () => {
    alert('You Continue');
  };
  render() {
    const enabledButtons = {
      salad: this.state.ingredients.salad > 0,
      bacon: this.state.ingredients.bacon > 0,
      cheese: this.state.ingredients.cheese > 0,
      meat: this.state.ingredients.meat > 0,
      order:
        this.state.ingredients.salad +
          this.state.ingredients.bacon +
          this.state.ingredients.cheese +
          this.state.ingredients.meat >
        0
    };

    return (
      <Aux>
        <Modal show={this.state.showOrderModal} bdDismiss={this.purchaseCancelHandler}>
          <OrderSummary
            orderCancel={this.purchaseCancelHandler}
            ingredients={this.state.ingredients}
            orderContinue={this.purchaseContinueHandler}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          enabledBtns={enabledButtons}
          price={this.state.totalPrice}
          showOrderBtn={() => this.showOrderModalHandler()}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
