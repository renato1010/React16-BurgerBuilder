import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <Logo height="11%" style={{ marginBottom: '32px' }} />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
