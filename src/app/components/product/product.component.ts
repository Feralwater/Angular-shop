import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: IProduct;

  details: boolean = false;

  addToCart(product: IProduct) {
    this.productsService.addToCart({
      ...product, quantity: 1
    });
  }

  constructor(private productsService: ProductsService) {

  }
}
