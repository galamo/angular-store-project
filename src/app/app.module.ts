import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
  ], // components / directives/ pipes and all module related
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule// other modules we want to use
  ],
  providers: [], // services 
  bootstrap: [AppComponent] //root component
})
export class AppModule { }
