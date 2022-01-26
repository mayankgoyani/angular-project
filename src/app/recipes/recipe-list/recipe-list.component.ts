import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('test', 'test recipe', 'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg'),
  new Recipe('test 2', 'test recipe', 'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
