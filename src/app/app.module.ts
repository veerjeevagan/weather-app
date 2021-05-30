import { WeatherdataService } from './services/weatherdata.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
