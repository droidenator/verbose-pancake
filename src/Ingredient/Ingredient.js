import React from 'react';

function Ingredient(props) {
  return (
    <div className="ingredient" data-ingredient-id={props.ingredient.id}>
      {props.ingredient.value} - {props.ingredient.qty} {props.ingredient.unit}
    </div>
  );
}

export default Ingredient;
