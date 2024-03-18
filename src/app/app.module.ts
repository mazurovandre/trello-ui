import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
