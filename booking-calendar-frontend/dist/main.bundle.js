webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Booking Calendar';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calendar_calendar_month_view_calendar_month_view_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-month-view/calendar-month-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_group_by_pipe__ = __webpack_require__("../../../../../src/app/shared/group-by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calendar_calendar_event_calendar_event_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_event_calendar_event_content_calendar_event_content_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_loader_service__ = __webpack_require__("../../../../../src/app/providers/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_events_service__ = __webpack_require__("../../../../../src/app/providers/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__calendar_calendar_event_calendar_event_additional_content_calendar_event_additional_content_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__calendar_groupped_event_list_groupped_event_list_component__ = __webpack_require__("../../../../../src/app/calendar/groupped-event-list/groupped-event-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__calendar_groupped_event_list_group_modal_group_modal_component__ = __webpack_require__("../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// tslint:disable-next-line:max-line-length



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: '**', redirectTo: '/' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_12__calendar_calendar_month_view_calendar_month_view_component__["a" /* CalendarMonthViewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__calendar_calendar_event_calendar_event_component__["a" /* CalendarEventComponent */],
                __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_event_calendar_event_content_calendar_event_content_component__["a" /* CalendarEventContentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__calendar_calendar_event_calendar_event_additional_content_calendar_event_additional_content_component__["a" /* CalendarEventAdditionalContentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__calendar_groupped_event_list_groupped_event_list_component__["a" /* GrouppedEventListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__calendar_groupped_event_list_group_modal_group_modal_component__["a" /* GroupModalComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_event_calendar_event_content_calendar_event_content_component__["a" /* CalendarEventContentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__calendar_groupped_event_list_group_modal_group_modal_component__["a" /* GroupModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // datetimepicker
                __WEBPACK_IMPORTED_MODULE_9_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarModule */].forRoot(),
                // bootstrap module
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                // material module
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatIconModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__providers_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_17__providers_events_service__["a" /* EventsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-upload {\n  width: 100%;\n  text-align: start;\n  padding-top: 1rem;\n}\n.file-upload img {\n  width: 200px;\n}\n.file-upload div label {\n  cursor:pointer;\n  color: lightsteelblue;\n}\n\n.file-upload div input {\n  display:none;\n}\n.rotated-image { /* Для Firefox */ /* Для IE */\n  -webkit-transform: rotate(180deg); /* Для Safari, Chrome, iOS */ /* Для Opera */\n  transform: rotate(180deg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"eventForm\">\n  <div class=\"cal-event-title-field\">\n    <mat-slide-toggle\n      formControlName=\"isTicketOffline\"\n      color=\"primary\"\n    >\n      Ticket sales are\n    </mat-slide-toggle>\n    <mat-form-field>\n      <mat-placeholder>Price:</mat-placeholder>\n      <input type=\"number\" step='0.01' matInput formControlName=\"price\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Door Price:</mat-placeholder>\n      <input matInput formControlName=\"doorPrice\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select formControlName=\"specialPricing\" placeholder=\"Special Pricing\">\n        <mat-option [value]=\"specialPrice.tid\" *ngFor=\"let specialPrice of specialPricings\">{{specialPrice.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select formControlName=\"genreType\" placeholder=\"Genre Type\">\n        <mat-option [value]=\"type.tid\" *ngFor=\"let type of genreTypes\">{{type.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select formControlName=\"festival\" placeholder=\"Festivals\">\n        <mat-option [value]=\"event.tid\" *ngFor=\"let event of festivals\">{{event.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>FB Event Link:</mat-placeholder>\n      <input matInput formControlName=\"fbEventLink\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Load In / Tech Arrival Time:</mat-placeholder>\n      <input matInput formControlName=\"techArrival\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Media Embed Code:</mat-placeholder>\n      <input matInput formControlName=\"mediaEmbedCode\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>External Link (description):</mat-placeholder>\n      <input matInput formControlName=\"externalLinkDescription\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>oEmbed Media Link:</mat-placeholder>\n      <input type=\"url\" matInput formControlName=\"mediaLink\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Will Call Email Recipient:</mat-placeholder>\n      <input type=\"email\" matInput formControlName=\"willCallEmailRecipient\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Number of Tickets for Sale / Commerce Stock:</mat-placeholder>\n      <input type=\"number\" matInput formControlName=\"numberOfTicketsForSale\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Money Owed:</mat-placeholder>\n      <input matInput formControlName=\"moneyOwed\">\n    </mat-form-field>\n    <div class=\"mat-stepper-horizontal-line\"></div>\n    <mat-form-field>\n      <mat-placeholder>Sales Cutoff Date:</mat-placeholder>\n      <input matInput [owlDateTimeTrigger]=\"expirationDatePicker\" formControlName=\"expirationDate\" [owlDateTime]=\"expirationDatePicker\">\n      <owl-date-time [pickerMode]=\"'popup'\" #expirationDatePicker></owl-date-time>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Live Date:</mat-placeholder>\n      <input matInput [owlDateTimeTrigger]=\"liveDatePicker\" formControlName=\"liveDate\" [owlDateTime]=\"liveDatePicker\">\n      <owl-date-time [pickerMode]=\"'popup'\" #liveDatePicker></owl-date-time>\n    </mat-form-field>\n    <div class=\"file-upload\">\n      <div>\n        <label for=\"rider\">\n            Load Rider...\n        </label>\n        <input type=\"file\" id=\"rider\" (change)=\"onFileChange($event)\" >\n      </div>\n    </div>\n    <div class=\"file-upload\">\n        <img *ngIf=\"image || eventForm.value['poster']\" [src]=\"image || eventForm.value['poster']\" class=\"rotated-image\">\n        <div>\n          <label for=\"poster\">\n              Load Event image (poster)...\n          </label>\n          <input type=\"file\" id=\"poster\" accept=\"image/*\" (change)=\"onFileChange($event, true)\" >\n        </div>\n    </div>\n    <mat-slide-toggle\n      formControlName=\"ticketOrListing\"\n      color=\"primary\"\n    >\n      Ticket or Listing\n    </mat-slide-toggle>\n    <mat-form-field>\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let performer of eventForm.value['supportingPerformers']\"\n          [selectable]=\"false\"\n          [removable]=\"true\"\n          (remove)=\"remove(performer)\">\n          {{performer.value}}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n        <input placeholder=\"New performer...\"\n                [matChipInputFor]=\"chipList\"\n                (matChipInputTokenEnd)=\"add($event)\"\n              />\n      </mat-chip-list>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Description:</mat-placeholder>\n      <textarea matInput formControlName=\"description\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Tech Notes:</mat-placeholder>\n      <textarea matInput formControlName=\"techNotes\"></textarea>\n    </mat-form-field>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventAdditionalContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarEventAdditionalContentComponent = /** @class */ (function () {
    function CalendarEventAdditionalContentComponent(http) {
        this.http = http;
        this.fileLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.festivals = [];
        this.specialPricings = [];
        this.isImageFromBase64 = false;
        this.genreTypes = [];
    }
    CalendarEventAdditionalContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('additional-options').subscribe(function (resp) {
            _this.festivals = _this.mapData(resp, 'festivals');
            _this.genreTypes = _this.mapData(resp, 'genre_type');
            _this.specialPricings = _this.mapData(resp, 'special_pricing');
        });
    };
    CalendarEventAdditionalContentComponent.prototype.mapData = function (resp, key) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["values"](resp[key]), function (option) {
            return {
                'tid': option.tid,
                'name': option.name
            };
        });
    };
    CalendarEventAdditionalContentComponent.prototype.onFileChange = function (event, isImage) {
        var _this = this;
        if (isImage === void 0) { isImage = false; }
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            var extension_1 = file.name.split('.').pop();
            reader.onload = function (readedFile) {
                if (isImage) {
                    var image_1 = new Image();
                    image_1.src = readedFile.target['result'];
                    image_1.onload = function (img) {
                        _this.image = reader.result;
                        _this.isImageFromBase64 = true;
                        _this.fileLoaded.emit({
                            'key': 'poster',
                            'value': reader.result,
                            'extension': extension_1,
                            'width': image_1['width'],
                            'height': image_1['height']
                        });
                    };
                }
                else {
                    _this.fileLoaded.emit({
                        'key': 'rider',
                        'value': reader.result,
                        'extension': extension_1,
                        'width': null,
                        'height': null
                    });
                }
            };
        }
    };
    CalendarEventAdditionalContentComponent.prototype.remove = function (performer) {
        var performers = this.eventForm.value['supportingPerformers'];
        if (performers.length === 0) {
            return false;
        }
        var modifiedPerformers = __WEBPACK_IMPORTED_MODULE_3_lodash__["reject"](performers, function (oldPerformer) {
            return oldPerformer.value === performer['value'];
        });
        var values = __assign({}, this.eventForm.value);
        this.eventForm.setValue(__assign({}, values, { 'supportingPerformers': modifiedPerformers }));
    };
    CalendarEventAdditionalContentComponent.prototype.add = function (event) {
        var performers = this.eventForm.value['supportingPerformers'];
        if (performers.length >= 5) {
            return false;
        }
        var values = __assign({}, this.eventForm.value);
        performers.push({ 'value': event.value });
        this.eventForm.setValue(__assign({}, values, { 'supportingPerformers': performers }), { onlySelf: false, emitEvent: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], CalendarEventAdditionalContentComponent.prototype, "eventForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarEventAdditionalContentComponent.prototype, "fileLoaded", void 0);
    CalendarEventAdditionalContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar-event-additional-content',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CalendarEventAdditionalContentComponent);
    return CalendarEventAdditionalContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-event-time-field, .time-selectors .start-event-time, .time-selectors .end-event-time, .time-selectors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.cal-event-title-field > * {\n  width: 100%;\n}\n.time-selectors .end-event-time {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.time-selectors .start-event-time label, .time-selectors .start-event-time ngb-timepicker,\n.time-selectors .end-event-time label, .time-selectors .end-event-time ngb-timepicker {\n  margin: auto;\n}\n.time-selectors {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 50%;\n}\n@media all and (max-width:768px) {\n  .time-selectors {\n    width: auto;\n  }\n}\n@media all and (max-width:520px) {\n  .time-selectors .start-event-time, .time-selectors .end-event-time, .time-selectors {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n  }\n  .time-selectors .end-event-time input {\n    text-align: center;\n  }\n  .cal-event-title-field.event-button-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .cal-event-title-field {\n    text-align: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit($event)\">\n  <header class=\"m-b\">\n      <u>{{dayOfWeek}}, {{choosedDate | date:'MMMM dd'}}</u>\n  </header>\n  <div class=\"cal-event-title-field\">\n    <mat-form-field>\n      <mat-select formControlName=\"venue\" placeholder=\"Select venue\">\n        <mat-option [value]=\"venue.id\" *ngFor=\"let venue of venues\">{{venue.title}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-placeholder>Event Name:</mat-placeholder>\n      <input matInput formControlName=\"title\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select formControlName=\"promoter\" (selectionChange)=\"changePromoter($event)\" placeholder=\"Select promoter\">\n        <mat-option [value]=\"promoter.tid\" *ngFor=\"let promoter of promoters\">{{promoter.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <div class=\"contact-field\">\n      <mat-placeholder>Contact:</mat-placeholder>\n      <input class=\"m-l\" matInput disabled [value]=\"address\">\n    </div>\n\n    <div class=\"time-selectors\">\n      <div class=\"start-event-time\">\n        <label for=\"start-hours-label\">Start Time:&nbsp;</label>\n        <ngb-timepicker name=\"start-hours-label\" formControlName=\"startHours\"></ngb-timepicker>\n      </div>\n      <div class=\"end-event-time\">\n        <label for=\"end-hours-label\">Duration:&nbsp;</label>\n        <input matInput type=\"time\" formControlName=\"duration\">\n      </div>\n\n      <mat-slide-toggle\n          formControlName=\"isDaytime\"\n          color=\"primary\"\n      >\n        Daytime/Nighttime\n      </mat-slide-toggle>\n    </div>\n    <mat-form-field>\n      <mat-placeholder>Hold Order:</mat-placeholder>\n      <input matInput type=\"number\" max=\"10\" min=\"1\" step=\"1\" formControlName=\"priority\">\n    </mat-form-field>\n    <div class=\"cal-event-title-field event-button-container button-row m-b\" >\n      <button mat-raised-button type=\"button\" [class]=\"(status | lowercase)+'-button'\" *ngFor=\"let status of statuses; let i=index\" (click)=\"changeEventStatus(i)\">\n        <span>{{status}}</span>\n      </button>\n    </div>\n    <div class=\"cal-event-title-field m-b\">\n      <div>\n        <mat-placeholder>Choosed Status:</mat-placeholder>\n        <span>{{statuses[ticketStatus]}}</span>\n      </div>\n    </div>\n    <app-calendar-event-additional-content (fileLoaded)=\"fileLoaded($event)\" *ngIf=\"ticketStatus === 1\" [eventForm]=\"eventForm\"></app-calendar-event-additional-content>\n    <a mat-button [href]=\"link\">Go to additional settings</a>\n    <div id=\"actions\" class=\"cal-event-title-field\">\n      <button mat-raised-button color=\"primary\">Save</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_statuses_array__ = __webpack_require__("../../../../../src/app/shared/statuses.array.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_venue_model__ = __webpack_require__("../../../../../src/app/shared/venue.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_service__ = __webpack_require__("../../../../../src/app/providers/loader.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DAY_OF_WEEKS = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
var CalendarEventContentComponent = /** @class */ (function () {
    function CalendarEventContentComponent(data, dialogRef, http, loader) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.http = http;
        this.loader = loader;
        this.statuses = __WEBPACK_IMPORTED_MODULE_2__shared_statuses_array__["a" /* STATUSES */];
        this.dayOfWeek = 'Sunday';
        this.venues = [];
        this.companies = [];
        this.address = 'Select promoter';
        this.ticketStatus = 0;
        this.promoters = [];
        this.files = {};
        this.link = '';
        this.dayOfWeek = DAY_OF_WEEKS[this.data.startDate.getDay()];
        this.choosedDate = this.data.startDate;
    }
    CalendarEventContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._createForm();
        this.loader.loadingSubject.next(true);
        this.http.get('venue').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.venues = __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](__WEBPACK_IMPORTED_MODULE_5_lodash__["values"](data['venues']), function (venue) {
                var modifiedVenue = new __WEBPACK_IMPORTED_MODULE_4__shared_venue_model__["a" /* Venue */]();
                modifiedVenue.events = [];
                modifiedVenue.color = venue['field_color'] &&
                    venue['field_color']['und'] &&
                    venue['field_color']['und'][0] &&
                    venue['field_color']['und'][0]['value'] ? venue['field_color']['und'][0]['value'] : '';
                modifiedVenue.id = venue['tid'];
                modifiedVenue.title = venue['name'];
                return modifiedVenue;
            });
            _this.promoters = __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](__WEBPACK_IMPORTED_MODULE_5_lodash__["values"](data['companies']), function (company) {
                return company;
            });
            var eventsPromoter = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](_this.promoters, function (company) {
                return company.tid === _this.data.event.promoter;
            });
            _this.address = eventsPromoter && eventsPromoter['field_will_call_email'] &&
                eventsPromoter['field_will_call_email']['und'] &&
                eventsPromoter['field_will_call_email']['und'][0] &&
                eventsPromoter['field_will_call_email']['und'][0]['email'] || '';
        }, function (err) {
            _this.loader.loadingSubject.next(false);
        }, function () {
            _this.loader.loadingSubject.next(false);
        });
    };
    CalendarEventContentComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.choosedDate.setHours(this.eventForm.value.startHours.hour);
        this.choosedDate.setMinutes(this.eventForm.value.startHours.minute);
        var data = __assign({}, this.data.event, { 'start': this.choosedDate.toString(), 'ticketStatus': this.ticketStatus }, this.eventForm.value, this.files);
        this.loader.loadingSubject.next(true);
        if (this.data.event.id) {
            this.http.post("edit/" + this.data.event.id, data).subscribe(function (resp) {
                _this.loader.loadingSubject.next(false);
                _this.dialogRef.close(true);
            });
        }
        else {
            this.http.post('create', data).subscribe(function (resp) {
                _this.loader.loadingSubject.next(false);
                _this.dialogRef.close(true);
            });
        }
    };
    CalendarEventContentComponent.prototype.changePromoter = function (_a) {
        var value = _a.value;
        var eventsPromoter = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](this.promoters, function (company) {
            return company.tid === value;
        });
        this.address = eventsPromoter && eventsPromoter['field_will_call_email'] &&
            eventsPromoter['field_will_call_email']['und'] &&
            eventsPromoter['field_will_call_email']['und'][0] &&
            eventsPromoter['field_will_call_email']['und'][0]['email'] || '';
    };
    CalendarEventContentComponent.prototype.fileLoaded = function (_a) {
        var key = _a.key, value = _a.value, extension = _a.extension, width = _a.width, height = _a.height;
        this.files[key] = { 'data': value, extension: extension, width: width, height: height };
    };
    CalendarEventContentComponent.prototype.changeEventStatus = function (status) {
        this.ticketStatus = status;
    };
    CalendarEventContentComponent.prototype._createForm = function () {
        var startHours = {
            'hour': this.data.startDate.getHours(),
            'minute': this.data.startDate.getMinutes()
        };
        this.ticketStatus = parseInt(this.data.event['ticketStatus'], 10) || 0;
        this.link = location.origin + "/admin/commerce/products/" + this.data.event.id + "?destination=tickets/edit";
        this.eventForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            venue: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.venueId || 0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.title || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            startHours: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](startHours, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            isDaytime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.isDaytime, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            duration: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.duration || 0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            promoter: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.promoter || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            isTicketOffline: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.isTicketOffline || false),
            expirationDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.expirationDate || null),
            moneyOwed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.moneyOwed || ''),
            liveDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.liveDate || null),
            priority: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.priority),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.price || 0),
            doorPrice: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.doorPrice || 0),
            specialPricing: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.specialPricing || ''),
            fbEventLink: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.fbEventLink || ''),
            externalLinkDescription: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.externalLinkDescription || ''),
            mediaEmbedCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.mediaCode || ''),
            mediaLink: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.mediaLink || ''),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.description || ''),
            techNotes: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.techNotes || ''),
            genreType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.genreType || ''),
            festival: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.festival || ''),
            rider: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.rider || ''),
            poster: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.poster || ''),
            supportingPerformers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.supportingPerformers || [], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(5)]),
            techArrival: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.techArrival || ''),
            willCallEmailRecipient: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.willCallEmailRecipient || ''),
            numberOfTicketsForSale: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.numberOfTicketsForSale || ''),
            ticketOrListing: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.data.event.ticketOrListing || ''),
        });
    };
    CalendarEventContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar-event-content',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__providers_loader_service__["a" /* LoaderService */]])
    ], CalendarEventContentComponent);
    return CalendarEventContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-event {\n  border-radius: 2px;\n  cursor: pointer;\n  padding: 2px 4px;\n  margin-bottom: 2px;\n  font-size: 13px;\n  margin-right: 12px;\n  color: #fff;\n  box-sizing: border-box;\n  min-height: 18px; }\n\n.cal-event .cal-event-title {\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.app-calendar-event-pane {\n  background: #fff;\n  padding: 16px 16px 8px;\n  min-width: 448px;\n  overflow: auto;\n  border-radius: 2px;\n  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);\n}\n.daynight-icon {\n  height: 12px;\n  width: 12px;\n  font-size: 12px;\n}\n.app-calendar-event-pane-close {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  z-index: 1;\n}\n\n.app-calendar-event-pane .app-calendar-event-pane-content {\n  padding: 16px 16px 8px;\n}\n\n.app-calendar-event-dialog {\n  padding: 16px 16px 8px;\n}\n.event-checked {\n  box-shadow: 0px 0px 10px 3px #1000ff;\n}\n.priority-circle {\n  display: inline-block;\n  border-radius: 50%;\n  color: red;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'cal-event ' + event.cssClass\" [ngClass]=\"{'event-checked': isChecked}\" (click)=\"eventClick($event)\">\n  <mat-icon class=\"daynight-icon\" *ngIf=\"event['isDaytime']\">brightness_3</mat-icon>\n  <mat-icon class=\"daynight-icon\" *ngIf=\"!event['isDaytime']\">wb_sunny</mat-icon>\n  <span class=\"cal-event-title\">{{ event.title }}</span>\n  <br/>\n  <span class=\"cal-event-time\">{{ event.start | date:'shortTime' }} for {{ event['duration'] }} hours</span>\n  <div class=\"priority-circle\" *ngIf=\"event['ticketStatus'] === 0\">{{ event['priority'] || 1}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-event/calendar-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_statuses_array__ = __webpack_require__("../../../../../src/app/shared/statuses.array.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events_service__ = __webpack_require__("../../../../../src/app/providers/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarEventComponent = /** @class */ (function () {
    function CalendarEventComponent(checkedEvents) {
        var _this = this;
        this.checkedEvents = checkedEvents;
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.status = __WEBPACK_IMPORTED_MODULE_2__shared_statuses_array__["a" /* STATUSES */];
        this.isChecked = false;
        this.checkedEvents.eventsSubject.subscribe(function (selectedEvents) {
            _this.selectedEvents = selectedEvents;
            _this.isChecked = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](selectedEvents, function (eventId) {
                return _this.event['id'] === eventId;
            });
        });
    }
    CalendarEventComponent.prototype.ngOnInit = function () {
        this.event.cssClass = this.status[this.event['ticketStatus']].toLowerCase() + '-event';
    };
    CalendarEventComponent.prototype.eventClick = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.ctrlKey || ev.metaKey || ev.button === 1) {
            if (this.isChecked) {
                this.selectedEvents = __WEBPACK_IMPORTED_MODULE_1_lodash__["pull"](this.selectedEvents, this.event['id']);
            }
            else {
                this.selectedEvents.push(this.event['id']);
            }
            this.isChecked = !this.isChecked;
            this.checkedEvents.eventsSubject.next(this.selectedEvents);
        }
        else {
            this.eventClicked.emit();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CalendarEventComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CalendarEventComponent.prototype, "eventsGroupped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarEventComponent.prototype, "eventClicked", void 0);
    CalendarEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar-event',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events_service__["a" /* EventsService */]])
    ], CalendarEventComponent);
    return CalendarEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar-month-view/calendar-month-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  height: 32px;\n}\n\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  padding-right: 3px;\n  flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-number {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 32px;\n  margin-left: 8px; }\n\n.cal-month-view .cal-event {\n  width: 100%;\n  height: auto;\n  padding: 0 4px;\n  overflow: hidden;\n}\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #f5f5f5; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  display: block;\n  margin-top: 4px;\n  margin-left: 5px;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #fff;\n  background-color: #4285f4;\n  border-radius: 50%;\n}\n\n.cal-month-view .cal-cell .mat-expansion-panel {\n  box-shadow: none;\n}\n\n.cal-month-view .cal-cell .mat-expansion-panel-body {\n  padding: 0;\n}\n\n.cal-month-view .cal-cell .mat-expansion-panel-spacing {\n  margin: 0;\n}\n\n.cal-month-view .cal-cell .mat-expansion-panel-header {\n  padding: 0 8px 0 4px;\n  max-height: 26px !important;\n}\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.venue-card {\n  padding: 10px 0px !important;\n  margin: 5px 0px;\n}\n.venue-card .venue-header span{\n  color: white;\n  text-shadow: 0px 0px 2px black;\n}\n.cal-events .add-event-btn button{\n  width: 100%;\n}\n.cal-events .add-event-btn {\n  font-size: 12px;\n}\n.venue-card .venue-header span.venue-label {\n  margin: auto 2px;\n  width: 100px;\n}\n\n.mat-card-header-text {\n  margin: 0px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-month-view/calendar-month-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cal-month-view\">\n  <mwl-calendar-month-view-header\n    [days]=\"columnHeaders\"\n    [locale]=\"'en-US'\">\n  </mwl-calendar-month-view-header>\n  <div class=\"cal-days\">\n    <div *ngFor=\"let rowIndex of view.rowOffsets\">\n      <div class=\"cal-cell-row\">\n        <div *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n             class=\"cal-cell cal-day-cell\"\n             [class.cal-past]=\"day.isPast\"\n             [class.cal-today]=\"day.isToday\"\n             [class.cal-future]=\"day.isFuture\"\n             [class.cal-weekend]=\"day.isWeekend\"\n             [class.cal-in-month]=\"day.inMonth\"\n             [class.cal-out-month]=\"!day.inMonth\"\n             [class.cal-has-events]=\"day.events.length > 0\"\n             [ngClass]=\"day?.cssClass\"\n             (dragEnter)=\"day.dragOver = true\"\n             (dragLeave)=\"day.dragOver = false\"\n             (drop)=\"day.dragOver = false\">\n          <div class=\"cal-cell-top\">\n            <span class=\"cal-day-number\">{{ day.date | date:'d':'en-US' }}</span>\n          </div>\n          <div class=\"cal-events\">\n              <div class=\"venue-card\" *ngFor=\"let venue of getTodayVenues(day.events)\">\n                <div [style.background-color]=\"venue.color\" class=\"venue-header\">\n                  <span class=\"venue-label\">\n                    {{ venue.title }}\n                  </span>\n                </div>\n                <div>\n                  <div *ngFor=\"let event of day.events\">\n                      <app-calendar-event\n                        *ngIf=\"event.venue.id === venue.id\"\n                        [event]=\"event\"\n                        [eventsGroupped]=\"eventsGroupped\"\n                        (eventClicked)=\"onEventClick($event, event)\">\n                      </app-calendar-event>\n                  </div>\n                </div>\n              </div>\n              <div class=\"add-event-btn\">\n                <button mat-mat-raised-button-button color=\"white\" type=\"button\" (click)=\"addNewEvent($event, {}, day.date)\">\n                  Add event\n                </button>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar-month-view/calendar-month-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_event_calendar_event_content_calendar_event_content_component__ = __webpack_require__("../../../../../src/app/calendar/calendar-event/calendar-event-content/calendar-event-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CalendarMonthViewComponent = /** @class */ (function () {
    function CalendarMonthViewComponent(utils, dialog, cdr) {
        this.utils = utils;
        this.dialog = dialog;
        this.cdr = cdr;
        this.venues = [];
        this.events = [];
        this.excludeDays = [];
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe on refresh subject, so, if we will update month or view -> we will update whole calendar
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            Object(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["f" /* validateEvents */])(this.events, function (log) {
            });
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
    };
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        // when leave month view - unsubscribe from all subscribes
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.getTodayVenues = function (dayEvents) {
        var venues = this.venues.slice();
        var todaysVenues = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](venues, function (venue) {
            return venue.isPrimary || __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](dayEvents, function (event) {
                return event['venue'].id === venue.id;
            });
        });
        return todaysVenues;
    };
    CalendarMonthViewComponent.prototype.addNewEvent = function (event, venue, date) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__calendar_event_calendar_event_content_calendar_event_content_component__["a" /* CalendarEventContentComponent */], {
            width: '80%',
            height: '80%',
            data: { startDate: date, endDate: date, venueId: venue.id, event: {} }
        });
        // When dialog closed - update month view
        dialogRef.afterClosed().subscribe(function (result) {
            // this.refreshBody();
            _this.eventTimesChanged.emit();
        });
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days
            });
        }
    };
    CalendarMonthViewComponent.prototype.onEventClick = function (ev, event) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__calendar_event_calendar_event_content_calendar_event_content_component__["a" /* CalendarEventContentComponent */], {
            width: '80%',
            height: '80%',
            data: { startDate: event.start, duration: event['duration'], venueId: event['venue'].id, event: event }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.refreshBody();
            _this.eventTimesChanged.emit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Date)
    ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "venues", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "eventsGroupped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */])
    ], CalendarMonthViewComponent.prototype, "refresh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    CalendarMonthViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar-month-view',
            template: __webpack_require__("../../../../../src/app/calendar/calendar-month-view/calendar-month-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar-month-view/calendar-month-view.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        })
        // WARNING: Whole code was copied from angular-calendar module (https://mattlewis92.github.io/angular-calendar/#/kitchen-sink)
        // and modified it, by modify events and add some custom event on every day
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular_calendar__["b" /* CalendarUtils */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], CalendarMonthViewComponent);
    return CalendarMonthViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-fab {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: fixed;\n}\n\n\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 72px;\n}\n\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e0e0e0;\n}\n\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  display: block;\n  margin-left: 16px;\n  line-height: 32px;\n  font-size: 40px;\n}\n\n.cal-week-view .cal-day-headers span:first-child {\n  font-size: 12px;\n}\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-header.cal-today {\n  color: #4285f4;\n  background-color: #f5f5f5;\n}\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment {\n  -ms-touch-action: initial !important;\n  touch-action: initial !important;\n  -webkit-user-select: initial !important;\n  -moz-user-select: initial !important;\n  -ms-user-select: initial !important;\n  user-select: initial !important;\n  -webkit-user-drag: initial !important; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n.cal-day-view .cal-event-container {\n  position: absolute; }\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n.cal-day-view .cal-draggable {\n  cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n.calendar-header {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.mat-menu-panel {\n  max-width: none !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\n</header>\n<mat-toolbar color=\"primary\" role=\"header\">\n  <span>Booking Calendar</span>\n\n</mat-toolbar>\n<mat-toolbar class=\"calendar-header\">\n    <div class=\"navigation-button-group\">\n      <button mat-icon-button\n        (click)=\"showPreviousDate()\">\n        <mat-icon>navigate_before</mat-icon>\n      </button>\n      <button mat-icon-button (click)=showNextDate()>\n        <mat-icon>navigate_next</mat-icon>\n      </button>\n      <span>{{ viewDate | date:'MMMM yyyy' }}</span>\n    </div>\n\n    <div class=\"event-button-container button-row\" >\n      <button mat-raised-button type=\"button\" (click)=\"changeStatus(status)\" [class]=\"(status | lowercase)+'-button'\" *ngFor=\"let status of statuses\">\n        <span>{{status}}</span>\n      </button>\n    </div>\n    <div class=\"group-buttons\">\n\n      <button mat-raised-button (click)=\"createNewGroup()\" type=\"button\" color=\"cyan\">\n        Create new group\n      </button>\n      <button mat-raised-button [matMenuTriggerFor]=\"grouppedMenu\" type=\"button\" color=\"primary\">\n          GROUPS\n        </button>\n    </div>\n</mat-toolbar>\n\n<div class=\"app-calendar-content\">\n  <app-calendar-month-view\n    [viewDate]=\"viewDate\"\n    [venues]=\"venues\"\n    [events]=\"events\"\n    [eventsGroupped]=\"eventsGroupped\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </app-calendar-month-view>\n\n</div>\n<div *ngIf=\"loaded\" class=\"loader\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<mat-menu #grouppedMenu=\"matMenu\">\n  <app-groupped-event-list></app-groupped-event-list>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_venue_model__ = __webpack_require__("../../../../../src/app/shared/venue.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_calendar_event_model__ = __webpack_require__("../../../../../src/app/shared/calendar-event.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_statuses_array__ = __webpack_require__("../../../../../src/app/shared/statuses.array.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_service__ = __webpack_require__("../../../../../src/app/providers/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_events_service__ = __webpack_require__("../../../../../src/app/providers/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__groupped_event_list_group_modal_group_modal_component__ = __webpack_require__("../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(http, dialog, loader, checkedEvents) {
        this.http = http;
        this.dialog = dialog;
        this.loader = loader;
        this.checkedEvents = checkedEvents;
        this.viewDate = new Date();
        this.statuses = __WEBPACK_IMPORTED_MODULE_6__shared_statuses_array__["a" /* STATUSES */];
        this.eventsGroupped = false;
        this.events = [];
        this.venues = [];
        this.loaded = false;
        this.mouseClickGroupEvent = {};
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData();
        this.loader.loadingSubject.subscribe(function (resp) {
            _this.loaded = resp;
        });
        this.checkedEvents.eventsSubject.subscribe(function (selectedEvents) {
            _this.selectedEvents = selectedEvents.slice();
        });
    };
    CalendarComponent.prototype.getData = function () {
        var _this = this;
        this.loader.loadingSubject.next(true);
        this.http.get('venue').switchMap(function (data) {
            // Read the result field from the JSON response.
            _this.venues = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](data['venues']), function (venue) {
                var modifiedVenue = new __WEBPACK_IMPORTED_MODULE_4__shared_venue_model__["a" /* Venue */]();
                modifiedVenue.events = [];
                modifiedVenue.color = venue['field_color'] &&
                    venue['field_color']['und'] &&
                    venue['field_color']['und'][0] &&
                    venue['field_color']['und'][0]['value'] ? venue['field_color']['und'][0]['value'] : '';
                modifiedVenue.id = venue['tid'];
                modifiedVenue.title = venue['name'];
                modifiedVenue.isPrimary = venue['field_calendar_primary'] &&
                    venue['field_calendar_primary']['und'] &&
                    venue['field_calendar_primary']['und'][0] &&
                    venue['field_calendar_primary']['und'][0]['value'] === '1';
                return modifiedVenue;
            });
            return _this.http.get("month/" + _this.viewDate.getUTCDate() + "/" + (_this.viewDate.getUTCMonth() + 1) + "/" + _this.viewDate.getUTCFullYear());
        }).subscribe(function (data) {
            // Read the result field from the JSON response.
            var sortedByDateEvents = __WEBPACK_IMPORTED_MODULE_2_lodash__["groupBy"](__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](data), function (event) {
                var date = new Date(event['field_date']['und'][0]['value']);
                return date.getFullYear() + " " + date.getDate();
            });
            _this.events = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](data), function (event) {
                var modifiedEvent = new __WEBPACK_IMPORTED_MODULE_5__shared_calendar_event_model__["a" /* CalendarEvent */]();
                modifiedEvent.id = event['product_id'];
                modifiedEvent.title = event['title'];
                modifiedEvent.promoter = event['field_company'] &&
                    event['field_company']['und'] &&
                    event['field_company']['und'][0]['tid'];
                modifiedEvent.duration = event['field_duration'] &&
                    event['field_duration']['und'] &&
                    event['field_duration']['und'][0] &&
                    event['field_duration']['und'][0]['value'] ? event['field_duration']['und'][0]['value'] : '00:00';
                modifiedEvent.ticketStatus = event['field_ticket_hold_status'] &&
                    event['field_ticket_hold_status']['und'] &&
                    event['field_ticket_hold_status']['und'][0] &&
                    event['field_ticket_hold_status']['und'][0]['value'] ? parseInt(event['field_ticket_hold_status']['und'][0]['value'], 10) : 1;
                modifiedEvent.start = event['field_date'] &&
                    event['field_date']['und'] &&
                    event['field_date']['und'][0] &&
                    event['field_date']['und'][0]['value'] ? new Date(event['field_date']['und'][0]['value']) : null;
                modifiedEvent.venue = new __WEBPACK_IMPORTED_MODULE_4__shared_venue_model__["a" /* Venue */]();
                modifiedEvent.isDaytime = event['field_day_night'] &&
                    event['field_day_night']['und'] &&
                    event['field_day_night']['und'][0] &&
                    event['field_day_night']['und'][0]['value'] === '1';
                modifiedEvent.venue.id = event['field_venue'] &&
                    event['field_venue']['und'] &&
                    event['field_venue']['und'][0] &&
                    event['field_venue']['und'][0]['tid'] ? event['field_venue']['und'][0]['tid'] : -1;
                modifiedEvent.isTicketOffline = _this.getValue(event, 'field_ticket_offline_online', 0) === '1' ? true : false;
                var expirationDateTemp = _this.getValue(event, 'field_expiration_date', null);
                modifiedEvent.expirationDate = __WEBPACK_IMPORTED_MODULE_2_lodash__["isNull"](expirationDateTemp) ? null : new Date(expirationDateTemp.toString());
                modifiedEvent.liveDate = _this.getValue(event, 'field_live_date_auto', null);
                modifiedEvent.price = _this.getValue(event, 'commerce_price', 0, 'amount');
                modifiedEvent.doorPrice = _this.getValue(event, 'field_door_price', 0);
                modifiedEvent.willCallEmailRecipient = _this.getValue(event, 'field_promoter_email', '', 'email');
                modifiedEvent.numberOfTicketsForSale = _this.getValue(event, 'commerce_stock', 0);
                modifiedEvent.moneyOwed = _this.getValue(event, 'field_band_financials', '');
                modifiedEvent.specialPricing = _this.getValue(event, 'field_special_pricing', '', 'tid');
                modifiedEvent.ticketOrListing = _this.getValue(event, 'field_ticket_status', 0) === '1' ? true : false;
                modifiedEvent.description = _this.getValue(event, 'field_description', '');
                modifiedEvent.mediaCode = _this.getValue(event, 'field_media_embed_code', '');
                modifiedEvent.mediaLink = _this.getValue(event, 'field_media_link_oembed', '', 'url');
                modifiedEvent.externalLinkDescription = _this.getValue(event, 'field_link_description', '', 'url');
                modifiedEvent.fbEventLink = _this.getValue(event, 'field_facebook_event_link', '', 'url');
                modifiedEvent.techNotes = _this.getValue(event, 'field_tech_rider', '');
                modifiedEvent.genreType = _this.getValue(event, 'field_type', '', 'tid');
                modifiedEvent.priority = _this.getHoldOrder(event, sortedByDateEvents, modifiedEvent.start, modifiedEvent.venue.id);
                modifiedEvent.festival = _this.getValue(event, 'field_special_event_taxonomy', '', 'tid');
                modifiedEvent.techArrival = _this.getValue(event, 'field_tech_arrival', '');
                modifiedEvent.rider = _this.getValue(event, 'field_booking_documents', '', 'filename');
                modifiedEvent.poster = event['posterURL'];
                modifiedEvent.supportingPerformers = event['field_supporting_performers'] &&
                    event['field_supporting_performers']['und'] || [];
                return modifiedEvent;
            });
        }, function (err) {
            _this.loader.loadingSubject.next(false);
        }, function () {
            _this.loader.loadingSubject.next(false);
        });
    };
    CalendarComponent.prototype.getHoldOrder = function (event, events, start, venueId) {
        var _this = this;
        var priority = this.getValue(event, 'field_hold_order', -1);
        if (priority !== -1) {
            return priority;
        }
        var todaysEvents = events[start.getFullYear() + " " + start.getDate()];
        todaysEvents = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](todaysEvents, function (todaysEvent) {
            var todaysEventVenueID = _this.getValue(todaysEvent, 'field_venue', -1, 'tid');
            return venueId === todaysEventVenueID;
        });
        todaysEvents = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](todaysEvents, ['field_hold_order']['created'], ['asc', 'asc']);
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](todaysEvents, function (sortedEvent) {
            return sortedEvent['product_id'] === event['product_id'];
        }) + 1;
    };
    CalendarComponent.prototype.getValue = function (event, fieldName, defaultValue, valueName) {
        if (valueName === void 0) { valueName = 'value'; }
        return event[fieldName] &&
            event[fieldName]['und'] &&
            event[fieldName]['und'][0] &&
            event[fieldName]['und'][0][valueName] || defaultValue;
    };
    CalendarComponent.prototype.showPreviousDate = function () {
        var date = new Date(this.viewDate);
        date.setMonth(date.getMonth() - 1);
        this.viewDate = new Date(date);
        this.getData();
    };
    CalendarComponent.prototype.showNextDate = function () {
        var date = new Date(this.viewDate);
        date.setMonth(date.getMonth() + 1);
        this.viewDate = new Date(date);
        this.getData();
    };
    CalendarComponent.prototype.eventTimesChanged = function (event) {
        this.getData();
    };
    CalendarComponent.prototype.changeStatus = function (status) {
        var _this = this;
        var index = this.statuses.indexOf(status.toUpperCase());
        this.loader.loadingSubject.next(true);
        this.http.post('update-events-multiple', { 'events': this.selectedEvents, 'status': index }).subscribe(function (resp) {
            console.log(resp);
            _this.checkedEvents.eventsSubject.next([]);
            _this.getData();
        }, function (err) {
            _this.loader.loadingSubject.next(false);
        });
    };
    CalendarComponent.prototype.createNewGroup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__groupped_event_list_group_modal_group_modal_component__["a" /* GroupModalComponent */], {
            height: '200px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return null;
            }
            _this.http.post(location.origin + "/en/egroup/create", { 'title': result, 'status': 1 }).subscribe(function (resp) {
                console.log(resp);
            });
        });
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__providers_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_8__providers_events_service__["a" /* EventsService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group-title-field {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Group</h1>\n<div mat-dialog-content>\n  <form [formGroup]=\"groupForm\" (ngSubmit)=\"saveModal()\" id=\"ngForm\" #documentEditForm=\"ngForm\">\n    <mat-form-field class=\"group-title-field\">\n      <input matInput placeholder=\"Add title group\" formControlName=\"title\" required>\n    </mat-form-field>\n  </form>\n  <button class=\"btn-save button primary\" form=\"ngForm\" [disabled]=\"!documentEditForm.form.valid\">\n      SAVE\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var GroupModalComponent = /** @class */ (function () {
    function GroupModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GroupModalComponent.prototype.ngOnInit = function () {
        this.groupForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required])
        });
    };
    GroupModalComponent.prototype.saveModal = function () {
        var title = this.groupForm.value.title;
        this.dialogRef.close(title);
    };
    GroupModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    GroupModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-group-modal',
            template: __webpack_require__("../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/groupped-event-list/group-modal/group-modal.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], GroupModalComponent);
    return GroupModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/groupped-event-list/groupped-event-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\n.group-menu mat-icon {\n  font-size: 20px;\n  margin: 0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/groupped-event-list/groupped-event-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"group-menu\" mat-menu-item *ngFor=\"let group of groups\">\n  <div>\n      {{group.title}}\n  </div>\n  <div>\n    <mat-icon matTooltip=\"Show groupped events\" (click)=\"showEventsByGroup(group.gid)\">event</mat-icon>\n    <mat-icon *ngIf=\"group.gid !== 0\" matTooltip=\"Update group\" (click)=\"editGroup(group.gid)\">save</mat-icon>\n    <mat-icon *ngIf=\"group.gid !== 0\" matTooltip=\"Remove group\" (click)=\"removeGroup(group.gid)\">close</mat-icon>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/groupped-event-list/groupped-event-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouppedEventListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service__ = __webpack_require__("../../../../../src/app/providers/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events_service__ = __webpack_require__("../../../../../src/app/providers/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GrouppedEventListComponent = /** @class */ (function () {
    function GrouppedEventListComponent(http, loader, eventService) {
        this.http = http;
        this.loader = loader;
        this.eventService = eventService;
        this.groups = [];
    }
    GrouppedEventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGroups();
        this.eventService.eventsSubject.subscribe(function (events) {
            _this.events = events;
        });
    };
    GrouppedEventListComponent.prototype.getGroups = function () {
        var _this = this;
        this.http.get('egroup/groups-list').subscribe(function (resp) {
            _this.groups = __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](resp['data']);
            _this.groups.push({ title: 'All Events', gid: 0 });
        });
    };
    GrouppedEventListComponent.prototype.ngOnChanges = function (changes) {
    };
    GrouppedEventListComponent.prototype.showEventsByGroup = function (gid) {
        var _this = this;
        if (gid === 0) {
            this.eventService.eventsSubject.next([]);
            return null;
        }
        this.loader.loadingSubject.next(true);
        this.http.get(location.origin + "/en/egroup/event-list/" + gid).subscribe(function (resp) {
            _this.loader.loadingSubject.next(false);
            _this.eventService.eventsSubject.next(resp['events']);
        });
    };
    GrouppedEventListComponent.prototype.editGroup = function (gid) {
        var _this = this;
        this.loader.loadingSubject.next(true);
        this.http.post(location.origin + "/en/egroup/add-events", { 'events': this.events, 'gid': gid }).subscribe(function (resp) {
            _this.loader.loadingSubject.next(false);
            _this.eventService.eventsSubject.next(_this.events);
        });
    };
    GrouppedEventListComponent.prototype.removeGroup = function (gid) {
        var _this = this;
        this.loader.loadingSubject.next(true);
        this.http.post(location.origin + "/en/egroup/delete-group", { 'gid': gid }).subscribe(function (resp) {
            _this.loader.loadingSubject.next(false);
            _this.eventService.eventsSubject.next([]);
            _this.getGroups();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GrouppedEventListComponent.prototype, "event", void 0);
    GrouppedEventListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-groupped-event-list',
            template: __webpack_require__("../../../../../src/app/calendar/groupped-event-list/groupped-event-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/groupped-event-list/groupped-event-list.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_4__providers_events_service__["a" /* EventsService */]])
    ], GrouppedEventListComponent);
    return GrouppedEventListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsService = /** @class */ (function () {
    function EventsService() {
        this.eventsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "../../../../../src/app/providers/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
    }
    Object.defineProperty(LoaderService.prototype, "loader", {
        get: function () {
            return this._loader;
        },
        set: function (loader) {
            this.loadingSubject.next(loader);
        },
        enumerable: true,
        configurable: true
    });
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/calendar-event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEvent; });
var CalendarEvent = /** @class */ (function () {
    function CalendarEvent() {
    }
    return CalendarEvent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/group-by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (venues, events) {
        if (events === void 0) { events = []; }
        if (!Array.isArray(venues) || !Array.isArray(events) || events.length === 0) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](venues, function (venue) {
                venue.events = [];
                return venue;
            });
        }
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](venues, function (venue) {
            var filteredEvents = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](events, function (event) {
                return event.venue.id === venue.id;
            });
            venue.events = filteredEvents;
            return venue;
        });
    };
    GroupByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'groupBy'
        })
    ], GroupByPipe);
    return GroupByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/statuses.array.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUSES; });
var STATUSES = [
    'HOLD',
    'CONFIRM',
    'ACTIVITY',
    'DELETE'
];


/***/ }),

/***/ "../../../../../src/app/shared/venue.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Venue; });
var Venue = /** @class */ (function () {
    function Venue() {
    }
    return Venue;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// if (environment.production) {
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
// }
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map