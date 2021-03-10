import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ], // components / directives/ pipes and all module related
  imports: [
    BrowserModule // other modules we want to use
  ],
  providers: [], // services 
  bootstrap: [AppComponent] //root component
})
export class AppModule { }