import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test', 'test recipe', 'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg'),
    new Recipe('test 2', 'test recipe', 'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg')];


  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
