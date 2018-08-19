import { Component, OnInit } from '@angular/core';
import { Ingrdient } from '../shared/ingrdient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrdient[] = [
    new Ingrdient('Apples', 5),
    new Ingrdient('Tomato', 6)
  ];
  constructor() { }

  ngOnInit() {
  }
}
