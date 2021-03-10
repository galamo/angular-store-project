import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any
  @Output() deleteProductEvent = new EventEmitter<string>()
  public basePath: string
  constructor() {
    this.basePath = "../../../assets/"
  }

  deleteProduct(title: string) {
    console.log("delete in child")
    this.deleteProductEvent.emit(title)
  }

  ngOnInit(): void {

  }

}
