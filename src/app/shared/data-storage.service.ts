import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
    constructor(private http: Http) { }

    saveRecipes(recipes: Recipe[]) {
        return this.http.put('https://ng-shopping-list-7d201.firebaseio.com/recipe.json', recipes);
    }

    getRecipe() {
        return this.http.get('https://ng-shopping-list-7d201.firebaseio.com/recipe.json');
    }
}
