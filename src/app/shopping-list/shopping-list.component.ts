import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shoppint.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngrdients();
    this.shoppingService.addIngredientAction.subscribe(
      (newIngredient: Ingredient) => {
        this.ingredients = this.shoppingService.addIngredient(newIngredient);
      }
    );
  }
}
