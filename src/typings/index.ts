export enum IngredientsCategory {
  MEAT = "meat",
  FISH = "fish",
  DAIRY = "dairy",
  FRUITS = "fruits",
  VEGETABLES = "vegetables",
  SEEDS = "seeds",
  CONDIMENTS_AND_SPICES = "condiments and spices",
  FLOUR_PRODUCTS = "flour products",
  OTHER = "other",
  BAKERY = "bakery",
  HERBS = "herbs",
  SNACKS = "snacks",
}

export type IngredientType = {
  id: string;
  name: string;
  category: IngredientsCategory;
  amount?: number | string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: IngredientType[];
};
