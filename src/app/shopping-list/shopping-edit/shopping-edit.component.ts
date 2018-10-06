import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shoppint.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  index: number;
  editMode = false;
  ingrdientSelect: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.ingrdientSelected.subscribe(
      (index: number) => {
        this.index = index;
        this.editMode = true;
        this.ingrdientSelect = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.ingrdientSelect.name,
          amount: this.ingrdientSelect.amount
        });
      }
    );
  }

  onSubmit() {
    const name = this.slForm.value.name;
    const amount = this.slForm.value.amount;

    const newIngredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppingService.updateIngredient(this.index, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppingService.deleteIngrdient(this.index);
    this.editMode = false;
    this.slForm.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
