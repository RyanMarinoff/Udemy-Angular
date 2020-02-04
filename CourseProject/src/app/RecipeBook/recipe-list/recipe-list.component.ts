import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor() {
    this.recipes = new Array<Recipe>();
  }

  ngOnInit() {
    this.recipes =
      [new Recipe(
        'A Test Recipe',
        'This is a test, only.',
        'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
      ),
      new Recipe(
        'Second recipe',
        'testing second one',
        'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
      )];
    this.recipes[0].AddIngredient(new Ingredient('Item one', 1, 'oz.'));
    this.recipes[0].AddIngredient(new Ingredient('Item two', 2, 'cups'));
    this.recipes[1].AddIngredient(new Ingredient('Item one', 2, 'tsp.'));
    this.recipes[2].AddIngredient(new Ingredient('Item two', 3, 'oz.'));
  }

}
