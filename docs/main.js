(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MahaveerJeevagan\projects\weather-app\weather\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G34g":
/*!*************************************************!*\
  !*** ./src/app/services/weatherdata.service.ts ***!
  \*************************************************/
/*! exports provided: WeatherdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherdataService", function() { return WeatherdataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let serviceUrl = 'http://api.weatherapi.com/v1';
let apiKey = 'c3264ea7075f411ab81131540212305'; // insert your API key here
class WeatherdataService {
    constructor(http) {
        this.http = http;
    }
    load(location) {
        let current = this.http.get(serviceUrl + '/current.json?key=' + apiKey + '&q=' + location + '&aqi=no');
        let forecast = this.http.get(serviceUrl + '/forecast.json?key=' + apiKey + '&q=' + location + '&days=6&aqi=no');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])([current, forecast]);
    }
}
WeatherdataService.ɵfac = function WeatherdataService_Factory(t) { return new (t || WeatherdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WeatherdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WeatherdataService, factory: WeatherdataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Weather, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weather", function() { return Weather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Weather {
    constructor() {
        this.forecast = [
            {
                icon: String,
                maxtemp: Number,
                mintemp: Number,
                condition: String,
                day: Number
            }
        ];
    }
}
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "title"], [3, "onSelection"], ["display", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Weather App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelection", function AppComponent_Template_app_select_onSelection_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.update($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-display", null, 2);
    } }, styles: [".title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(93, 35, 141);\r\n    color: white;\r\n    margin: 0;\r\n    padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDM1LCAxNDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_weatherdata_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/weatherdata.service */ "G34g");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/display.component */ "dFOP");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select/select.component */ "ordM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_services_weatherdata_service__WEBPACK_IMPORTED_MODULE_0__["WeatherdataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _display_display_component__WEBPACK_IMPORTED_MODULE_4__["DisplayComponent"],
        _select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
    _display_display_component__WEBPACK_IMPORTED_MODULE_4__["DisplayComponent"]], []);


/***/ }),

/***/ "dFOP":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ "6K47");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_weatherdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/weatherdata.service */ "G34g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DisplayComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.weather.forecast[i_r1].icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.weather.forecast[i_r1].maxtemp, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("/", ctx_r0.weather.forecast[i_r1].mintemp, "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.weather.forecast[i_r1].condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 6, ctx_r0.weather.forecast[i_r1].day, "E, d MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.weather.location);
} }
const _c0 = function () { return [0, 1, 2]; };
class DisplayComponent {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weather = {
            location: "london",
            icon: "",
            feels: "cool",
            temperature: 22,
            forecast: [{
                    icon: "",
                    maxtemp: 0,
                    mintemp: 0,
                    condition: "",
                    day: 0
                }]
        };
        this.fileName = 'Excelsheet.xlsx';
    }
    update(weather) {
        this.weather = weather;
    }
    ngOnInit() { }
    exportToExcel(exportdata) {
        let exceldata = JSON.parse(JSON.stringify(exportdata));
        // exceldata.forecast =  new Object(exportdata.forecast);
        console.log("download started:", exceldata);
        let workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_0__["Workbook"]();
        let worksheet = workbook.addWorksheet("Weather data");
        worksheet.columns = new Array(5).fill({ width: 20 });
        let align = { vertical: 'middle', horizontal: 'center' };
        let fontstyle = {
            bold: true
        };
        worksheet.mergeCells('A1', 'A4');
        let date = worksheet.getCell('A1');
        let dateToday = new Date();
        date.value = dateToday.toDateString();
        date.alignment = align;
        date.font = {
            name: 'Calibri',
            size: 10,
            bold: true,
            color: { argb: '0085A3' }
        };
        worksheet.mergeCells('B1', 'D4');
        let titleRow = worksheet.getCell('C1');
        titleRow.value = "Weather data";
        titleRow.font = {
            name: 'Calibri',
            size: 16,
            underline: 'single',
            bold: true,
            color: { argb: '0085A3' }
        };
        titleRow.alignment = align;
        delete exceldata.forecast[0].icon;
        worksheet.addRow([]);
        // forecast data 
        worksheet.mergeCells('A6', 'D6');
        let forecast_title = worksheet.getCell('A6');
        forecast_title.value = "forecast for the next three days";
        forecast_title.alignment = align;
        forecast_title.font = fontstyle;
        worksheet.addRow([]);
        let headerrow_forecast = worksheet.addRow(Object.keys(exceldata.forecast[0]), 'i');
        headerrow_forecast.alignment = align;
        headerrow_forecast.font = fontstyle;
        console.log(headerrow_forecast);
        for (let i = 0; i < 3; i++) {
            delete exceldata.forecast[i].icon;
            let data = Object.values(exceldata.forecast[i]);
            let row = worksheet.addRow(data, 'i');
            row.alignment = align;
        }
        delete exceldata.forecast;
        delete exceldata.icon;
        worksheet.addRow([]);
        console.log("here?", this.weather, "excel:", exceldata, "export:", exportdata);
        // weather details today
        worksheet.mergeCells('A13', 'D13');
        let today_title = worksheet.getCell('A13');
        today_title.value = "Weather as on " + dateToday.toDateString();
        today_title.alignment = align;
        today_title.font = fontstyle;
        worksheet.addRow([]);
        let headerrow_today = worksheet.addRow(Object.keys(exceldata), 'i');
        headerrow_today.font = fontstyle;
        headerrow_today.alignment = align;
        let data_today = Object.values(exceldata);
        let row = worksheet.addRow(data_today, 'i');
        row.alignment = align;
        workbook.xlsx.writeBuffer().then((exceldata) => {
            let blob = new Blob([exceldata], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, this.fileName);
        });
    }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_weatherdata_service__WEBPACK_IMPORTED_MODULE_3__["WeatherdataService"])); };
DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], decls: 28, vars: 6, consts: [[1, "container"], [1, "weather-future", "cards"], [1, "small-temperature-card"], [3, "src"], [1, "celsius-text"], [1, "dull-text"], ["class", "small-forecast-cards", 4, "ngFor", "ngForOf"], [1, "cards"], [1, "excel"], [1, "heading"], [1, "excel-card", "info"], ["type", "submit", 1, "submit", 3, "click"], [1, "small-forecast-cards"], [2, "color", "rgba(66, 66, 66, 0.589)"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DisplayComponent_li_17_Template, 19, 9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "click to download data to excel sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DisplayComponent_Template_button_click_26_listener() { return ctx.exportToExcel(ctx.weather); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.weather.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.weather.temperature, "\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.weather.feels);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.weather.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows:  2fr  [excel] minmax(-webkit-min-content ,-webkit-max-content);\r\n    grid-template-rows:  2fr  [excel] minmax(min-content ,max-content);\r\n    grid-template-columns: 100%;\r\n    justify-content: center;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.celsius-text[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n}\r\n\r\n.dull-text[_ngcontent-%COMP%] {\r\n    color: rgba(0, 0, 0, 0.637);\r\n}\r\n\r\n\r\n\r\n.left-bottom[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.right-top[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.small-temperature-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 350px;\r\n    box-shadow: 1px 1px 8px -4px black;\r\n\r\n}\r\n\r\n.temperature-today[_ngcontent-%COMP%] {\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n.weather-future[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat( 4 , minmax(200px , 250px));\r\n    gap: 20px;\r\n    justify-content: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n\r\n.info-small[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.small-forecast-cards[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 3rem;\r\n    border-radius: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-shadow: 1px 1px 8px -4px black;\r\n}\r\n\r\n\r\n\r\n.excel[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background-color: white;\r\n    padding: 20px;\r\n    box-shadow: 1px 1px 8px -4px black;\r\n    border-radius: 5px;\r\n    margin: 1rem;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: black;\r\n    padding: 5px 10px ;\r\n    border-style: none;\r\n    margin: 10px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n    margin: 1rem; \r\n    \r\n    \r\n    \r\n\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    margin: 0.5rem;\r\n}\r\n\r\n@media screen and (max-width:1100px){\r\n    .weather-future[_ngcontent-%COMP%] {\r\n        display: grid;\r\n        grid-template-columns: repeat( 2 , minmax(200px , 250px));\r\n        grid-template-rows: 2;\r\n        justify-content: center;\r\n        gap: 20px;\r\n\r\n    }\r\n\r\n    .cards[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n    }\r\n\r\n    .excel[_ngcontent-%COMP%]{\r\n        margin: 5rem 0;\r\n\r\n    }\r\n}\r\n\r\n@media screen and (max-width:580px){\r\n    .container[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr !important;\r\n\r\n    }\r\n\r\n    .weather-future[_ngcontent-%COMP%] {\r\n        grid-template-columns: 250px;\r\n    }\r\n\r\n    .forecast-card[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n    \r\n}\r\n\r\n@media screen and (max-width:260px){\r\n    .container[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr !important;\r\n\r\n    }\r\n\r\n    .weather-future[_ngcontent-%COMP%] {\r\n        grid-template-columns: minmax(100px , 200px);\r\n    }\r\n\r\n    .forecast-card[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrRkFBa0U7SUFBbEUsa0VBQWtFO0lBQ2xFLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUEsb0JBQW9COztBQUdwQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFJQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUlBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0NBQWtDO0FBQ3RDOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFlBQVk7SUFDWiwyREFBMkQ7SUFDM0QsNERBQTREO0lBQzVELHdDQUF3Qzs7SUFFeEMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBS0E7SUFDSTtRQUNJLGFBQWE7UUFDYix5REFBeUQ7UUFDekQscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixTQUFTOztJQUViOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYzs7SUFFbEI7QUFDSjs7QUFJQTtJQUNJO1FBQ0kscUNBQXFDOztJQUV6Qzs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiwrQkFBK0I7SUFDbkM7OztBQUdKOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7O0lBRXpDOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLCtCQUErQjtJQUNuQzs7QUFFSiIsImZpbGUiOiJkaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICAyZnIgIFtleGNlbF0gbWlubWF4KG1pbi1jb250ZW50ICxtYXgtY29udGVudCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jZWxzaXVzLXRleHR7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5kdWxsLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MzcpO1xyXG59XHJcblxyXG4vKnRlbXBlcmF0dXJlIHRvZGF5Ki9cclxuXHJcblxyXG4ubGVmdC1ib3R0b217XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnJpZ2h0LXRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uc21hbGwtdGVtcGVyYXR1cmUtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IC00cHggYmxhY2s7XHJcblxyXG59XHJcblxyXG4udGVtcGVyYXR1cmUtdG9kYXkge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIGZvcmVjYXN0ICovXHJcblxyXG4ud2VhdGhlci1mdXR1cmUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCA0ICwgbWlubWF4KDIwMHB4ICwgMjUwcHgpKTtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbnVse1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uaW5mby1zbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uc21hbGwtZm9yZWNhc3QtY2FyZHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IC00cHggYmxhY2s7XHJcbn1cclxuXHJcblxyXG4vKiBleGNlbCAqL1xyXG5cclxuLmV4Y2VsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IC00cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcblxyXG4uc3VibWl0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmRzIHtcclxuICAgIG1hcmdpbjogMXJlbTsgXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICMwMjkyQjcgLCAjMDE3NTkyKTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggIzAyOTJCNyAsICMwMTc1OTIpOyAgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IC02cHggYmxhY2s7ICovXHJcblxyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwMHB4KXtcclxuICAgIC53ZWF0aGVyLWZ1dHVyZSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMiAsIG1pbm1heCgyMDBweCAsIDI1MHB4KSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRze1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZXhjZWx7XHJcbiAgICAgICAgbWFyZ2luOiA1cmVtIDA7XHJcblxyXG4gICAgfVxyXG59IFxyXG4gICAgXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC53ZWF0aGVyLWZ1dHVyZSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9yZWNhc3QtY2FyZHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjI2MHB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLndlYXRoZXItZnV0dXJlIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCAsIDIwMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9yZWNhc3QtY2FyZHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "ordM":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _services_weatherdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/weatherdata.service */ "G34g");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SelectComponent {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.onSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.weather = new _app_component__WEBPACK_IMPORTED_MODULE_1__["Weather"]();
        this.location = "mumbai";
        this.forecast = {};
    }
    ngOnInit() {
        this.submit();
    }
    submit() {
        this.weatherData.load(this.location).subscribe(data => {
            // console.log("data:" ,data[1]['forecast']['forecastday']);
            // console.log(data[1]);
            this.weather.location = data[0]['location']['name'];
            this.weather.temperature = data[0]['current']['temp_c'];
            this.weather.icon = data[0]['current']['condition']['icon'];
            this.weather.feels = data[0]['current']['condition']['text'];
            // this.weather.forecast = data[1]
            for (let i = 0; i < 3; i++) {
                this.weather.forecast[i] = {
                    icon: data[1]['forecast']['forecastday'][i]['day']['condition']['icon'],
                    maxtemp: data[1]['forecast']['forecastday'][i]['day']['maxtemp_c'],
                    mintemp: data[1]['forecast']['forecastday'][i]['day']['mintemp_c'],
                    condition: data[1]['forecast']['forecastday'][i]['day']['condition']['text'],
                    day: data[1]['forecast']['forecastday'][i]['date']
                };
            }
            this.location = "";
            this.onSelection.emit(this.weather);
        });
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weatherdata_service__WEBPACK_IMPORTED_MODULE_2__["WeatherdataService"])); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], outputs: { onSelection: "onSelection" }, decls: 4, vars: 1, consts: [[3, "ngSubmit"], ["type", "text", "placeholder", "Enter the city name", "name", "city", 1, "input-text", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Load data", 1, "submit"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SelectComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_input_ngModelChange_1_listener($event) { return ctx.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.location);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\r\n    \r\n    margin: 2rem 0;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.input-text[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: black;\r\n    padding: 5px 10px ;\r\n    border-style: none;\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmlucHV0LXRleHQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map