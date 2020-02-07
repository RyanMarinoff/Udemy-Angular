import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() currentRecipe: EventEmitter<Recipe>;
  
  recipes: Array<Recipe>;
  ingredients: Array<Ingredient>;

  constructor() {
    this.recipes = new Array<Recipe>();
    this.currentRecipe = new EventEmitter<Recipe>();
  }

  ngOnInit() {
    this.ingredients = new Array<Ingredient>();
    this.ingredients.push(new Ingredient('Ingredient one', 1, 'oz.'));
    this.ingredients.push(new Ingredient('Item two', 2, 'cups'));
    this.recipes.push(new Recipe(
      'A Test Recipe',
      'This is a test, only.',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      this.ingredients
    ));
    this.ingredients = new Array<Ingredient>();
    this.ingredients.push(new Ingredient('This ingredient one', 2, 'tsp.'));
    this.ingredients.push(new Ingredient('The two', 3, 'oz.'));
    this.recipes.push(new Recipe(
      'Second recipe',
      'testing second one.',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      this.ingredients
    ));
  }
  SelectRecipe(theRecipe: Recipe) {
    this.currentRecipe.emit(theRecipe);
  }
}
