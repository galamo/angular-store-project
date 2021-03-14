import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  @Output() addNewMealEvent = new EventEmitter<any>()
  public newProductTitle: string;
  constructor() {
    this.newProductTitle = "";
  }
  addNewProduct() {
    this.addNewMealEvent.emit({ title: this.newProductTitle })
  }
  ngOnInit(): void {
  }

}
