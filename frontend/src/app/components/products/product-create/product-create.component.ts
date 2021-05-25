import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductService } from '@/components/products/product-service.service'
import { CreateProductService } from '@/components/products/product.protocol'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['../products.css']
})
export class ProductCreateComponent implements OnInit {

  product: CreateProductService = {
    name: "",
    price: null
  }

  constructor (
    private productService: ProductService
  ) { }

  ngOnInit(): void {

  }

  goToProducts(): void {
    this.productService.goToProducts()
  }

  handleProductCreate(): void {
    this.productService.createProduct(this.product)
      .subscribe(() => {
        this.productService.showMessage("Produto salvo com sucesso!")

        this.goToProducts()
      })
  }
}
