import { EMPTY, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { MatSnackBar } from "@angular/material/snack-bar"
import { HttpClient } from '@angular/common/http'

import { CreateProductService, Product } from '@/components/products/product.protocol'

// SINGLETON
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:4454/products"

  constructor (
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) { }

  showMessage(message: string, isError?: boolean): void {
    this.snackBar.open(message, 'OK!', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["message-danger"] : ["message-success"]
    })
  }

  goToProducts(): void {
    this.router.navigate(["/products"])
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado!', true)
    return EMPTY
  }

  createProduct(product: CreateProductService): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(item => item),
      catchError(e => this.errorHandler(e))
    )
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
  }

  setProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`)
  }
}
