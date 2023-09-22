import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') nameAmountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.nameAmountRef.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }

  deleteForShoppingList() {}

  clearShoppingList() {}
}
