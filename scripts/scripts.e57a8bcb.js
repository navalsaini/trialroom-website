"use strict";angular.module("flixstockApp",["ngAnimate","ngResource","ngRoute","ngSanitize","ngTouch","angular-flexslider","br.fullpage","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/solution",{templateUrl:"views/solution.html",controller:"SolutionCtrl"}).when("/demo",{templateUrl:"views/demo.html",controller:"DemoCtrl"}).when("/contact",{templateUrl:"views/contact.html"}).when("/partners",{templateUrl:"views/partners.html"}).when("/clients",{templateUrl:"views/clients.html",controller:"ClientsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("flixstockApp").factory("navService",["$timeout",function(a){var b;return{registerHandlers:function(a){b=a},show:function(){a(function(){b.$emit("show")},0,!1)},hide:function(){a(function(){b.$emit("hide")},0,!1)}}}]),angular.module("flixstockApp").controller("HeaderCtrl",["$scope","$location","navService",function(a,b,c){a.isActive=function(a){var c=b.path().substring(1)||"home";return a===c?"active":""},a.navClass=function(a){var c=b.path().substring(1)||"home";return c};var d=!1;a.$on("show",function(){a.$apply(function(){d=!1})}),a.$on("hide",function(){a.$apply(function(){d=!0})}),c.registerHandlers(a),a.getHidden=function(){return d?"hidden":""}}]),angular.module("flixstockApp").controller("MainCtrl",["$scope","$location","$anchorScroll","$interval",function(a,b,c,d){a.slides=[{title:"Apparel catalog photography made simple",description:"Replace your traditional photo-shoot with tech driven photography."},{title:"Improve sales",description:"Act on which models sell more - make use of analytics."},{title:"Reduce costs",description:"You will never need to hire a model or a high end photographer again."}],a.gotoSolution=function(){b.hash("solution"),c()},a.images=["images/solution/model1.jpg","images/solution/model2.jpg","images/solution/model3.jpg"],a.garment="images/solution/garment1.png",a.testimonials=[{testimonial:"Doing photo-shoots involved a lot of coordination, and investing a fair bit of time setting up everything. Now, after working with Flixstock, things are a lot easier, as we don't wait for the stock to build up. We just shoot small batches, and send it over tiwice a week to Flixstock team. It certainly saves a lot of hassle, and there are no complaints on quality.",person:"Gwen Jones, COO",company:"Adisa, A California Based Marketplace",url:"www.adasa.com",image:"images/portfolio/Adasa.jpg"},{testimonial:"We work with a lot of brands, and shot pictures barring a few times when brands were able to give pictures. The item lots arrived every now and then, and optimizing stock for a photo shoot was very difficult, but that is only until we started working with Flixstock. We also got hold of this subtle model with a friendly face who has turned out to be our favorite. More importantly, the whole process is devoid of the usual running around I used to do at the photoshoots!",person:"Melanie Harris, Fashion Designer, NYC",company:"Stylebug Inc",url:"www.stylebug.com",image:"images/portfolio/Stylebug.jpg"},{testimonial:"For a single designer owned couture line, I used to invest a lot of time getting my collection's photos ready. Catalog shots are the only way my far away clients assess my collection, and I don't want to miss on any detail there. I am so happy with the results of this new technology, can't thank the Flixstock team enough. They have made life so easy.",person:"Melanie Harris, Fashion Designer, NYC",company:"Melanie Harris Collection",url:"www.melanieharriscollection.com",image:"images/portfolio//MelaineHarris.png"}]}]),angular.module("flixstockApp").controller("SolutionCtrl",["$scope","$location","$anchorScroll",function(a,b,c){a.slides=[{title:"A Bigger Catalog",description:"We are an important part of your vision of selling online."},{title:"Analytics On Models",description:"Change models in a catalog images with click of a button."},{title:"Work Smarter, Spend Lesser",description:"Let the cloud do most of your work."}]}]),angular.module("flixstockApp").controller("DemoCtrl",["$scope","$location","$anchorScroll","navService",function(a,b,c,d){var e="/images/demo/flix/small/",f="/images/demo/flix/large/",g="/images/demo/orig/small/",h="/images/demo/orig/large/",i=["pic004_billabongfront.jpg","pic005_giants.jpg","pic006_cardinal.jpg"],j=["pic003.jpg","pic002.jpg","pic001.jpg"],k=0,l=Math.min(i.length,j.length);for(a.tests=[],k=0;l>k;k++){var m=Math.round(20*Math.random())%2===0,n=e+i[k],o=f+i[k],p=g+j[k],q=h+j[k];a.tests.push({idx:k,isLeft:m,leftSmall:m?n:p,leftLarge:m?o:q,rightSmall:m?p:n,rightLarge:m?q:o,isCorrect:null})}var r=0,s=0,t=0;a.percentage=0,a.showCounter=!1,a.demoHeaderLImg=e+i[0],a.demoHeaderRImg=g+j[0],a.startTest=function(b){a.overlayIconCls="icon ion-arrow-down-a",a.overlayMessage="Go",a.doNextPage(b)},a.requestDemo=function(){},a.onSkip=function(b){a.tests[b];r++,a.doNextPage()},a.onPoll=function(b,c){var d=a.tests[b];d.isCorrect=c,c?s++:t++,a.doNextPage(1e3)},a.doNextPage=function(b){setTimeout(function(){a.$broadcast("br-nextpage")},b||0)},a.onPageChange=function(b){a.$apply(function(){0==b?(a.showCounter=!1,d.show()):b===l+1?(a.percentage=Math.round(100*s/(s+t+r)),a.showCounter=!1,d.show()):(a.indexStr=b+" of "+l,a.showCounter=!0,d.hide())})}}]),angular.module("flixstockApp").controller("ClientsCtrl",["$scope",function(a){a.clients=[{img:"Adasa.jpg"},{img:"Stylebug.jpg"},{img:"CoutureCandy.jpg"},{img:"Kimaya.png"},{img:"Indianroots.png"}]}]),function(){function a(a){function j(b,j,k){function l(){angular.element(document.querySelectorAll(".br-fullpage-wrapper")).css({height:d+"px",display:"block"}),angular.element(document.querySelectorAll(".br-fullpage")).css("height",d+"px")}function m(a){g||(g=!0,a>0?n():o(),angular.element(f[0]).css("marginTop","-"+d*e+"px"),c&&(angular.element(document.getElementsByClassName("br-fullpage-nav-item")).removeClass("active"),angular.element(document.getElementsByClassName("br-fullpage-nav-item")[e]).addClass("active")),sessionStorage.setItem("br-fullpage-index",e),setTimeout(function(){g=!1,h&&h(e)},1e3))}function n(){0!==e&&e--}function o(){e<f.length-1&&e++}function p(a){return window.event||a.originalEvent||a}function q(a){var b=p(a);b.preventDefault();var c=b.detail?-120*b.detail:b.wheelDelta;m(c)}function r(a){var b=p(a);v||(v=!0,u=b.changedTouches[0].pageY)}function s(a){var b=p(a),c=b.changedTouches[0].pageY;if(v&&c!=u){b.preventDefault(),v=!1;var d=c-u;m(d)}}function t(){d=a.innerHeight,angular.element(f[0]).css("marginTop","-"+d*e+"px"),l()}d=a.innerHeight,g=!1,h=b[k.onScroll],i=!("false"===k.scroll),c=!("false"===k.nav),l();var u,v=!1;b.$on("br-nextpage",function(){m(-1)}),i&&(angular.element(document).bind("mousewheel",q),angular.element(document).bind("onmousewheel",q),angular.element(document).bind("wheel",q),angular.element(document).bind("touchstart",r),angular.element(document).bind("pointerdown",r),angular.element(document).bind("MSPointerDown",r),angular.element(document).bind("touchmove",s),angular.element(document).bind("pointermove",s),angular.element(document).bind("MSPointerMove",s),angular.element(a).bind("resize",t),b.$on("$destroy",function(){angular.element(document).unbind("mousewheel",q),angular.element(document).unbind("onmousewheel",q),angular.element(document).unbind("wheel",q),angular.element(document).unbind("touchstart",r),angular.element(document).unbind("pointerdown",r),angular.element(document).unbind("MSPointerDown",r),angular.element(document).unbind("touchmove",s),angular.element(document).unbind("pointermove",s),angular.element(document).unbind("MSPointerMove",s),angular.element(a).unbind("resize",t)}))}function k(a,g,h){if(f=document.getElementsByClassName(h.pageClass),e=0,angular.element(f).addClass("br-fullpage"),c){b=document.getElementsByClassName("br-fullpage-nav")[0];for(var i=0;i<f.length;i++)angular.element(b).append('<li><i class="br-fullpage-nav-item"></i></li>');b.style.marginTop=0-17*f.length+"px",angular.element(document.getElementsByClassName("br-fullpage-nav-item")[e]).addClass("active")}angular.element(f[0]).css("marginTop","-"+d*e+"px")}return{template:'<section class="br-fullpage-wrapper"><section ng-transclude></section><ul class="br-fullpage-nav"></ul></section>',restrict:"E",transclude:!0,replace:!0,compile:function(a,b){return{pre:j,post:k}}}}angular.module("br.fullpage",[]).directive("fullpage",["$window",a]);var b,c,d,e,f,g,h,i}(),angular.module("flixstockApp").directive("imagepoll",["$window",function(a){return{restrict:"E",replace:!0,templateUrl:"views/templates/ff-imagepoll.html",link:function(a,b,c){var d="",e="icon ion-checkmark-round ff-correct",f=!1,g="You caught us",h="Oops...",i="Flixstock",j=JSON.parse(c.data),k=a[c.onPoll];a.leftSrc=j.leftSmall,a.rightSrc=j.rightSmall,a.overlayLeftIconCls=d,a.overlayRightIconCls=d,a.overlayLeftMessage=i,a.overlayRightMessage=i,a._select=function(c){if(!f){f=!0,a.overlayLeftMessage="",a.overlayRightMessage="",a.overlayRightIconCls="",a.overlayLeftIconCls="";var d=j.isLeft===c;j.isLeft?(a.overlayLeftIconCls=e,a.overlayLeftMessage=d?g:h):(a.overlayRightIconCls=e,a.overlayRightMessage=d?g:h),b.find(".imagepoll-overlay").css("opacity","1"),k&&k(j.idx,d,!1)}}}}}]),angular.module("flixstockApp").directive("centered",function(){return{restrict:"ECA",transclude:!0,template:'<div class="angular-center-container">						<div class="angular-centered" ng-transclude>						</div>					</div>'}});