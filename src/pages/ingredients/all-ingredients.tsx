import Layout from "@component/components/layout";
import AccordionIngredient from "@component/pages/ingredients/accordionIngredient";
import { ingredients as ingredientsList } from "@component/consts";
import { Header } from "@component/components/header";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import TileIngredient from "@component/pages/ingredients/tileIngredient";
import { Grid } from "@mui/material";
import { useState } from "react";

const StyledAllIngredients = styled.div`
  width: 100%;
  height: 90vh;

  .list {
    width: 100%;
    padding-top: 72px;
    height: 100%;
    overflow: auto;
  }
`;

const AllIngredients = () => {
  const [ingredients, setIngredients] = useState(ingredientsList);
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

  const handleDeleteIngredient = (event: React.MouseEvent<HTMLElement>, id: string) => {
    event.stopPropagation();
    setIngredients(() => {
      return ingredients.filter((ingredient) => ingredient.id !== id);
    });
  };

  return (
    <Layout>
      <>
        <StyledAllIngredients>
          <Header>Ingredients</Header>
          <Grid container={!isMobile} spacing={1} className="list">
            {ingredients.map((ingredient, index) =>
              isMobile ? (
                <AccordionIngredient key={`${ingredient.id}-${index}`} ingredient={ingredient} />
              ) : (
                <TileIngredient
                  handleDeleteIngredient={handleDeleteIngredient}
                  ingredient={ingredient}
                  key={`${ingredient.id}-${index}`}
                />
              ),
            )}
          </Grid>
        </StyledAllIngredients>
      </>
    </Layout>
  );
};

export default AllIngredients;
