import React, { useState } from "react";
import Button from "@component/components/button";
import Link from "next/link";
import { Recipe } from "@component/typings";
import AccordionIngredient from "@component/pages/ingredients/accordionIngredient";
import Layout from "@component/components/layout";
import { Header } from "@component/components/header";
import { v4 as uuid } from "uuid";
import { ingredients } from "@component/consts";
import { useMediaQuery } from "react-responsive";

const recipe = (id: number): Recipe => ({
  id: uuid(),
  title: `Test recipe ${id + 1}`,
  description: "Lorem ipsum dolor sit amet",
  ingredients: ingredients.map((ingredient) => ({
    ...ingredient,
    amount: `${2 * id} `,
  })),
});

const AllRecipes = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // https://nextjs.org/docs/routing/introduction#linking-to-dynamic-paths
  return (
    <Layout>
      <div>
        <Header>Recipes</Header>
        <ul>
          {Array.from({ length: 3 }, (x, index) => recipe(index)).map((recipe, index) => (
            <li key={`${recipe.title}-${index}`}>
              {recipe.title}
              {recipe.description}
              {recipe.ingredients.map((ingredient) => (
                <AccordionIngredient key={ingredient.id} ingredient={ingredient} />
              ))}
            </li>
          ))}
        </ul>
        <Button>
          <Link href="/">Back</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default AllRecipes;
