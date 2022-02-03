import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService: ShoppingListService) { }

  recipeSelected = new Subject<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Salad',
      'Salad is healthy food',
      'https://www.cookingclassy.com/wp-content/uploads/2018/12/roasted-vegetables-10-768x1152.jpg',
      [new Ingredient('tomatoes', 1), new Ingredient('cucumber', 2), new Ingredient('salt', 1)]),
    new Recipe('Pizza',
      'Pizza is junk food',
      'https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg',
      [new Ingredient('dough', 1), new Ingredient('pizza sauce', 1), new Ingredient('cheese', 1)])];


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngridientsToShoppingList(ingridients: Ingredient[]) {
    this.slService.addIngridientsFromRecipe(ingridients);
  }

}
