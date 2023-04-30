import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {IProduct} from "../models/product";
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

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handleError(error.message);
    return throwError(() => error.message);
  }
}
