import { WeatherdataService } from './../services/weatherdata.service';
import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { Weather } from '../app.component';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent  {
  public ngOnInit(){
    this.submit()
  }
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()  
  weather: Weather = new Weather()
  location: String = "mumbai"
  forecast:object = {}
  constructor(private weatherData: WeatherdataService) {

   }
  
  submit() {
    this.weatherData.load(this.location).subscribe(data => {
      // console.log("data:" ,data[1]['forecast']['forecastday']);
      // console.log(data[1]);

      
      this.weather.location = data[0]['location']['name']
      this.weather.temperature = data[0]['current']['temp_c']
      this.weather.icon = data[0]['current']['condition']['icon']
      this.weather.feels = data[0]['current']['condition']['text']
      // this.weather.forecast = data[1]
      for(let i=0;i<3;i++){
        
        this.weather.forecast[i]={
        icon:data[1]['forecast']['forecastday'][i]['day']['condition']['icon'],
        maxtemp:data[1]['forecast']['forecastday'][i]['day']['maxtemp_c'],
        mintemp:data[1]['forecast']['forecastday'][i]['day']['mintemp_c'],
        condition:data[1]['forecast']['forecastday'][i]['day']['condition']['text'],
        day:data[1]['forecast']['forecastday'][i]['date']
      }
    }
      
      this.location = ""
      this.onSelection.emit(this.weather)
    })
  }

}

