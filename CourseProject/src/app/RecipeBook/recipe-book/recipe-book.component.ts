import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {

  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
