(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "9ilz":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "oNsn");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "LgBW");






const routes = [
    { path: ":postId", component: _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_2__["BlogPostComponent"] },
    { path: "", component: _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: ':slug', component: _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: '**', component: _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BlogComponent_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", blog_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        ", blog_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n        by ", blog_r1.author, ", ", blog_r1.date, " \n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        \n        ", blog_r1.description, "\n        \n        \n    ");
} }
class BlogComponent {
    constructor(router, route, scully) {
        this.router = router;
        this.route = route;
        this.scully = scully;
        this.$blogPosts = this.scully.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(routes => routes.filter(route => route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md'))));
    }
    ngOnInit() {
        this.scully.available$.subscribe(routes => console.log(routes));
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 60, vars: 3, consts: [[1, "whole"], [1, "left-half"], ["src", "assets/img/user.png", "alt", "Blogger", "height", "150"], [2, "font-size", "18px", "font-weight", "600"], [2, "width", "52%"], [1, "tag-option"], [1, "blog-about"], [1, "blog-tag"], [1, "blog-current"], [1, "social-icons"], ["href", "#"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin"], [1, "right-half"], ["aria-label", "Blog posts"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [2, "color", "#4056A1"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Satita Vittayaareekul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Finance & Computer Science @RU20'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Thai based in VA, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Current Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n   \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n    \n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, BlogComponent_li_52_Template, 9, 6, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 1, ctx.$blogPosts));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["ul[_ngcontent-%COMP%]{\n    list-style-type: none;\n  }\n\n.whole[_ngcontent-%COMP%]{\n    display: table;\n    width: 100%;\n    background-color: #EFE2BA;\n    height: -webkit-fill-available;\n  }\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  margin: 0 0 0.75rem 0;\n  color:  #D79922;\n}\n\n\n\n.left-half[_ngcontent-%COMP%] {\n  display: table-cell;\n  float: left;\n  width: 30%;\n  padding-top: 12%;\n  padding-left:6%;\n  padding-right: 4%;\n  padding-bottom: 10%;\n}\n\n.right-half[_ngcontent-%COMP%] {\n  display: table-cell;\n  float: left;\n  width: 70%;\n  padding-top: 10%;\n  padding-left:4%;\n  padding-right: 4%;\n  padding-bottom: 10%;\n}\n\narticle[_ngcontent-%COMP%] {\n  position: relative;\n  \n  \n  padding: 1rem;\n  text-align: left;\n  \n}\n\n\n\n\n\n.image[_ngcontent-%COMP%]{\n  padding:20px 40px 20px 10px;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  border-radius: 50%;\n}\n\n\n\n.text[_ngcontent-%COMP%]{\n  padding: 0 6%;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){\n  font-size: 12px;\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n\n.text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  padding-top: 10px;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){\n  font-size: 12px;\n  color: #858585;\n  padding-top: 10px;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(5){\n  font-size: 12px;\n  color: #858585;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n\n\n.social-icons[_ngcontent-%COMP%]{\n  font-size: 18px;\n  padding-top: 10px;\n}\n\n.tag-option[_ngcontent-%COMP%]{\n  font-size: 18px;\n  padding-top: 10px;\n}\n\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #4b4949;\n  padding-left: 6px;\n}\n\n.tag-option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  \n  padding-left: 6px;\n  display:block;\n}\n\n.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-size: 12px;\n  color: #858585;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cvYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCx3QkFBd0I7O0FBR3RCOzs7Ozs7O0tBT0c7O0FBQ0g7SUFDRSxxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw4QkFBOEI7RUFDaEM7O0FBR0Y7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCOzs7RUFHbEIsYUFBYTtFQUNiLGdCQUFnQjs7QUFFbEI7O0FBRUEsNkNBQTZDOztBQUM3Qyx3QkFBd0I7O0FBQ3hCO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBLDRCQUE0Qjs7QUFDNUI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGgxIHtcbiAgY29sb3I6cmdiKDUxLCA2LCAzNyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIxMSwgMjM2KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn0gKi9cblxuLyogUGVuLXNwZWNpZmljIHN0eWxlcyAqL1xuXG4gIFxuICAvKiBib2R5IHsgXG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4ICNiNjcwMWU7XG4gIH0gKi9cbiAgdWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC53aG9sZXtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFMkJBO1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgfVxuICBcblxuaDEge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDAgMCAwLjc1cmVtIDA7XG4gIGNvbG9yOiAgI0Q3OTkyMjtcbn1cblxuLyogUGF0dGVybiBzdHlsZXMgKi9cbi5sZWZ0LWhhbGYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZy10b3A6IDEyJTtcbiAgcGFkZGluZy1sZWZ0OjYlO1xuICBwYWRkaW5nLXJpZ2h0OiA0JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cbi5yaWdodC1oYWxmIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDo0JTtcbiAgcGFkZGluZy1yaWdodDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbmFydGljbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICBcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgXG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLUltYWdlLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0Ki9cbi5pbWFnZXtcbiAgcGFkZGluZzoyMHB4IDQwcHggMjBweCAxMHB4O1xufVxuXG4uaW1hZ2UgaW1ne1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1UZXh0LS0tLS0tLS0tLS0tLS0tLS0tKi9cbi50ZXh0e1xuICBwYWRkaW5nOiAwIDYlO1xufVxuLnRleHQgcDpudGgtY2hpbGQoMSl7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi50ZXh0IGg1e1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnRleHQgcDpudGgtY2hpbGQoNCl7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4NTg1ODU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udGV4dCBwOm50aC1jaGlsZCg1KXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg1ODU4NTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLyotLS0tLS1Tb2NpYWwgSWNvbnMtLS0tLS0tKi9cbi5zb2NpYWwtaWNvbnN7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udGFnLW9wdGlvbntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbC1pY29ucyBhe1xuICBjb2xvcjogIzRiNDk0OTtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG4udGFnLW9wdGlvbiBhe1xuICBcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbi50ZXh0IHNwYW57XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4NTg1ODU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }]; }, null); })();


/***/ }),

/***/ "U4+L":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "9ilz");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.component */ "LgBW");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "oNsn");







class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"], _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"], _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "oNsn":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-post/blog-post.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function BlogPostComponent_h1_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blogPost_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blogPost_r2.title);
} }
function BlogPostComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blogPost_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Blog Post by ", blogPost_r3.author, ", ", blogPost_r3.date, " -- ", blogPost_r3.category, "");
} }
class BlogPostComponent {
    constructor(activatedRoute, scully) {
        this.activatedRoute = activatedRoute;
        this.scully = scully;
        this.$blogPostMetadata = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('postId')),
            this.scully.available$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([postId, routes]) => routes.find(route => route.route === `/blog/${postId}`)));
    }
}
BlogPostComponent.ɵfac = function BlogPostComponent_Factory(t) { return new (t || BlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"])); };
BlogPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogPostComponent, selectors: [["app-blog-post"]], decls: 37, vars: 6, consts: [[1, "whole"], [1, "left-half"], ["src", "assets/img/user.png", "alt", "Blogger", "height", "150"], [2, "font-size", "18px", "font-weight", "600"], [2, "width", "52%"], [1, "tag-option"], [1, "blog-about"], [1, "blog-tag"], [1, "blog-current"], [1, "social-icons"], ["href", "#"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin"], [1, "right-half"], [4, "ngIf"], ["href", "/blog"]], template: function BlogPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Satita Vittayaareekul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Finance & Computer Science @RU20'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thai based in VA, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Current Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BlogPostComponent_h1_27_Template, 2, 1, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BlogPostComponent_p_29_Template, 2, 3, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Back to list..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 2, ctx.$blogPostMetadata));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 4, ctx.$blogPostMetadata));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyContentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".whole[_ngcontent-%COMP%]{\n  display: table;\n  width: 100%;\n  background-color: #EFE2BA;\n}\n\n  \n  .right-half[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 600px;\n  padding: 10px;\n  display: table-cell;\n  margin-left: auto;\n  margin-right: auto;\n\n  \n}\n\n  \n  h1[_ngcontent-%COMP%] {\n  color: #123c69;\n}\n\n  \n  h2[_ngcontent-%COMP%]{\n  color: #D79922;\n}\n\n  \n  h5[_ngcontent-%COMP%]{\n  color: #AC3B61;\n}\n\n  \n  \n\n  \n  .left-half[_ngcontent-%COMP%] {\n  \n  float: left;\n  width: 30%;\n  padding-top: 12%;\n  padding-left:6%;\n  padding-right: 4%;\n  padding-bottom: 10%;\n  display:table-cell;\n  \n}\n\n  \n  .right-half[_ngcontent-%COMP%] {\n  \n  float: left;\n  width: 70%;\n  padding-top: 10%;\n  padding-left:4%;\n  padding-right: 4%;\n  padding-bottom: 10%;\n}\n\n  \n  article[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem;\n  text-align: left;\n  \n}\n\n  \n  \n\n  \n  \n\n  \n  .left-half[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\n  padding:20px 40px 20px 10px;\n}\n\n  \n  .left-half[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  border-radius: 50%;\n}\n\n  \n  \n\n  \n  .text[_ngcontent-%COMP%]{\n  padding: 0 6%;\n}\n\n  \n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){\n  font-size: 12px;\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n\n  \n  .text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  padding-top: 10px;\n}\n\n  \n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){\n  font-size: 12px;\n  color: #858585;\n  padding-top: 10px;\n}\n\n  \n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(5){\n  font-size: 12px;\n  color: #858585;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n  \n  \n\n  \n  .social-icons[_ngcontent-%COMP%]{\n  font-size: 18px;\n  padding-top: 10px;\n}\n\n  \n  .tag-option[_ngcontent-%COMP%]{\n  font-size: 18px;\n  padding-top: 10px;\n}\n\n  \n  .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #4b4949;\n  padding-left: 6px;\n}\n\n  \n  .tag-option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  \n  padding-left: 6px;\n  display:block;\n}\n\n  \n  .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-size: 12px;\n  color: #858585;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cvYmxvZy1wb3N0L2Jsb2ctcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3Qjs7O0VBR3RCOzs7Ozs7O0tBT0c7OztFQUNMO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7OztFQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7O0FBR3BCOzs7RUFHQTtFQUNFLGNBQWM7QUFDaEI7OztFQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7RUFFQSxtQkFBbUI7OztFQUNuQjs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOzs7RUFDQTs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjs7QUFFbEI7OztFQUVBLDZDQUE2Qzs7O0VBQzdDLHdCQUF3Qjs7O0VBQ3hCO0VBQ0UsMkJBQTJCO0FBQzdCOzs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0VBRUEsNkNBQTZDOzs7RUFDN0M7RUFDRSxhQUFhO0FBQ2Y7OztFQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7OztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7O0VBQ0EsNEJBQTRCOzs7RUFDNUI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7RUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7OztFQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7O0VBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYmxvZy9ibG9nLXBvc3QvYmxvZy1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQZW4tc3BlY2lmaWMgc3R5bGVzICovXG5cbiAgXG4gIC8qIGJvZHkgeyBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAwIDJweCAycHggI2I2NzAxZTtcbiAgfSAqL1xuLndob2xle1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkUyQkE7XG59XG5cbi5yaWdodC1oYWxmIGltZyB7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgXG59XG5cblxuaDEge1xuICBjb2xvcjogIzEyM2M2OTtcbn1cblxuaDJ7XG4gIGNvbG9yOiAjRDc5OTIyO1xufVxuXG5oNXtcbiAgY29sb3I6ICNBQzNCNjE7XG59XG5cbi8qIFBhdHRlcm4gc3R5bGVzICovXG4ubGVmdC1oYWxmIHtcbiAgXG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nLXRvcDogMTIlO1xuICBwYWRkaW5nLWxlZnQ6NiU7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIFxufVxuLnJpZ2h0LWhhbGYge1xuICBcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDo0JTtcbiAgcGFkZGluZy1yaWdodDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbmFydGljbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIFxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS1JbWFnZS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKnRvcCByaWdodCBib3R0b20gbGVmdCovXG4ubGVmdC1oYWxmIC5pbWFnZXtcbiAgcGFkZGluZzoyMHB4IDQwcHggMjBweCAxMHB4O1xufVxuXG4ubGVmdC1oYWxmIC5pbWFnZSBpbWd7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVRleHQtLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRleHR7XG4gIHBhZGRpbmc6IDAgNiU7XG59XG4udGV4dCBwOm50aC1jaGlsZCgxKXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnRleHQgaDV7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udGV4dCBwOm50aC1jaGlsZCg0KXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg1ODU4NTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi50ZXh0IHA6bnRoLWNoaWxkKDUpe1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODU4NTg1O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4vKi0tLS0tLVNvY2lhbCBJY29ucy0tLS0tLS0qL1xuLnNvY2lhbC1pY29uc3tcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi50YWctb3B0aW9ue1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWljb25zIGF7XG4gIGNvbG9yOiAjNGI0OTQ5O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi50YWctb3B0aW9uIGF7XG4gIFxuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLnRleHQgc3BhbntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg1ODU4NTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-post',
                templateUrl: './blog-post.component.html',
                styleUrls: ['./blog-post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map