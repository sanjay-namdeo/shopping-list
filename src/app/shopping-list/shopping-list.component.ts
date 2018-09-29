import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shoppint.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingServiceSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngrdients();
    this.shoppingServiceSubscription = this.shoppingService.ingredientChanged.subscribe(
      (newIngredient: Ingredient[]) => {
        this.ingredients = newIngredient;
      }
    );
  }

  ngOnDestroy() {
    this.shoppingServiceSubscription.unsubscribe();
  }
}
