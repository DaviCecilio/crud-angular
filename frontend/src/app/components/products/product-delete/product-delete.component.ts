import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '@/components/products/product-service.service'
import { DeleteProductService } from '@/components/products/product.protocol'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['../products.css']
})
export class ProductDeleteComponent implements OnInit {

  product: DeleteProductService = {
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

  handleProductDelete(): void {
    if (this.product.id) {
      this.productService.deleteProduct(+this.product.id)
        .subscribe(() => {
          this.productService.showMessage("Produto excluido com sucesso!")

          this.goToProducts()
        })
    }
  }

  ngOnInit(): void {
    this.getProduct()
  }

}
