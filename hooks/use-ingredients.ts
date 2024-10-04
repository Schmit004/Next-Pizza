import React from 'react';
import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';

export const useIngredients = () => {
  const [loading, setLoading] = React.useState(true);
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
