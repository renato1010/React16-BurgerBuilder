import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/auxiliary';
import Button from '../../UI/Button/Button';
import { capitalizeWord as btn } from '../../utilitary-funcs/capitalize-word';

class OrderSummary extends Component {
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:{
            this.props.ingredients[ingKey]
          }
        </li>
      );
    });

    return (
      <Aux>
        <h3>
          Your Order:
          <span style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#ef5a23' }}>
            {this.props.totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </span>
        </h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul style={{ listStyle: 'none' }}>{ingredientsSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button btnType={btn('danger')} clicked={this.props.orderCancel}>
          CANCEL
        </Button>
        <Button btnType={btn('success')} clicked={this.props.orderContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
