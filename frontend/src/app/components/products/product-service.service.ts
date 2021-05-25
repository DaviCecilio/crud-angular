import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

import { MatSnackBar } from "@angular/material/snack-bar"
import { HttpClient } from '@angular/common/http'

import { CreateProductService, Product } from '@/components/products/product.protocol'

// SINGLETON
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl = "http://localhost:4454/products"

  constructor (private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'OK!', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createProduct(product: CreateProductService): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
