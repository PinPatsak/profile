(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <span>{{ title }} app is running! {{ 'Employee' | translate }}</span>\n<select #langSelect (change)=\"changeLang(langSelect.value)\">\n    <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n</select> -->\n<!--\n<router-outlet></router-outlet> -->\n<app-navbar></app-navbar>\n<app-home></app-home>\n<app-about></app-about>\n<app-services></app-services>\n<app-experience></app-experience>\n<!-- <app-portfolio></app-portfolio>\n<app-blog></app-blog> -->\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"about\" class=\"about row\">\n    <div class=\"col-md-6 about-right\">\n\n    </div>\n    <div class=\"col-md-6 about-left\">\n        <owl-carousel [options]=\"SlideOptions\" [items]=\"items\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n            <div class=\"item\" *ngFor=\"let i of items\">\n                <div class=\"about-left-grid\">\n                    <h2>{{i.header}}</h2>\n                    <p [innerHTML]=\"i.description\"></p>\n                    <!-- <ul>\n                        <li><a class=\"a-btn-a scroll\" href=\"#port\">My Work</a></li>\n                        <li><a class=\"a-btn-h scroll\" href=\"#contact\">Hire Me</a></li>\n                    </ul> -->\n                </div>\n            </div>\n        </owl-carousel>\n    </div>\n\n    <div class=\"clearfix\"> </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/blog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/blog.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blog\" id=\"blogs\">\n    <div class=\"container\">\n        <div class=\"service-head text-center\">\n            <h4>{{'HeaderBlogs' | translate }}</h4>\n            <h3  [innerHTML]=\"'TitleBlogs' | translate\"></h3>\n            <span class=\"border one\"></span>\n        </div>\n        <div class=\"news-grid row w3l-agile\">\n            <div class=\"col-md-6 news-img\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"./assets/images/b1.jpg\" alt=\" \"\n                        class=\"img-responsive\"></a>\n\n            </div>\n            <div class=\"col-md-6 news-text\">\n                <h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a></h3>\n                <ul class=\"news\">\n                    <li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n                    <li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n                    <li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n                    <li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n                </ul>\n                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n                    consequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n                    ipsum quia dolor sit amet.</p>\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n                    More</a>\n\n            </div>\n\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"  row\">\n\n            <div class=\"col-md-6 news-text two\">\n                <h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a></h3>\n                <ul class=\"news\">\n                    <li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n                    <li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n                    <li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n                    <li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n                </ul>\n                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n                    consequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n                    ipsum quia dolor sit amet.</p>\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n                    More</a>\n\n            </div>\n            <div class=\"col-md-6 news-img two\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"./assets/images/b2.jpg\" alt=\" \"\n                        class=\"img-responsive\"></a>\n\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"news-grid row\">\n            <div class=\"col-md-6 news-img\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"./assets/images/b3.jpg\" alt=\" \"\n                        class=\"img-responsive\"></a>\n\n            </div>\n            <div class=\"col-md-6 news-text\">\n                <h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a></h3>\n                <ul class=\"news\">\n                    <li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n                    <li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n                    <li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n                    <li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n                </ul>\n                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n                    consequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n                    ipsum quia dolor sit amet.</p>\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n                    More</a>\n\n            </div>\n\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"modal ab fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog about\" role=\"document\">\n        <div class=\"modal-content about\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close ab\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n            </div>\n            <div class=\"modal-body about\">\n                <div class=\"about\">\n\n                    <div class=\"about-inner\">\n\n                        <img src=\"./assets/images/b3.jpg\" alt=\"about\" />\n                        <h4 class=\"tittle\">A Fews words about us</h4>\n                        <p>Lorem ipsum dolor sit amet Integer gravida,Lorem ipsum dolor sit amet Integer gravida\n                            velit,Ming sits in the corner the whole day. She's into crochet. quis dolor\n                            tristiqumsan.Mirum est notare quam littera gothica, quam nunc putamus parum claram,\n                            anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. velit\n                            quis dolor tristiqumsan.</p>\n                        <p>Lorem ipsum dolor sit amet. Integer gravida velit quis dolor tristiqumsan.anteposuerit\n                            litterarum formas humanitatis per seacula amet Integer gravida velit. </p>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"work\" class=\"work\">\n    <div class=\"container\">\n        <div class=\"service-head text-center\">\n            <h4>{{'HeaderExperience' | translate }}</h4>\n            <h3  [innerHTML]=\"'TitleExperience' | translate\"></h3>\n            <span class=\"border one\"></span>\n        </div>\n        <div class=\"time-main w3l-agile row\">\n            <div class=\"col-md-6 year-info\">\n                <ul class=\"year\">\n                    <li>Present</li>\n                    <li>2018</li>\n                    <li>2014</li>\n                    <li>2013</li>\n                    <div class=\"clearfix\"></div>\n                </ul>\n            </div>\n            <ul class=\"col-md-6 timeline\">\n                <li>\n                    <div class=\"timeline-badge info\"><i class=\"fa fa-briefcase\"></i></div>\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4 class=\"timeline-title\">Manao Software Co., Ltd.</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <ul class=\"exp-list\">\n                                <li>Build the website with Web API, SQL and Angular 6.</li>\n                                <li>Working with Agile software development.</li>\n                                <li>Strong background in software construction methodologies sing SOLID &amp; Software Design Patterns.</li>\n                                <li>Communicate with client for get a requirement and support them.</li>\n                                <li>Build the system with multi-tenant software architecture support for E-Commerce applications</li>\n                                <li>Set up and configure system environment.</li>\n                                <li>Configuration the network for application relation management.</li>\n                                <li>Custom NOP Commerce and add new features.</li>\n                                <li>Strong knowledge of Clean architecture.</li>\n                            </ul>\n\n                        </div>\n                    </div>\n                </li>\n\n                <li>\n                    <div class=\"timeline-badge primary\"><i class=\"fa fa-briefcase\"></i></div>\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4 class=\"timeline-title\">Mycos Technologies Co., Ltd.</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <ul class=\"exp-list\">\n                                <li>Proficient working knowledge of code versioning tools such as GIT, SVN, etc.</li>\n                                <li>Build the website with Web API, IONIC, Angular 2 and MVC.</li>\n                                <li>Develop custom modules and interfaces in C# .net technologies.</li>\n                                <li>Custom and add new Stored procedure and function in SQL.</li>\n                                <li>Good teamwork.</li>\n                                <li>Define and implement standards and best practices for software development.</li>\n                                <li>Set up and configure system environment.</li>\n                                <li>Front end application development in one or more of Angular2, JavaScript , CSS, HTM.</li>\n                            </ul>\n\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"timeline-badge danger\"><i class=\"fa fa-briefcase\"></i></div>\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4 class=\"timeline-title\">Ole Group Philippines, Inc.</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <ul class=\"exp-list\">\n                                <li>Build website support for Accounting.</li>\n                                <li>Communicate with client for get a requirement and support them.</li>\n                                <li>Define and implement standards and best practices for software development.</li>\n                            </ul>\n\n                        </div>\n                    </div>\n                </li>\n\n                <li>\n                    <div class=\"timeline-badge success\"><i class=\"fa fa-briefcase\"></i></div>\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4 class=\"timeline-title\">AntWebsystems Co.Ltd</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <p>\n                                I was a junior software engineering. My during is a custom website in JAVA and helped the QA team to created unit tests.\n                            </p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\" id=\"contact\">\n    <div class=\"container\">\n        <div class=\"service-head one text-center\">\n            <h4>{{'HeaderContact' | translate }}</h4>\n            <h3 [innerHTML]=\"'TitleContact' | translate\"></h3>\n            <span class=\"border two\"></span>\n        </div>\n        <div class=\"mail_us row\">\n            <div class=\"col-md-6\">\n                <div class=\"contact-grid1-left\">\n                    <div class=\"contact-grid1-left1\">\n                        <span class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></span>\n                        <h4>Contact By Email</h4>\n                        <ul>\n                            <li>Mail1: <a href=\"mailto:{{ 'Email' | translate}}\">{{ 'Email' | translate}}</a></li>\n                            <li>Mail2: <a href=\"mailto:{{ 'Email2' | translate}}\">{{ 'Email2' | translate}}</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"clearfix\"> </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"contact-grid1-left\">\n                    <div class=\"contact-grid1-left1\">\n                        <span class=\"fa fa-phone fa-2x\" aria-hidden=\"true\"></span>\n                        <h4>Contact By Phone </h4>\n                        <ul>\n                            <li>Phone: +0000 123 312</li>\n                            <li>Fax: +123 312</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"clearfix\"> </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n\n\n        <div class=\"copy_right text-center\">\n\n            <ul class=\"social-icons two\">\n                <li><a href=\"https://www.facebook.com/patsak.cho\" target=\"_blank\" class=\"fb\">  </a></li>\n                <li><a href=\"https://www.linkedin.com/in/patsak-chompan-12a421130/\" class=\"dott\" target=\"_blank\"> </a></li>\n            </ul>\n            <!-- <p>© 2019 </p> -->\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div id=\"home\" class=\"header\">\n\n    <div class=\"container\">\n        <!-- top-hedader -->\n        <div class=\"top-header\">\n            <!-- /logo -->\n            <!--top-nav---->\n\n            <div class=\"banner-info row\">\n                <div class=\"col-md-7 header-right\">\n                    <h1>Hi !</h1>\n                    <h6>Software Engineering</h6>\n                    <ul class=\"address\">\n\n                        <li>\n                            <ul class=\"address-text\">\n                                <li><b>NAME</b></li>\n                                <li>{{ 'Name' | translate }}</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class=\"address-text\">\n                                <li><b>D.O.B</b></li>\n                                <li>{{ 'DOB' | translate }}</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class=\"address-text\">\n                                <li><b>ADDRESS </b></li>\n                                <li>{{ 'Address' | translate }}</li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul class=\"address-text\">\n                                <li><b>E-MAIL </b></li>\n                                <li><a href=\"mailto:{{ 'Email' | translate }}\">{{ 'Email' | translate }}</a></li>\n                            </ul>\n                        </li>\n\n\n                    </ul>\n                </div>\n                <div class=\"col-md-5 header-left\">\n                    <img src=\"./assets/images/img1.jpg\" alt=\"\">\n                </div>\n                <div class=\"clearfix\"> </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/portfolio/portfolio.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/portfolio/portfolio.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"portfolio\" id=\"port\">\r\n    <div class=\"service-head text-center\">\r\n        <h4>MY WORKS</h4>\r\n        <h3>MY <span>PORTFOLIO</span></h3>\r\n        <span class=\"border\"></span>\r\n    </div>\r\n    <div class=\"portfolio-grids\">\r\n        <div class=\"sap_tabs\">\r\n            <div id=\"horizontalTab\" >\r\n                <ul  class=\"nav resp-tabs-list\"  role=\"tablist\">\r\n                    <li><a data-toggle=\"tab\" class=\"active\" role=\"tab\" id=\"menu1-tab\" aria-controls=\"menu1\"   data-target=\"#menu1\" ><span>ALL</span></a></li>\r\n                    <li><a data-toggle=\"tab\" id=\"menu2-tab\" role=\"tab\" aria-controls=\"menu2\" data-target=\"#menu2\" ><span>Web stie</span></a></li>\r\n                    <li><a data-toggle=\"tab\" id=\"menu3-tab\" role=\"tab\" aria-controls=\"menu3\" data-target=\"#menu3\"><span>Mobile</span></a></li>\r\n                    <li><a data-toggle=\"tab\" id=\"menu4-tab\" role=\"tab\" aria-controls=\"menu4\" data-target=\"#menu4\" ><span>ILLUSTRATIONS</span></a></li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane fade show active\"  id=\"menu1\"  aria-labelledby=\"menu1-tab\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 team-gd\">\r\n                                <a href=\"#portfolioModal1\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic4.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal3\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic5.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal2\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic9.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal4\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic6.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd yes_marg \">\r\n\r\n                                <a href=\"#portfolioModal5\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic10.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd yes_marg \">\r\n\r\n                                <a href=\"#portfolioModal6\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic11.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd yes_marg \">\r\n\r\n                                <a href=\"#portfolioModal7\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic13.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd yes_marg \">\r\n\r\n                                <a href=\"#portfolioModal8\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic14.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"menu2\"  aria-labelledby=\"menu2-tab\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 team-gd \">\r\n                                <div class=\"thumb\">\r\n                                    <a href=\"#portfolioModal5\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                        data-toggle=\"modal\"><img src=\"./assets/images/pic10.jpg\" alt=\"\">\r\n\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd  \">\r\n                                <div class=\"thumb\">\r\n                                    <a href=\"#portfolioModal6\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                        data-toggle=\"modal\"><img src=\"./assets/images/pic11.jpg\" alt=\"\">\r\n\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal7\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic13.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div  role=\"tabpanel\"class=\"tab-pane fade\" id=\"menu3\"  aria-labelledby=\"menu3-tab\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal2\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic9.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal4\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic6.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd\">\r\n\r\n                                <a href=\"#portfolioModal5\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic10.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd\">\r\n\r\n                                <a href=\"#portfolioModal6\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic11.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"menu4\"  aria-labelledby=\"menu4-tab\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal5\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic10.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd\">\r\n\r\n                                <a href=\"#portfolioModal6\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic11.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3 team-gd \">\r\n\r\n                                <a href=\"#portfolioModal7\" class=\"portfolio-link b-link-diagonal b-animate-go\"\r\n                                    data-toggle=\"modal\"><img src=\"./assets/images/pic13.jpg\" alt=\"\">\r\n\r\n                                </a>\r\n\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services/services.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services/services.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"services\" class=\"services\">\n    <div class=\"container\">\n        <div class=\"service-head one text-center \">\n            <h4>{{'HeaderServices' | translate }}</h4>\n            <h3 [innerHTML]=\"'TitleServices' | translate\"></h3>\n            <span class=\"border two\"></span>\n        </div>\n        <!-- services-grids -->\n        <div class=\"wthree_about_right_grids w3l-agile row\">\n            <div class=\"col-md-6\">\n                <div class=\"service-grid\">\n                    <div class=\"hvr-rectangle-in\">\n                        <i class=\"fa fa-pencil\"></i>\n                    </div>\n                    <div class=\"services-content-title\">\n                        <h4>Web Design</h4>\n                    </div>\n                    <p>Website design and website development for commerce and internet advertising and  website to support SEO</p>\n                </div>\n                <div class=\"clearfix\"> </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"service-grid\">\n                    <div class=\"hvr-rectangle-in\">\n                        <i class=\"fa fa-cog\"></i>\n                    </div>\n                    <div class=\"services-content-title\">\n                        <h4>Maintenance</h4>\n                    </div>\n                    <p>I support to maintenance websites , add new function or custom old website</p>\n                </div>\n                <div class=\"clearfix\"> </div>\n            </div>\n            <div class=\"clearfix\"> </div>\n        </div>\n        <!-- services-grids -->\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"navbar\">\n        <div class=\"row\">\n            <div class=\"col-sm-3 col-md-4 col-lg-4 logo\">\n                <h1><a ><span>P</span>&nbsp;&nbsp;atsak</a></h1>\n            </div>\n            <div class=\"col-sm-9 col-md-8 col-lg-8 navigation-right\">\n                <span class=\"menu\"><img src=\"./assets/images/menu.png\" alt=\" \" /></span>\n                <nav class=\"link-effect-3\" id=\"link-effect-3\">\n                    <ul class=\"nav1 nav nav-wil\">\n                        <li [class.active]=\"currentSection=='home'\"><a\n                                (click)=\"scrollTo('home')\">{{ 'MHome' | translate }}</a>\n                        </li>\n                        <li [class.active]=\"currentSection=='about'\"><a class=\"scroll\"\n                                (click)=\"scrollTo('about')\">{{ 'MAbout' | translate }}</a>\n                        </li>\n                        <li [class.active]=\"currentSection=='services'\"> <a class=\"scroll\"\n                                (click)=\"scrollTo('services')\">{{ 'MServices' | translate }}</a></li>\n                        <li [class.active]=\"currentSection=='work'\"><a class=\"scroll\"\n                                (click)=\"scrollTo('work')\">{{ 'MExperience' | translate }}</a></li>\n                        <!-- <li><a class=\"scroll\"\n                                (click)=\"scrollTo('port')\">{{ 'MPortfolio' | translate }}</a></li>\n                        <li [class.active]=\"currentSection=='blogs'\"><a class=\"scroll\"\n                                (click)=\"scrollTo('blogs')\">{{ 'MBlogs' | translate }}</a>\n                        </li> -->\n                        <li [class.active]=\"currentSection=='contact'\"><a class=\"scroll\"\n                                (click)=\"scrollTo('contact')\">{{ 'MContact' | translate }}</a></li>\n                    </ul>\n                </nav>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</div>\n<a id=\"toTop\" style=\"display: block;\" (click)=\"scrollTo('home')\"> <span id=\"toTopHover\" style=\"opacity: 1;\"></span></a>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'profile';
        this.currentSection = 'section1';
        translate.addLangs(['en', 'th']);
        if (localStorage.getItem('locale')) {
            const browserLang = localStorage.getItem('locale');
            translate.use(browserLang.match(/en|th/) ? browserLang : 'en');
        }
        else {
            localStorage.setItem('locale', 'en');
            translate.setDefaultLang('en');
        }
    }
    changeLang(language) {
        localStorage.setItem('locale', language);
        this.translate.use(language);
    }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
        console.log(this.currentSection);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _modules_about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/about/about.module */ "./src/app/modules/about/about.module.ts");
/* harmony import */ var _modules_services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/services/services.module */ "./src/app/modules/services/services.module.ts");
/* harmony import */ var _modules_experience_experience_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/experience/experience.module */ "./src/app/modules/experience/experience.module.ts");
/* harmony import */ var _modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/portfolio/portfolio.module */ "./src/app/modules/portfolio/portfolio.module.ts");
/* harmony import */ var _modules_blog_blog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/blog/blog.module */ "./src/app/modules/blog/blog.module.ts");
/* harmony import */ var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/footer/footer.module */ "./src/app/modules/footer/footer.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
            _modules_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
            _modules_services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
            _modules_experience_experience_module__WEBPACK_IMPORTED_MODULE_8__["ExperienceModule"],
            _modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_9__["PortfolioModule"],
            _modules_blog_blog_module__WEBPACK_IMPORTED_MODULE_10__["BlogModule"],
            _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/about/about-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AboutRoutingModule = class AboutRoutingModule {
};
AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutRoutingModule);



/***/ }),

/***/ "./src/app/modules/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.SlideOptions = {
            items: 1,
            lazyLoad: false,
            autoPlay: true,
            navigation: false,
            navigationText: false,
            pagination: true
        };
        this.items = [
            {
                header: `About me`,
                description: `Hi I'm pin. I tend to view myself as a generalist since I try not to focus on any given technology.
             My skills range from I have worked with .Net Code,Clean Architecture, CQRS, N-Tier, Web API, C#, Angular,React JS, CSS, HTML, JavaScript, MVC, and jQuery.
             I have been exposed to a wide variety of technologies in my career and consider myself to be very adaptable.`
            },
            {
                header: `My Education`,
                description: `North-Chiang Mai University  <br/>
            Major	: B. Sc. In Software Engineering <br/>
            Hangdong Rath Rat Uphatham school <br/>
            2004 - 2007: Science-Mathematics program
            `
            }, {
                header: `My Certificates`,
                description: `70-480 Programming in HTML5 with JavaScript and CSS3.`
            },
        ];
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/modules/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/modules/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/modules/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/modules/about/about.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);






let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
        exports: [
            _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
        ]
    })
], AboutModule);



/***/ }),

/***/ "./src/app/modules/blog/blog-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/blog/blog-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BlogRoutingModule);



/***/ }),

/***/ "./src/app/modules/blog/blog.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/blog/blog.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/blog/blog.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/blog/blog.component.ts ***!
  \************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.scss */ "./src/app/modules/blog/blog.component.scss")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/modules/blog/blog.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/blog/blog.module.ts ***!
  \*********************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/modules/blog/blog-routing.module.ts");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.component */ "./src/app/modules/blog/blog.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let BlogModule = class BlogModule {
};
BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]],
        exports: [
            _blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"]
        ]
    })
], BlogModule);



/***/ }),

/***/ "./src/app/modules/experience/experience-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/experience/experience-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExperienceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceRoutingModule", function() { return ExperienceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let ExperienceRoutingModule = class ExperienceRoutingModule {
};
ExperienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ExperienceRoutingModule);



/***/ }),

/***/ "./src/app/modules/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/experience/experience.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/modules/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/modules/experience/experience.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/experience/experience.module.ts ***!
  \*********************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-routing.module */ "./src/app/modules/experience/experience-routing.module.ts");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience.component */ "./src/app/modules/experience/experience.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ExperienceModule = class ExperienceModule {
};
ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]],
        exports: [_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExperienceRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ExperienceModule);



/***/ }),

/***/ "./src/app/modules/footer/footer-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/footer/footer-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FooterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRoutingModule", function() { return FooterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let FooterRoutingModule = class FooterRoutingModule {
};
FooterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FooterRoutingModule);



/***/ }),

/***/ "./src/app/modules/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/footer/footer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/footer/footer.module.ts ***!
  \*************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer-routing.module */ "./src/app/modules/footer/footer-routing.module.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/modules/footer/footer.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [
            _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_3__["FooterRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        exports: [
            _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/portfolio/portfolio-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PortfolioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function() { return PortfolioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let PortfolioRoutingModule = class PortfolioRoutingModule {
};
PortfolioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PortfolioRoutingModule);



/***/ }),

/***/ "./src/app/modules/portfolio/portfolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/portfolio/portfolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortfolioComponent = class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/portfolio/portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/modules/portfolio/portfolio.component.scss")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/modules/portfolio/portfolio.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio.module.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/modules/portfolio/portfolio-routing.module.ts");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/modules/portfolio/portfolio.component.ts");





let PortfolioModule = class PortfolioModule {
};
PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]],
        exports: [
            _portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioRoutingModule"]
        ]
    })
], PortfolioModule);



/***/ }),

/***/ "./src/app/modules/services/services-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/services/services-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let ServicesRoutingModule = class ServicesRoutingModule {
};
ServicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ServicesRoutingModule);



/***/ }),

/***/ "./src/app/modules/services/services.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/services/services.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/services/services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/services/services.component.ts ***!
  \********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.scss */ "./src/app/modules/services/services.component.scss")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/modules/services/services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/services/services.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/modules/services/services-routing.module.ts");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services.component */ "./src/app/modules/services/services.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ServicesModule = class ServicesModule {
};
ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"]],
        exports: [
            _services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicesRoutingModule"]
        ]
    })
], ServicesModule);



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.currentSection = 'home';
    }
    ngOnInit() {
    }
    scrollTo(element) {
        this.currentSection = element;
        document.querySelector('#' + element).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/directives/scroll-spy.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/scroll-spy.directive.ts ***!
  \***********************************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollSpyDirective = class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
};
ScrollSpyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollSpyDirective.prototype, "spiedTags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScrollSpyDirective.prototype, "sectionChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event'])
], ScrollSpyDirective.prototype, "onScroll", null);
ScrollSpyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scrollSpy]'
    })
], ScrollSpyDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: createTranslateLoder, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoder", function() { return createTranslateLoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/scroll-spy.directive */ "./src/app/shared/directives/scroll-spy.directive.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");








const createTranslateLoder = (http) => {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollSpyDirective"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]
        ],
        exports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollSpyDirective"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: createTranslateLoder,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }
            })
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Simple Projects\profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map