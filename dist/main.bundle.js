webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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

module.exports = "<app-pomodoro></app-pomodoro>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pomodoro_pomodoro_component__ = __webpack_require__("../../../../../src/app/pomodoro/pomodoro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_segundos_pipe__ = __webpack_require__("../../../../../src/app/pipes/segundos.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pomodoro_pomodoro_component__["a" /* PomodoroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_segundos_pipe__["a" /* SegundosPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__["SimpleTimer"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/segundos.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegundosPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SegundosPipe = (function () {
    function SegundosPipe() {
    }
    SegundosPipe.prototype.transform = function (value, args) {
        var minutos = 0;
        var horas = 0;
        var segundos = value;
        if (segundos >= 3600) {
            horas = Math.trunc(segundos / 3600);
            segundos = segundos % (horas * 3600);
        }
        else {
            horas = 0;
        }
        if (segundos >= 60) {
            minutos = Math.trunc(segundos / 60);
            segundos = segundos % (minutos * 60);
        }
        else {
            minutos = 0;
        }
        if (horas > 0) {
            if (minutos > 9) {
                if (segundos > 9) {
                    return horas + ":" + minutos + ":" + segundos;
                }
                else {
                    return horas + ":" + minutos + ":" + "0" + segundos;
                }
            }
            else {
                if (segundos > 9) {
                    return horas + ":" + "0" + minutos + ":" + segundos;
                }
                else {
                    return horas + ":" + "0" + minutos + ":" + "0" + segundos;
                }
            }
        }
        else {
            if (minutos > 9) {
                if (segundos > 9) {
                    return minutos + ":" + segundos;
                }
                else {
                    return minutos + ":" + "0" + segundos;
                }
            }
            else {
                if (segundos > 9) {
                    return "0" + minutos + ":" + segundos;
                }
                else {
                    return "0" + minutos + ":" + "0" + segundos;
                }
            }
        }
    };
    return SegundosPipe;
}());
SegundosPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'segundos'
    })
], SegundosPipe);

//# sourceMappingURL=segundos.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pomodoro/pomodoro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"text-center main-container\">\n  <h1> <small>Hagamos unos</small> Pomodoros!</h1>\n\n  <div class=\"animated fadeIn\" *ngIf=\"segundosBool && !first\">\n    <h1>{{segundos | segundos}}</h1>\n  </div>\n\n  <div class=\"animated fadeIn\" *ngIf=\"descansoBool && !first\">\n    <h1>{{descanso | segundos}}</h1>\n  </div>\n\n<div class=\"completo\">\n\n    <div class=\"rellenar \"\n    [ngStyle]=\"{height: alturaCont + 'px'}\">\n    </div>\n\n    <div *ngIf=\"descansoBool\"class=\"descanso\">\n\n    </div>\n\n</div>\n\n\n\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <h4> Periodo de la sesión: </h4>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"elemento\">\n      <button [disabled]=\"flagComienzo\" (click)=\"aumentar()\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">+</button>\n      </div>\n\n      <div class=\"elemento\">\n        <h4 *ngIf=\"!segundosPredefinido\">{{segundos | segundos}}</h4>\n        <h4 *ngIf=\"segundosPredefinido\">{{segundosPredefinido | segundos}}</h4>\n\n        </div>\n\n      <div class=\"elemento\">\n          <button [disabled]=\"flagComienzo\"\n          (click)=\"disminuir()\" type=\"button\" name=\"button\" class=\"btn btn-danger btn-sm\">-</button>\n      </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <h4> Periodo del descanso corto: </h4>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"elemento\">\n      <button [disabled]=\"flagComienzo\" (click)=\"aumentarDescanso()\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">+</button>\n      </div>\n\n      <div class=\"elemento\">\n        <h4 *ngIf=\"!descansoPredefinido\">{{descanso | segundos}}</h4>\n        <h4 *ngIf=\"descansoPredefinido\">{{descansoPredefinido | segundos}}</h4>\n\n        </div>\n\n      <div class=\"elemento\">\n          <button [disabled]=\"flagComienzo\" (click)=\"disminuirDescanso()\" type=\"button\" name=\"button\" class=\"btn btn-danger btn-sm\">-</button>\n      </div>\n  </div>\n</div>\n\n\n\n  <br>\n\n <button (click)=\"subscribeTimer0()\" *ngIf=\"timer0Id\"\n\n  type=\"button\" name=\"button\" class=\"btn btn-danger\">Pausar</button>\n\n  <button (click)=\"subscribeTimer0()\" *ngIf=\"(!timer0Id && !first)\"\n\n   type=\"button\" name=\"button\" class=\"btn btn-danger\">Reanudar</button>\n\n   <button (click)=\"subscribeTimer0()\" *ngIf=\"(!timer0Id && first)\"\n\n    type=\"button\" name=\"button\" class=\"btn btn-danger\">Comenzar!</button>\n\n  <button (click)=\"stop()\"\n\n   type=\"button\" name=\"button\" class=\"btn btn-danger\">Stop</button>\n\n  </div>\n\n</div>\n<br>\n\n<footer id=\"footer\" class=\"text-center\">\n  <div class=\"container\">\n    Designed & Coded by\n    <a href=\"https://www.freecodecamp.org/danyjaen\" target=\"_blank\">\n        Daniel Lopez</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/pomodoro/pomodoro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PomodoroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PomodoroComponent = (function () {
    function PomodoroComponent(st) {
        this.st = st;
        this.timer0Id = undefined;
        this.first = true;
        this.flagComienzo = false;
        this.segundos = 1500;
        this.descanso = 300;
        this.descansoBool = false;
        this.segundosBool = false;
        this.altura = 0;
        this.alturaCont = 0;
    }
    PomodoroComponent.prototype.ngOnInit = function () {
        // console.log("Numero de timers " + this.st.getTimer().length);
        // this.st.newTimer('1sec',1);
        // this.subscribeTimer0();
        // console.log(this.st.getTimer().length)
    };
    PomodoroComponent.prototype.subscribeTimer0 = function () {
        var _this = this;
        this.flagComienzo = true;
        // console.log("Array de timers " + this.st.getTimer())
        if (this.st.getTimer().length == 0) {
            this.newtimer = this.st.newTimer('pomodoro', 1);
            // console.log('timer 0 Subscribed.');
            this.altura = (150 / (this.segundos));
            this.segundosPredefinido = this.segundos;
            this.descansoPredefinido = this.descanso;
            // console.log(this.segundosPredefinido + " estos " +  this.descansoPredefinido)
        }
        if (this.timer0Id && !this.first) {
            // console.log(this.first)
            // Unsubscribe if timer Id is defined
            this.st.unsubscribe(this.timer0Id);
            this.timer0Id = undefined;
            // console.log('timer 0 Unsubscribed.');
        }
        else {
            // console.log(this.first)
            // Subscribe if timer Id is undefined
            this.timer0Id = this.st.subscribe('pomodoro', function () { return _this.timer0callback(); });
            // console.log('timer 0 Subscribed.');
        }
        // console.log(this.st.getSubscription());
        this.first = false;
    };
    PomodoroComponent.prototype.timer0callback = function () {
        if (this.segundos == 0) {
            this.descansoBool = true;
            this.segundosBool = false;
            this.alturaCont = 0;
            this.descanso -= 1;
            if (this.descanso == 0) {
                this.segundos = this.segundosPredefinido;
                this.descanso = this.descansoPredefinido;
            }
        }
        else {
            this.segundosBool = true;
            this.descansoBool = false;
            this.segundos -= 1;
            this.alturaCont += this.altura;
        }
    };
    PomodoroComponent.prototype.aumentar = function () {
        this.segundos += 60;
    };
    PomodoroComponent.prototype.disminuir = function () {
        if (this.segundos > 60) {
            this.segundos -= 60;
        }
    };
    PomodoroComponent.prototype.aumentarDescanso = function () {
        this.descanso += 60;
    };
    PomodoroComponent.prototype.disminuirDescanso = function () {
        if (this.descanso > 60) {
            this.descanso -= 60;
        }
    };
    PomodoroComponent.prototype.stop = function () {
        this.flagComienzo = false;
        this.st.unsubscribe(this.timer0Id);
        this.timer0Id = undefined;
        this.first = true;
        this.st.delTimer('pomodoro');
        // console.log("Array de timers despues de stop" + this.st.getTimer())
        this.segundos = 1500;
        this.descanso = 300;
        this.alturaCont = 0;
        this.descansoBool = false;
        //Para volver a mostrar los segundos y el descanso que podemos cambiar ( mirar el ngif del html)
        this.descansoPredefinido = undefined;
        this.segundosPredefinido = undefined;
    };
    return PomodoroComponent;
}());
PomodoroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pomodoro',
        template: __webpack_require__("../../../../../src/app/pomodoro/pomodoro.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__["SimpleTimer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__["SimpleTimer"]) === "function" && _a || Object])
], PomodoroComponent);

var _a;
//# sourceMappingURL=pomodoro.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map