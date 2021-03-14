import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms"

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
      mealName: new FormControl("", [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      mealImage: new FormControl("", [Validators.required]),
      mealRating: 0,
      mealDescription: ""
    })
  }
  addNewMeal() {

    //tests
    console.log("mealName", this.mealForm.get("mealName"))
    console.log("mealImage", this.mealForm.get("mealImage").status)
    console.log("mealRating", this.mealForm.get("mealRating").status)
    console.log("mealDescription", this.mealForm.get("mealDescription").status)
    console.log("form", this.mealForm.status)
    const formInvalid = this.mealForm.status === "INVALID"
    if (formInvalid) return;
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
