import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is test recipe', 'https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548_1280.jpg', [
      new Ingredient('Meat', 2),
      new Ingredient('French frize', 20),
    ]),
    new Recipe('Test recipe 2', 'This is test recipe', 'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French frize', 20),
    ]),
    new Recipe('Test recipe 3', 'This is test recipe', 'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French frize', 20),
      new Ingredient('Tomato', 10),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
