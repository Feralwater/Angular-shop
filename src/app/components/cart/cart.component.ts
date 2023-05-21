import {Component} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ICartProduct, IProduct} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  productsInCart: ICartProduct[] = [];

  ngOnInit() {
    this.productsInCart = this.loadCart();
  }

  loadCart() {
    return this.productsService.loadCart();
  }

  removeProductFromCart(product: ICartProduct) {
    this.productsService.removeProductFromCart(product);
    this.productsInCart = this.loadCart();
  }

  clearCart() {
    this.productsService.clearCart();
    this.productsInCart = this.loadCart();
  }

  calculateTotal() {
    let total = 0;
    this.productsInCart.forEach(product => total += product.price * product.quantity);
    return total;
  }

  changeQuantity(product: ICartProduct, event: Event, index: number) {
    this.productsInCart[index].quantity = Number((event.target as HTMLInputElement).value);
    this.productsService.saveCart(this.productsInCart);
  }
  constructor(private productsService: ProductsService) {

  }
}
