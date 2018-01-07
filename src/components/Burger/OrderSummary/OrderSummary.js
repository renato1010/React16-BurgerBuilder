import React from 'react';
import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';
import { capitalizeWord as btn } from '../../utilitary-funcs/capitalize-word';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:{props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ listStyle: 'none' }}>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType={btn('danger')} clicked={props.orderCancel}>
        CANCEL
      </Button>
      <Button btnType={btn('success')} clicked={props.orderContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
