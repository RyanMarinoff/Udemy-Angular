import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../RecipeBook/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient>;

  constructor() {
    this.ingredients = new Array<Ingredient>();
    this.ingredients.push(new Ingredient('Apple', 5, 'whole'));
    this.ingredients.push(new Ingredient('Tomato', 10, 'cans diced'));
  }

  ngOnInit() {
  }

}
