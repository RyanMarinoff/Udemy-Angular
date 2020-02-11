import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selected: EventEmitter<Recipe> = new EventEmitter();
  @Input() recipe: Recipe;

  recipes: Recipe[] = [
    new Recipe('The first Test Recipe', 'This is the first test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('The second Test Recipe', 'This is the second test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];


  constructor() { }

  ngOnInit() {
  }
  selectedRecipe(recipe: Recipe) {
    this.selected.emit(recipe);
  }
}
