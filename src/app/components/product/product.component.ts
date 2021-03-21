import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UserService } from "../../services/user.service"
import { ProductsService } from "../../services/products/products.service"
import { CommentsService } from "../../services/comments/comments.service"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: any
  @Output() deleteProductEvent = new EventEmitter<string>()
  public basePath: string
  public imagePath: string
  public arrayOfComments: Array<string> = []
  public user: string;
  constructor(public userServiceName: UserService, private productsService: ProductsService,
    public commentsService: CommentsService) {
    this.basePath = "../../../assets/";
    this.imagePath = "";

  }

  deleteProduct(title: string) {
    this.productsService.deleteProduct(this.product.title)
  }

  ngOnInit(): void {
    this.imagePath = this.product?.image || this.basePath + this.product?.filename
    // this.arrayOfComments = this.commentsService.getComments(this.product.title).map(c => c.comment)
  }


  addComment(comment: string) {
    this.userServiceName.setUser(comment)
    this.commentsService.addComment(this.product.title, comment)
    // this.arrayOfComments.push(comment)
  }

  ngOnChanges() {
    console.log(111)
  }

}
