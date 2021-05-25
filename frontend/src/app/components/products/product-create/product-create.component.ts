import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductServiceService } from '@/components/products/product-service.service'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor (
    private productService: ProductServiceService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  handleCreateProduct(): void {
    this.productService.showMessage("Produto salvo com sucesso!")
  }

  goToProducts(): void {
    this.router.navigate(["/products"])
  }

}
