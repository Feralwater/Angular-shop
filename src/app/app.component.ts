import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
