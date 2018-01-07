import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Aux>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
    <Backdrop bdDismiss={props.bdDismiss} show={props.show} />
  </Aux>
);

export default modal;
