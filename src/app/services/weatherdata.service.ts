import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import {forkJoin } from 'rxjs';

let serviceUrl: String = 'https://api.weatherapi.com/v1'
let apiKey: String = 'c3264ea7075f411ab81131540212305'  // insert your API key here

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  constructor(private http: HttpClient) { }
  load(location: String) {
    let current = this.http.get(serviceUrl + '/current.json?key='+apiKey+'&q=' + location +'&aqi=no')
    let forecast = this.http.get(serviceUrl+ '/forecast.json?key='+apiKey+'&q=' + location +'&days=6&aqi=no')
    return forkJoin([current , forecast]);
    
  }
  
}
