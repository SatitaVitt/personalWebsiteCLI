(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/satitav/Downloads/SatitaVitt.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "0GV0":
/*!***********************************!*\
  !*** ./src/app/userpage/index.ts ***!
  \***********************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userpage.component */ "Yfpz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return _userpage_component__WEBPACK_IMPORTED_MODULE_0__["UserpageComponent"]; });




/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_24_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
} }
function RegisterComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_29_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.lastName.errors.required);
} }
function RegisterComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_34_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
} }
function RegisterComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_39_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_39_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.minlength);
} }
function RegisterComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    //error: string;
    constructor(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/userpage']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login'], { queryParams: { registered: true } });
        }, error => {
            //this.error = error;
            this.alertService.error(error);
            this.loading = false;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["ng-component"]], decls: 46, vars: 19, consts: [["href", "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap", "rel", "stylesheet"], [1, "masthead"], [1, "bird-container", "bird-container--one"], [1, "bird", "bird--one"], [1, "bird-container", "bird-container--two"], [1, "bird", "bird--two"], [1, "bird-container", "bird-container--three"], [1, "bird", "bird--three"], [1, "bird-container", "bird-container--four"], [1, "bird", "bird--four"], [1, "container", "d-flex", "h-100", "align-items-center"], [1, "mx-auto", "text-center"], [1, "mx-auto", "my-0", "text-uppercase"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstName", 2, "color", "white"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName", 2, "color", "white"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "username", 2, "color", "white"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["for", "password", 2, "color", "white"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 2, "background-color", "#A3E4D7", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/login", 1, "btn", "btn-link", 2, "color", "#A3E4D7"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " For testing API, Authentication, JWT token feature purpose only :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_div_24_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_div_29_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RegisterComponent_div_34_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegisterComponent_div_39_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegisterComponent_span_42_Template, 1, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Arima+Madurai:300\");\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n\tbox-sizing: border-box;\n}\n\n\n\n\n\n.bird[_ngcontent-%COMP%] {\n\tbackground-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);\n\tbackground-size: auto 100%;\n\twidth: 88px;\n\theight: 125px;\n\twill-change: background-position;\n\tanimation-name: fly-cycle;\n\tanimation-timing-function: steps(10);\n\tanimation-iteration-count: infinite;\n}\n\n.bird--one[_ngcontent-%COMP%] {\n\tanimation-duration: 1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird--two[_ngcontent-%COMP%] {\n\tanimation-duration: 0.9s;\n\tanimation-delay: -0.75s;\n}\n\n.bird--three[_ngcontent-%COMP%] {\n\tanimation-duration: 1.25s;\n\tanimation-delay: -0.25s;\n}\n\n.bird--four[_ngcontent-%COMP%] {\n\tanimation-duration: 1.1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: -10%;\n\ttransform: scale(0) translateX(-10vw);\n\twill-change: transform;\n\tanimation-name: fly-right-one;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\n.bird-container--one[_ngcontent-%COMP%] {\n\tanimation-duration: 15s;\n\tanimation-delay: 0;\n}\n\n.bird-container--two[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 1s;\n}\n\n.bird-container--three[_ngcontent-%COMP%] {\n\tanimation-duration: 14.6s;\n\tanimation-delay: 9.5s;\n}\n\n.bird-container--four[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 10.25s;\n}\n\n@keyframes fly-cycle {\n\t100% {\n\t\tbackground-position: -900px 0;\n\t}\n}\n\n@keyframes fly-right-one {\n\t0% {\n\t\ttransform: scale(0.3) translateX(-10vw);\n\t}\n\n\t10% {\n\t\ttransform: translateY(2vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(0vh) translateX(30vw) scale(0.5);\n\t}\n\n\t30% {\n\t\ttransform: translateY(4vh) translateX(50vw) scale(0.6);\n\t}\n\n\t40% {\n\t\ttransform: translateY(2vh) translateX(70vw) scale(0.6);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.6);\n\t}\n\n\t60% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n}\n\n@keyframes fly-right-two {\n\t0% {\n\t\ttransform: translateY(-2vh) translateX(-10vw) scale(0.5);\n\t}\n\n\t10% {\n\t\ttransform: translateY(0vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(-4vh) translateX(30vw) scale(0.6);\n\t}\n\n\t30% {\n\t\ttransform: translateY(1vh) translateX(50vw) scale(0.45);\n\t}\n\n\t40% {\n\t\ttransform: translateY(-2.5vh) translateX(70vw) scale(0.5);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.45);\n\t}\n\n\t51% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color:#A3E4D7;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\np[_ngcontent-%COMP%]{\n    font-family: 'Dancing Script', cursive;\n    color : white;\n    font-size : 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7O0FBRXhFOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBQ0E7Ozs7Ozs7OztFQVNFOztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7RUFlRTs7QUFFRjtDQUNDLDZGQUE2RjtDQUM3RiwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLG9DQUFvQztDQUNwQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YscUNBQXFDO0NBQ3JDLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0NBQ2pDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQztFQUNDLDZCQUE2QjtDQUM5QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyx1Q0FBdUM7Q0FDeEM7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7QUFDRDs7QUFFQTtDQUNDO0VBQ0Msd0RBQXdEO0NBQ3pEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MseURBQXlEO0NBQzFEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0Msd0RBQXdEO0NBQ3pEOztDQUVBO0VBQ0Msd0RBQXdEO0NBQ3pEO0FBQ0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJpbWErTWFkdXJhaTozMDBcIik7XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKlxuaDEge1xuXHRmb250LWZhbWlseTogJ0FyaW1hIE1hZHVyYWknLCBjdXJzaXZlO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogNHJlbTtcblx0bGV0dGVyLXNwYWNpbmc6IC0zcHg7XG5cdHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMztcbn0qL1xuLypcbi5jb250YWluZXIge1xuXHR6LWluZGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0bWluLWhlaWdodDogMzVyZW07XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAxNjgsIDc2LCAwLjYpIDAlLCByZ2JhKDI1NSwgMTIzLCAxMywgMC42KSAxMDAlKSwgdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDY4MjQ1MDUwNDYtZTQzNjA1ZmZiMTdmXCIpO1xuXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdHBhZGRpbmc6IDJyZW07XG59Ki9cblxuLmJpcmQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Zyk7XG5cdGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuXHR3aWR0aDogODhweDtcblx0aGVpZ2h0OiAxMjVweDtcblx0d2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XG5cdGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5iaXJkLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC0tdHdvIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbn1cblxuLmJpcmQtLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG59XG5cbi5iaXJkLS1mb3VyIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMjAlO1xuXHRsZWZ0OiAtMTAlO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHRhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmJpcmQtY29udGFpbmVyLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG4uYmlyZC1jb250YWluZXItLXR3byB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uYmlyZC1jb250YWluZXItLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNC42cztcblx0YW5pbWF0aW9uLWRlbGF5OiA5LjVzO1xufVxuXG4uYmlyZC1jb250YWluZXItLWZvdXIge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE2cztcblx0YW5pbWF0aW9uLWRlbGF5OiAxMC4yNXM7XG59XG5cbkBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcblx0MTAwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQ1MSUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG5cdH1cbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojQTNFNEQ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJ1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgZm9udC1zaXplIDogMjBweDtcbn1cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitor */ "vqLo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");

//import { Router } from '@angular/router';




function HomeComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ty_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ty_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ty_r1);
} }
class HomeComponent {
    //currentUser: any;
    constructor(
    //private router: Router,
    //public name : string,
    //public type : string,
    formBuilder) {
        this.formBuilder = formBuilder;
        this.type = ['recuriter', 'friends', 'anonymous'];
        this.model = new _visitor__WEBPACK_IMPORTED_MODULE_1__["Visitor"]('Your Name', this.type[2], 'github');
        this.submitted = false;
        this.loading = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            comment: []
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        //this.loading = true;
        /*
        this.userService.register(this.registerForm.value)
            .pipe(first())*/
    }
    //submitted = false;
    //remove when down
    get diagnostic() { return JSON.stringify(this.model); }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 148, vars: 3, consts: [[1, "masthead"], [1, "bird-container", "bird-container--one"], [1, "bird", "bird--one"], [1, "bird-container", "bird-container--two"], [1, "bird", "bird--two"], [1, "bird-container", "bird-container--three"], [1, "bird", "bird--three"], [1, "bird-container", "bird-container--four"], [1, "bird", "bird--four"], [1, "container", "d-flex", "h-100", "align-items-center"], [1, "mx-auto", "text-left"], [1, "mx-auto", "my-0"], [1, "text-white-50", "mx-auto", "mt-2", "mb-5", 2, "text-align", "left"], ["href", "#", 1, "mx-2"], ["href", "https://github.com/SatitaVitt"], [1, "fab", "fa-github"], ["href", "mailto:sv439@scarletmail.rutgers.edu?subject=Suggestions your website~"], [1, "far", "fa-paper-plane"], ["href", "https://www.instagram.com/satitavv/"], [1, "fab", "fa-instagram"], [1, "arrows"], [1, "bottomright"], ["src", "assets/img/ZEPETO_CAPTURE 6.PNG", "alt", "", "width", "306px", "height", "546px"], ["id", "about", 1, "about-section", "text-center"], [1, "container"], [1, "row"], [1, "col-lg-8", "mx-auto"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type"], ["id", "type", "required", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "id", "directed", "required", "", "name", "directed", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "project", 1, "projects-section", "bg-light", "extend-lg"], [1, "row", "align-items-center", "no-gutters", "mb-4", "mb-lg-5"], [1, "col-xl-8", "col-lg-7"], ["src", "assets/img/maze01.jpg", "alt", "", 1, "img-fluid", "mb-3", "mb-lg-0"], [1, "col-xl-4", "col-lg-5"], [1, "featured-text", "text-center", "text-lg-left"], [1, "text-black-50", "mb-0"], [1, "row", "justify-content-center", "no-gutters", "mb-5", "mb-lg-0"], [1, "bg-black", "text-center", "h-100", "project"], [1, "project-text", "w-100", "my-auto", "text-center", "text-lg-left"], [1, "text-white"], ["href", "assets/img/Fast_Tragectory_Replanning (2).pdf"], [1, "mb-0", "text-white-50"], ["href", "#game"], [1, "d-none", "d-lg-block", "mb-0", "ml-0"], ["src", "assets/img/pichaqiu.gif", "alt", "", "width", "150", "height", "100"], ["src", "assets/img/pichaqiu.gif", "width", "150", "height", "100", "alt", ""], [1, "row", "justify-content-center", "no-gutters"], ["href", "https://github.com/SatitaVitt/MovieShopCoreAPI"], ["href", "https://github.com/SatitaVitt/MovieShopSPA"], ["href", "hhttps://github.com/SatitaVitt/MovieShop"], [1, "d-none", "d-lg-block", "mb-0", "mr-0"], [3, "value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I am a full stack developer, designer, and illustrator; Studied at Rutgers University with a double major in Computer Science and Finance; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Have interest in so many things that I want to explore them all! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skill Set : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Programming Language : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Java, Python, C, Latex, C#, SQL, JavaScript, TypeScript, HTML, CSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Frameworks : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".NET Core, Angular, Angular-Cli, Entity Framework Core, ASP.NET Core Web API, Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " GITHUB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " EMAIL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " INSTAGRAM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hello and Welcome to my personal website! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Here you will see some of my game developments and previous project explained in details. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Feel free to leave a comment or suggestions by clicking the Comment Section on the NavBar on the top ;)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_55_listener($event) { return ctx.model.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Visitor type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, HomeComponent_option_60_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "How did you get here?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_64_listener($event) { return ctx.model.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Totally optional :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Maze Game for 2 players!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Auto generating maze and random player's positions and one final position to get, whoever meet the final goal first will be the WINNER~ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " This game is implementing using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "socket.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " for client-server communication; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Progamming Language :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Html, CSS and Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "(Launching in 10 days!)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "A* Algorithm Implementation and Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Problem stated : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Finding the shortest possible path from a START (A) postion to a TARGET (T) position with randomly generated blocks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Algorithms implemented : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Forward A* Tracking VS. Backward A* Tracking, Heuristics in the Adapted A* Tracking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Report : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Mainly comparing all three algorithms when facing the problem of finding the shortest path. Explaining reason such as \"Why Repeated Forward A* with Adaptive A* is sometimes faster than Repeated Forward A* with A* and sometime isn't\" based on our research and implementation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "hr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Movie Shop Single Page Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "This SPA is use to shop for movies, this is a full stack application where I use Angular for Frontend and .NET framework and C# for Backend and implemented API to connect in between. Having a relational database using Microsoft AQL server to hold the database and generating SQL queries using LINQ from the Backend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "More details : features of this project includes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 1). User login/register/JWT Authenication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " 2). Users have own categories of movies sorted by favorited and purchased ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " 3). Movies can be displayed by different genres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " 4). Pagination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Github Source code are below~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Angular SPA Frontend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " .NET MVC Backend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "hr", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@600&family=Dancing+Script&family=Exo:wght@700&family=Grenze+Gotisch:wght@300&display=swap\");\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n\tbox-sizing: border-box;\n}\n\n\n\n.bottomright[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 45%;\n\tleft: 75%;\n  }\n\n.bottomleft[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 70%;\n\tright: 70%;\n}\n\n\n\n.arrows[_ngcontent-%COMP%] {\n\tposition: relative;\n\tposition: absolute;\n\ttop: 80%;\n\tleft: 50%;\n\twidth: 80px;\n\theight: 80px;\n\ttransform: translate(-50%, -50%);\n  }\n\n.arrows[_ngcontent-%COMP%]:before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tborder-left: 26.66667px solid rgba(0, 0, 0, 0.7);\n\tborder-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);\n\ttransform: translate(26.66667px, 106.66667px) rotate(-45deg);\n\tanimation: arrows 1.5s linear infinite;\n  }\n\n.arrows[_ngcontent-%COMP%]:after {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tborder-left: 26.66667px solid rgba(0, 0, 0, 0.7);\n\tborder-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);\n\ttransform: translate(53.33333px, 0px) rotate(-45deg);\n\tanimation: arrows 1.5s linear infinite -0.75s;\n  }\n\n@keyframes arrows {\n\t0% {\n\t  border-left: 26.66667px solid transparent;\n\t  border-bottom: 26.66667px solid transparent;\n\t  transform: translate(-13.33333px, -53.33333px) rotate(-45deg);\n\t}\n\t10%, 90% {\n\t  border-left: 26.66667px solid transparent;\n\t  border-bottom: 26.66667px solid transparent;\n\t}\n\t50% {\n\t  border-left: 26.66667px solid rgba(0, 0, 0, 0.7);\n\t  border-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);\n\t  transform: translate(-13.33333px, 0px) rotate(-45deg);\n\t}\n\t100% {\n\t  border-left: 26.66667px solid transparent;\n\t  border-bottom: 26.66667px solid transparent;\n\t  transform: translate(-13.33333px, 53.33333px) rotate(-45deg);\n\t}\n  }\n\n\n\n.bird[_ngcontent-%COMP%] {\n\tbackground-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);\n\tbackground-size: auto 100%;\n\twidth: 88px;\n\theight: 125px;\n\twill-change: background-position;\n\tanimation-name: fly-cycle;\n\tanimation-timing-function: steps(10);\n\tanimation-iteration-count: infinite;\n}\n\n.bird--one[_ngcontent-%COMP%] {\n\tanimation-duration: 1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird--two[_ngcontent-%COMP%] {\n\tanimation-duration: 0.9s;\n\tanimation-delay: -0.75s;\n}\n\n.bird--three[_ngcontent-%COMP%] {\n\tanimation-duration: 1.25s;\n\tanimation-delay: -0.25s;\n}\n\n.bird--four[_ngcontent-%COMP%] {\n\tanimation-duration: 1.1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: -10%;\n\ttransform: scale(0) translateX(-10vw);\n\twill-change: transform;\n\tanimation-name: fly-right-one;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\n.bird-container--one[_ngcontent-%COMP%] {\n\tanimation-duration: 15s;\n\tanimation-delay: 0;\n}\n\n.bird-container--two[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 1s;\n}\n\n.bird-container--three[_ngcontent-%COMP%] {\n\tanimation-duration: 14.6s;\n\tanimation-delay: 9.5s;\n}\n\n.bird-container--four[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 10.25s;\n}\n\n@keyframes fly-cycle {\n\t100% {\n\t\tbackground-position: -900px 0;\n\t}\n}\n\n@keyframes fly-right-one {\n\t0% {\n\t\ttransform: scale(0.3) translateX(-10vw);\n\t}\n\n\t10% {\n\t\ttransform: translateY(2vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(0vh) translateX(30vw) scale(0.5);\n\t}\n\n\t30% {\n\t\ttransform: translateY(4vh) translateX(50vw) scale(0.6);\n\t}\n\n\t40% {\n\t\ttransform: translateY(2vh) translateX(70vw) scale(0.6);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.6);\n\t}\n\n\t60% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n}\n\n@keyframes fly-right-two {\n\t0% {\n\t\ttransform: translateY(-2vh) translateX(-10vw) scale(0.5);\n\t}\n\n\t10% {\n\t\ttransform: translateY(0vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(-4vh) translateX(30vw) scale(0.6);\n\t}\n\n\t30% {\n\t\ttransform: translateY(1vh) translateX(50vw) scale(0.45);\n\t}\n\n\t40% {\n\t\ttransform: translateY(-2.5vh) translateX(70vw) scale(0.5);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.45);\n\t}\n\n\t51% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color:#A3E4D7;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0xBQWtMOztBQUVsTDs7O0NBR0Msc0JBQXNCO0FBQ3ZCOztBQUVBLDBEQUEwRDs7QUFDMUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7RUFDUjs7QUFFRjtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtBQUNYOztBQUVBLHNCQUFzQjs7QUFDdEI7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixnQ0FBZ0M7RUFDL0I7O0FBRUE7Q0FDRCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0RBQWdEO0NBQ2hELGtEQUFrRDtDQUNsRCw0REFBNEQ7Q0FDNUQsc0NBQXNDO0VBQ3JDOztBQUVBO0NBQ0QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGdEQUFnRDtDQUNoRCxrREFBa0Q7Q0FDbEQsb0RBQW9EO0NBQ3BELDZDQUE2QztFQUM1Qzs7QUFFQTtDQUNEO0dBQ0UseUNBQXlDO0dBQ3pDLDJDQUEyQztHQUMzQyw2REFBNkQ7Q0FDL0Q7Q0FDQTtHQUNFLHlDQUF5QztHQUN6QywyQ0FBMkM7Q0FDN0M7Q0FDQTtHQUNFLGdEQUFnRDtHQUNoRCxrREFBa0Q7R0FDbEQscURBQXFEO0NBQ3ZEO0NBQ0E7R0FDRSx5Q0FBeUM7R0FDekMsMkNBQTJDO0dBQzNDLDREQUE0RDtDQUM5RDtFQUNDOztBQUdGLHNCQUFzQjs7QUFFdEI7Q0FDQyw2RkFBNkY7Q0FDN0YsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtDQUN6QixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtDQUNWLHFDQUFxQztDQUNyQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGlDQUFpQztDQUNqQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7RUFDQyw2QkFBNkI7Q0FDOUI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsdUNBQXVDO0NBQ3hDOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHdEQUF3RDtDQUN6RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHlEQUF5RDtDQUMxRDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDtBQUNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDYwMCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZmFtaWx5PUV4bzp3Z2h0QDcwMCZmYW1pbHk9R3JlbnplK0dvdGlzY2g6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKnN0eWxlc2hlZXQgZm9yIHB1dHRpbmcgdGhpbmdzIGluIHRoZSBjb3JuZXIgb2YgdGhlIHBhZ2UqL1xuLmJvdHRvbXJpZ2h0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDQ1JTtcblx0bGVmdDogNzUlO1xuICB9XG5cbi5ib3R0b21sZWZ0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDcwJTtcblx0cmlnaHQ6IDcwJTtcbn1cbiAgXG4vKnN0YXJ0IG9mIGRvd24gYXJyb3cqL1xuLmFycm93cyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDgwJTtcblx0bGVmdDogNTAlO1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmFycm93czpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXItbGVmdDogMjYuNjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdGJvcmRlci1ib3R0b206IDI2LjY2NjY3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNi42NjY2N3B4LCAxMDYuNjY2NjdweCkgcm90YXRlKC00NWRlZyk7XG5cdGFuaW1hdGlvbjogYXJyb3dzIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuYXJyb3dzOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyLWxlZnQ6IDI2LjY2NjY3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHRib3JkZXItYm90dG9tOiAyNi42NjY2N3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTMuMzMzMzNweCwgMHB4KSByb3RhdGUoLTQ1ZGVnKTtcblx0YW5pbWF0aW9uOiBhcnJvd3MgMS41cyBsaW5lYXIgaW5maW5pdGUgLTAuNzVzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGFycm93cyB7XG5cdDAlIHtcblx0ICBib3JkZXItbGVmdDogMjYuNjY2NjdweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0ICBib3JkZXItYm90dG9tOiAyNi42NjY2N3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHQgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMy4zMzMzM3B4LCAtNTMuMzMzMzNweCkgcm90YXRlKC00NWRlZyk7XG5cdH1cblx0MTAlLCA5MCUge1xuXHQgIGJvcmRlci1sZWZ0OiAyNi42NjY2N3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHQgIGJvcmRlci1ib3R0b206IDI2LjY2NjY3cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdH1cblx0NTAlIHtcblx0ICBib3JkZXItbGVmdDogMjYuNjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdCAgYm9yZGVyLWJvdHRvbTogMjYuNjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEzLjMzMzMzcHgsIDBweCkgcm90YXRlKC00NWRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdCAgYm9yZGVyLWxlZnQ6IDI2LjY2NjY3cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdCAgYm9yZGVyLWJvdHRvbTogMjYuNjY2NjdweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTMuMzMzMzNweCwgNTMuMzMzMzNweCkgcm90YXRlKC00NWRlZyk7XG5cdH1cbiAgfVxuXHRcblxuLyplbmQgb2YgYXJyb3cgYm91bmNlKi9cblxuLmJpcmQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Zyk7XG5cdGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuXHR3aWR0aDogODhweDtcblx0aGVpZ2h0OiAxMjVweDtcblx0d2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XG5cdGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5iaXJkLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC0tdHdvIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbn1cblxuLmJpcmQtLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG59XG5cbi5iaXJkLS1mb3VyIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMjAlO1xuXHRsZWZ0OiAtMTAlO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHRhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmJpcmQtY29udGFpbmVyLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG4uYmlyZC1jb250YWluZXItLXR3byB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uYmlyZC1jb250YWluZXItLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNC42cztcblx0YW5pbWF0aW9uLWRlbGF5OiA5LjVzO1xufVxuXG4uYmlyZC1jb250YWluZXItLWZvdXIge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE2cztcblx0YW5pbWF0aW9uLWRlbGF5OiAxMC4yNXM7XG59XG5cbkBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcblx0MTAwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQ1MSUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG5cdH1cbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojQTNFNEQ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJ1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG4iXX0= */", "#mainNav[_ngcontent-%COMP%] {\n    min-height: 56px;\n    background-color: #fff;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    font-size: 80%;\n    padding: 0.75rem;\n    color: #ad744d;\n    border: 1px solid #E59866;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    color: #FFC300;\n    font-weight: 700;\n    padding: .9rem 0;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n    color: fade(white, 80%);\n    outline: none;\n    background-color: transparent;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus {\n    outline: none;\n    background-color: transparent;\n  }\n\n @media (min-width: 992px) {\n    #mainNav[_ngcontent-%COMP%] {\n      padding-top: 0;\n      padding-bottom: 0;\n      border-bottom: none;\n      background-color: transparent;\n      transition: background-color 0.3s ease-in-out;\n    }\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n      padding: .5rem 0;\n      color: rgba(255, 255, 255, 0.5);\n    }\n    #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n      transition: none;\n      padding: 2rem 1.5rem;\n      color: rgba(255, 255, 255, 0.5);\n    }\n    #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n      color: rgba(255, 255, 255, 0.75);\n    }\n    #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n      color: white;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%] {\n      background-color: #fff;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n      color: #FFC300;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n      color: #FFC300;\n      padding: 1.5rem 1.5rem 1.25rem;\n      border-bottom: 0.25rem solid transparent;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n      color: #e29664;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n      color: #81563a;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n      color: #b97d54;\n      outline: none;\n      border-bottom: 0.25rem solid #64a19d;\n    }\n  }\n\n .masthead[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: auto;\n    min-height: 35rem;\n    padding: 15rem 0;\n    background: linear-gradient(to bottom, rgba(22, 22, 22, 0.2) 0%, rgba(255, 240, 110, 0.6) 75%, #FFC300 100%), url('gold.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-size: cover;\n  }\n\n .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\n    \n    font-family: 'Comfortaa', cursive;\n      font-size: 3rem;\n      line-height: 3rem;\n    letter-spacing: 0.2rem;\n    background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));\n    \n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n\n    overflow: hidden; \n    border-right: .15em solid grey; \n    white-space: wrap; \n    margin: 0 auto; \n    letter-spacing: .2em; \n    animation: \n      typing 3.5s steps(40, end),\n      blink-caret .75s step-end infinite;\n  }\n\n \n\n @keyframes typing {\n\tfrom { width: 70% }\n\tto { width: 100% }\n  \t}\n\n \n\n @keyframes blink-caret {\n\tfrom, to { border-color: transparent }\n\t50% { border-color: grey; }\n  }\n\n .masthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    \n\t  font-size: 1rem;\n    text-align: left;\n  }\n\n @media (min-width: 768px) {\n    .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n      line-height: 2rem;\n    }\n  }\n\n @media (min-width: 992px) {\n    .masthead[_ngcontent-%COMP%] {\n      height: 100vh;\n      padding: 0;\n    }\n    .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n      line-height: 2rem;\n      letter-spacing: 0.2rem;\n    }\n    .masthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\t  \n      font-size: 1.25rem;\n    }\n  }\n\n .btn[_ngcontent-%COMP%] {\n    box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n    padding: 1.25rem 2rem;\n    font-family: 'Varela Round';\n    font-size: 80%;\n    text-transform: uppercase;\n    letter-spacing: .15rem;\n    border: 0;\n  }\n\n .btn-primary[_ngcontent-%COMP%] {\n    background-color: #ad744d;\n  }\n\n .btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #775036;\n  }\n\n .btn-primary[_ngcontent-%COMP%]:focus {\n    background-color: #885b3e;\n    color: white;\n  }\n\n .btn-primary[_ngcontent-%COMP%]:active {\n    background-color: #8a5c3e !important;\n  }\n\n .about-section[_ngcontent-%COMP%] {\n    padding-top: 10rem;\n    background: linear-gradient(to bottom, #FFC300 0%, rgba(254, 243, 103, 0.9) 75%, rgba(254, 243, 103, 0.8) 100%);\n    \n  }\n\n .about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n    font-family: 'Comfortaa', cursive;\n    font-size: 1.7rem;\n    line-height: 2rem;\n    letter-spacing: 0.15rem;\n    text-align: left;\n    \n  }\n\n .projects-section[_ngcontent-%COMP%] {\n    padding: 5rem;\n    font-family: 'Comfortaa', cursive;\n    \n    font-size: 1rem;\n    line-height: 1.5rem;\n    letter-spacing: 0.15rem;\n    text-align: left;\n    \n  }\n\n .projects-section[_ngcontent-%COMP%]   .featured-text[_ngcontent-%COMP%] {\n    padding: 2rem;\n    color:green;\n    font-family: 'Comfortaa', cursive;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    letter-spacing: 0.15rem;\n    text-align: left;\n  }\n\n .projects-section[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n    color: azure;\n  }\n\n @media (min-width: 992px) {\n    .projects-section[_ngcontent-%COMP%]   .featured-text[_ngcontent-%COMP%] {\n      padding: 0 0 0 2rem;\n      border-left: 0.5rem solid #ad744d;\n    }\n  }\n\n .projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%] {\n    padding: 3rem;\n    font-size: 90%;\n  }\n\n @media (min-width: 992px) {\n    .projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%] {\n      padding: 5rem;\n    }\n    .projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n      border-color: #ad744d;\n      border-width: .25rem;\n      width: 30%;\n    }\n  }\n\n .signup-section[_ngcontent-%COMP%] {\n    padding: 10rem 0;\n    background: linear-gradient(to bottom, rgba(254, 243, 103, 0.1) 0%, rgba(254, 243, 103, 0.5) 75%, #161616 100%), url('bg-signup.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-size: cover;\n  }\n\n .signup-section[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n    padding: 1.25rem 2rem;\n    height: auto;\n    font-family: 'Varela Round';\n    font-size: 80%;\n    text-transform: uppercase;\n    letter-spacing: 0.15rem;\n    border: 0;\n  }\n\n .contact-section[_ngcontent-%COMP%] {\n    padding: 5rem 0 0;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border: 0;\n    border-bottom: 0.25rem solid #d48e5f;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    font-family: 'Varela Round';\n    text-transform: uppercase;\n    letter-spacing: 0.15rem;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-color: #ad744d;\n    border-width: 0.25rem;\n    width: 3rem;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    height: 3rem;\n    width: 3rem;\n    background: rgba(254, 243, 103, 0.1);\n    border-radius: 100%;\n    line-height: 3rem;\n    color: rgba(254, 243, 103, 0.3);\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgba(254, 243, 103, 0.5);\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    color: #fff;\n  }\n\n body[_ngcontent-%COMP%] {\n    font-family: 'Nunito';\n    letter-spacing: 0.0625em;\n  }\n\n a[_ngcontent-%COMP%] {\n    color: #ad744d;\n  }\n\n a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n    color: #61412b;\n  }\n\n .bg-black[_ngcontent-%COMP%] {\n    background-color: #FFC300 !important;\n  }\n\n .bg-primary[_ngcontent-%COMP%] {\n    background-color: #ad744d !important;\n  }\n\n .text-primary[_ngcontent-%COMP%] {\n    color: #FFC300 !important;\n  }\n\n footer[_ngcontent-%COMP%] {\n    padding: 5rem 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZGRpdGlvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTs7Q0FFRCxnQ0FBZ0M7O0NBQ2hDO0lBQ0csZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7Q0FFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7Q0FFQTtJQUNFLGFBQWE7RUFDZjs7Q0FFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztDQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7O0NBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0VBQy9COztDQUVBO0lBQ0U7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsNkNBQTZDO0lBQy9DO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsY0FBYztNQUNkLDhCQUE4QjtNQUM5Qix3Q0FBd0M7SUFDMUM7SUFDQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGNBQWM7TUFDZCxhQUFhO01BQ2Isb0NBQW9DO0lBQ3RDO0VBQ0Y7O0NBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZIQUE0STtJQUM1SSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7RUFDeEI7O0NBRUE7O0lBRUUsK0JBQStCO0lBQy9CLGlDQUFpQztNQUMvQixlQUFlO01BQ2YsaUJBQWlCO0lBQ25CLHNCQUFzQjtJQUN0Qix1RkFBdUY7O0lBRXZGLG9DQUFvQztJQUNwQyw2QkFBNkI7O0lBRTdCLGdCQUFnQixFQUFFLDREQUE0RDtJQUM5RSw4QkFBOEIsRUFBRSx5QkFBeUI7SUFDekQsaUJBQWlCLEVBQUUsdUNBQXVDO0lBQzFELGNBQWMsRUFBRSxzREFBc0Q7SUFDdEUsb0JBQW9CLEVBQUUscUJBQXFCO0lBQzNDOzt3Q0FFb0M7RUFDdEM7O0NBRUEsc0JBQXNCOztDQUV2QjtDQUNBLE9BQU8sV0FBVztDQUNsQixLQUFLLFlBQVk7R0FDZjs7Q0FFRCxpQ0FBaUM7O0NBQ2pDO0NBQ0QsV0FBVywwQkFBMEI7Q0FDckMsTUFBTSxrQkFBa0IsRUFBRTtFQUN6Qjs7Q0FFQTtJQUNFLG9CQUFvQjtHQUNyQixlQUFlO0lBQ2QsZ0JBQWdCO0VBQ2xCOztDQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO0lBQ25CO0VBQ0Y7O0NBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYixVQUFVO0lBQ1o7SUFDQTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsc0JBQXNCO0lBQ3hCO0lBQ0E7R0FDRCxvQkFBb0I7TUFDakIsa0JBQWtCO0lBQ3BCO0VBQ0Y7O0NBRUE7SUFDRSxpRUFBaUU7SUFDakUscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0NBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0NBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0NBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztDQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztDQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLCtHQUErRzs7RUFFakg7O0NBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7RUFFbEI7O0NBRUE7SUFDRSxhQUFhO0lBQ2IsaUNBQWlDOztJQUVqQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7O0VBRWxCOztDQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztDQUNBO0lBQ0UsWUFBWTtFQUNkOztDQUdBO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsaUNBQWlDO0lBQ25DO0VBQ0Y7O0NBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjs7Q0FFQTtJQUNFO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsb0JBQW9CO01BQ3BCLFVBQVU7SUFDWjtFQUNGOztDQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFJQUFvSjtJQUNwSiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7RUFDeEI7O0NBRUE7SUFDRSxpRUFBaUU7SUFDakUscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztDQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztDQUVBO0lBQ0UsU0FBUztJQUNULG9DQUFvQztFQUN0Qzs7Q0FFQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtFQUN6Qjs7Q0FFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsV0FBVztFQUNiOztDQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztDQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsK0JBQStCO0VBQ2pDOztDQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztDQUVBO0lBQ0UsV0FBVztFQUNiOztDQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHdCQUF3QjtFQUMxQjs7Q0FFQTtJQUNFLGNBQWM7RUFDaEI7O0NBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7Q0FFQTtJQUNFLG9DQUFvQztFQUN0Qzs7Q0FFQTtJQUNFLG9DQUFvQztFQUN0Qzs7Q0FFQTtJQUNFLHlCQUF5QjtFQUMzQjs7Q0FFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkZGl0aW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogU3RhcnQgQm9vdHN0cmFwIC0gR3JheXNjYWxlIHY1LjAuOSAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtb3ZlcnZpZXdzL2dyYXlzY2FsZSlcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkgU3RhcnQgQm9vdHN0cmFwXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9CbGFja3JvY2tEaWdpdGFsL3N0YXJ0Ym9vdHN0cmFwLWdyYXlzY2FsZS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5cbiAvKnN0eWxlc2hlZXQgZm9yIHRoZSB3aG9sZSBwYWdlKi9cbiAjbWFpbk5hdiB7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAjbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgY29sb3I6ICNhZDc0NGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1OTg2NjtcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogI0ZGQzMwMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IC45cmVtIDA7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3ZlciB7XG4gICAgY29sb3I6IGZhZGUod2hpdGUsIDgwJSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAjbWFpbk5hdiB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2LWxpbmsge1xuICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICB9XG4gICAgI21haW5OYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2LWxpbms6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQge1xuICAgICAgY29sb3I6ICNGRkMzMDA7XG4gICAgfVxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiAjRkZDMzAwO1xuICAgICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxLjI1cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6aG92ZXIge1xuICAgICAgY29sb3I6ICNlMjk2NjQ7XG4gICAgfVxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzgxNTYzYTtcbiAgICB9XG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjYjk3ZDU0O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzY0YTE5ZDtcbiAgICB9XG4gIH1cbiAgXG4gIC5tYXN0aGVhZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAzNXJlbTtcbiAgICBwYWRkaW5nOiAxNXJlbSAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjIsIDIyLCAyMiwgMC4yKSAwJSwgcmdiYSgyNTUsIDI0MCwgMTEwLCAwLjYpIDc1JSwgI0ZGQzMwMCAxMDAlKSwgdXJsKFwic3JjL2Fzc2V0cy9pbWcvZ29sZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLm1hc3RoZWFkIGgxIHtcblxuICAgIC8qZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnOyovXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSk7XG4gICAgXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyB0aGUgY29udGVudCBpcyBub3QgcmV2ZWFsZWQgdW50aWwgdGhlIGFuaW1hdGlvbiAqL1xuICAgIGJvcmRlci1yaWdodDogLjE1ZW0gc29saWQgZ3JleTsgLyogVGhlIHR5cHdyaXRlciBjdXJzb3IgKi9cbiAgICB3aGl0ZS1zcGFjZTogd3JhcDsgLyogS2VlcHMgdGhlIGNvbnRlbnQgb24gYSBzaW5nbGUgbGluZSAqL1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4yZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICBhbmltYXRpb246IFxuICAgICAgdHlwaW5nIDMuNXMgc3RlcHMoNDAsIGVuZCksXG4gICAgICBibGluay1jYXJldCAuNzVzIHN0ZXAtZW5kIGluZmluaXRlO1xuICB9XG5cbiAgLyogVGhlIHR5cGluZyBlZmZlY3QgKi9cbiAgXG5cdEBrZXlmcmFtZXMgdHlwaW5nIHtcblx0ZnJvbSB7IHdpZHRoOiA3MCUgfVxuXHR0byB7IHdpZHRoOiAxMDAlIH1cbiAgXHR9XG4gIFxuICAvKiBUaGUgdHlwZXdyaXRlciBjdXJzb3IgZWZmZWN0ICovXG4gIEBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xuXHRmcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxuXHQ1MCUgeyBib3JkZXItY29sb3I6IGdyZXk7IH1cbiAgfVxuICBcbiAgLm1hc3RoZWFkIGgyIHtcbiAgICAvKm1heC13aWR0aDogMjByZW07Ki9cblx0ICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm1hc3RoZWFkIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLm1hc3RoZWFkIHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAubWFzdGhlYWQgaDEge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICAgIH1cbiAgICAubWFzdGhlYWQgaDIge1xuXHQgIC8qbWF4LXdpZHRoOiAzMHJlbTsqL1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmJ0biB7XG4gICAgYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMTVyZW07XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDc0NGQ7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NTAzNjtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg1YjNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhNWMzZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYWJvdXQtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkMzMDAgMCUsIHJnYmEoMjU0LCAyNDMsIDEwMywgMC45KSA3NSUsIHJnYmEoMjU0LCAyNDMsIDEwMywgMC44KSAxMDAlKTtcbiAgICBcbiAgfVxuICBcbiAgLmFib3V0LXNlY3Rpb24gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBcbiAgfVxuICBcbiAgLnByb2plY3RzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG4gIH1cbiAgXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5mZWF0dXJlZC10ZXh0IHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGNvbG9yOmdyZWVuO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wIHtcbiAgICBjb2xvcjogYXp1cmU7XG4gIH1cbiAgXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAucHJvamVjdHMtc2VjdGlvbiAuZmVhdHVyZWQtdGV4dCB7XG4gICAgICBwYWRkaW5nOiAwIDAgMCAycmVtO1xuICAgICAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjYWQ3NDRkO1xuICAgIH1cbiAgfVxuICBcbiAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtdGV4dCB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtdGV4dCB7XG4gICAgICBwYWRkaW5nOiA1cmVtO1xuICAgIH1cbiAgICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IGhyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2FkNzQ0ZDtcbiAgICAgIGJvcmRlci13aWR0aDogLjI1cmVtO1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWdudXAtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTByZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NCwgMjQzLCAxMDMsIDAuMSkgMCUsIHJnYmEoMjU0LCAyNDMsIDEwMywgMC41KSA3NSUsICMxNjE2MTYgMTAwJSksIHVybChcInNyYy9hc3NldHMvaW1nL2JnLXNpZ251cC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLnNpZ251cC1zZWN0aW9uIC5mb3JtLWlubGluZSBpbnB1dCB7XG4gICAgYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIC5jb250YWN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVyZW0gMCAwO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5jYXJkIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjZDQ4ZTVmO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5jYXJkIGg0IHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbiAgfVxuICBcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBociB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYWQ3NDRkO1xuICAgIGJvcmRlci13aWR0aDogMC4yNXJlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxuICBcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5zb2NpYWwgYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NCwgMjQzLCAxMDMsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICBjb2xvcjogcmdiYSgyNTQsIDI0MywgMTAzLCAwLjMpO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5zb2NpYWwgYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU0LCAyNDMsIDEwMywgMC41KTtcbiAgfVxuICBcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVlbTtcbiAgfVxuICBcbiAgYSB7XG4gICAgY29sb3I6ICNhZDc0NGQ7XG4gIH1cbiAgXG4gIGE6Zm9jdXMsIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzYxNDEyYjtcbiAgfVxuICBcbiAgLmJnLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5iZy1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ3NDRkICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50ZXh0LXByaW1hcnkge1xuICAgIGNvbG9yOiAjRkZDMzAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogNXJlbSAwO1xuICB9XG4gIFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: 'home.component.html',
                styleUrls: ['./home.component.css', './addition.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


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
    production: false,
    apiUrl: 'http://localhost:4000'
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

/***/ "ByK8":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





//let users = [{ id: 1, firstName: 'Satita', lastName: 'Vitt', username: 'testing', password: 'test0001' }];
// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }
        function register() {
            const user = body;
            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "pW6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "VITL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]; });






/***/ }),

/***/ "K9Mn":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.message.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.text);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-alert', templateUrl: 'alert.component.html' }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "NFyy":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "Ndrk":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "K9Mn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
//import { OnInit , Input} from '@angular/core';





function AppComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_35_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, 
    //private formBuilder: FormBuilder,
    authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        //registerForm: FormGroup;
        this.loading = false;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    /*
        ngOnInit() {
            /*this.registerForm = this.formBuilder.group({
                comment: []
            });*/
    // convenience getter for easy access to form fields
    //get f() { return this.registerForm.controls; }
    /*
        onSubmit() {
            this.submitted = true;
    
            this.loading = true;*/
    /*
    this.userService.register(this.registerForm.value)
        .pipe(first())*/
    /* }
 */
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 78, vars: 1, consts: [["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], [1, "container"], ["href", "/", 1, "navbar-brand", "js-scroll-trigger"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fas", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["href", "https://satitavitt.github.io/TagCloud/", 1, "nav-item", "nav-link"], ["routerLink", "/blog", 1, "nav-link", "js-scroll-trigger"], ["href", "#draws", 1, "nav-link", "js-scroll-trigger"], ["routerLink", "/baker", 1, "nav-item", "nav-link"], ["routerLink", "/comments", 1, "nav-item", "nav-link"], [1, "w3-dropdown-hover"], [1, "w3-button", "w3-brown", 2, "margin-top", "20px"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-bar-block", "w3-border"], ["href", "#signup", 1, "w3-bar-item", "w3-button"], ["routerLink", "/login", 1, "w3-bar-item", "w3-button"], ["routerLink", "/register", 1, "w3-bar-item", "w3-button"], ["routerLink", "/userpage", 1, "w3-bar-item", "w3-button"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], ["id", "contact", 1, "contact-section", "navbar-expand-lg", "bg-black"], [1, "row"], [1, "col-md-4", "mb-3", "mb-md-0"], [1, "card", "py-4", "h-100"], [1, "card-body", "text-center"], [1, "fas", "fa-map-marked-alt", "text-primary", "mb-2"], [1, "text-uppercase", "m-0"], [1, "my-4"], [1, "small", "text-black-50"], [1, "fas", "fa-envelope", "text-primary", "mb-2"], ["href", "#"], [1, "fas", "fa-mobile-alt", "text-primary", "mb-2"], [1, "social", "d-flex", "justify-content-center"], ["href", "#", 1, "mx-2"], ["href", "https://www.linkedin.com/in/satita-vittayaareekul/"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/SatitaVitt"], [1, "fab", "fa-github"], [1, "bg-black", "small", "text-center", "text-white-50"], [1, "nav-item", "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SATITA VITTAYAAREEKUL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "FunFacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Draws");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Baking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Others ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_a_35_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Located At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Fairfax, VA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "sv439@scarletmail.rutgers.edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " +1 (848)252-8552 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "footer", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Copyright \u00A9 Saita's Website 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".button[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color:#A3E4D7;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n  }\n  \n  .button[_ngcontent-%COMP%]:hover {background-color: #A3E4D7}\n  \n  .button[_ngcontent-%COMP%]:active {\n    background-color: #A3E4D7;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n  \n  .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n    position: static;\n    color: fade(white, 80%);\n    outline: none;\n    background-color: transparent;\n\n  }\n  \n  .w3-bar[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%], .w3-bar[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]{\n    position:static;\n    float:left\n  }\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%], .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]\n  {width:100%}\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%]   .w3-dropdown-content[_ngcontent-%COMP%], .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]   .w3-dropdown-content[_ngcontent-%COMP%]{\n    min-width:100%\n  }\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%]   .w3-button[_ngcontent-%COMP%], .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]   .w3-button[_ngcontent-%COMP%]{\n    width:100%;\n    text-align:left;\n    padding:8px 16px\n  }\n  \n  .w3-dropdown-click[_ngcontent-%COMP%], .w3-dropdown-hover[_ngcontent-%COMP%]{\n    position:relative;\n    display:inline-block;\n    cursor:pointer\n  }\n  \n  .w3-dropdown-hover[_ngcontent-%COMP%]:hover   .w3-dropdown-content[_ngcontent-%COMP%]{\n    display:block\n  }\n  \n  .w3-dropdown-hover[_ngcontent-%COMP%]:first-child, .w3-dropdown-click[_ngcontent-%COMP%]:hover{\n    background-color:#ccc;\n    color:#000\n  }\n  \n  .w3-dropdown-hover[_ngcontent-%COMP%]:hover    > .w3-button[_ngcontent-%COMP%]:first-child, .w3-dropdown-click[_ngcontent-%COMP%]:hover    > .w3-button[_ngcontent-%COMP%]:first-child{\n    background-color:#ccc;\n    color:#000\n  }\n  \n  .w3-bar[_ngcontent-%COMP%]   .w3-bar-item[_ngcontent-%COMP%]{\n    padding:8px 16px;\n    float:left;\n    width:auto;\n    border:none;\n    display:block;\n    outline:0}\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-bar-item[_ngcontent-%COMP%]{\n    width:100%;\n    display:block;\n    padding:8px 16px;\n    text-align:left;\n    border:none;\n    white-space:normal;\n    float:none;\n    outline:0}\n  \n  .w3-bar-block.w3-center[_ngcontent-%COMP%]   .w3-bar-item[_ngcontent-%COMP%]{\n  text-align:center\n}\n  \n  .w3-block[_ngcontent-%COMP%]{\n    display:block;\n    width:100%}\n  \n  .dropdown[_ngcontent-%COMP%] {\n    float: left;\n    overflow: hidden;\n  }\n  \n  .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n    padding: inherit;\n    border: none;\n    outline: none;\n    margin: 0;\n    color: white;\n    background-color: inherit;\n    font-family: inherit;\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: relative;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index:1;\n    color : green;\n    margin:0;\n    padding:8px 16px;\n    float:left;\n    width:auto;\n    border:none;\n    display:block;\n    outline:0\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    color : black;\n    text-decoration: none;\n    display:inline-block;\n    text-align: left;\n\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: rgba(78, 76, 57, 0.5);\n  }\n  \n  .dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    \n    display:inline-block;\n    cursor:pointer\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBLGVBQWUseUJBQXlCOztFQUV4QztJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsNkJBQTZCOztFQUUvQjs7RUFFQTtJQUNFLGVBQWU7SUFDZjtFQUNGOztFQUVBOztHQUVDLFVBQVU7O0VBQ1g7O0lBRUU7RUFDRjs7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsZUFBZTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCO0VBQ0Y7O0VBQ0E7SUFDRTtFQUNGOztFQUNBOztJQUVFLHFCQUFxQjtJQUNyQjtFQUNGOztFQUNBOztJQUVFLHFCQUFxQjtJQUNyQjtFQUNGOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTOztFQUVYO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7O0VBQ2I7RUFDRTtBQUNGOztFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7O0VBR1o7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7SUFDWix5QkFBeUI7SUFDekIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2I7RUFDRjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBOztJQUVFLG9CQUFvQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQTNFNEQ3O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNBM0U0RDd9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRTRENztcbiAgICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiBmYWRlKHdoaXRlLCA4MCUpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgfVxuXG4gIC53My1iYXIgLnczLWRyb3Bkb3duLWhvdmVyLC53My1iYXIgLnczLWRyb3Bkb3duLWNsaWNre1xuICAgIHBvc2l0aW9uOnN0YXRpYztcbiAgICBmbG9hdDpsZWZ0XG4gIH1cblxuICAudzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1ob3ZlcixcbiAgLnczLWJhci1ibG9jayAudzMtZHJvcGRvd24tY2xpY2tcbiAge3dpZHRoOjEwMCV9XG4gIC53My1iYXItYmxvY2sgLnczLWRyb3Bkb3duLWhvdmVyIC53My1kcm9wZG93bi1jb250ZW50LFxuICAudzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1jbGljayAudzMtZHJvcGRvd24tY29udGVudHtcbiAgICBtaW4td2lkdGg6MTAwJVxuICB9XG4gIC53My1iYXItYmxvY2sgLnczLWRyb3Bkb3duLWhvdmVyIC53My1idXR0b24sXG4gIC53My1iYXItYmxvY2sgLnczLWRyb3Bkb3duLWNsaWNrIC53My1idXR0b257XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgcGFkZGluZzo4cHggMTZweFxuICB9XG5cbiAgLnczLWRyb3Bkb3duLWNsaWNrLC53My1kcm9wZG93bi1ob3ZlcntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6cG9pbnRlclxuICB9XG4gIC53My1kcm9wZG93bi1ob3Zlcjpob3ZlciAudzMtZHJvcGRvd24tY29udGVudHtcbiAgICBkaXNwbGF5OmJsb2NrXG4gIH1cbiAgLnczLWRyb3Bkb3duLWhvdmVyOmZpcnN0LWNoaWxkLFxuICAudzMtZHJvcGRvd24tY2xpY2s6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2NjO1xuICAgIGNvbG9yOiMwMDBcbiAgfVxuICAudzMtZHJvcGRvd24taG92ZXI6aG92ZXIgPiAudzMtYnV0dG9uOmZpcnN0LWNoaWxkLFxuICAudzMtZHJvcGRvd24tY2xpY2s6aG92ZXIgPiAudzMtYnV0dG9uOmZpcnN0LWNoaWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6I2NjYztcbiAgICBjb2xvcjojMDAwXG4gIH1cbiAgLnczLWJhciAudzMtYmFyLWl0ZW17XG4gICAgcGFkZGluZzo4cHggMTZweDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdpZHRoOmF1dG87XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBvdXRsaW5lOjB9XG5cbiAgLnczLWJhci1ibG9jayAudzMtYmFyLWl0ZW17XG4gICAgd2lkdGg6MTAwJTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHBhZGRpbmc6OHB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGJvcmRlcjpub25lO1xuICAgIHdoaXRlLXNwYWNlOm5vcm1hbDtcbiAgICBmbG9hdDpub25lO1xuICAgIG91dGxpbmU6MH1cbi53My1iYXItYmxvY2sudzMtY2VudGVyIC53My1iYXItaXRlbXtcbiAgdGV4dC1hbGlnbjpjZW50ZXJcbn1cbiAgLnczLWJsb2Nre1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6MTAwJX1cblxuXG4gIC5kcm9wZG93biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmRyb3Bkb3duIC5kcm9wYnRuIHtcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgei1pbmRleDoxO1xuICAgIGNvbG9yIDogZ3JlZW47XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzo4cHggMTZweDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdpZHRoOmF1dG87XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBvdXRsaW5lOjBcbiAgfVxuXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGNvbG9yIDogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OCwgNzYsIDU3LCAwLjUpO1xuICB9XG4gIFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjpwb2ludGVyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app',
                templateUrl: 'app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users`);
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/register`, user);
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/${id}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider, AuthGuard, JwtInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-backend */ "ByK8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["fakeBackendProvider"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "jfvi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"]; });







/***/ }),

/***/ "Yfpz":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserpageComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserpageComponent_li_5_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteUser(user_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", user_r1.username, " (", user_r1.firstName, " ", user_r1.lastName, ") ");
} }
class UserpageComponent {
    constructor(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    deleteUser(id) {
        this.userService.delete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(() => this.loadAllUsers());
    }
    loadAllUsers() {
        this.userService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(users => this.users = users);
    }
}
UserpageComponent.ɵfac = function UserpageComponent_Factory(t) { return new (t || UserpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
UserpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserpageComponent, selectors: [["app-userpage"]], decls: 6, vars: 2, consts: [["href", "/some-page"], ["src", "src/assets/img/bg-masthead.jpg", 1, "oversize"], [4, "ngFor", "ngForOf"], [1, "text-danger", 3, "click"]], template: function UserpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserpageComponent_li_5_Template, 4, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.currentUser.firstName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userpage',
                templateUrl: 'userpage.component.html'
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components */ "Ndrk");
/* harmony import */ var _userpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userpage */ "0GV0");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments */ "s1b6");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-sidebar */ "k4pO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
//import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';




// used to create fake backend










//import { BlogComponent } from './blog/blog.component';







//import { routes } from './app.routing';
//import { FunFactComponent } from './fun-fact/fun-fact.component';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
        // provider used to create fake backend
        _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
            //RouterModule.forRoot(routes),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_16__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _register__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _components__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
        _userpage__WEBPACK_IMPORTED_MODULE_10__["UserpageComponent"],
        _comments__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"]
        //BlogComponent
        //FunFactComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_16__["MarkdownModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                    //RouterModule.forRoot(routes),
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_16__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }),
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _register__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                    _userpage__WEBPACK_IMPORTED_MODULE_10__["UserpageComponent"],
                    _comments__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"]
                    //BlogComponent
                    //FunFactComponent
                ],
                //schemas:[CUSTOM_ELEMENTS_SCHEMA],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                    // provider used to create fake backend
                    _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "f1Oy":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CommentsComponent {
    constructor(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            comment: []
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        /*
        this.userService.register(this.registerForm.value)
            .pipe(first())*/
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 13, vars: 4, consts: [["id", "signup", 1, "signup-section", "navbar-expand-lg", "bg-black", "bottom"], [1, "container"], [1, "row"], [1, "col-md-10", "col-lg-8", "mx-auto", "text-center"], [1, "far", "fa-paper-plane", "fa-2x", "mb-2", "text-white"], [1, "text-white", "mb-5"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text box", "formControlName", "comment", 1, "form-control", 3, "ngClass"], [1, "button", "btn-primary"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comment/Suggestions \uD83E\uDD13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentsComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sent! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.submitted));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: 'comments.component.html',
                styleUrls: ['./comments.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "jfvi":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "J9tS");



class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "lZQ7":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "1W4x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "J9tS");





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            //extracts the error message from the error response object or defaults to the response status text if there isn't an error message
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "J9tS");




class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "pW6c":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    //enables the user to stay logged in between page refreshes or after the browser is closed.
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "s1b6":
/*!***********************************!*\
  !*** ./src/app/comments/index.ts ***!
  \***********************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.component */ "f1Oy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return _comments_component__WEBPACK_IMPORTED_MODULE_0__["CommentsComponent"]; });




/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments */ "s1b6");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _userpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userpage */ "0GV0");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers */ "XgRA");



//mport { BlogComponent } from './blog/blog.component';
//import { BlogPostViewComponent } from './blog/post/blog-post-view.component';

//import { FunFactComponent } from './fun-fact/fun-fact.component';
//import { FunfactsComponent } from './funfacts';







const routes = [
    //{ path: '', component: HomeComponent , canActivate: [AuthGuard] },
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    /*To control access to a route with the auth guard you add it to the canActivate array
    in the route's configuration. The route guards in the canActivate array are run by Angular
    to decide if the route can be "activated", if all of the route guards return true navigation
    is allowed to continue, but if any of them return false navigation is cancelled.
    */
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'userpage', component: _userpage__WEBPACK_IMPORTED_MODULE_7__["UserpageComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'comments', component: _comments__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"] },
    { path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule) },
    //{ path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
    /*{ path: 'blogpost', component: BlogPostViewComponent},
    //{ path: 'blog', component: BlogViewComponent},
    //{ path: 'funfact', component: FunFactComponent},
    { path: "blog", loadChildren: () =>
            import("./blog/blog.module").then(m => m.BlogModule)
    },*/
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vqLo":
/*!****************************!*\
  !*** ./src/app/visitor.ts ***!
  \****************************/
/*! exports provided: Visitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return Visitor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Visitor {
    constructor(name, type, directed) {
        this.name = name;
        this.type = type;
        this.directed = directed;
    }
}
Visitor.ɵfac = function Visitor_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
Visitor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Visitor });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Visitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: undefined }, { type: undefined }, { type: undefined }]; }, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
} }
function LoginComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_28_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    //error: string;
    //success: string;
    constructor(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/userpage']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // show success message on registration
        /*
        if (this.route.snapshot.queryParams['registered']) {
            this.success = 'Registration successful';
        }
        */
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        //this.error = null;
        //this.success = null;
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            //this.error = error;
            this.alertService.error(error);
            this.loading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 35, vars: 11, consts: [["href", "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap", "rel", "stylesheet"], [1, "masthead"], [1, "bird-container", "bird-container--one"], [1, "bird", "bird--one"], [1, "bird-container", "bird-container--two"], [1, "bird", "bird--two"], [1, "bird-container", "bird-container--three"], [1, "bird", "bird--three"], [1, "bird-container", "bird-container--four"], [1, "bird", "bird--four"], [1, "container", "d-flex", "h-100", "align-items-center"], [1, "mx-auto", "text-center"], [1, "mx-auto", "my-0", "text-uppercase"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username", 2, "color", "white"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password", 2, "color", "white"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 2, "background-color", "#A3E4D7", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/register", 1, "btn", "btn-link", 2, "color", "#A3E4D7"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " For testing API, Authentication, JWT token feature purpose only :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_span_31_Template, 1, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Arima+Madurai:300\");\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n\tbox-sizing: border-box;\n}\n\n\n\n\n\n.bird[_ngcontent-%COMP%] {\n\tbackground-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);\n\tbackground-size: auto 100%;\n\twidth: 88px;\n\theight: 125px;\n\twill-change: background-position;\n\tanimation-name: fly-cycle;\n\tanimation-timing-function: steps(10);\n\tanimation-iteration-count: infinite;\n}\n\n.bird--one[_ngcontent-%COMP%] {\n\tanimation-duration: 1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird--two[_ngcontent-%COMP%] {\n\tanimation-duration: 0.9s;\n\tanimation-delay: -0.75s;\n}\n\n.bird--three[_ngcontent-%COMP%] {\n\tanimation-duration: 1.25s;\n\tanimation-delay: -0.25s;\n}\n\n.bird--four[_ngcontent-%COMP%] {\n\tanimation-duration: 1.1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: -10%;\n\ttransform: scale(0) translateX(-10vw);\n\twill-change: transform;\n\tanimation-name: fly-right-one;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\n.bird-container--one[_ngcontent-%COMP%] {\n\tanimation-duration: 15s;\n\tanimation-delay: 0;\n}\n\n.bird-container--two[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 1s;\n}\n\n.bird-container--three[_ngcontent-%COMP%] {\n\tanimation-duration: 14.6s;\n\tanimation-delay: 9.5s;\n}\n\n.bird-container--four[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 10.25s;\n}\n\n@keyframes fly-cycle {\n\t100% {\n\t\tbackground-position: -900px 0;\n\t}\n}\n\n@keyframes fly-right-one {\n\t0% {\n\t\ttransform: scale(0.3) translateX(-10vw);\n\t}\n\n\t10% {\n\t\ttransform: translateY(2vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(0vh) translateX(30vw) scale(0.5);\n\t}\n\n\t30% {\n\t\ttransform: translateY(4vh) translateX(50vw) scale(0.6);\n\t}\n\n\t40% {\n\t\ttransform: translateY(2vh) translateX(70vw) scale(0.6);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.6);\n\t}\n\n\t60% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n}\n\n@keyframes fly-right-two {\n\t0% {\n\t\ttransform: translateY(-2vh) translateX(-10vw) scale(0.5);\n\t}\n\n\t10% {\n\t\ttransform: translateY(0vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(-4vh) translateX(30vw) scale(0.6);\n\t}\n\n\t30% {\n\t\ttransform: translateY(1vh) translateX(50vw) scale(0.45);\n\t}\n\n\t40% {\n\t\ttransform: translateY(-2.5vh) translateX(70vw) scale(0.5);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.45);\n\t}\n\n\t51% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color:#A3E4D7;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\np[_ngcontent-%COMP%]{\n    font-family: 'Dancing Script', cursive;\n    color : white;\n    font-size : 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7O0FBRXhFOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBQ0E7Ozs7Ozs7OztFQVNFOztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7RUFlRTs7QUFFRjtDQUNDLDZGQUE2RjtDQUM3RiwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLG9DQUFvQztDQUNwQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YscUNBQXFDO0NBQ3JDLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsaUNBQWlDO0NBQ2pDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQztFQUNDLDZCQUE2QjtDQUM5QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyx1Q0FBdUM7Q0FDeEM7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7QUFDRDs7QUFFQTtDQUNDO0VBQ0Msd0RBQXdEO0NBQ3pEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MseURBQXlEO0NBQzFEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0Msd0RBQXdEO0NBQ3pEOztDQUVBO0VBQ0Msd0RBQXdEO0NBQ3pEO0FBQ0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJpbWErTWFkdXJhaTozMDBcIik7XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKlxuaDEge1xuXHRmb250LWZhbWlseTogJ0FyaW1hIE1hZHVyYWknLCBjdXJzaXZlO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogNHJlbTtcblx0bGV0dGVyLXNwYWNpbmc6IC0zcHg7XG5cdHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMztcbn0qL1xuLypcbi5jb250YWluZXIge1xuXHR6LWluZGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0bWluLWhlaWdodDogMzVyZW07XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAxNjgsIDc2LCAwLjYpIDAlLCByZ2JhKDI1NSwgMTIzLCAxMywgMC42KSAxMDAlKSwgdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDY4MjQ1MDUwNDYtZTQzNjA1ZmZiMTdmXCIpO1xuXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdHBhZGRpbmc6IDJyZW07XG59Ki9cblxuLmJpcmQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Zyk7XG5cdGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuXHR3aWR0aDogODhweDtcblx0aGVpZ2h0OiAxMjVweDtcblx0d2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XG5cdGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5iaXJkLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC0tdHdvIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbn1cblxuLmJpcmQtLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG59XG5cbi5iaXJkLS1mb3VyIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMjAlO1xuXHRsZWZ0OiAtMTAlO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHRhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmJpcmQtY29udGFpbmVyLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG4uYmlyZC1jb250YWluZXItLXR3byB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uYmlyZC1jb250YWluZXItLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNC42cztcblx0YW5pbWF0aW9uLWRlbGF5OiA5LjVzO1xufVxuXG4uYmlyZC1jb250YWluZXItLWZvdXIge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE2cztcblx0YW5pbWF0aW9uLWRlbGF5OiAxMC4yNXM7XG59XG5cbkBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcblx0MTAwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQ1MSUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG5cdH1cbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojQTNFNEQ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJ1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgZm9udC1zaXplIDogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "wn6f":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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