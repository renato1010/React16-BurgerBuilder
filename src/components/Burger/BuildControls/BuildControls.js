import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price:
      <strong style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
        {props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        isEnabled={props.enabledBtns[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.enabledBtns.order}
      onClick={props.showOrderBtn}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
