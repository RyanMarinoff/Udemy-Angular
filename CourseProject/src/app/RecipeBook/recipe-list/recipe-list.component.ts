import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor() {
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
  }

}
