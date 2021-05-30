import { Weather } from './../app.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherdataService } from '../services/weatherdata.service';



import { Workbook } from 'exceljs/dist/exceljs.min.js';
import * as fs from 'file-saver';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  weather :Weather ={
    location:"london",
    icon:"",
    feels:"cool",
    temperature: 22,
    
      forecast:[{
      icon:"",
      maxtemp:0,
      mintemp:0,
      condition:"",
      day:0
    
  }]
  }
  update(weather: Weather) { 
    this.weather = weather 
  }

  fileName = 'Excelsheet.xlsx';

  ngOnInit(){}

  constructor(private weatherData: WeatherdataService) { }
  exportToExcel(exportdata){
    let exceldata =JSON.parse(JSON.stringify(exportdata))
    // exceldata.forecast =  new Object(exportdata.forecast);
    
    console.log("download started:" , exceldata)
  

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("Weather data" );
    worksheet.columns =new Array(5).fill({width:20});
      
    
    let align = { vertical: 'middle', horizontal: 'center' };
    let fontstyle={
      bold:true
    };

    worksheet.mergeCells('A1' , 'A4');
    let date=worksheet.getCell('A1');
    let dateToday = new Date();
    date.value = dateToday.toDateString();
    date.alignment = align
    date.font = {
      name: 'Calibri',
      size: 10,
      bold: true,
      color: { argb: '0085A3' }
    }
    worksheet.mergeCells('B1', 'D4');
    let titleRow = worksheet.getCell('C1');
    titleRow.value = exceldata.location +" Weather data"
    titleRow.font = {
      name: 'Calibri',
      size: 16,
      bold: true,
      color: { argb: '0085A3' }
    }
    titleRow.alignment = align
    delete exceldata.forecast[0].icon;
    worksheet.addRow([])

    // forecast data 
    worksheet.mergeCells('A6','D6');
    let forecast_title = worksheet.getCell('A6');
    forecast_title.value = "forecast for the next three days";
    forecast_title.alignment=align;
    forecast_title.font = fontstyle;
    worksheet.addRow([]);
    let headerrow_forecast = worksheet.addRow(Object.keys(exceldata.forecast[0]) , 'i')
    headerrow_forecast.alignment = align;
    headerrow_forecast.font = fontstyle;
    console.log(headerrow_forecast);
    for(let i=0;i<3;i++){
      delete exceldata.forecast[i].icon;

      let data = Object.values(exceldata.forecast[i])
      let row = worksheet.addRow(data ,'i');
      row.alignment = align
    }

    delete exceldata.forecast ;
    delete exceldata.icon;
    worksheet.addRow([])
    console.log("here?",this.weather , "excel:" , exceldata , "export:" , exportdata) 

    // weather details today
    worksheet.mergeCells('A13','D13');
    let today_title = worksheet.getCell('A13');
    today_title.value = "Weather as on " +  dateToday.toDateString();
    today_title.alignment=align;
    today_title.font = fontstyle;
    worksheet.addRow([]);
    let headerrow_today = worksheet.addRow(Object.keys(exceldata) , 'i')
    headerrow_today.font = fontstyle
    headerrow_today.alignment = align
    let data_today = Object.values(exceldata)
    let row = worksheet.addRow(data_today,'i')
    row.alignment = align


    workbook.xlsx.writeBuffer().then((exceldata) => {
      let blob = new Blob([exceldata], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.fileName);
    })



  }


}
