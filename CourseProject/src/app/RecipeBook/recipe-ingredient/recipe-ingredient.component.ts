import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe-ingredient',
  template: '<p>{{ theIngredient.Quantity }} {{ theIngredient.Measure }} - {{ theIngredient.Name }}</p>',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent implements OnInit {
  @Input() theIngredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}
