import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ProductService } from '@/components/products/product-service.service'
import { Product, UpdateProductService } from '@/components/products/product.protocol'


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['../products.css']
})
export class ProductUpdateComponent implements OnInit {

  product: UpdateProductService = {
    name: "",
    price: null
  }

  constructor (
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }


  goToProducts(): void {
    this.productService.goToProducts()
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get("id")

    if (id) {
      this.productService.getProductById(+id).subscribe(product => {
        this.product = product
      })
    } else {
      this.productService.showMessage("Id não informado")
    }
  }

  handleProductUpdate(): void {
    if (this.product.id) {
      this.productService.setProduct(this.product as Product)
        .subscribe(() => {
          this.productService.showMessage("Produto alterado com sucesso!")

          this.goToProducts()
        })
    }
  }

  ngOnInit(): void {
    this.getProduct()
  }
}
