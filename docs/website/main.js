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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Arima+Madurai:300\");\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n\tbox-sizing: border-box;\n}\n\n\n\n\n\n.bird[_ngcontent-%COMP%] {\n\tbackground-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);\n\tbackground-size: auto 100%;\n\twidth: 88px;\n\theight: 125px;\n\twill-change: background-position;\n\tanimation-name: fly-cycle;\n\tanimation-timing-function: steps(10);\n\tanimation-iteration-count: infinite;\n}\n\n.bird--one[_ngcontent-%COMP%] {\n\tanimation-duration: 1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird--two[_ngcontent-%COMP%] {\n\tanimation-duration: 0.9s;\n\tanimation-delay: -0.75s;\n}\n\n.bird--three[_ngcontent-%COMP%] {\n\tanimation-duration: 1.25s;\n\tanimation-delay: -0.25s;\n}\n\n.bird--four[_ngcontent-%COMP%] {\n\tanimation-duration: 1.1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: -10%;\n\ttransform: scale(0) translateX(-10vw);\n\twill-change: transform;\n\tanimation-name: fly-right-one;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\n.bird-container--one[_ngcontent-%COMP%] {\n\tanimation-duration: 15s;\n\tanimation-delay: 0;\n}\n\n.bird-container--two[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 1s;\n}\n\n.bird-container--three[_ngcontent-%COMP%] {\n\tanimation-duration: 14.6s;\n\tanimation-delay: 9.5s;\n}\n\n.bird-container--four[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 10.25s;\n}\n\n@keyframes fly-cycle {\n\t100% {\n\t\tbackground-position: -900px 0;\n\t}\n}\n\n@keyframes fly-right-one {\n\t0% {\n\t\ttransform: scale(0.3) translateX(-10vw);\n\t}\n\n\t10% {\n\t\ttransform: translateY(2vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(0vh) translateX(30vw) scale(0.5);\n\t}\n\n\t30% {\n\t\ttransform: translateY(4vh) translateX(50vw) scale(0.6);\n\t}\n\n\t40% {\n\t\ttransform: translateY(2vh) translateX(70vw) scale(0.6);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.6);\n\t}\n\n\t60% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n}\n\n@keyframes fly-right-two {\n\t0% {\n\t\ttransform: translateY(-2vh) translateX(-10vw) scale(0.5);\n\t}\n\n\t10% {\n\t\ttransform: translateY(0vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(-4vh) translateX(30vw) scale(0.6);\n\t}\n\n\t30% {\n\t\ttransform: translateY(1vh) translateX(50vw) scale(0.45);\n\t}\n\n\t40% {\n\t\ttransform: translateY(-2.5vh) translateX(70vw) scale(0.5);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.45);\n\t}\n\n\t51% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color:#A3E4D7;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\np[_ngcontent-%COMP%]{\n    font-family: 'Dancing Script', cursive;\n    color : white;\n    font-size : 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTs7O0NBR0Msc0JBQXNCO0FBQ3ZCOztBQUNBOzs7Ozs7Ozs7RUFTRTs7QUFDRjs7Ozs7Ozs7Ozs7Ozs7O0VBZUU7O0FBRUY7Q0FDQyw2RkFBNkY7Q0FDN0YsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtDQUN6QixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtDQUNWLHFDQUFxQztDQUNyQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGlDQUFpQztDQUNqQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7RUFDQyw2QkFBNkI7Q0FDOUI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsdUNBQXVDO0NBQ3hDOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHdEQUF3RDtDQUN6RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHlEQUF5RDtDQUMxRDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDtBQUNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmltYStNYWR1cmFpOjMwMFwiKTtcblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi8qXG5oMSB7XG5cdGZvbnQtZmFtaWx5OiAnQXJpbWEgTWFkdXJhaScsIGN1cnNpdmU7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiA0cmVtO1xuXHRsZXR0ZXItc3BhY2luZzogLTNweDtcblx0dGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAzO1xufSovXG4vKlxuLmNvbnRhaW5lciB7XG5cdHotaW5kZXg6IDE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRtaW4taGVpZ2h0OiAzNXJlbTtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDE2OCwgNzYsIDAuNikgMCUsIHJnYmEoMjU1LCAxMjMsIDEzLCAwLjYpIDEwMCUpLCB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ0NjgyNDUwNTA0Ni1lNDM2MDVmZmIxN2ZcIik7XG5cdGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0cGFkZGluZzogMnJlbTtcbn0qL1xuXG4uYmlyZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNzQ0NzkvYmlyZC1jZWxscy1uZXcuc3ZnKTtcblx0YmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG5cdHdpZHRoOiA4OHB4O1xuXHRoZWlnaHQ6IDEyNXB4O1xuXHR3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcblx0YW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmJpcmQtLW9uZSB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbi5iaXJkLS10d28ge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xufVxuXG4uYmlyZC0tdGhyZWUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjI1cztcbn1cblxuLmJpcmQtLWZvdXIge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDEuMXM7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbi5iaXJkLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAyMCU7XG5cdGxlZnQ6IC0xMCU7XG5cdHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uYmlyZC1jb250YWluZXItLW9uZSB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuXHRhbmltYXRpb24tZGVsYXk6IDA7XG59XG5cbi5iaXJkLWNvbnRhaW5lci0tdHdvIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XG5cdGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5iaXJkLWNvbnRhaW5lci0tdGhyZWUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE0LjZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDkuNXM7XG59XG5cbi5iaXJkLWNvbnRhaW5lci0tZm91ciB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDEwLjI1cztcbn1cblxuQGtleWZyYW1lcyBmbHktY3ljbGUge1xuXHQxMDAlIHtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZseS1yaWdodC1vbmUge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuXHR9XG5cblx0MTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG5cdH1cblxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDMwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuXHR9XG5cblx0MTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG5cdH1cblxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41dmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcblx0fVxuXG5cdDUxJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcblx0fVxufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNBM0U0RDc7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbnB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgY29sb3IgOiB3aGl0ZTtcbiAgICBmb250LXNpemUgOiAyMHB4O1xufVxuXG5cblxuIl19 */"] });
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


class HomeComponent {
    //currentUser: any;
    constructor() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 192, vars: 0, consts: [[1, "masthead"], [1, "bird-container", "bird-container--one"], [1, "bird", "bird--one"], [1, "bird-container", "bird-container--two"], [1, "bird", "bird--two"], [1, "bird-container", "bird-container--three"], [1, "bird", "bird--three"], [1, "bird-container", "bird-container--four"], [1, "bird", "bird--four"], [1, "container", "d-flex", "h-100", "align-items-center"], [1, "mx-auto", "text-left"], [1, "mx-auto", "my-0"], [1, "text-white-50", "mx-auto", "mt-2", "mb-5", 2, "text-align", "left"], ["href", "#", 1, "mx-2"], ["href", "https://github.com/SatitaVitt"], [1, "fab", "fa-github"], ["href", "mailto:sv439@scarletmail.rutgers.edu?subject=Suggestions your website~"], [1, "far", "fa-paper-plane"], ["href", "https://www.instagram.com/satitavv/"], [1, "fab", "fa-instagram"], [1, "arrows"], [1, "bottomright"], ["src", "assets/img/ZEPETO_CAPTURE 6.PNG", "alt", "", "width", "306px", "height", "546px"], ["id", "about", 1, "about-section", "text-center"], [1, "container"], [1, "mb-0", "text-black-50"], ["id", "project", 1, "projects-section", "bg-light", "extend-lg"], [1, "row", "align-items-center", "no-gutters", "mb-4", "mb-lg-5"], [1, "col-xl-7", "col-lg-6"], [1, "d-flex", "justify-content-center"], ["src", "assets/img/maze01.png", "alt", "", 1, "img-fluid", "mb-3", "mb-lg-0", 2, "height", "70%", "width", "70%", "text-align", "center"], [1, "col-xl-5", "col-lg-3"], [1, "featured-text", "text-center", "text-lg-left"], [1, "text-black-50", "mb-0"], [1, "row", "justify-content-center", "no-gutters", "mb-5", "mb-lg-0"], [1, "bg-black", "text-center", "h-100", "project"], [1, "project-text", "w-100", "my-auto", "text-center", "text-lg-left"], [1, "text-white"], ["href", "assets/img/CS224U_Final_Paper_Spring_2022.pdf"], [1, "mb-0", "text-white-50"], [1, "far", "fa-file-alt"], [1, "d-none", "d-lg-block", "mb-0", "ml-0"], ["src", "assets/img/pichaqiu.gif", "alt", "", "width", "150", "height", "100"], ["src", "assets/img/pichaqiu.gif", "width", "150", "height", "100", "alt", ""], ["href", "assets/img/Imputation_of_Missing_Financial_Data.pdf"], ["src", "assets/img/cs229_project_poster.jpg", "alt", "CS229 Poster Section @ Stanford", "width", "50%"], ["href", "assets/img/cs231n_final_report.pdf"], ["src", "assets/img/pichaqiu.gif", "alt", "", "width", "150", "height", "100", 2, "transform", "scaleX(-1)"], ["src", "assets/img/pichaqiu.gif", "width", "150", "height", "100", "alt", "", 2, "transform", "scaleX(-1)"], ["href", "assets/img/Fast_Tragectory_Replanning (2).pdf"], ["href", "#game"], [1, "row", "justify-content-center", "no-gutters"], ["href", "https://github.com/SatitaVitt/MovieShopCoreAPI"], ["href", "https://github.com/SatitaVitt/MovieShopSPA"], ["href", "hhttps://github.com/SatitaVitt/MovieShop"], [1, "d-none", "d-lg-block", "mb-0", "mr-0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hello and Welcome to my personal website! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Here you will see some of my game developments and previous project explained in details. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Feel free to leave a comment or suggestions by clicking the Comment Section on the NavBar on the top ;)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Auto-Generated Maze Game for 2 players!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Auto generating maze and random player's positions and one final position to get, whoever meet the final goal first will be the WINNER~ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " This game is implementing using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "socket.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " for client-server communication; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Progamming Language :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Html, CSS and Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "(Launching soooooon!)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Multiple Model Ensemble for Cross-Lingual Question Answering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " As the amount of information available to the average person has increased dramatically in recent years, much progress has been made in the field of automated question answering systems. Much of this effort has gone into monolingual question answering, especially in English, due to the overwhelming presence of English-language information present on the web. It can be challenging to apply these results to languages with less readily accessible material, imposing barriers on global communities trying to find relevant information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "In this project, we propose a novel ensemble method for utilizing large English corpora for answering questions in a variety of languages. We find that, when dealing with multilingual queries and an English only context corpus, query translation and late-interaction retrieval outperforms dense passage retrieval with a multilingual encoder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Imputation of Missing Financial Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Missing data is a common practical problem often encountered in data collection. It is prevalent in virtually all areas and the finance industry is one of the most affected. In fact, in asset pricing studies, missing covariates like firm characteristics are frequently observed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "In this project, we aim to find a better approach for imputing financial data via machine learning techniques, so that more complete data can be used for further analysis. To be more specific, we are going to use firm characteristics as our imputation target. Some important characteristics include book-to-market (B2M), operating profitability (OP), investment (INV), and leverage (LEV). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "We mainly try four different algorithms to impute missing data in these firm characteristics: Generative Adversarial Imputation Nets (GAIN), Variational Autoencoder (VAE), KNN impute algorithm, Random Forest Imputation (MissForest). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "hr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Self-Supervised Learning Methods on Room Type Classification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " As the world increasingly embraces smart home technologies and automation, the need for accurate room type classification algorithms has become paramount. These algorithms are instrumental in enhancing home automation, facilitating robot navigation, fortifying security systems, and other AI applications. Our motivation to address this challenge lies in the potential improvements these systems could bring to various domestic and commercial applications, improving lives and operational efficiency. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "The problem at hand involves developing a selfsupervised learning model that can accurately classify different room types in a dynamic domestic environment using visual input. Such a model should account for factors like furniture repositioning, lighting changes, and other environmental alterations affecting room appearances. The input to our algorithm is an image, and we leverage pre-trained self-supervised learning models like SimCLR, MAE, and DINO v2 to output a predicted room type, such as a living room, kitchen, bedroom, or bathroom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Supervised learning models currently in use require extensive labeled datasets, which can be costly, timeconsuming, and subject to human error. Additionally, these models struggle to generalize their learning to unseen environments. To counter these challenges, our focus is on self-supervised learning, where models learn from unlabeled data, creating useful representations for downstream tasks. We aim to utilize these representations to accurately classify room types in a dynamic environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "hr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "A* Algorithm Implementation and Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Problem stated : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Finding the shortest possible path from a START (A) postion to a TARGET (T) position with randomly generated blocks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Algorithms implemented : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Forward A* Tracking VS. Backward A* Tracking, Heuristics in the Adapted A* Tracking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Report : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Mainly comparing all three algorithms when facing the problem of finding the shortest path. Explaining reason such as \"Why Repeated Forward A* with Adaptive A* is sometimes faster than Repeated Forward A* with A* and sometime isn't\" based on our research and implementation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Movie Shop Single Page Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "This SPA is use to shop for movies, this is a full stack application where I use Angular for Frontend and .NET framework and C# for Backend and implemented API to connect in between. Having a relational database using Microsoft AQL server to hold the database and generating SQL queries using LINQ from the Backend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "More details : features of this project includes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " 1). User login/register/JWT Authenication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " 2). Users have own categories of movies sorted by favorited and purchased ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " 3). Movies can be displayed by different genres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " 4). Pagination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Github Source code are below~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Angular SPA Frontend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " .NET MVC Backend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "hr", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@600&family=Dancing+Script&family=Exo:wght@700&family=Grenze+Gotisch:wght@300&display=swap\");\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n\tbox-sizing: border-box;\n}\n\n\n\n.bottomright[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 45%;\n\tleft: 75%;\n  }\n\n.bottomleft[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 70%;\n\tright: 70%;\n}\n\n\n\n.arrows[_ngcontent-%COMP%] {\n\tposition: relative;\n\tposition: absolute;\n\ttop: 80%;\n\tleft: 50%;\n\twidth: 80px;\n\theight: 80px;\n\ttransform: translate(-50%, -50%);\n  }\n\n.arrows[_ngcontent-%COMP%]:before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tborder-left: 26.66667px solid rgba(0, 0, 0, 0.7);\n\tborder-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);\n\ttransform: translate(26.66667px, 106.66667px) rotate(-45deg);\n\tanimation: arrows 1.5s linear infinite;\n  }\n\n.arrows[_ngcontent-%COMP%]:after {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tborder-left: 26.66667px solid rgba(0, 0, 0, 0.7);\n\tborder-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);\n\ttransform: translate(53.33333px, 0px) rotate(-45deg);\n\tanimation: arrows 1.5s linear infinite -0.75s;\n  }\n\n@keyframes arrows {\n\t0% {\n\t  border-left: 26.66667px solid transparent;\n\t  border-bottom: 26.66667px solid transparent;\n\t  transform: translate(-13.33333px, -53.33333px) rotate(-45deg);\n\t}\n\t10%, 90% {\n\t  border-left: 26.66667px solid transparent;\n\t  border-bottom: 26.66667px solid transparent;\n\t}\n\t50% {\n\t  border-left: 26.66667px solid rgba(0, 0, 0, 0.7);\n\t  border-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);\n\t  transform: translate(-13.33333px, 0px) rotate(-45deg);\n\t}\n\t100% {\n\t  border-left: 26.66667px solid transparent;\n\t  border-bottom: 26.66667px solid transparent;\n\t  transform: translate(-13.33333px, 53.33333px) rotate(-45deg);\n\t}\n  }\n\n\n\n.bird[_ngcontent-%COMP%] {\n\tbackground-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);\n\tbackground-size: auto 100%;\n\twidth: 88px;\n\theight: 125px;\n\twill-change: background-position;\n\tanimation-name: fly-cycle;\n\tanimation-timing-function: steps(10);\n\tanimation-iteration-count: infinite;\n}\n\n.bird--one[_ngcontent-%COMP%] {\n\tanimation-duration: 1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird--two[_ngcontent-%COMP%] {\n\tanimation-duration: 0.9s;\n\tanimation-delay: -0.75s;\n}\n\n.bird--three[_ngcontent-%COMP%] {\n\tanimation-duration: 1.25s;\n\tanimation-delay: -0.25s;\n}\n\n.bird--four[_ngcontent-%COMP%] {\n\tanimation-duration: 1.1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: -10%;\n\ttransform: scale(0) translateX(-10vw);\n\twill-change: transform;\n\tanimation-name: fly-right-one;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\n.bird-container--one[_ngcontent-%COMP%] {\n\tanimation-duration: 15s;\n\tanimation-delay: 0;\n}\n\n.bird-container--two[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 1s;\n}\n\n.bird-container--three[_ngcontent-%COMP%] {\n\tanimation-duration: 14.6s;\n\tanimation-delay: 9.5s;\n}\n\n.bird-container--four[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 10.25s;\n}\n\n@keyframes fly-cycle {\n\t100% {\n\t\tbackground-position: -900px 0;\n\t}\n}\n\n@keyframes fly-right-one {\n\t0% {\n\t\ttransform: scale(0.3) translateX(-10vw);\n\t}\n\n\t10% {\n\t\ttransform: translateY(2vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(0vh) translateX(30vw) scale(0.5);\n\t}\n\n\t30% {\n\t\ttransform: translateY(4vh) translateX(50vw) scale(0.6);\n\t}\n\n\t40% {\n\t\ttransform: translateY(2vh) translateX(70vw) scale(0.6);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.6);\n\t}\n\n\t60% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n}\n\n@keyframes fly-right-two {\n\t0% {\n\t\ttransform: translateY(-2vh) translateX(-10vw) scale(0.5);\n\t}\n\n\t10% {\n\t\ttransform: translateY(0vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(-4vh) translateX(30vw) scale(0.6);\n\t}\n\n\t30% {\n\t\ttransform: translateY(1vh) translateX(50vw) scale(0.45);\n\t}\n\n\t40% {\n\t\ttransform: translateY(-2.5vh) translateX(70vw) scale(0.5);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.45);\n\t}\n\n\t51% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color:#A3E4D7;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\n.text-white-50[_ngcontent-%COMP%] {\n    color: rgba(255,255,255,.5)!important;\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtMQUFrTDs7QUFFbEw7OztDQUdDLHNCQUFzQjtBQUN2Qjs7QUFFQSwwREFBMEQ7O0FBQzFEO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0VBQ1I7O0FBRUY7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7QUFDWDs7QUFFQSxzQkFBc0I7O0FBQ3RCO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0NBQWdDO0VBQy9COztBQUVBO0NBQ0QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGdEQUFnRDtDQUNoRCxrREFBa0Q7Q0FDbEQsNERBQTREO0NBQzVELHNDQUFzQztFQUNyQzs7QUFFQTtDQUNELFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixnREFBZ0Q7Q0FDaEQsa0RBQWtEO0NBQ2xELG9EQUFvRDtDQUNwRCw2Q0FBNkM7RUFDNUM7O0FBRUE7Q0FDRDtHQUNFLHlDQUF5QztHQUN6QywyQ0FBMkM7R0FDM0MsNkRBQTZEO0NBQy9EO0NBQ0E7R0FDRSx5Q0FBeUM7R0FDekMsMkNBQTJDO0NBQzdDO0NBQ0E7R0FDRSxnREFBZ0Q7R0FDaEQsa0RBQWtEO0dBQ2xELHFEQUFxRDtDQUN2RDtDQUNBO0dBQ0UseUNBQXlDO0dBQ3pDLDJDQUEyQztHQUMzQyw0REFBNEQ7Q0FDOUQ7RUFDQzs7QUFHRixzQkFBc0I7O0FBRXRCO0NBQ0MsNkZBQTZGO0NBQzdGLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsYUFBYTtDQUNiLGdDQUFnQztDQUNoQyx5QkFBeUI7Q0FDekIsb0NBQW9DO0NBQ3BDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7Q0FDVixxQ0FBcUM7Q0FDckMsc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QixpQ0FBaUM7Q0FDakMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDO0VBQ0MsNkJBQTZCO0NBQzlCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHVDQUF1QztDQUN4Qzs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDtBQUNEOztBQUVBO0NBQ0M7RUFDQyx3REFBd0Q7Q0FDekQ7O0NBRUE7RUFDQyxzREFBc0Q7Q0FDdkQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7O0NBRUE7RUFDQyx5REFBeUQ7Q0FDMUQ7O0NBRUE7RUFDQyx1REFBdUQ7Q0FDeEQ7O0NBRUE7RUFDQyx3REFBd0Q7Q0FDekQ7O0NBRUE7RUFDQyx3REFBd0Q7Q0FDekQ7QUFDRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDYwMCZmYW1pbHk9RGFuY2luZytTY3JpcHQmZmFtaWx5PUV4bzp3Z2h0QDcwMCZmYW1pbHk9R3JlbnplK0dvdGlzY2g6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKnN0eWxlc2hlZXQgZm9yIHB1dHRpbmcgdGhpbmdzIGluIHRoZSBjb3JuZXIgb2YgdGhlIHBhZ2UqL1xuLmJvdHRvbXJpZ2h0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDQ1JTtcblx0bGVmdDogNzUlO1xuICB9XG5cbi5ib3R0b21sZWZ0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDcwJTtcblx0cmlnaHQ6IDcwJTtcbn1cbiAgXG4vKnN0YXJ0IG9mIGRvd24gYXJyb3cqL1xuLmFycm93cyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDgwJTtcblx0bGVmdDogNTAlO1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmFycm93czpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXItbGVmdDogMjYuNjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdGJvcmRlci1ib3R0b206IDI2LjY2NjY3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNi42NjY2N3B4LCAxMDYuNjY2NjdweCkgcm90YXRlKC00NWRlZyk7XG5cdGFuaW1hdGlvbjogYXJyb3dzIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuYXJyb3dzOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyLWxlZnQ6IDI2LjY2NjY3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHRib3JkZXItYm90dG9tOiAyNi42NjY2N3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTMuMzMzMzNweCwgMHB4KSByb3RhdGUoLTQ1ZGVnKTtcblx0YW5pbWF0aW9uOiBhcnJvd3MgMS41cyBsaW5lYXIgaW5maW5pdGUgLTAuNzVzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGFycm93cyB7XG5cdDAlIHtcblx0ICBib3JkZXItbGVmdDogMjYuNjY2NjdweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0ICBib3JkZXItYm90dG9tOiAyNi42NjY2N3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHQgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMy4zMzMzM3B4LCAtNTMuMzMzMzNweCkgcm90YXRlKC00NWRlZyk7XG5cdH1cblx0MTAlLCA5MCUge1xuXHQgIGJvcmRlci1sZWZ0OiAyNi42NjY2N3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHQgIGJvcmRlci1ib3R0b206IDI2LjY2NjY3cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdH1cblx0NTAlIHtcblx0ICBib3JkZXItbGVmdDogMjYuNjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdCAgYm9yZGVyLWJvdHRvbTogMjYuNjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEzLjMzMzMzcHgsIDBweCkgcm90YXRlKC00NWRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdCAgYm9yZGVyLWxlZnQ6IDI2LjY2NjY3cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdCAgYm9yZGVyLWJvdHRvbTogMjYuNjY2NjdweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTMuMzMzMzNweCwgNTMuMzMzMzNweCkgcm90YXRlKC00NWRlZyk7XG5cdH1cbiAgfVxuXHRcblxuLyplbmQgb2YgYXJyb3cgYm91bmNlKi9cblxuLmJpcmQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Zyk7XG5cdGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuXHR3aWR0aDogODhweDtcblx0aGVpZ2h0OiAxMjVweDtcblx0d2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XG5cdGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5iaXJkLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC0tdHdvIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbn1cblxuLmJpcmQtLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG59XG5cbi5iaXJkLS1mb3VyIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjFzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uYmlyZC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMjAlO1xuXHRsZWZ0OiAtMTAlO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHRhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmJpcmQtY29udGFpbmVyLS1vbmUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE1cztcblx0YW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG4uYmlyZC1jb250YWluZXItLXR3byB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uYmlyZC1jb250YWluZXItLXRocmVlIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNC42cztcblx0YW5pbWF0aW9uLWRlbGF5OiA5LjVzO1xufVxuXG4uYmlyZC1jb250YWluZXItLWZvdXIge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE2cztcblx0YW5pbWF0aW9uLWRlbGF5OiAxMC4yNXM7XG59XG5cbkBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcblx0MTAwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXHR9XG5cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG5cdH1cblxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQ1MSUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG5cdH1cbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojQTNFNEQ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJ1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG4udGV4dC13aGl0ZS01MCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */", "#mainNav[_ngcontent-%COMP%] {\n    min-height: 56px;\n    background-color: #fff;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    font-size: 80%;\n    padding: 0.75rem;\n    color: #ad744d;\n    border: 1px solid #E59866;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    color: #FFC300;\n    font-weight: 700;\n    padding: .9rem 0;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n    color: fade(white, 80%);\n    outline: none;\n    background-color: transparent;\n  }\n\n #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus {\n    outline: none;\n    background-color: transparent;\n  }\n\n @media (min-width: 992px) {\n    #mainNav[_ngcontent-%COMP%] {\n      padding-top: 0;\n      padding-bottom: 0;\n      border-bottom: none;\n      background-color: transparent;\n      transition: background-color 0.3s ease-in-out;\n    }\n    #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n      padding: .5rem 0;\n      color: rgba(255, 255, 255, 0.5);\n    }\n    #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n      transition: none;\n      padding: 2rem 1.5rem;\n      color: rgba(255, 255, 255, 0.5);\n    }\n    #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n      color: rgba(255, 255, 255, 0.75);\n    }\n    #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n      color: white;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%] {\n      background-color: #fff;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n      color: #FFC300;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n      color: #FFC300;\n      padding: 1.5rem 1.5rem 1.25rem;\n      border-bottom: 0.25rem solid transparent;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n      color: #e29664;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n      color: #81563a;\n    }\n    #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n      color: #b97d54;\n      outline: none;\n      border-bottom: 0.25rem solid #64a19d;\n    }\n  }\n\n .masthead[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: auto;\n    min-height: 35rem;\n    padding: 15rem 0;\n    background: linear-gradient(to bottom, rgba(22, 22, 22, 0.2) 0%, rgba(255, 240, 110, 0.6) 75%, #FFC300 100%), url('gold.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-size: cover;\n  }\n\n .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\n    \n    font-family: 'Comfortaa', cursive;\n      font-size: 3rem;\n      line-height: 3rem;\n    letter-spacing: 0.2rem;\n    background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));\n    \n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n\n    overflow: hidden; \n    border-right: .15em solid grey; \n    white-space: wrap; \n    margin: 0 auto; \n    letter-spacing: .2em; \n    animation: \n      typing 3.5s steps(40, end),\n      blink-caret .75s step-end infinite;\n  }\n\n \n\n @keyframes typing {\n\tfrom { width: 70% }\n\tto { width: 100% }\n  \t}\n\n \n\n @keyframes blink-caret {\n\tfrom, to { border-color: transparent }\n\t50% { border-color: grey; }\n  }\n\n .masthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    \n\t  font-size: 1rem;\n    text-align: left;\n  }\n\n @media (min-width: 768px) {\n    .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n      line-height: 2rem;\n    }\n  }\n\n @media (min-width: 992px) {\n    .masthead[_ngcontent-%COMP%] {\n      height: 100vh;\n      padding: 0;\n    }\n    .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n      line-height: 2rem;\n      letter-spacing: 0.2rem;\n    }\n    .masthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\t  \n      font-size: 1.25rem;\n    }\n  }\n\n .btn[_ngcontent-%COMP%] {\n    box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n    padding: 1.25rem 2rem;\n    font-family: 'Varela Round';\n    font-size: 80%;\n    text-transform: uppercase;\n    letter-spacing: .15rem;\n    border: 0;\n  }\n\n .btn-primary[_ngcontent-%COMP%] {\n    background-color: #ad744d;\n  }\n\n .btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #775036;\n  }\n\n .btn-primary[_ngcontent-%COMP%]:focus {\n    background-color: #885b3e;\n    color: white;\n  }\n\n .btn-primary[_ngcontent-%COMP%]:active {\n    background-color: #8a5c3e !important;\n  }\n\n .about-section[_ngcontent-%COMP%] {\n    padding-top: 10rem;\n    background: linear-gradient(to bottom, #FFC300 0%, rgba(254, 243, 103, 0.9) 75%, rgba(254, 243, 103, 0.8) 100%);\n    \n  }\n\n .about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n    font-family: 'Comfortaa', cursive;\n    font-size: 1.7rem;\n    line-height: 2rem;\n    letter-spacing: 0.15rem;\n    text-align: left;\n    \n  }\n\n .projects-section[_ngcontent-%COMP%] {\n    padding: 5rem;\n    font-family: 'Comfortaa', cursive;\n    \n    font-size: 1rem;\n    line-height: 1.5rem;\n    letter-spacing: 0.15rem;\n    text-align: left;\n    \n  }\n\n .projects-section[_ngcontent-%COMP%]   .featured-text[_ngcontent-%COMP%] {\n    padding: 2rem;\n    color:green;\n    font-family: 'Comfortaa', cursive;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    letter-spacing: 0.15rem;\n    text-align: left;\n  }\n\n .projects-section[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n    color: azure;\n  }\n\n @media (min-width: 992px) {\n    .projects-section[_ngcontent-%COMP%]   .featured-text[_ngcontent-%COMP%] {\n      padding: 0 0 0 2rem;\n      border-left: 0.5rem solid #ad744d;\n    }\n  }\n\n .projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%] {\n    padding: 3rem;\n    font-size: 90%;\n  }\n\n @media (min-width: 992px) {\n    .projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%] {\n      padding: 5rem;\n    }\n    .projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n      border-color: #ad744d;\n      border-width: .25rem;\n      width: 30%;\n    }\n  }\n\n .signup-section[_ngcontent-%COMP%] {\n    padding: 10rem 0;\n    background: linear-gradient(to bottom, rgba(254, 243, 103, 0.1) 0%, rgba(254, 243, 103, 0.5) 75%, #161616 100%), url('bg-signup.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-size: cover;\n  }\n\n .signup-section[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n    padding: 1.25rem 2rem;\n    height: auto;\n    font-family: 'Varela Round';\n    font-size: 80%;\n    text-transform: uppercase;\n    letter-spacing: 0.15rem;\n    border: 0;\n  }\n\n .contact-section[_ngcontent-%COMP%] {\n    padding: 5rem 0 0;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border: 0;\n    border-bottom: 0.25rem solid #d48e5f;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    font-family: 'Varela Round';\n    text-transform: uppercase;\n    letter-spacing: 0.15rem;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-color: #ad744d;\n    border-width: 0.25rem;\n    width: 3rem;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    height: 3rem;\n    width: 3rem;\n    background: rgba(254, 243, 103, 0.1);\n    border-radius: 100%;\n    line-height: 3rem;\n    color: rgba(254, 243, 103, 0.3);\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgba(254, 243, 103, 0.5);\n  }\n\n .contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    color: #fff;\n  }\n\n body[_ngcontent-%COMP%] {\n    font-family: 'Nunito';\n    letter-spacing: 0.0625em;\n  }\n\n a[_ngcontent-%COMP%] {\n    color: #ad744d;\n  }\n\n a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n    color: #61412b;\n  }\n\n .bg-black[_ngcontent-%COMP%] {\n    background-color: #FFC300 !important;\n  }\n\n .bg-primary[_ngcontent-%COMP%] {\n    background-color: #ad744d !important;\n  }\n\n .text-primary[_ngcontent-%COMP%] {\n    color: #FFC300 !important;\n  }\n\n footer[_ngcontent-%COMP%] {\n    padding: 5rem 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYWRkaXRpb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0NBRUQsZ0NBQWdDOztDQUNoQztJQUNHLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7O0NBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0NBRUE7SUFDRSxhQUFhO0VBQ2Y7O0NBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7Q0FFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsNkJBQTZCO0VBQy9COztDQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjs7Q0FFQTtJQUNFO01BQ0UsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLDZDQUE2QztJQUMvQztJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQiwrQkFBK0I7SUFDakM7SUFDQTtNQUNFLGdDQUFnQztJQUNsQztJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsYUFBYTtNQUNiLG9DQUFvQztJQUN0QztFQUNGOztDQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2SEFBNEk7SUFDNUksMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0VBQ3hCOztDQUVBOztJQUVFLCtCQUErQjtJQUMvQixpQ0FBaUM7TUFDL0IsZUFBZTtNQUNmLGlCQUFpQjtJQUNuQixzQkFBc0I7SUFDdEIsdUZBQXVGOztJQUV2RixvQ0FBb0M7SUFDcEMsNkJBQTZCOztJQUU3QixnQkFBZ0IsRUFBRSw0REFBNEQ7SUFDOUUsOEJBQThCLEVBQUUseUJBQXlCO0lBQ3pELGlCQUFpQixFQUFFLHVDQUF1QztJQUMxRCxjQUFjLEVBQUUsc0RBQXNEO0lBQ3RFLG9CQUFvQixFQUFFLHFCQUFxQjtJQUMzQzs7d0NBRW9DO0VBQ3RDOztDQUVBLHNCQUFzQjs7Q0FFdkI7Q0FDQSxPQUFPLFdBQVc7Q0FDbEIsS0FBSyxZQUFZO0dBQ2Y7O0NBRUQsaUNBQWlDOztDQUNqQztDQUNELFdBQVcsMEJBQTBCO0NBQ3JDLE1BQU0sa0JBQWtCLEVBQUU7RUFDekI7O0NBRUE7SUFDRSxvQkFBb0I7R0FDckIsZUFBZTtJQUNkLGdCQUFnQjtFQUNsQjs7Q0FFQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtJQUNuQjtFQUNGOztDQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2IsVUFBVTtJQUNaO0lBQ0E7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHNCQUFzQjtJQUN4QjtJQUNBO0dBQ0Qsb0JBQW9CO01BQ2pCLGtCQUFrQjtJQUNwQjtFQUNGOztDQUVBO0lBQ0UsaUVBQWlFO0lBQ2pFLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztDQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztDQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztDQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7Q0FFQTtJQUNFLG9DQUFvQztFQUN0Qzs7Q0FFQTtJQUNFLGtCQUFrQjtJQUNsQiwrR0FBK0c7O0VBRWpIOztDQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7O0VBRWxCOztDQUVBO0lBQ0UsYUFBYTtJQUNiLGlDQUFpQzs7SUFFakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCOztFQUVsQjs7Q0FFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7Q0FDQTtJQUNFLFlBQVk7RUFDZDs7Q0FHQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGlDQUFpQztJQUNuQztFQUNGOztDQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0NBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLG9CQUFvQjtNQUNwQixVQUFVO0lBQ1o7RUFDRjs7Q0FFQTtJQUNFLGdCQUFnQjtJQUNoQixxSUFBb0o7SUFDcEosMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0VBQ3hCOztDQUVBO0lBQ0UsaUVBQWlFO0lBQ2pFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7Q0FFQTtJQUNFLGlCQUFpQjtFQUNuQjs7Q0FFQTtJQUNFLFNBQVM7SUFDVCxvQ0FBb0M7RUFDdEM7O0NBRUE7SUFDRSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qix1QkFBdUI7RUFDekI7O0NBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7Q0FFQTtJQUNFLGdCQUFnQjtFQUNsQjs7Q0FFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLCtCQUErQjtFQUNqQzs7Q0FFQTtJQUNFLCtCQUErQjtFQUNqQzs7Q0FFQTtJQUNFLFdBQVc7RUFDYjs7Q0FFQTtJQUNFLHFCQUFxQjtJQUNyQix3QkFBd0I7RUFDMUI7O0NBRUE7SUFDRSxjQUFjO0VBQ2hCOztDQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0NBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0NBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0NBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0NBRUE7SUFDRSxlQUFlO0VBQ2pCIiwiZmlsZSI6ImhvbWUvYWRkaXRpb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBTdGFydCBCb290c3RyYXAgLSBHcmF5c2NhbGUgdjUuMC45IChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3MvZ3JheXNjYWxlKVxuICogQ29weXJpZ2h0IDIwMTMtMjAxOSBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtZ3JheXNjYWxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cblxuIC8qc3R5bGVzaGVldCBmb3IgdGhlIHdob2xlIHBhZ2UqL1xuICNtYWluTmF2IHtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBjb2xvcjogI2FkNzQ0ZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTU5ODY2O1xuICB9XG4gIFxuICAjbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAjRkZDMzAwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogLjlyZW0gMDtcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogZmFkZSh3aGl0ZSwgODAlKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06YWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNtYWluTmF2IHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXYtbGluayB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2LWxpbms6aG92ZXIge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXYtbGluazphY3RpdmUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XG4gICAgICBjb2xvcjogI0ZGQzMwMDtcbiAgICB9XG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsge1xuICAgICAgY29sb3I6ICNGRkMzMDA7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDEuMjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazpob3ZlciB7XG4gICAgICBjb2xvcjogI2UyOTY2NDtcbiAgICB9XG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjODE1NjNhO1xuICAgIH1cbiAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgY29sb3I6ICNiOTdkNTQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjNjRhMTlkO1xuICAgIH1cbiAgfVxuICBcbiAgLm1hc3RoZWFkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDM1cmVtO1xuICAgIHBhZGRpbmc6IDE1cmVtIDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMiwgMjIsIDIyLCAwLjIpIDAlLCByZ2JhKDI1NSwgMjQwLCAxMTAsIDAuNikgNzUlLCAjRkZDMzAwIDEwMCUpLCB1cmwoXCJzcmMvYXNzZXRzL2ltZy9nb2xkLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICAubWFzdGhlYWQgaDEge1xuXG4gICAgLypmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7Ki9cbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpKTtcbiAgICBcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXG4gICAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCBncmV5OyAvKiBUaGUgdHlwd3JpdGVyIGN1cnNvciAqL1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwOyAvKiBLZWVwcyB0aGUgY29udGVudCBvbiBhIHNpbmdsZSBsaW5lICovXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogLjJlbTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIGFuaW1hdGlvbjogXG4gICAgICB0eXBpbmcgMy41cyBzdGVwcyg0MCwgZW5kKSxcbiAgICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG4gIH1cblxuICAvKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xuICBcblx0QGtleWZyYW1lcyB0eXBpbmcge1xuXHRmcm9tIHsgd2lkdGg6IDcwJSB9XG5cdHRvIHsgd2lkdGg6IDEwMCUgfVxuICBcdH1cbiAgXG4gIC8qIFRoZSB0eXBld3JpdGVyIGN1cnNvciBlZmZlY3QgKi9cbiAgQGtleWZyYW1lcyBibGluay1jYXJldCB7XG5cdGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XG5cdDUwJSB7IGJvcmRlci1jb2xvcjogZ3JleTsgfVxuICB9XG4gIFxuICAubWFzdGhlYWQgaDIge1xuICAgIC8qbWF4LXdpZHRoOiAyMHJlbTsqL1xuXHQgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubWFzdGhlYWQgaDEge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAubWFzdGhlYWQge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5tYXN0aGVhZCBoMSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgfVxuICAgIC5tYXN0aGVhZCBoMiB7XG5cdCAgLyptYXgtd2lkdGg6IDMwcmVtOyovXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICB9XG4gIFxuICAuYnRuIHtcbiAgICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjE4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xNXJlbTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkNzQ0ZDtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc1MDM2O1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODViM2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE1YzNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5hYm91dC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGQzMwMCAwJSwgcmdiYSgyNTQsIDI0MywgMTAzLCAwLjkpIDc1JSwgcmdiYSgyNTQsIDI0MywgMTAzLCAwLjgpIDEwMCUpO1xuICAgIFxuICB9XG4gIFxuICAuYWJvdXQtc2VjdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICB9XG4gIFxuICAucHJvamVjdHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbTtcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG4gICAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBcbiAgfVxuICBcbiAgLnByb2plY3RzLXNlY3Rpb24gLmZlYXR1cmVkLXRleHQge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgY29sb3I6Z3JlZW47XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnByb2plY3RzLXNlY3Rpb24gLnAge1xuICAgIGNvbG9yOiBhenVyZTtcbiAgfVxuICBcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5wcm9qZWN0cy1zZWN0aW9uIC5mZWF0dXJlZC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDJyZW07XG4gICAgICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICNhZDc0NGQ7XG4gICAgfVxuICB9XG4gIFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDVyZW07XG4gICAgfVxuICAgIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LXRleHQgaHIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYWQ3NDRkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAuMjVyZW07XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgfVxuICBcbiAgLnNpZ251cC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHJlbSAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU0LCAyNDMsIDEwMywgMC4xKSAwJSwgcmdiYSgyNTQsIDI0MywgMTAzLCAwLjUpIDc1JSwgIzE2MTYxNiAxMDAlKSwgdXJsKFwic3JjL2Fzc2V0cy9pbWcvYmctc2lnbnVwLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICAuc2lnbnVwLXNlY3Rpb24gLmZvcm0taW5saW5lIGlucHV0IHtcbiAgICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjE4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICBcbiAgLmNvbnRhY3Qtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbSAwIDA7XG4gIH1cbiAgXG4gIC5jb250YWN0LXNlY3Rpb24gLmNhcmQge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkICNkNDhlNWY7XG4gIH1cbiAgXG4gIC5jb250YWN0LXNlY3Rpb24gLmNhcmQgaDQge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5jYXJkIGhyIHtcbiAgICBib3JkZXItY29sb3I6ICNhZDc0NGQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5zb2NpYWwge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gIH1cbiAgXG4gIC5jb250YWN0LXNlY3Rpb24gLnNvY2lhbCBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyNDMsIDEwMywgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NCwgMjQzLCAxMDMsIDAuMyk7XG4gIH1cbiAgXG4gIC5jb250YWN0LXNlY3Rpb24gLnNvY2lhbCBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTQsIDI0MywgMTAzLCAwLjUpO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIC5zb2NpYWwgYTphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNWVtO1xuICB9XG4gIFxuICBhIHtcbiAgICBjb2xvcjogI2FkNzQ0ZDtcbiAgfVxuICBcbiAgYTpmb2N1cywgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNjE0MTJiO1xuICB9XG4gIFxuICAuYmctYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJnLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDc0NGQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRleHQtcHJpbWFyeSB7XG4gICAgY29sb3I6ICNGRkMzMDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1cmVtIDA7XG4gIH1cbiAgXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: 'home.component.html',
                styleUrls: ['./home.component.css', './addition.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "DKKQ":
/*!********************************************!*\
  !*** ./src/app/baking/baking.component.ts ***!
  \********************************************/
/*! exports provided: BakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BakingComponent", function() { return BakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BakingComponent {
    constructor() { }
    ngOnInit() {
    }
}
BakingComponent.ɵfac = function BakingComponent_Factory(t) { return new (t || BakingComponent)(); };
BakingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BakingComponent, selectors: [["app-baking"]], decls: 40, vars: 0, consts: [[1, "body"], [1, "text1"], [1, "grid-container"], ["src", "assets/bake-img/mango-nuomici.JPG", "alt", "", 1, "grid-item", "grid-item-5"], ["src", "assets/bake-img/souffle.jpg", "alt", "", 1, "grid-item", "grid-item-6"], ["src", "assets/bake-img/berry-yogurt-cake.jpg", "alt", "", 1, "grid-item", "grid-item-7"], ["src", "assets/bake-img/cotton-cheese-cake.JPG", "alt", "", 1, "grid-item", "grid-item-9"], ["src", "assets/bake-img/cheesecake.jpg", "alt", "", 1, "grid-item", "grid-item-12"], ["src", "assets/bake-img/salmon-crepe.JPG", "alt", "", 1, "grid-item", "grid-item-14"], ["src", "assets/bake-img/glutinous-rice-balls.JPG", "alt", "", 1, "grid-item", "grid-item-15"], ["src", "assets/bake-img/marshmallow-chip.JPG", "alt", "", 1, "grid-item", "grid-item-16"]], template: function BakingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All the Dessert Receipes I have Tried \uD83D\uDC97");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click each photos to see the process of making these desserts!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\"Mango Nuomici - Almost cried while making this, so hard to put mango inside of those memorialis hirta\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\"Souffle! Should have put more sugar\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\"Berry Yogurt Cake~\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\"Cotton Cheese Cake - my dad's favorite cake lol, and it is so easy to make");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\"Cheesecake~\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\"Salmon Crepe - Aaaaaamazingggg who said crepe can only be sweet\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\"Glutinous Rice Meatballs - sooo hard to steam it through\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\"Marshmallow w/ Chips!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 70px;\n    padding-bottom: 20px;\n    background-color: #EFE7DC;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    \n  }\n  \n  .text1[_ngcontent-%COMP%]{\n    color: #795647;\n    text-align: left;\n    padding-bottom: 20px;\n    font-family: 'Varela Round';\n  }\n  \n  h1[_ngcontent-%COMP%]{\n      font-size: 1.75rem;\n    \n  }\n  \n  h2[_ngcontent-%COMP%]{\n      font-size: 1.5rem;\n      color: #795647c5;\n  }\n  \n  .grid-container[_ngcontent-%COMP%] {\n    columns: 4 250px;\n    column-gap: 1.5rem;\n    width: 90%;\n    margin: 0 auto;\n  }\n  \n  .grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 150px;\n    margin: 0 1.5rem 1.5rem 0;\n    display: inline-block;\n    width: 100%;\n    border: solid 2px black;\n    padding: 5px;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n    transition: all .25s ease-in-out;\n  }\n  \n  .grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    filter: grayscale(0);\n  }\n  \n  .grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n    border-color: #E98074;\n  }\n  \n  .grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    filter: grayscale(0%);\n    border-radius: 5px;\n    transition: all .25s ease-in-out;\n  }\n  \n  .grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    padding: 0;\n    text-align: center;\n    font-style: italic;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJha2luZy9iYWtpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCOztFQUV4Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtFQUM3Qjs7RUFDQTtNQUNJLGtCQUFrQjs7RUFFdEI7O0VBQ0E7TUFDSSxpQkFBaUI7TUFDakIsZ0JBQWdCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUNBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6ImJha2luZy9iYWtpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFN0RDO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICB9XG4gIFxuICAudGV4dDF7XG4gICAgY29sb3I6ICM3OTU2NDc7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XG4gIH1cbiAgaDF7XG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgXG4gIH1cbiAgaDJ7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjNzk1NjQ3YzU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgY29sdW1uczogNCAyNTBweDtcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuZ3JpZC1jb250YWluZXIgZGl2IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmdyaWQtY29udGFpbmVyIGRpdjpob3ZlciBpbWcge1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICB9XG4gIC5ncmlkLWNvbnRhaW5lciBkaXY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0U5ODA3NDtcbiAgfVxuICAuZ3JpZC1jb250YWluZXIgZGl2IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgfVxuICAuZ3JpZC1jb250YWluZXIgZGl2IHAge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BakingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-baking',
                templateUrl: './baking.component.html',
                styleUrls: ['./baking.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "K9yR":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 41, vars: 0, consts: [["id", "contact", 1, "contact-section", "navbar-expand-lg", "contact-section-color"], [1, "container"], [1, "row"], [1, "col-md-4", "mb-3", "mb-md-0"], [1, "card", "py-4", "h-100"], [1, "card-body", "text-center"], [1, "fas", "fa-map-marked-alt", "text-primary", "mb-2"], [1, "text-uppercase", "m-0"], [1, "my-4"], [1, "small", "text-black-50"], [1, "fas", "fa-envelope", "text-primary", "mb-2"], ["href", "#"], [1, "fas", "fa-mobile-alt", "text-primary", "mb-2"], [1, "social", "d-flex", "justify-content-center"], ["href", "#", 1, "mx-2"], ["href", "https://www.linkedin.com/in/satita-vittayaareekul/"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/SatitaVitt"], [1, "fab", "fa-github"], [1, "small", "text-center", "text-white-50"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Located At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The Hague, The Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "satita.ice.v@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " +1(848)252-8552 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Copyright \u00A9 Satita's Website 2023 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact-section-color[_ngcontent-%COMP%]{\n    \n    \n    \n    \n    \n    background: linear-gradient(to bottom, rgba(22, 22, 22, 0.2) 0%, rgba(255, 240, 110, 0.6) 75%, #FFC300 100%), url('gold-footer.jpg');\n    \n    \n    \n    \n    \n  }\n\n  .card[_ngcontent-%COMP%]{\n    background-color: rgba(255,255,255,.75);\n    border-color: #ad744d;\n    border-bottom: 0.25rem solid #ad744d;\n    .text-primary{\n      color: #ad744d;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixvSUFBbUo7SUFDbkosaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsNEJBQTRCOztFQUU5Qjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDO01BQ0UsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6InRlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qtc2VjdGlvbi1jb2xvcntcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAgIC8qIG1pbi1oZWlnaHQ6IDM1cmVtOyAqL1xuICAgIC8qIHBhZGRpbmc6IDE1cmVtIDA7ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMiwgMjIsIDIyLCAwLjIpIDAlLCByZ2JhKDI1NSwgMjQwLCAxMTAsIDAuNikgNzUlLCAjRkZDMzAwIDEwMCUpLCB1cmwoXCJzcmMvYXNzZXRzL2ltZy9nb2xkLWZvb3Rlci5qcGdcIik7XG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7ICovXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgICBcbiAgfVxuXG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjc1KTtcbiAgICBib3JkZXItY29sb3I6ICNhZDc0NGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjYWQ3NDRkO1xuICAgIC50ZXh0LXByaW1hcnl7XG4gICAgICBjb2xvcjogI2FkNzQ0ZDtcbiAgICB9XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "R0PN":
/*!****************************************!*\
  !*** ./src/app/draw/draw.component.ts ***!
  \****************************************/
/*! exports provided: DrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawComponent", function() { return DrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DrawComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(); };
DrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawComponent, selectors: [["app-draw"]], decls: 2, vars: 0, template: function DrawComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "draw works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmF3L2RyYXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-draw',
                templateUrl: './draw.component.html',
                styleUrls: ['./draw.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
//import { OnInit , Input} from '@angular/core';






function AppComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_33_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 36, vars: 1, consts: [["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], [1, "container"], ["href", "/", 1, "navbar-brand", "js-scroll-trigger"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fas", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["href", "https://satitavitt.github.io/TagCloud/", 1, "nav-item", "nav-link"], ["routerLink", "/blog", 1, "nav-link", "js-scroll-trigger"], ["href", "/draw", 1, "nav-link", "js-scroll-trigger"], ["routerLink", "/bake", 1, "nav-item", "nav-link"], ["routerLink", "/comments", 1, "nav-item", "nav-link"], [1, "w3-dropdown-hover"], [1, "w3-button", "w3-brown", 2, "margin-top", "20px"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-bar-block", "w3-border"], ["href", "#signup", 1, "w3-bar-item", "w3-button"], ["routerLink", "/login", 1, "w3-bar-item", "w3-button"], ["routerLink", "/register", 1, "w3-bar-item", "w3-button"], ["routerLink", "/userpage", 1, "w3-bar-item", "w3-button"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_a_33_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".button[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color:#A3E4D7;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n  }\n  \n  .button[_ngcontent-%COMP%]:hover {background-color: #A3E4D7}\n  \n  .button[_ngcontent-%COMP%]:active {\n    background-color: #A3E4D7;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n  \n  .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n    position: static;\n    color: fade(white, 80%);\n    outline: none;\n    background-color: transparent;\n\n  }\n  \n  .w3-bar[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%], .w3-bar[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]{\n    position:static;\n    float:left\n  }\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%], .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]\n  {width:100%}\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%]   .w3-dropdown-content[_ngcontent-%COMP%], .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]   .w3-dropdown-content[_ngcontent-%COMP%]{\n    min-width:100%\n  }\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-hover[_ngcontent-%COMP%]   .w3-button[_ngcontent-%COMP%], .w3-bar-block[_ngcontent-%COMP%]   .w3-dropdown-click[_ngcontent-%COMP%]   .w3-button[_ngcontent-%COMP%]{\n    width:100%;\n    text-align:left;\n    padding:8px 16px\n  }\n  \n  .w3-dropdown-click[_ngcontent-%COMP%], .w3-dropdown-hover[_ngcontent-%COMP%]{\n    position:relative;\n    display:inline-block;\n    cursor:pointer\n  }\n  \n  .w3-dropdown-hover[_ngcontent-%COMP%]:hover   .w3-dropdown-content[_ngcontent-%COMP%]{\n    display:block\n  }\n  \n  .w3-dropdown-hover[_ngcontent-%COMP%]:first-child, .w3-dropdown-click[_ngcontent-%COMP%]:hover{\n    background-color:#ccc;\n    color:#000\n  }\n  \n  .w3-dropdown-hover[_ngcontent-%COMP%]:hover    > .w3-button[_ngcontent-%COMP%]:first-child, .w3-dropdown-click[_ngcontent-%COMP%]:hover    > .w3-button[_ngcontent-%COMP%]:first-child{\n    background-color:#ccc;\n    color:#000\n  }\n  \n  .w3-bar[_ngcontent-%COMP%]   .w3-bar-item[_ngcontent-%COMP%]{\n    padding:8px 16px;\n    float:left;\n    width:auto;\n    border:none;\n    display:block;\n    outline:0}\n  \n  .w3-bar-block[_ngcontent-%COMP%]   .w3-bar-item[_ngcontent-%COMP%]{\n    width:100%;\n    display:block;\n    padding:8px 16px;\n    text-align:left;\n    border:none;\n    white-space:normal;\n    float:none;\n    outline:0}\n  \n  .w3-bar-block.w3-center[_ngcontent-%COMP%]   .w3-bar-item[_ngcontent-%COMP%]{\n  text-align:center\n}\n  \n  .w3-block[_ngcontent-%COMP%]{\n    display:block;\n    width:100%}\n  \n  .dropdown[_ngcontent-%COMP%] {\n    float: left;\n    overflow: hidden;\n  }\n  \n  .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n    padding: inherit;\n    border: none;\n    outline: none;\n    margin: 0;\n    color: white;\n    background-color: inherit;\n    font-family: inherit;\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: relative;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index:1;\n    color : green;\n    margin:0;\n    padding:8px 16px;\n    float:left;\n    width:auto;\n    border:none;\n    display:block;\n    outline:0\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    color : black;\n    text-decoration: none;\n    display:inline-block;\n    text-align: left;\n\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: rgba(78, 76, 57, 0.5);\n  }\n  \n  .dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    \n    display:inline-block;\n    cursor:pointer\n  }\n  \n  .scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar   *[_ngcontent-%COMP%] {\n    background:white; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQSxlQUFlLHlCQUF5Qjs7RUFFeEM7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDZCQUE2Qjs7RUFFL0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2Y7RUFDRjs7RUFFQTs7R0FFQyxVQUFVOztFQUNYOztJQUVFO0VBQ0Y7O0VBQ0E7O0lBRUUsVUFBVTtJQUNWLGVBQWU7SUFDZjtFQUNGOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQjtFQUNGOztFQUNBO0lBQ0U7RUFDRjs7RUFDQTs7SUFFRSxxQkFBcUI7SUFDckI7RUFDRjs7RUFDQTs7SUFFRSxxQkFBcUI7SUFDckI7RUFDRjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUzs7RUFFWDtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTOztFQUNiO0VBQ0U7QUFDRjs7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVOztFQUdaO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiO0VBQ0Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTs7SUFFRSxvQkFBb0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBM0U0RDc7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI0EzRTREN31cbiAgXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNFNEQ3O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW06aG92ZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgY29sb3I6IGZhZGUod2hpdGUsIDgwJSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICB9XG5cbiAgLnczLWJhciAudzMtZHJvcGRvd24taG92ZXIsLnczLWJhciAudzMtZHJvcGRvd24tY2xpY2t7XG4gICAgcG9zaXRpb246c3RhdGljO1xuICAgIGZsb2F0OmxlZnRcbiAgfVxuXG4gIC53My1iYXItYmxvY2sgLnczLWRyb3Bkb3duLWhvdmVyLFxuICAudzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1jbGlja1xuICB7d2lkdGg6MTAwJX1cbiAgLnczLWJhci1ibG9jayAudzMtZHJvcGRvd24taG92ZXIgLnczLWRyb3Bkb3duLWNvbnRlbnQsXG4gIC53My1iYXItYmxvY2sgLnczLWRyb3Bkb3duLWNsaWNrIC53My1kcm9wZG93bi1jb250ZW50e1xuICAgIG1pbi13aWR0aDoxMDAlXG4gIH1cbiAgLnczLWJhci1ibG9jayAudzMtZHJvcGRvd24taG92ZXIgLnczLWJ1dHRvbixcbiAgLnczLWJhci1ibG9jayAudzMtZHJvcGRvd24tY2xpY2sgLnczLWJ1dHRvbntcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBwYWRkaW5nOjhweCAxNnB4XG4gIH1cblxuICAudzMtZHJvcGRvd24tY2xpY2ssLnczLWRyb3Bkb3duLWhvdmVye1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjpwb2ludGVyXG4gIH1cbiAgLnczLWRyb3Bkb3duLWhvdmVyOmhvdmVyIC53My1kcm9wZG93bi1jb250ZW50e1xuICAgIGRpc3BsYXk6YmxvY2tcbiAgfVxuICAudzMtZHJvcGRvd24taG92ZXI6Zmlyc3QtY2hpbGQsXG4gIC53My1kcm9wZG93bi1jbGljazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7XG4gICAgY29sb3I6IzAwMFxuICB9XG4gIC53My1kcm9wZG93bi1ob3Zlcjpob3ZlciA+IC53My1idXR0b246Zmlyc3QtY2hpbGQsXG4gIC53My1kcm9wZG93bi1jbGljazpob3ZlciA+IC53My1idXR0b246Zmlyc3QtY2hpbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2NjO1xuICAgIGNvbG9yOiMwMDBcbiAgfVxuICAudzMtYmFyIC53My1iYXItaXRlbXtcbiAgICBwYWRkaW5nOjhweCAxNnB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6YXV0bztcbiAgICBib3JkZXI6bm9uZTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG91dGxpbmU6MH1cblxuICAudzMtYmFyLWJsb2NrIC53My1iYXItaXRlbXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcGFkZGluZzo4cHggMTZweDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgd2hpdGUtc3BhY2U6bm9ybWFsO1xuICAgIGZsb2F0Om5vbmU7XG4gICAgb3V0bGluZTowfVxuLnczLWJhci1ibG9jay53My1jZW50ZXIgLnczLWJhci1pdGVte1xuICB0ZXh0LWFsaWduOmNlbnRlclxufVxuICAudzMtYmxvY2t7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDoxMDAlfVxuXG5cbiAgLmRyb3Bkb3duIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZHJvcGRvd24gLmRyb3BidG4ge1xuICAgIHBhZGRpbmc6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OjE7XG4gICAgY29sb3IgOiBncmVlbjtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjhweCAxNnB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6YXV0bztcbiAgICBib3JkZXI6bm9uZTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG91dGxpbmU6MFxuICB9XG5cbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgY29sb3IgOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc4LCA3NiwgNTcsIDAuNSk7XG4gIH1cbiAgXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gICAgXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOnBvaW50ZXJcbiAgfVxuXG4gIC5zY3JvbGxhYmxlLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyICoge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7IFxuICB9Il19 */"] });
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
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components */ "Ndrk");
/* harmony import */ var _userpage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userpage */ "0GV0");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments */ "s1b6");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-sidebar */ "k4pO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _baking_baking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./baking/baking.component */ "DKKQ");
/* harmony import */ var _draw_draw_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./draw/draw.component */ "R0PN");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
//import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';




// used to create fake backend









//import { BlogComponent } from './blog/blog.component';











//import { routes } from './app.routing';
//import {enableProdMode} from '@angular/core';
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
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            //RouterModule.forRoot(routes),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        //HomeComponent,
        _login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _register__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
        _userpage__WEBPACK_IMPORTED_MODULE_9__["UserpageComponent"],
        _comments__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"],
        _baking_baking_component__WEBPACK_IMPORTED_MODULE_17__["BakingComponent"],
        _draw_draw_component__WEBPACK_IMPORTED_MODULE_18__["DrawComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"]
        //BlogComponent
        //FunFactComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_sidebar__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_sidebar__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                    //RouterModule.forRoot(routes),
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }),
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__["ScullyLibModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    //HomeComponent,
                    _login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _register__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                    _userpage__WEBPACK_IMPORTED_MODULE_9__["UserpageComponent"],
                    _comments__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"],
                    _baking_baking_component__WEBPACK_IMPORTED_MODULE_17__["BakingComponent"],
                    _draw_draw_component__WEBPACK_IMPORTED_MODULE_18__["DrawComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _test_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"]
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
        // console.log("onSubmit");
        // console.log("submit - registerform", this.registerForm);
        this.submitted = true;
        this.loading = true;
        // const email = 'satita.ice.v@gmail.com';
        // const name = 'comments from your personal website!'
        // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // this.http.post('https://formspree.io/asdlf7asdf',
        //     { name: name, replyto: email, message: this.registerForm.value.comment },
        //     { 'headers': headers }).subscribe(
        //     response => {
        //         console.log(response);
        //     }
        // );
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".signup-section[_ngcontent-%COMP%] {\n    height: -webkit-fill-available;\n    padding: 20rem 0;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #795548;\n    border-color: #63453b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekIiLCJmaWxlIjoiY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHBhZGRpbmc6IDIwcmVtIDA7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcbiAgICBib3JkZXItY29sb3I6ICM2MzQ1M2I7XG59Il19 */"] });
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

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 159, vars: 0, consts: [[1, "footer"], [1, "bubbles"], [1, "bubble", 2, "--size", "3.7593432177590165rem", "--distance", "8.628241878938002rem", "--position", "8.807552671567807%", "--time", "2.392237598206633s", "--delay", "-2.6841591051927627s"], [1, "bubble", 2, "--size", "5.307505469829502rem", "--distance", "9.166732934472273rem", "--position", "7.903056503785713%", "--time", "2.7788771904269773s", "--delay", "-2.810423398443583s"], [1, "bubble", 2, "--size", "2.449906872138383rem", "--distance", "9.637839115478204rem", "--position", "13.576429590885834%", "--time", "2.8110655883564584s", "--delay", "-3.8744198410108175s"], [1, "bubble", 2, "--size", "5.073452615289758rem", "--distance", "8.675783872834053rem", "--position", "26.657511769386844%", "--time", "3.5365429280862255s", "--delay", "-3.736336785606995s"], [1, "bubble", 2, "--size", "2.467339051929901rem", "--distance", "9.83386812911212rem", "--position", "55.15462907105375%", "--time", "3.6727425239414875s", "--delay", "-2.983973294560614s"], [1, "bubble", 2, "--size", "3.3247733100432413rem", "--distance", "6.771308467539967rem", "--position", "6.80703694112902%", "--time", "2.246933033445681s", "--delay", "-2.8084357712477033s"], [1, "bubble", 2, "--size", "3.375892223673432rem", "--distance", "7.113311991479914rem", "--position", "84.82254488836905%", "--time", "3.024582167563186s", "--delay", "-2.915344274621145s"], [1, "bubble", 2, "--size", "5.211777797916427rem", "--distance", "6.064118260030998rem", "--position", "59.25782437075797%", "--time", "3.8795333812227555s", "--delay", "-3.4337727600751493s"], [1, "bubble", 2, "--size", "5.775611264070439rem", "--distance", "9.555313418940461rem", "--position", "24.484070213030968%", "--time", "3.1621542459669185s", "--delay", "-3.800045302344652s"], [1, "bubble", 2, "--size", "4.466346709976185rem", "--distance", "9.53121118666688rem", "--position", "2.1801062407120515%", "--time", "2.177457787082126s", "--delay", "-3.7732398258328863s"], [1, "bubble", 2, "--size", "2.736329487401851rem", "--distance", "7.374231643486308rem", "--position", "17.82439837668663%", "--time", "2.886704224694804s", "--delay", "-3.9542717321471055s"], [1, "bubble", 2, "--size", "3.738615460920556rem", "--distance", "8.447557944370885rem", "--position", "35.3714495660613%", "--time", "3.4605604369557597s", "--delay", "-2.615622201745073s"], [1, "bubble", 2, "--size", "3.1031025399447794rem", "--distance", "9.060733697773845rem", "--position", "3.6216357331452382%", "--time", "3.8321560001638657s", "--delay", "-3.2980261675012996s"], [1, "bubble", 2, "--size", "2.309551416766909rem", "--distance", "7.116527532456447rem", "--position", "25.215445533928648%", "--time", "3.675302229198492s", "--delay", "-3.4017982811782006s"], [1, "bubble", 2, "--size", "2.974399259800122rem", "--distance", "8.014023806602736rem", "--position", "93.31055866055289%", "--time", "3.5766329000518033s", "--delay", "-3.069225942573383s"], [1, "bubble", 2, "--size", "5.283552444008126rem", "--distance", "6.6781856745844195rem", "--position", "100.98492465378483%", "--time", "3.8925793613339645s", "--delay", "-3.6637057811736278s"], [1, "bubble", 2, "--size", "3.912459546364805rem", "--distance", "7.876680773756956rem", "--position", "85.5303072597473%", "--time", "2.754511783104206s", "--delay", "-2.80198045495687s"], [1, "bubble", 2, "--size", "5.098615528049115rem", "--distance", "7.938301974715154rem", "--position", "34.93332017885895%", "--time", "2.5349961264017913s", "--delay", "-2.5772689147514423s"], [1, "bubble", 2, "--size", "3.1514688807701026rem", "--distance", "7.992539167110263rem", "--position", "55.846647101104736%", "--time", "2.9917394043285657s", "--delay", "-2.724776431623505s"], [1, "bubble", 2, "--size", "5.823684615105062rem", "--distance", "9.389743060831224rem", "--position", "7.015058270680402%", "--time", "2.194858517463796s", "--delay", "-3.390438961791506s"], [1, "bubble", 2, "--size", "3.615235713140745rem", "--distance", "8.755365563195522rem", "--position", "74.2274806307937%", "--time", "3.7926115815132273s", "--delay", "-2.167783089388722s"], [1, "bubble", 2, "--size", "4.715308840927035rem", "--distance", "9.799441955198937rem", "--position", "27.99827787863633%", "--time", "3.2746167450939567s", "--delay", "-2.316100544852564s"], [1, "bubble", 2, "--size", "2.2207024196170293rem", "--distance", "9.538364298864344rem", "--position", "18.232994541884253%", "--time", "3.168686212923326s", "--delay", "-2.1373748053571218s"], [1, "bubble", 2, "--size", "3.534638582967318rem", "--distance", "8.84037329310705rem", "--position", "36.03129490104717%", "--time", "3.1269241520582187s", "--delay", "-2.9064778641538718s"], [1, "bubble", 2, "--size", "3.348087166428936rem", "--distance", "7.080652429554957rem", "--position", "58.67897846261734%", "--time", "2.88128438763002s", "--delay", "-2.7670265499717335s"], [1, "bubble", 2, "--size", "2.0879140333302937rem", "--distance", "8.761846466569615rem", "--position", "80.51396836615379%", "--time", "3.2980570363842676s", "--delay", "-3.555753862513721s"], [1, "bubble", 2, "--size", "2.391761526631986rem", "--distance", "6.544147485658395rem", "--position", "46.72902572901436%", "--time", "3.297044035708918s", "--delay", "-2.444431281204056s"], [1, "bubble", 2, "--size", "5.315428396287753rem", "--distance", "8.026932443418042rem", "--position", "66.7588739677049%", "--time", "2.0804620207832736s", "--delay", "-3.510372262562722s"], [1, "bubble", 2, "--size", "3.7662366518421857rem", "--distance", "7.957995796739397rem", "--position", "96.49924593477888%", "--time", "3.4996910528753133s", "--delay", "-3.725751533317681s"], [1, "bubble", 2, "--size", "4.693553834131858rem", "--distance", "9.928403161324695rem", "--position", "71.79530962648447%", "--time", "2.0486391334930047s", "--delay", "-2.5403587684661906s"], [1, "bubble", 2, "--size", "2.3613783497368184rem", "--distance", "7.862845490121742rem", "--position", "50.813241851794906%", "--time", "3.618717962810517s", "--delay", "-3.0834659975717127s"], [1, "bubble", 2, "--size", "5.941444743174724rem", "--distance", "7.140275594006192rem", "--position", "74.32032885732829%", "--time", "2.4139005584623296s", "--delay", "-3.319431815763208s"], [1, "bubble", 2, "--size", "5.939566314627914rem", "--distance", "6.25247682056398rem", "--position", "6.369474638951393%", "--time", "3.8368928146170096s", "--delay", "-2.6797000527545536s"], [1, "bubble", 2, "--size", "5.344410617062074rem", "--distance", "9.732949942134779rem", "--position", "51.0534048279326%", "--time", "3.0478105345016226s", "--delay", "-2.6862672155062635s"], [1, "bubble", 2, "--size", "5.489276436340208rem", "--distance", "6.034383555326936rem", "--position", "49.79427814431025%", "--time", "3.6950017560878883s", "--delay", "-3.5189734446951957s"], [1, "bubble", 2, "--size", "2.5047718190347306rem", "--distance", "9.90330987409253rem", "--position", "84.8491279720323%", "--time", "2.291677964385803s", "--delay", "-2.5739131349690814s"], [1, "bubble", 2, "--size", "5.419093605729257rem", "--distance", "7.015641128001218rem", "--position", "69.99329601733888%", "--time", "2.6902295871364186s", "--delay", "-2.1712639063674675s"], [1, "bubble", 2, "--size", "2.710631073978808rem", "--distance", "6.82550480266256rem", "--position", "73.3422238374178%", "--time", "2.5601477075448376s", "--delay", "-3.309539875478728s"], [1, "bubble", 2, "--size", "5.188069902628207rem", "--distance", "9.81854516260069rem", "--position", "45.895090527071666%", "--time", "2.0728384361275634s", "--delay", "-2.2325502362966865s"], [1, "bubble", 2, "--size", "5.027014652589974rem", "--distance", "8.771193230801025rem", "--position", "7.8019734510945185%", "--time", "3.3220586829465084s", "--delay", "-3.764763672899934s"], [1, "bubble", 2, "--size", "5.545787651477145rem", "--distance", "6.293198141838115rem", "--position", "16.01175222902296%", "--time", "2.2052858400983095s", "--delay", "-2.948449212848459s"], [1, "bubble", 2, "--size", "2.043149653609407rem", "--distance", "9.47717506658259rem", "--position", "46.82348380380382%", "--time", "2.549046963766341s", "--delay", "-3.353902954204284s"], [1, "bubble", 2, "--size", "3.921851906841323rem", "--distance", "9.551410296881262rem", "--position", "27.461584845905826%", "--time", "2.891636337063517s", "--delay", "-2.193460018775889s"], [1, "bubble", 2, "--size", "4.613485719317484rem", "--distance", "9.78867163877165rem", "--position", "104.57137026127785%", "--time", "2.079067237121752s", "--delay", "-2.2642068460690505s"], [1, "bubble", 2, "--size", "5.8904236912767916rem", "--distance", "8.338644647046813rem", "--position", "74.73511712749861%", "--time", "2.183655556054666s", "--delay", "-2.7131819625915514s"], [1, "bubble", 2, "--size", "5.9228175725209695rem", "--distance", "6.798559463329744rem", "--position", "3.7809365675171094%", "--time", "3.773210232657258s", "--delay", "-2.482611845543187s"], [1, "bubble", 2, "--size", "2.1639231839466255rem", "--distance", "8.658492381911199rem", "--position", "72.36753806359232%", "--time", "3.011377244599559s", "--delay", "-3.3776441860695243s"], [1, "bubble", 2, "--size", "5.351107074609764rem", "--distance", "6.584217196896571rem", "--position", "2.767300211710289%", "--time", "3.28822054302236s", "--delay", "-2.8548295159003203s"], [1, "bubble", 2, "--size", "3.032436154058341rem", "--distance", "7.533330584602583rem", "--position", "36.12456736471272%", "--time", "2.2404043031066485s", "--delay", "-2.8946408685046037s"], [1, "bubble", 2, "--size", "2.579719680099979rem", "--distance", "7.213387538109399rem", "--position", "59.142031564888214%", "--time", "2.280813689457722s", "--delay", "-2.573773145465262s"], [1, "bubble", 2, "--size", "4.220577188978853rem", "--distance", "8.425039940275017rem", "--position", "57.21747964955772%", "--time", "2.900429838099123s", "--delay", "-2.591987051342719s"], [1, "bubble", 2, "--size", "4.323181473012899rem", "--distance", "9.046521241917663rem", "--position", "52.1468222761%", "--time", "2.04510957353057s", "--delay", "-2.3076757549734586s"], [1, "bubble", 2, "--size", "4.409529076091697rem", "--distance", "9.38818139865164rem", "--position", "19.88694821206155%", "--time", "2.3029975369141926s", "--delay", "-2.382377192211105s"], [1, "bubble", 2, "--size", "3.5203769047871605rem", "--distance", "7.685823072393987rem", "--position", "2.1192576011821007%", "--time", "3.7002989378173754s", "--delay", "-2.007853932867367s"], [1, "bubble", 2, "--size", "5.204428713237992rem", "--distance", "9.76099979249085rem", "--position", "60.65745962636352%", "--time", "3.0164058007071186s", "--delay", "-3.4618369655559684s"], [1, "bubble", 2, "--size", "5.877680184662316rem", "--distance", "7.7159672656914955rem", "--position", "82.87870388656123%", "--time", "3.2601363659872282s", "--delay", "-2.175341482947467s"], [1, "bubble", 2, "--size", "4.327093667954192rem", "--distance", "7.18650235504476rem", "--position", "83.74754280304715%", "--time", "3.7460733299180546s", "--delay", "-3.6196422266261816s"], [1, "bubble", 2, "--size", "5.671354284220935rem", "--distance", "8.712758794855224rem", "--position", "23.993402928238353%", "--time", "2.0179548083407557s", "--delay", "-3.1328322442329424s"], [1, "bubble", 2, "--size", "5.819760514847507rem", "--distance", "6.825539740994125rem", "--position", "63.11722283975696%", "--time", "3.88257249693134s", "--delay", "-2.015539273161804s"], [1, "bubble", 2, "--size", "4.552078400390493rem", "--distance", "6.181642370357801rem", "--position", "82.71371642707946%", "--time", "3.0432067532295393s", "--delay", "-3.6122580841026446s"], [1, "bubble", 2, "--size", "5.174557449197076rem", "--distance", "9.118063336207825rem", "--position", "12.589363526608906%", "--time", "2.446316203341238s", "--delay", "-3.281340768377026s"], [1, "bubble", 2, "--size", "2.200899872884274rem", "--distance", "7.718124280076883rem", "--position", "32.21968861894401%", "--time", "3.443588012761509s", "--delay", "-2.953382153361297s"], [1, "bubble", 2, "--size", "2.7572765102979204rem", "--distance", "9.552053289805617rem", "--position", "61.3258387528588%", "--time", "3.5288588355722945s", "--delay", "-2.223580425097618s"], [1, "bubble", 2, "--size", "3.2571790504306772rem", "--distance", "8.443212897912654rem", "--position", "7.543219309724856%", "--time", "2.8827473982855922s", "--delay", "-3.457256279229811s"], [1, "bubble", 2, "--size", "3.7663525258034314rem", "--distance", "6.633305018802297rem", "--position", "40.680774719306854%", "--time", "2.4654360947483576s", "--delay", "-2.606192615156918s"], [1, "bubble", 2, "--size", "3.224245653246773rem", "--distance", "6.587967467355666rem", "--position", "56.94712140599111%", "--time", "3.625751113124175s", "--delay", "-3.810574211131756s"], [1, "bubble", 2, "--size", "4.1876963299825185rem", "--distance", "6.149140541037105rem", "--position", "88.07294249466293%", "--time", "2.9689153852729873s", "--delay", "-3.7759519292029498s"], [1, "bubble", 2, "--size", "3.977418843375048rem", "--distance", "9.27709641383169rem", "--position", "3.641543438651418%", "--time", "3.128072341683116s", "--delay", "-2.1621605313602412s"], [1, "bubble", 2, "--size", "4.736449799534896rem", "--distance", "6.1485970958789204rem", "--position", "39.638545875584484%", "--time", "2.4090691453170545s", "--delay", "-3.893457801904555s"], [1, "bubble", 2, "--size", "4.276163264501303rem", "--distance", "6.165642934688972rem", "--position", "85.40779846970663%", "--time", "2.6168230977303484s", "--delay", "-2.288106613282232s"], [1, "bubble", 2, "--size", "2.922500284611771rem", "--distance", "7.989976586201775rem", "--position", "-3.19016365123709%", "--time", "2.202554556078911s", "--delay", "-3.15237916852558s"], [1, "bubble", 2, "--size", "3.3501686379680518rem", "--distance", "8.978542557510613rem", "--position", "16.27327959158674%", "--time", "2.929618114488067s", "--delay", "-3.1233689270054077s"], [1, "bubble", 2, "--size", "4.771863595244164rem", "--distance", "6.220912546965624rem", "--position", "84.24457055808195%", "--time", "3.878122853082688s", "--delay", "-3.03375285446967s"], [1, "bubble", 2, "--size", "2.765683303038532rem", "--distance", "8.451629239526113rem", "--position", "65.3797526468522%", "--time", "3.5854890252115594s", "--delay", "-2.105981443700551s"], [1, "bubble", 2, "--size", "4.652299610655185rem", "--distance", "9.293640394336926rem", "--position", "63.843561453941476%", "--time", "3.9310363585271557s", "--delay", "-2.140950744102301s"], [1, "bubble", 2, "--size", "5.3144536931572315rem", "--distance", "8.721228316443305rem", "--position", "59.36695850186018%", "--time", "2.956812681269985s", "--delay", "-3.516723675246009s"], [1, "bubble", 2, "--size", "3.130450218957808rem", "--distance", "7.9079160399725605rem", "--position", "85.48443873055935%", "--time", "3.496529600589106s", "--delay", "-3.3272268222356836s"], [1, "bubble", 2, "--size", "3.80022210879555rem", "--distance", "7.093043623726971rem", "--position", "50.518327837759145%", "--time", "2.958235441153042s", "--delay", "-3.0031436644086s"], [1, "bubble", 2, "--size", "5.875741963828738rem", "--distance", "7.0844904128706645rem", "--position", "81.51445268752482%", "--time", "3.4643464603578424s", "--delay", "-2.2240961627944587s"], [1, "bubble", 2, "--size", "4.569054133576495rem", "--distance", "9.502299474332066rem", "--position", "35.97161193328464%", "--time", "3.615155802816784s", "--delay", "-2.5986437474179476s"], [1, "bubble", 2, "--size", "4.895053020372705rem", "--distance", "8.799841059082315rem", "--position", "88.00798657598342%", "--time", "2.241170039031009s", "--delay", "-3.8974450123124376s"], [1, "bubble", 2, "--size", "5.811420500161731rem", "--distance", "7.665355406032294rem", "--position", "100.08579578762296%", "--time", "2.875667316899252s", "--delay", "-3.8479777351572513s"], [1, "bubble", 2, "--size", "2.2009275262599983rem", "--distance", "7.797563827322363rem", "--position", "2.4363872447604766%", "--time", "2.2774131910674718s", "--delay", "-2.8950608376088054s"], [1, "bubble", 2, "--size", "4.066864411031623rem", "--distance", "8.25304002855724rem", "--position", "52.25413589796686%", "--time", "2.8248561589130032s", "--delay", "-2.7721470729442577s"], [1, "bubble", 2, "--size", "3.7903416041928226rem", "--distance", "9.241126953040872rem", "--position", "50.24037795154383%", "--time", "2.766623778040245s", "--delay", "-3.8183600999763523s"], [1, "bubble", 2, "--size", "3.274366310679815rem", "--distance", "8.326796139862132rem", "--position", "37.306485388835576%", "--time", "3.6251225831044s", "--delay", "-2.2273058140759945s"], [1, "bubble", 2, "--size", "3.2090203771126253rem", "--distance", "9.457530284655416rem", "--position", "58.48568577089554%", "--time", "2.8134482269252605s", "--delay", "-2.1852066331345035s"], [1, "bubble", 2, "--size", "5.543415589063627rem", "--distance", "7.547850630230498rem", "--position", "58.01759103843435%", "--time", "3.487368419552444s", "--delay", "-2.1373823260619607s"], [1, "bubble", 2, "--size", "5.875404998553611rem", "--distance", "6.266001687539864rem", "--position", "87.28431074644432%", "--time", "3.044877352649832s", "--delay", "-2.074440564016979s"], [1, "bubble", 2, "--size", "4.5385776427685425rem", "--distance", "9.201225472846998rem", "--position", "94.76937149289964%", "--time", "2.4680452637580523s", "--delay", "-3.250058758864415s"], [1, "bubble", 2, "--size", "4.863403880352375rem", "--distance", "7.100801619122125rem", "--position", "42.27774958756954%", "--time", "3.382638358099691s", "--delay", "-3.214749162558232s"], [1, "bubble", 2, "--size", "2.7870879654737566rem", "--distance", "8.753802346279146rem", "--position", "32.98309846861906%", "--time", "3.861719137142411s", "--delay", "-3.1644616454295376s"], [1, "bubble", 2, "--size", "4.307670550312824rem", "--distance", "7.477856323421132rem", "--position", "70.54029494509695%", "--time", "3.937788733578442s", "--delay", "-2.3812273508260056s"], [1, "bubble", 2, "--size", "4.719611836211768rem", "--distance", "6.729802937183426rem", "--position", "28.527161936025756%", "--time", "2.191339605306556s", "--delay", "-3.1224581839908563s"], [1, "bubble", 2, "--size", "3.765114737955095rem", "--distance", "9.891567718849608rem", "--position", "46.20444887798745%", "--time", "2.8861486905108364s", "--delay", "-3.8372473543752914s"], [1, "bubble", 2, "--size", "5.584776161551865rem", "--distance", "9.37285606861984rem", "--position", "98.04680527738608%", "--time", "2.319010511830073s", "--delay", "-2.048747242635806s"], [1, "bubble", 2, "--size", "5.371612536025371rem", "--distance", "9.111269993549358rem", "--position", "45.88753868835014%", "--time", "2.2303857021608606s", "--delay", "-2.919331817640428s"], [1, "bubble", 2, "--size", "5.043763000728013rem", "--distance", "9.597119482865487rem", "--position", "98.58020328698238%", "--time", "2.8780232438406923s", "--delay", "-3.466368730054849s"], [1, "bubble", 2, "--size", "4.134653693622794rem", "--distance", "9.06665895771518rem", "--position", "80.97511494894238%", "--time", "2.29373363572581s", "--delay", "-3.9229605455643313s"], [1, "bubble", 2, "--size", "2.791319312746573rem", "--distance", "6.972852697161167rem", "--position", "13.339035088070545%", "--time", "2.8919669154814334s", "--delay", "-3.9497761117094017s"], [1, "bubble", 2, "--size", "2.640718449240696rem", "--distance", "6.817039916013897rem", "--position", "36.50106836371098%", "--time", "3.4355561464310895s", "--delay", "-2.9186166848541286s"], [1, "bubble", 2, "--size", "4.380464244725346rem", "--distance", "7.448284002926025rem", "--position", "96.77681294410097%", "--time", "2.7984332650639567s", "--delay", "-3.6374123948379253s"], [1, "bubble", 2, "--size", "4.54359773813942rem", "--distance", "6.915883201648101rem", "--position", "71.89257244153542%", "--time", "3.5582216522795456s", "--delay", "-3.232207514550281s"], [1, "bubble", 2, "--size", "4.00751249992799rem", "--distance", "8.541891454586104rem", "--position", "46.49200874913734%", "--time", "3.497567276268393s", "--delay", "-2.691653625043603s"], [1, "bubble", 2, "--size", "5.32459650187275rem", "--distance", "6.1458952521803765rem", "--position", "28.712432807552055%", "--time", "2.1468823756374746s", "--delay", "-2.5985572488494304s"], [1, "bubble", 2, "--size", "4.007472452087712rem", "--distance", "9.815497981083006rem", "--position", "-0.453853068798173%", "--time", "3.9751162551892754s", "--delay", "-2.4254526497729554s"], [1, "bubble", 2, "--size", "4.9938475885351234rem", "--distance", "6.2355597149372874rem", "--position", "77.26639233465924%", "--time", "2.6497745246603697s", "--delay", "-2.1982602973002376s"], [1, "bubble", 2, "--size", "2.799285161163481rem", "--distance", "9.849190168307345rem", "--position", "1.2090131340548123%", "--time", "2.782663967475841s", "--delay", "-2.845521456006673s"], [1, "bubble", 2, "--size", "4.688335724363594rem", "--distance", "6.265579612522652rem", "--position", "13.012592085099676%", "--time", "3.5937538045284594s", "--delay", "-3.836641325604178s"], [1, "bubble", 2, "--size", "2.682819390002247rem", "--distance", "7.074630507054261rem", "--position", "0.7855882781373076%", "--time", "3.109429306997052s", "--delay", "-3.0821375939559736s"], [1, "bubble", 2, "--size", "5.888004296166116rem", "--distance", "7.432169515631377rem", "--position", "20.15512420616027%", "--time", "3.65371506154228s", "--delay", "-3.1812607032111377s"], [1, "bubble", 2, "--size", "3.2874103020562826rem", "--distance", "6.52421803187308rem", "--position", "88.70654142396162%", "--time", "2.6316661045511323s", "--delay", "-3.4676771620955416s"], [1, "bubble", 2, "--size", "4.34847044440961rem", "--distance", "7.977977430496788rem", "--position", "54.60110214903224%", "--time", "2.3461766506878403s", "--delay", "-2.098829455711571s"], [1, "bubble", 2, "--size", "2.1620789369800812rem", "--distance", "7.254844827043202rem", "--position", "92.26620306882951%", "--time", "3.9628124918641343s", "--delay", "-2.650562593850537s"], [1, "bubble", 2, "--size", "4.089595403081388rem", "--distance", "6.174478467237354rem", "--position", "79.14338030777714%", "--time", "2.7207018330452435s", "--delay", "-3.161275874154203s"], [1, "bubble", 2, "--size", "4.353538211867996rem", "--distance", "7.499308284257642rem", "--position", "4.073907691991607%", "--time", "2.228882394405827s", "--delay", "-2.0102925384538417s"], [1, "bubble", 2, "--size", "4.127503671132547rem", "--distance", "9.456211723929954rem", "--position", "93.29939084403604%", "--time", "3.794432845292401s", "--delay", "-2.4510083727714136s"], [1, "bubble", 2, "--size", "4.171172780692739rem", "--distance", "7.589872283038543rem", "--position", "41.61255078565791%", "--time", "3.3561247924222517s", "--delay", "-2.8094119191709104s"], [1, "bubble", 2, "--size", "4.393575346559479rem", "--distance", "9.4437065772897rem", "--position", "0.6521881973843318%", "--time", "3.178664274153007s", "--delay", "-2.2697934447273083s"], [1, "bubble", 2, "--size", "5.2194106473791395rem", "--distance", "7.733713393034888rem", "--position", "56.974176282313444%", "--time", "3.5004134762704715s", "--delay", "-3.3899993615843576s"], [1, "bubble", 2, "--size", "5.229613660537953rem", "--distance", "8.751095204230658rem", "--position", "48.51843845076072%", "--time", "3.5783062042654556s", "--delay", "-3.6600359407783247s"], [1, "bubble", 2, "--size", "2.1770024694120567rem", "--distance", "7.054549031584209rem", "--position", "47.27545753381206%", "--time", "2.2429180496931505s", "--delay", "-2.5847146924676445s"], [1, "bubble", 2, "--size", "3.401155971781889rem", "--distance", "9.330707919443636rem", "--position", "38.703379655254516%", "--time", "2.604419706164605s", "--delay", "-3.540849430321651s"], [1, "bubble", 2, "--size", "2.739448381968299rem", "--distance", "9.663531303628918rem", "--position", "29.13122289451055%", "--time", "3.1127927708080825s", "--delay", "-2.8341688325429955s"], [1, "bubble", 2, "--size", "4.52497113717731rem", "--distance", "6.295352387651403rem", "--position", "41.995088511159324%", "--time", "3.9454094234199424s", "--delay", "-3.720102377650252s"], [1, "bubble", 2, "--size", "3.714356080799395rem", "--distance", "6.667874625261899rem", "--position", "2.6630740326301305%", "--time", "2.316004189265192s", "--delay", "-2.576002940641904s"], [1, "bubble", 2, "--size", "5.4755829566231045rem", "--distance", "9.95336790911246rem", "--position", "73.9554791310655%", "--time", "2.1263228309425415s", "--delay", "-2.4904967780591867s"], [1, "bubble", 2, "--size", "3.3430135158139374rem", "--distance", "8.453261357218981rem", "--position", "74.95821706857923%", "--time", "3.0023955473223207s", "--delay", "-2.855988107427948s"], [1, "content"], ["href", "#"], ["href", "#", 1, "mx-2"], ["href", "https://www.linkedin.com/in/satita-vittayaareekul/"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/SatitaVitt"], [1, "fab", "fa-github"], ["href", "https://codepen.io/z-", "target", "_blank", 1, "image", 2, "background-image", "url(\"assets/img/ZEPETO1.PNG\")"], [2, "position", "fixed", "top", "100vh"], ["id", "blob"], ["in", "SourceGraphic", "stdDeviation", "10", "result", "blur"], ["in", "blur", "mode", "matrix", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", "result", "blob"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Located At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "The Hague, The Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "satita.ice.v@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u00A9 Satita's Website 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "svg", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "filter", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "feGaussianBlur", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "feColorMatrix", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  display: contents;\n  grid-template-rows: 1fr 10rem auto;\n  grid-template-areas: \".\" \"footer\";\n  overflow-x: hidden;\n  background: #F8F9FA;\n  \n  height: 300px;\n  width: 100vw;\n  font-family: \"Open Sans\", sans-serif;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  z-index: 1;\n  --footer-background:#795548;\n  display: grid;\n  position: relative;\n  grid-area: footer;\n  min-height: 12rem;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1rem;\n  background: var(--footer-background);\n  filter: url(\"#blob\");\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--position, 50%);\n  background: var(--footer-background);\n  border-radius: 100%;\n  animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\n  transform: translate(-50%, 100%);\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 4rem;\n  padding: 2rem;\n  background: var(--footer-background);\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #F5F7FA;\n  text-decoration: none;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: white;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 10rem;\n  height: 7rem;\n  margin: 0.25rem 0;\n  background-size: cover;\n  background-position: center;\n}\n@keyframes bubble-size {\n  0%, 75% {\n    width: var(--size, 4rem);\n    height: var(--size, 4rem);\n  }\n  100% {\n    width: 0rem;\n    height: 0rem;\n  }\n}\n@keyframes bubble-move {\n  0% {\n    bottom: -4rem;\n  }\n  100% {\n    bottom: var(--distance, 10rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFFWCx1SUFBdUk7RUFDL0ksZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCO0FBYUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjtBQVNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6ImZvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTByZW0gYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuXCIgXCJmb290ZXJcIjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjRjhGOUZBO1xuICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbmJvZHkgLmZvb3RlciB7XG4gIHotaW5kZXg6IDE7XG4gIC0tZm9vdGVyLWJhY2tncm91bmQ6Izc5NTU0ODtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgbWluLWhlaWdodDogMTJyZW07XG59XG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xuICBmaWx0ZXI6IHVybChcIiNibG9iXCIpO1xufVxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IHZhcigtLXBvc2l0aW9uLCA1MCUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWJibGUtc2l6ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpLCBidWJibGUtbW92ZSB2YXIoLS10aW1lLCA0cykgZWFzZS1pbiBpbmZpbml0ZSB2YXIoLS1kZWxheSwgMHMpO1xuICAgICAgICAgIGFuaW1hdGlvbjogYnViYmxlLXNpemUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKSwgYnViYmxlLW1vdmUgdmFyKC0tdGltZSwgNHMpIGVhc2UtaW4gaW5maW5pdGUgdmFyKC0tZGVsYXksIDBzKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG59XG5ib2R5IC5mb290ZXIgLmNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBncmlkLWdhcDogNHJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xufVxuYm9keSAuZm9vdGVyIC5jb250ZW50IGEsIGJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcbiAgY29sb3I6ICNGNUY3RkE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmJvZHkgLmZvb3RlciAuY29udGVudCBiIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2IHtcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XG59XG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgPiBkaXYgPiAqIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgPiBkaXYgLmltYWdlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogN3JlbTtcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcbiAgMCUsIDc1JSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemUsIDRyZW0pO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgNHJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDByZW07XG4gICAgaGVpZ2h0OiAwcmVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlLXNpemUge1xuICAwJSwgNzUlIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSwgNHJlbSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplLCA0cmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMHJlbTtcbiAgICBoZWlnaHQ6IDByZW07XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUtbW92ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC00cmVtO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcbiAgfVxufVxuQGtleWZyYW1lcyBidWJibGUtbW92ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC00cmVtO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogdmFyKC0tZGlzdGFuY2UsIDEwcmVtKTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _draw_draw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw/draw.component */ "R0PN");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _userpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userpage */ "0GV0");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers */ "XgRA");



//mport { BlogComponent } from './blog/blog.component';
//import { BlogPostViewComponent } from './blog/post/blog-post-view.component';


//import { FunFactComponent } from './fun-fact/fun-fact.component';
//import { FunfactsComponent } from './funfacts';







const routes = [
    //{ path: '', component: HomeComponent , canActivate: [AuthGuard] },
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    /*To control access to a route with the auth guard you add it to the canActivate array
    in the route's configuration. The route guards in the canActivate array are run by Angular
    to decide if the route can be "activated", if all of the route guards return true navigation
    is allowed to continue, but if any of them return false navigation is cancelled.
    */
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'userpage', component: _userpage__WEBPACK_IMPORTED_MODULE_8__["UserpageComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'comments', component: _comments__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"] },
    // { path: 'baking', component: BakingComponent},
    { path: 'draw', component: _draw_draw_component__WEBPACK_IMPORTED_MODULE_4__["DrawComponent"] },
    { path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule) },
    { path: 'bake', loadChildren: () => __webpack_require__.e(/*! import() | bake-bake-module */ "bake-bake-module").then(__webpack_require__.bind(null, /*! ./bake/bake.module */ "0c7A")).then(m => m.BakeModule) },
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Arima+Madurai:300\");\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n\tbox-sizing: border-box;\n}\n\n\n\n\n\n.bird[_ngcontent-%COMP%] {\n\tbackground-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);\n\tbackground-size: auto 100%;\n\twidth: 88px;\n\theight: 125px;\n\twill-change: background-position;\n\tanimation-name: fly-cycle;\n\tanimation-timing-function: steps(10);\n\tanimation-iteration-count: infinite;\n}\n\n.bird--one[_ngcontent-%COMP%] {\n\tanimation-duration: 1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird--two[_ngcontent-%COMP%] {\n\tanimation-duration: 0.9s;\n\tanimation-delay: -0.75s;\n}\n\n.bird--three[_ngcontent-%COMP%] {\n\tanimation-duration: 1.25s;\n\tanimation-delay: -0.25s;\n}\n\n.bird--four[_ngcontent-%COMP%] {\n\tanimation-duration: 1.1s;\n\tanimation-delay: -0.5s;\n}\n\n.bird-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 20%;\n\tleft: -10%;\n\ttransform: scale(0) translateX(-10vw);\n\twill-change: transform;\n\tanimation-name: fly-right-one;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\n.bird-container--one[_ngcontent-%COMP%] {\n\tanimation-duration: 15s;\n\tanimation-delay: 0;\n}\n\n.bird-container--two[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 1s;\n}\n\n.bird-container--three[_ngcontent-%COMP%] {\n\tanimation-duration: 14.6s;\n\tanimation-delay: 9.5s;\n}\n\n.bird-container--four[_ngcontent-%COMP%] {\n\tanimation-duration: 16s;\n\tanimation-delay: 10.25s;\n}\n\n@keyframes fly-cycle {\n\t100% {\n\t\tbackground-position: -900px 0;\n\t}\n}\n\n@keyframes fly-right-one {\n\t0% {\n\t\ttransform: scale(0.3) translateX(-10vw);\n\t}\n\n\t10% {\n\t\ttransform: translateY(2vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(0vh) translateX(30vw) scale(0.5);\n\t}\n\n\t30% {\n\t\ttransform: translateY(4vh) translateX(50vw) scale(0.6);\n\t}\n\n\t40% {\n\t\ttransform: translateY(2vh) translateX(70vw) scale(0.6);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.6);\n\t}\n\n\t60% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.6);\n\t}\n}\n\n@keyframes fly-right-two {\n\t0% {\n\t\ttransform: translateY(-2vh) translateX(-10vw) scale(0.5);\n\t}\n\n\t10% {\n\t\ttransform: translateY(0vh) translateX(10vw) scale(0.4);\n\t}\n\n\t20% {\n\t\ttransform: translateY(-4vh) translateX(30vw) scale(0.6);\n\t}\n\n\t30% {\n\t\ttransform: translateY(1vh) translateX(50vw) scale(0.45);\n\t}\n\n\t40% {\n\t\ttransform: translateY(-2.5vh) translateX(70vw) scale(0.5);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0vh) translateX(90vw) scale(0.45);\n\t}\n\n\t51% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0vh) translateX(110vw) scale(0.45);\n\t}\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color:#A3E4D7;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\np[_ngcontent-%COMP%]{\n    font-family: 'Dancing Script', cursive;\n    color : white;\n    font-size : 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTs7O0NBR0Msc0JBQXNCO0FBQ3ZCOztBQUNBOzs7Ozs7Ozs7RUFTRTs7QUFDRjs7Ozs7Ozs7Ozs7Ozs7O0VBZUU7O0FBRUY7Q0FDQyw2RkFBNkY7Q0FDN0YsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtDQUN6QixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtDQUNWLHFDQUFxQztDQUNyQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLGlDQUFpQztDQUNqQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7RUFDQyw2QkFBNkI7Q0FDOUI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsdUNBQXVDO0NBQ3hDOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0Msc0RBQXNEO0NBQ3ZEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEOztDQUVBO0VBQ0MsdURBQXVEO0NBQ3hEO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHdEQUF3RDtDQUN6RDs7Q0FFQTtFQUNDLHNEQUFzRDtDQUN2RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHlEQUF5RDtDQUMxRDs7Q0FFQTtFQUNDLHVEQUF1RDtDQUN4RDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDtBQUNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmltYStNYWR1cmFpOjMwMFwiKTtcblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi8qXG5oMSB7XG5cdGZvbnQtZmFtaWx5OiAnQXJpbWEgTWFkdXJhaScsIGN1cnNpdmU7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiA0cmVtO1xuXHRsZXR0ZXItc3BhY2luZzogLTNweDtcblx0dGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAzO1xufSovXG4vKlxuLmNvbnRhaW5lciB7XG5cdHotaW5kZXg6IDE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRtaW4taGVpZ2h0OiAzNXJlbTtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDE2OCwgNzYsIDAuNikgMCUsIHJnYmEoMjU1LCAxMjMsIDEzLCAwLjYpIDEwMCUpLCB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ0NjgyNDUwNTA0Ni1lNDM2MDVmZmIxN2ZcIik7XG5cdGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0cGFkZGluZzogMnJlbTtcbn0qL1xuXG4uYmlyZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNzQ0NzkvYmlyZC1jZWxscy1uZXcuc3ZnKTtcblx0YmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG5cdHdpZHRoOiA4OHB4O1xuXHRoZWlnaHQ6IDEyNXB4O1xuXHR3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcblx0YW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmJpcmQtLW9uZSB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbi5iaXJkLS10d28ge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xufVxuXG4uYmlyZC0tdGhyZWUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjI1cztcbn1cblxuLmJpcmQtLWZvdXIge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDEuMXM7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbi5iaXJkLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAyMCU7XG5cdGxlZnQ6IC0xMCU7XG5cdHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uYmlyZC1jb250YWluZXItLW9uZSB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuXHRhbmltYXRpb24tZGVsYXk6IDA7XG59XG5cbi5iaXJkLWNvbnRhaW5lci0tdHdvIHtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XG5cdGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5iaXJkLWNvbnRhaW5lci0tdGhyZWUge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDE0LjZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDkuNXM7XG59XG5cbi5iaXJkLWNvbnRhaW5lci0tZm91ciB7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDEwLjI1cztcbn1cblxuQGtleWZyYW1lcyBmbHktY3ljbGUge1xuXHQxMDAlIHtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZseS1yaWdodC1vbmUge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuXHR9XG5cblx0MTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG5cdH1cblxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDMwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuXHR9XG5cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcblx0fVxuXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuXHR9XG5cblx0MTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG5cdH1cblxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41dmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC41KTtcblx0fVxuXG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcblx0fVxuXG5cdDUxJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcblx0fVxufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNBM0U0RDc7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbnB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgY29sb3IgOiB3aGl0ZTtcbiAgICBmb250LXNpemUgOiAyMHB4O1xufVxuIl19 */"] });
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