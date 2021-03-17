import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service"
import { ProductsService } from "../../services/products/products.service"



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public productStore: Array<any>
  public user: string;
  constructor(private userService: UserService, private productsService: ProductsService) {
    this.productStore = this.productsService.getProductStore()
    this.user = this.userService.getUser()
  }

  deleteProductFromStore(title: string) {
    const index = this.productStore.findIndex(item => item.title === title)
    this.productStore.splice(index, 1)
  }
  addNewProduct(product) {
    this.productsService.productStore.push(product)
  }
  ngOnInit(): void {
  }

}
