import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from './components/rating/rating.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CountriesPageComponent } from './components/countries-page/countries-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductPageComponent,
    RatingComponent,
    AddMealComponent,
    AddCommentComponent,
    CommentListComponent,
    DiscountPipe,
    CountriesPageComponent,
  ], // components / directives/ pipes and all module related
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [], // services 
  bootstrap: [AppComponent] //root component
})
export class AppModule { }
