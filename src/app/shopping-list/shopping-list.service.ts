import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingridientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngridients() {
    return this.ingredients.slice();
  }

  getIngridient(index: number) {
    return this.ingredients[index];
  }

  addIngridients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  addIngridientsFromRecipe(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngridients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  updateIngridient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  deleteIngridient(index: number) {
    this.ingredients.slice(index, 1);
    this.ingridientsChanged.next(this.ingredients.slice());
  }


  constructor() { }
}
