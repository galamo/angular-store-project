import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from "../../services/user.service"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any
  @Output() deleteProductEvent = new EventEmitter<string>()
  public basePath: string
  public imagePath: string
  public arrayOfComments: Array<string> = []
  public user: string;
  constructor(public userServiceName: UserService) {
    this.basePath = "../../../assets/";
    this.imagePath = "";
   
  }

  deleteProduct(title: string) {
    console.log("delete in child")
    this.deleteProductEvent.emit(title)
  }

  ngOnInit(): void {
    this.imagePath = this.product?.image || this.basePath + this.product?.filename
  }


  addComment(comment: string) {
    this.userServiceName.setUser(comment)
    this.arrayOfComments.push(comment)
  }
}
