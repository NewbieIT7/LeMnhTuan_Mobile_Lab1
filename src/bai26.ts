// bai26.ts
import { Product } from './bai8';

export class Order {
  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }
}