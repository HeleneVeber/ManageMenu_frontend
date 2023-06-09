/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Checkbox from '../components/utils/Checkbox';
import handleArrayCheckbox from '../functions/handleCheckbox';

export default function ShoppingList({ recipes }) {
  const [ingredients, setIngredients] = useState([
    {
      id: '',
      ingredient: '',
      checked: false
    }
  ]);
  const getIngredients = (array) => {
    const recipesChecked = [];
    array.forEach((e) => {
      if (e.checked) {
        recipesChecked.push(e.ingredients);
      }
    });
    return recipesChecked.flat();
  };

  useEffect(() => {
    const ingredientsList = getIngredients(recipes);
    const mapIngredientsList = ingredientsList.map((e, i) => {
      return {
        id: i,
        ingredient: e,
        checked: false
      };
    });
    setIngredients(mapIngredientsList);
  }, [recipes]);

  return (
    <>
      <h2>Voici votre liste de course</h2>
      {ingredients.map((e) => (
        <div key={e.id}>
          <Checkbox
            nameId={`ingredient-${e.id}`}
            value={e.ingredient}
            checked={e.checked}
            onChange={() => handleArrayCheckbox(ingredients, setIngredients, e.id)}
            borderColorChecked={e.checked ? '2px solid #F6676D' : ''}
            hoverBackground="#F6676D87"
            colorCheck="#F6676D"
            textLineThrough
          />
        </div>
      ))}
    </>
  );
}
