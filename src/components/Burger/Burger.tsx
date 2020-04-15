import React from "react";
import styled from "styled-components";
import { BurgerIngredient } from "./BurgerIngredient/BurgerIngredient";
import { IngredientType } from "./BurgerIngredient/BurgerIngredient";

const BurgerStyled = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

interface BurgerProps {
  ingredients: Partial<Record<IngredientType, number>>;
}

export const Burger: React.FC<BurgerProps> = (props) => {
  // In "props.ingredients" we accept an object like:
  // { salat: 1, bacon: 3 }
  // Now, we want to convert that object to:\
  // ["salat", "bacon"].
  // To do that, we use a native function "Object.keys()":
  const ingredients = Object.keys(props.ingredients) as IngredientType[]; // ["salat", "bacon"]

  // Then, we need to convert each ingredient into a list of React components.
  // For example, so that { bacon: 3 } would render 3 bacon components.
  const transformedIngredients = ingredients.map((ingredientKey) => {
    // Get the value for the current ingredient.
    // For "salat" it will be: props.ingredients["salat"] (1)
    // For "bacon": props.ingredients["bacon"] (3)
    const ingredientValue = props.ingredients[ingredientKey];

    // The trickiest part, create an empty Array with as many empty elements
    // as there is ingredient.
    // For example, for 3 it will create: Array(3) // [empty, empty, empty]
    return [...Array(ingredientValue)].map((_, i) => {
      // Render component for each element in the empty Array
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
    });
  });

  return (
    <>
      <BurgerStyled>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </BurgerStyled>
    </>
  );
};
