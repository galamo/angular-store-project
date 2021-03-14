import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms"

interface IMeal {
  rating: number,
  image?: string,
  filename?: string,
  title: string,
  description: string
}
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  @Output() addNewMealEvent = new EventEmitter<IMeal>()
  public mealForm: any
  constructor(private formBuilder: FormBuilder) {
    this.mealForm = this.formBuilder.group({
      mealName: "",
      mealImage: "",
      mealRating: 0,
      mealDescription: ""
    })
  }
  addNewMeal() {


    const newMeal: IMeal = {
      description: this.mealForm.get("mealDescription").value,
      title: this.mealForm.get("mealName").value,
      rating: this.mealForm.get("mealRating").value,
      image: this.mealForm.get("mealImage").value,
    }
    this.addNewMealEvent.emit(newMeal)
  }

  resetMeal() {
    this.mealForm.reset()
  }
  ngOnInit(): void {
  }

}

