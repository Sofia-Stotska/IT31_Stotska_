import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  products = [
    { name: 'Ноутбук', price: 32000, quantity: 5 },
    { name: 'Мишка', price: 900, quantity: 0 },
    { name: 'Клавіатура', price: 1800, quantity: 7 }
  ];

  newProduct = {
    name: '',
    price: 0,
    quantity: 0
  };

  addProduct() {
    this.products.push({
      name: this.newProduct.name,
      price: this.newProduct.price,
      quantity: this.newProduct.quantity
    });

    this.newProduct = {
      name: '',
      price: 0,
      quantity: 0
    };
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}