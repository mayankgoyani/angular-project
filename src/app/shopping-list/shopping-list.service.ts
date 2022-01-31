import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingridientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngridients() {
    return this.ingredients.slice();
  }

  addIngridients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingridientsChanged.emit(this.ingredients.slice());
  }

  addIngridientsFromRecipe(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngridients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingridientsChanged.emit(this.ingredients.slice());
  }



  constructor() { }
}
