import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductServiceService } from '@/components/products/product-service.service'
import { Product } from '@/components/products/product.protocol'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }

  constructor (
    private productService: ProductServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  goToProducts(): void {
    this.router.navigate(["/products"])
  }

  handleCreateProduct(): void {
    this.productService.handleCreateProduct(this.product)
      .subscribe(() => {
        this.productService.showMessage("Produto salvo com sucesso!")

        this.goToProducts()
      })
  }

}
