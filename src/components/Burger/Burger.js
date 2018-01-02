import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burger-ingredients/BurgerIngredient';

const burger = props => {
  const _ingredients = props.ingredients;
  const _ingredientsTuple = Object.keys(_ingredients).map(key => [
    key,
    _ingredients[key]
  ]);
  let compsArray = _ingredientsTuple.map(t => {
    return [...Array(t[1])].map((i, index) => (
      <BurgerIngredient key={t[0] + index} type={t[0]} />
    ));
  });
  const _ingredientsQty = compsArray.reduce((arr, el) => {
    return [...arr, ...el];
  }, []);

  if (_ingredientsQty.length === 0) {
    compsArray = <p>Please add some Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {compsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
