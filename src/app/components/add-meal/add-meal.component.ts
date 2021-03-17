import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from "@angular/forms"
import { ProductsService } from "../../services/products/products.service"
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
  public mealNameErrors: Array<string>
  public totalProducts: number;
  constructor(private formBuilder: FormBuilder, public productService: ProductsService) {
    this.mealNameErrors = [];
    this.totalProducts = this.productService.getProductStore().length
    this.mealForm = this.formBuilder.group({
      mealName: new FormControl("", [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      mealImage: new FormControl("", [Validators.required, forbiddenNameValidator()]),
      mealRating: 0,
      mealDescription: ""
    })
  }
  addNewMeal() {
    this.mealNameErrors = []
    this.collectErrors()
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
  collectErrors() {
    const errors = this.mealForm.get("mealName").errors;
    if (!errors) return;
    this.mealNameErrors = Object.keys(this.mealForm.get("mealName").errors);
  }
  resetMeal() {
    this.mealForm.reset()
  }
  ngOnInit(): void {
  }

}


export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = control.value === "http";
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

