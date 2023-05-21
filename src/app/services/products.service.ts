import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ICartProduct, IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  saveCart(cart: ICartProduct[]){
    return localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(product: ICartProduct) {
    let cart: ICartProduct[] = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');
    }
    cart.push(product);
    this.saveCart(cart);
  }

  loadCart(): ICartProduct[] {
    if (localStorage.getItem('cart') !== null) {
      return JSON.parse(localStorage.getItem('cart') || '{}');
    }
    return [];
  }

  productInCart(product: ICartProduct): boolean {
    let cart: ICartProduct[] = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');
    }
    return cart.some(p => p.id === product.id);
  }

  removeProductFromCart(product: ICartProduct) {
    let cart: ICartProduct[] = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');
    }
    cart = cart.filter(p => p.id !== product.id);
    this.saveCart(cart);
  }

  clearCart() {
    localStorage.removeItem('cart');
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handleError(error.message);
    return throwError(() => error.message);
  }
}
