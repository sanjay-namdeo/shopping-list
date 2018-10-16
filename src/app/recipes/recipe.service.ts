import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Delicious one',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
            [new Ingredient('Apple', 1), new Ingredient('Mango', 2)]),
        new Recipe('Another Test Recipe', 'Tasty',
            'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
            [new Ingredient('Tomato', 3), new Ingredient('Potato', 2)])
    ];

    constructor(private dataStorageService: DataStorageService) { }

    getReceips() {
        return this.recipes.slice();
    }

    getRecipes(id: number) {
        return this.recipes.slice()[id];
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

    saveRecipes() {
        this.dataStorageService.saveRecipes(this.recipes).subscribe(
            (response: Response) => {
                console.log(response);
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }

    fetchRecipe() {
        this.dataStorageService.getRecipe().subscribe(
            (response: Response) => {
                this.recipes = response.json();
                this.recipeChanged.next(this.recipes.slice());
            },
            (error: Error) => console.log(error)
        );
    }
}
