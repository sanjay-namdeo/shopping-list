import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Delicious one',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
            [new Ingredient('Apple', 1), new Ingredient('Mango', 2)]),
        new Recipe('Another Test Recipe', 'Tasty',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
            [new Ingredient('Tomato', 3), new Ingredient('Potato', 2)])
    ];

    getReceips() {
        return this.recipes.slice();
    }

    getRecipes(id: number) {
        return this.recipes.slice()[id];
    }
}
