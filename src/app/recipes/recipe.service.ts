import { Recipe } from './recipe.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a text',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a text',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg')
    ];

    getReceips() {
        return this.recipes.slice();
    }

    getRecipes(id: number) {
        return this.recipes.slice()[id];
    }
}
