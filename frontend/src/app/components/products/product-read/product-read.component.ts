import { Component, OnInit } from '@angular/core'
import { Product } from '@/components/products/product.protocol'
import { ProductServiceService } from '@/components/products/product-service.service'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = []

  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor (private productService: ProductServiceService) { }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products
      })
  }

  ngOnInit(): void {
    this.getProducts()
  }
}
