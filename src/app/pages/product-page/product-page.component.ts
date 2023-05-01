import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'angular-shop';
  loading: boolean = false;
  products$: Observable<IProduct[]>;
  filter: string = '';

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getProducts().pipe(
      tap(() => this.loading = false)
    );
  }

  constructor(private productsService: ProductsService) {

  }
}
