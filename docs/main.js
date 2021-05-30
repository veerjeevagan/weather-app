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
    } }, styles: [".title[_ngcontent-%COMP%]{\n    text-align: center;\n    background-color: rgb(93, 35, 141);\n    color: white;\n    margin: 0;\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgMzUsIDE0MSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows:  2fr  [excel] minmax(-webkit-min-content ,-webkit-max-content);\n    grid-template-rows:  2fr  [excel] minmax(min-content ,max-content);\n    grid-template-columns: 100%;\n    justify-content: center;\n    text-align: center;\n\n}\n\n.celsius-text[_ngcontent-%COMP%]{\n    font-size: 50px;\n}\n\n.dull-text[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.637);\n}\n\n\n\n.left-bottom[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-end;\n}\n\n.right-top[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: flex-start;\n}\n\n.small-temperature-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    background-color: white;\n    align-items: center;\n    justify-content: center;\n    height: 350px;\n    box-shadow: 1px 1px 8px -4px black;\n\n}\n\n.temperature-today[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n}\n\n\n\n.weather-future[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat( 4 , minmax(200px , 250px));\n    gap: 20px;\n    justify-content: center;\n}\n\nul[_ngcontent-%COMP%]{\n    padding: 0;\n}\n\nli[_ngcontent-%COMP%]{\n    list-style: none;\n}\n\n.info-small[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.small-forecast-cards[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    padding: 3rem;\n    border-radius: 5px;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 1px 1px 8px -4px black;\n}\n\n\n\n.excel[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: white;\n    padding: 20px;\n    box-shadow: 1px 1px 8px -4px black;\n    border-radius: 5px;\n    margin: 1rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n    color: white;\n    background-color: black;\n    padding: 5px 10px ;\n    border-style: none;\n    margin: 10px;\n}\n\n.cards[_ngcontent-%COMP%] {\n    margin: 1rem; \n    \n    \n    \n\n    padding: 0.5rem;\n    border-radius: 5px;\n}\n\n.heading[_ngcontent-%COMP%]{\n    margin: 0.5rem;\n}\n\n@media screen and (max-width:1100px){\n    .weather-future[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat( 2 , minmax(200px , 250px));\n        grid-template-rows: 2;\n        justify-content: center;\n        gap: 20px;\n\n    }\n\n    .cards[_ngcontent-%COMP%]{\n        margin: 0;\n    }\n\n    .excel[_ngcontent-%COMP%]{\n        margin: 5rem 0;\n\n    }\n}\n\n@media screen and (max-width:580px){\n    .container[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr !important;\n\n    }\n\n    .weather-future[_ngcontent-%COMP%] {\n        grid-template-columns: 250px;\n    }\n\n    .forecast-card[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n    \n}\n\n@media screen and (max-width:260px){\n    .container[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr !important;\n\n    }\n\n    .weather-future[_ngcontent-%COMP%] {\n        grid-template-columns: minmax(100px , 200px);\n    }\n\n    .forecast-card[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrRkFBa0U7SUFBbEUsa0VBQWtFO0lBQ2xFLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUEsb0JBQW9COztBQUdwQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFJQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUlBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0NBQWtDO0FBQ3RDOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFlBQVk7SUFDWiwyREFBMkQ7SUFDM0QsNERBQTREO0lBQzVELHdDQUF3Qzs7SUFFeEMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBS0E7SUFDSTtRQUNJLGFBQWE7UUFDYix5REFBeUQ7UUFDekQscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixTQUFTOztJQUViOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYzs7SUFFbEI7QUFDSjs7QUFJQTtJQUNJO1FBQ0kscUNBQXFDOztJQUV6Qzs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiwrQkFBK0I7SUFDbkM7OztBQUdKOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7O0lBRXpDOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLCtCQUErQjtJQUNuQzs7QUFFSiIsImZpbGUiOiJkaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDJmciAgW2V4Y2VsXSBtaW5tYXgobWluLWNvbnRlbnQgLG1heC1jb250ZW50KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5jZWxzaXVzLXRleHR7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uZHVsbC10ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzNyk7XG59XG5cbi8qdGVtcGVyYXR1cmUgdG9kYXkqL1xuXG5cbi5sZWZ0LWJvdHRvbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnJpZ2h0LXRvcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnNtYWxsLXRlbXBlcmF0dXJlLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IC00cHggYmxhY2s7XG5cbn1cblxuLnRlbXBlcmF0dXJlLXRvZGF5IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cblxuXG4vKiBmb3JlY2FzdCAqL1xuXG4ud2VhdGhlci1mdXR1cmUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIDQgLCBtaW5tYXgoMjAwcHggLCAyNTBweCkpO1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG5cbnVse1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5pbmZvLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zbWFsbC1mb3JlY2FzdC1jYXJkcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAtNHB4IGJsYWNrO1xufVxuXG5cbi8qIGV4Y2VsICovXG5cbi5leGNlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggLTRweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG5cbi5zdWJtaXQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA1cHggMTBweCA7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuXG4uY2FyZHMge1xuICAgIG1hcmdpbjogMXJlbTsgXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjMDI5MkI3ICwgIzAxNzU5Mik7ICovXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjMDI5MkI3ICwgIzAxNzU5Mik7ICAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IC02cHggYmxhY2s7ICovXG5cbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmhlYWRpbmd7XG4gICAgbWFyZ2luOiAwLjVyZW07XG59XG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwMHB4KXtcbiAgICAud2VhdGhlci1mdXR1cmUge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMiAsIG1pbm1heCgyMDBweCAsIDI1MHB4KSk7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjBweDtcblxuICAgIH1cblxuICAgIC5jYXJkc3tcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5leGNlbHtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG5cbiAgICB9XG59IFxuICAgIFxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTgwcHgpe1xuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG5cbiAgICB9XG5cbiAgICAud2VhdGhlci1mdXR1cmUge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4O1xuICAgIH1cblxuICAgIC5mb3JlY2FzdC1jYXJke1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICB9XG5cbiAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoyNjBweCl7XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcblxuICAgIH1cblxuICAgIC53ZWF0aGVyLWZ1dHVyZSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4ICwgMjAwcHgpO1xuICAgIH1cblxuICAgIC5mb3JlY2FzdC1jYXJke1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICB9XG5cbn1cblxuIl19 */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\n    \n    margin: 2rem 0;\n    text-align: center;\n\n}\n\n.input-text[_ngcontent-%COMP%] {\n    padding: 5px;\n}\n\n.submit[_ngcontent-%COMP%] {\n    color: white;\n    background-color: black;\n    padding: 5px 10px ;\n    border-style: none;\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgXG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5pbnB1dC10ZXh0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zdWJtaXQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA1cHggMTBweCA7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbn0iXX0= */"] });


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