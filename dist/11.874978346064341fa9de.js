(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QvNt:function(l,n,u){"use strict";var e=u("CcnG"),t=u("Ip0R");u("vMEl"),u.d(n,"a",function(){return a}),u.d(n,"b",function(){return r});var a=e["\u0275crt"]({encapsulation:0,styles:[["button[_ngcontent-%COMP%]{position:relative;transition:.15s ease-in-out}button.loading[_ngcontent-%COMP%]{padding-left:36px}button[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;left:10px}"]],data:{}});function o(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","btn-spinner float-left"]],null,null,null,null,null))],null,null)}function i(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),e["\u0275ncd"](null,0)],null,null)}function d(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.loadingText)})}function r(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"button",[],[[8,"type",0],[8,"disabled",0]],null,null,null,null)),e["\u0275did"](1,278528,null,0,t.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{loading:0}),(l()(),e["\u0275and"](16777216,null,null,1,null,o)),e["\u0275did"](4,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,i)),e["\u0275did"](6,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](8,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,e["\u0275inlineInterpolate"](1,"btn ",u.btnClass,""),l(n,2,0,u.loading)),l(n,4,0,u.loading),l(n,6,0,!u.loading),l(n,8,0,u.loading)},function(l,n){var u=n.component;l(n,0,0,u.type,u.loading)})}},UzGa:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){},a=u("pMnS"),o=u("Ip0R"),i=u("IYfF"),d=u("kmKP"),r=u("tZUg"),c=u("9uVP"),s=u("we+o"),p=function(){function l(l,n,u,e,t,a,o,i){this.fb=l,this.toastr=n,this.auth=u,this.router=e,this.userService=t,this.planService=a,this.store=o,this.route=i,this.plans=[],this.chosedDuration="monthly"}return l.prototype.ngOnInit=function(){this.evn=c.a.getConstants(),this.plans=this.route.snapshot.data.plans},l.prototype.buyPlan=function(l,n){var u=this;this.planService.buyPlan(l,n).subscribe(function(l){Stripe(l.public_key).redirectToCheckout({sessionId:l.object.id}).then(function(l){u.toastr.error("Failed to complete your request, please try again later","Oops!")})},function(l){u.toastr.error("Failed to complete your request, please try again later.","Oops!")})},l}(),m=u("gIcY"),f=u("SZbH"),v=u("ZYCi"),g=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[["class","col mx-auto mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,6,"div",[["class","card-title mb-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"p",[["class","m-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,2,"h2",[["class","plan-price"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"strong",[["class","text-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["","","/month"])),(l()(),e["\u0275eld"](10,0,null,null,4,"div",[["class","card-body pt-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"div",[["class","card-desc"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" "," "])),(l()(),e["\u0275eld"](13,0,null,null,1,"a",[["class","btn btn-primary btn-rounded mt-3"],["href","javascript:;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.buyPlan(l.context.$implicit._id,"monthly")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Buy Now"]))],null,function(l,n){var u=n.component;l(n,6,0,n.context.$implicit.name),l(n,9,0,u.evn.CURRENCY,n.context.$implicit.monthly_price),l(n,12,0,n.context.$implicit.description)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](2,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.plans)},null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[["class","col mx-auto mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,6,"div",[["class","card-title mb-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"p",[["class","m-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,2,"h2",[["class","plan-price"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"strong",[["class","text-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["","","/year"])),(l()(),e["\u0275eld"](10,0,null,null,4,"div",[["class","card-body pt-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"div",[["class","card-desc"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" "," "])),(l()(),e["\u0275eld"](13,0,null,null,1,"a",[["class","btn btn-primary btn-rounded mt-3"],["href","javascript:;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.buyPlan(l.context.$implicit._id,"yearly")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Buy Now"]))],null,function(l,n){var u=n.component;l(n,6,0,n.context.$implicit.name),l(n,9,0,u.evn.CURRENCY,n.context.$implicit.yearly_price),l(n,12,0,n.context.$implicit.description)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](2,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.plans)},null)}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,21,"div",[["class","col-12 col-sm-12 col-md-10 mx-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,20,"div",[["class","on-boarding-form card-on-boarding-boxed mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Plans"])),(l()(),e["\u0275eld"](4,0,null,null,11,"div",[["class","plan-switcher mt-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"a",[["href","javascript:;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==(l.component.chosedDuration="monthly")&&e),e},null,null)),e["\u0275did"](8,278528,null,0,o.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275pod"](9,{active:0}),(l()(),e["\u0275ted"](-1,null,["Monthly"])),(l()(),e["\u0275eld"](11,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,3,"a",[["href","javascript:;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==(l.component.chosedDuration="yearly")&&e),e},null,null)),e["\u0275did"](13,278528,null,0,o.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275pod"](14,{active:0}),(l()(),e["\u0275ted"](-1,null,["Yearly"])),(l()(),e["\u0275eld"](16,0,null,null,5,"div",[["class","card-on-boarding-box card-box-transparent"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,4,"div",[["class","onBoarding-form-box"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](19,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](21,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,8,0,l(n,9,0,"monthly"==u.chosedDuration)),l(n,13,0,l(n,14,0,"yearly"==u.chosedDuration)),l(n,19,0,"monthly"==u.chosedDuration),l(n,21,0,"yearly"==u.chosedDuration)},null)}var k=e["\u0275ccf"]("app-basic-info",p,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-basic-info",[],null,null,null,x,g)),e["\u0275did"](1,114688,null,0,p,[m.FormBuilder,f.j,i.a,v.q,d.a,s.a,r.a,v.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),I=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,17,"div",[["class","col-12 col-sm-12 col-md-10 mx-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,16,"div",[["class","on-boarding-form card-on-boarding-boxed mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,15,"div",[["class","card-on-boarding-box card-box-transparent"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,14,"div",[["class","onBoarding-form-box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,12,"div",[["class","col-12 col-sm-6 col-md-6 mx-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,11,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"div",[["class","card-title mb-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"p",[["class","m-0 mt-3"],["style","font-size: 25px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment Failed."])),(l()(),e["\u0275eld"](12,0,null,null,5,"div",[["class","card-body pt-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"div",[["class","card-desc"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Your last transaction has been failed/cancelled. You have not been charged for this. Click below button to go back to plans page. "])),(l()(),e["\u0275eld"](15,0,null,null,2,"a",[["class","btn btn-primary btn-rounded mt-3"],["href","javascript:;"],["routerLink","/payment/plans"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,16).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](16,671744,null,0,v.t,[v.q,v.a,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Plans"]))],function(l,n){l(n,16,0,"/payment/plans")},function(l,n){l(n,15,0,e["\u0275nov"](n,16).target,e["\u0275nov"](n,16).href)})}var w=e["\u0275ccf"]("app-failed",R,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-failed",[],null,null,null,_,I)),e["\u0275did"](1,114688,null,0,R,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),F=u("QvNt"),N=u("vMEl"),P=u("xXU7"),D=function(){function l(l,n,u,e,t){this.plansService=l,this.toastrService=n,this.authService=u,this.localStoreService=e,this.router=t,this.loading=!0,this.loadingText="Verifying"}return l.prototype.ngOnInit=function(){var l=this,n=Object(P.a)(3500);this.subscription=n.subscribe(function(n){return l.confirmPayment()})},l.prototype.confirmPayment=function(){var l=this;this.plansService.confirmActivation().subscribe(function(n){l.localStoreService.setItem("auth_token",n.token),l.authService.checkAuth(),l.toastrService.success(n.message,"Yippy!"),l.subscription.unsubscribe(),l.router.navigateByUrl("/dashboard/overview")})},l}(),M=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,18,"div",[["class","col-12 col-sm-12 col-md-10 mx-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,17,"div",[["class","on-boarding-form card-on-boarding-boxed mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,16,"div",[["class","card-on-boarding-box card-box-transparent"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,15,"div",[["class","onBoarding-form-box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,13,"div",[["class","col-12 col-sm-6 col-md-6 mx-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,12,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,11,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"div",[["class","card-title mb-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"p",[["class","m-0 mt-3"],["style","font-size: 25px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment Processing..."])),(l()(),e["\u0275eld"](12,0,null,null,6,"div",[["class","card-body pt-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"div",[["class","card-desc"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Please wait while we are verifying your payment. "])),(l()(),e["\u0275eld"](15,0,null,null,3,"btn-loading",[["btnClass","btn-primary btn-rounded mt-3"]],null,null,null,F.b,F.a)),e["\u0275did"](16,114688,null,0,N.a,[],{loading:[0,"loading"],btnClass:[1,"btnClass"],loadingText:[2,"loadingText"]},null),(l()(),e["\u0275ted"](-1,0,[" Verifying "])),(l()(),e["\u0275eld"](18,0,null,0,0,"i",[["class","i-Arrow-Right-in-Circle"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,16,0,u.loading,"btn-primary btn-rounded mt-3",u.loadingText)},null)}var S=e["\u0275ccf"]("app-success",D,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-success",[],null,null,null,O,M)),e["\u0275did"](1,114688,null,0,D,[s.a,f.j,i.a,r.a,v.q],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=u("9AJC"),j=u("4GxJ"),T=u("xkgV"),B=u("9Bt9"),E=u("qAlS"),U=u("ZVmN"),Y=function(){},q=u("bse0"),K=u("Ey38"),L=u("aYsj"),$=u("mnDI"),A=u("ate/"),z=u("jgPy");u.d(n,"PaymentModuleNgFactory",function(){return Z});var Z=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,k,w,S,V.a,V.b,V.m,V.i,V.j,V.k,V.l]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,m["\u0275angular_packages_forms_forms_j"],m["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,j.v,j.v,[e.ComponentFactoryResolver,e.Injector,j.Y,j.w]),e["\u0275mpd"](4608,m.FormBuilder,m.FormBuilder,[]),e["\u0275mpd"](4608,T.e,T.e,[]),e["\u0275mpd"](4608,B.f,B.f,[o.DOCUMENT,e.NgZone,E.a,B.h]),e["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),e["\u0275mpd"](1073742336,v.u,v.u,[[2,v.A],[2,v.q]]),e["\u0275mpd"](1073742336,Y,Y,[]),e["\u0275mpd"](1073742336,j.c,j.c,[]),e["\u0275mpd"](1073742336,j.f,j.f,[]),e["\u0275mpd"](1073742336,j.g,j.g,[]),e["\u0275mpd"](1073742336,j.k,j.k,[]),e["\u0275mpd"](1073742336,j.l,j.l,[]),e["\u0275mpd"](1073742336,m["\u0275angular_packages_forms_forms_bc"],m["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,m.FormsModule,m.FormsModule,[]),e["\u0275mpd"](1073742336,j.q,j.q,[]),e["\u0275mpd"](1073742336,j.t,j.t,[]),e["\u0275mpd"](1073742336,j.x,j.x,[]),e["\u0275mpd"](1073742336,j.B,j.B,[]),e["\u0275mpd"](1073742336,j.E,j.E,[]),e["\u0275mpd"](1073742336,j.H,j.H,[]),e["\u0275mpd"](1073742336,j.K,j.K,[]),e["\u0275mpd"](1073742336,j.Q,j.Q,[]),e["\u0275mpd"](1073742336,j.U,j.U,[]),e["\u0275mpd"](1073742336,j.V,j.V,[]),e["\u0275mpd"](1073742336,j.W,j.W,[]),e["\u0275mpd"](1073742336,j.y,j.y,[]),e["\u0275mpd"](1073742336,m.ReactiveFormsModule,m.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,T.a,T.a,[]),e["\u0275mpd"](1073742336,q.c,q.c,[]),e["\u0275mpd"](1073742336,K.a,K.a,[]),e["\u0275mpd"](1073742336,L.a,L.a,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,B.g,B.g,[]),e["\u0275mpd"](1073742336,A.a,A.a,[]),e["\u0275mpd"](1073742336,z.a,z.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,v.k,function(){return[[{path:"",redirectTo:"/plans",pathMatch:"full"},{path:"plans",component:p,resolve:{plans:U.a}},{path:"failed",component:R},{path:"success",component:D}]]},[])])})},xXU7:function(l,n,u){"use strict";u.d(n,"a",function(){return o});var e=u("6blF"),t=u("T1DM"),a=u("/21U");function o(l,n){return void 0===l&&(l=0),void 0===n&&(n=t.a),(!Object(a.a)(l)||l<0)&&(l=0),n&&"function"==typeof n.schedule||(n=t.a),new e.a(function(u){return u.add(n.schedule(i,l,{subscriber:u,counter:0,period:l})),u})}function i(l){var n=l.subscriber,u=l.counter,e=l.period;n.next(u),this.schedule({subscriber:n,counter:u+1,period:e},e)}}}]);