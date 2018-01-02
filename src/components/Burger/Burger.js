import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burger-ingredients/BurgerIngredient';

const burger = props => {
  const _ingredients = props.ingredients;
  const _ingredientsTuple = Object.keys(_ingredients).map(key => [
    key,
    _ingredients[key]
  ]);
  console.log('tuple', _ingredientsTuple);
  const compsArray = _ingredientsTuple.map(t => {
    return [...Array(t[1])].map((i, index) => (
      <BurgerIngredient key={t[0] + index} type={t[0]} />
    ));
  });
  // const compsArray = Object.keys(_ingredients).map(ing => {
  //   const ingredientQuantityToArray = Array(_ingredients[ing]);
  //   console.log('iqta',ingredientQuantityToArray);

  //   return ingredientQuantityToArray.map((_, i) => {
  //     return <BurgerIngredient key={ing + i} type={ing} />;
  //   });
  // });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {compsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
