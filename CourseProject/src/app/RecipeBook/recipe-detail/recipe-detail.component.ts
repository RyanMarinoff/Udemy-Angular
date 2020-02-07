import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() theRecipe: Recipe;

  constructor() {
    this.theRecipe = new Recipe("", "", "", Array<Ingredient>());
  }

  ngOnInit() {
  }

}
