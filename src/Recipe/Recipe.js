import React from 'react';

function Recipe(props) {
  console.log(props.recipe);
  return <div>{props.recipe.name}</div>;
}

export default Recipe;
