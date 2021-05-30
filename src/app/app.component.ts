import { DisplayComponent } from './display/display.component';
import { Component } from '@angular/core';

export class Weather {
  location:String
  icon:string
  feels:string
  temperature:Number

  forecast:[Object]=[
   
    {
    icon:String,
    maxtemp:Number,
    mintemp:Number,
    condition:String,
    day:Number
}]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


}
