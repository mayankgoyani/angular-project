import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test',
      'test recipe',
      'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg',
      [new Ingredient('apple', 1)]),
    new Recipe('test 2',
      'test recipe',
      'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg',
      [new Ingredient('banana', 20)])];


  getRecipes() {
    return this.recipes.slice();
  }

  addIngridientsToShoppingList(ingridients: Ingredient[]) {
    this.slService.addIngridientsFromRecipe(ingridients);
  }

}
