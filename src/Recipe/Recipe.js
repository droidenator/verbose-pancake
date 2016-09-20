import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import Tag from '../Tag/Tag';

function Recipe(props) {
  return (
    <div className="Recipe">
      <h2>{props.recipe.name}</h2>
      <span className="rating">
        <label>Rating:</label> {props.recipe.rating} of 5
      </span>
      <span className="tags">
        {props.recipe.tags.map(tag => <Tag key={tag.id} tag={tag}></Tag>)}
      </span>
      <span className="ingredients">
        {props.recipe.ingredients.map(item => <Ingredient key={item.id} ingredient={item}></Ingredient>)}
      </span>
      <span className="instructions">
        <ol>
          {props.recipe.instructions.map((item, key) => <li key={key}>{item}</li>)}
        </ol>
      </span>
    </div>
  );
}


export default Recipe;
