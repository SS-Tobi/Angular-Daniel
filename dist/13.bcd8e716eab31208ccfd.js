(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cJdH:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),r=function(){},s=u("pMnS"),t=u("xXU7"),e=u("kmKP"),a=u("tZUg"),i=function(){function l(l,n,u,o,r){this.route=l,this.router=n,this.service=u,this.toaster=o,this.storage=r,this.action="",this.code="",this.loadingText="",this.loadingDots=0}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.action=n.action,l.code=n.code,l.verify()})},l.prototype.verify=function(){var l=this;null!=this.subscription&&this.subscription.unsubscribe();var n=Object(t.a)(200);this.subscription=n.subscribe(function(n){return l.runLoading()}),this.service.verifyEmail(this.action,this.code).subscribe(function(n){l.toaster.success(n.message,"Great!"),""!=l.storage.getItem("auth_token")&&l.storage.setItem("auth_token",n.token),l.router.navigateByUrl("/dashboard/overview")},function(n){l.toaster.error("Failed to verify your request.","Oh!"),l.router.navigateByUrl("/dashboard/overview")})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.runLoading=function(){this.loadingDots++,this.loadingDots>3&&(this.loadingDots=0);for(var l="",n=0;n<this.loadingDots;n++)l+=".";this.loadingText=l},l}(),d=u("ZYCi"),c=u("SZbH"),p=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,8,"div",[["class","card o-hidden"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,5,"div",[["class","p-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"div",[["class","auth-logo text-center mb-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,0,"img",[["alt",""],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,2,"div",[["class","activate-box text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,1,"h1",[["class","mb-3 text-18"]],null,null,null,null,null)),(l()(),o["\u0275ted"](8,null,["Verifying your request",""]))],null,function(l,n){l(n,8,0,n.component.loadingText)})}var g=o["\u0275ccf"]("app-verify-email",i,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-verify-email",[],null,null,null,m,p)),o["\u0275did"](1,245760,null,0,i,[d.a,d.q,e.a,c.j,a.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=u("gIcY"),v=u("Ip0R"),h=u("Yj9E"),w=u("oFds"),b=u("QvNt"),C=u("vMEl"),_=u("IYfF"),y=function(){function l(l,n,u,o,r,s,t){this.route=l,this.router=n,this.service=u,this.toaster=o,this.storage=r,this.fb=s,this.toastr=t,this.code=""}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.code=n.code}),this.resetPasswordForm=this.fb.group({password:["",[f.Validators.required,f.Validators.minLength(8)]],confirm_password:["",[f.Validators.required,f.Validators.minLength(8)]]})},Object.defineProperty(l.prototype,"f",{get:function(){return this.resetPasswordForm},enumerable:!0,configurable:!0}),l.prototype.resetPassword=function(){var l=this;if(!this.resetPasswordForm.invalid){var n=this.resetPasswordForm.value;n.password==n.confirm_password?(this.loading=!0,this.loadingText="Submitting...",this.service.resetPassword({new_password:n.password,code:this.code}).subscribe(function(n){l.loading=!1,l.toastr.success("Password has been reset successfully. You can login now.","Yippy!"),l.resetPasswordForm.reset(),l.router.navigateByUrl("/sessions/signin")},function(n){l.loading=!1,l.toastr.error(n,"Oh!")})):this.resetPasswordForm.controls.confirm_password.setErrors({match:!0})}},l}(),I=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Password is required "]))],null,null)}function N(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Password should be at least 8 characters long. "]))],null,null)}function R(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Password and confirm password should match. "]))],null,null)}function x(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Confirm password is required "]))],null,null)}function k(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Confirm password should be at least 8 characters long. "]))],null,null)}function P(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Password and confirm password should match. "]))],null,null)}function S(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,56,"div",[["class","card col-8 mx-auto o-hidden"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,55,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,54,"div",[["class","col-md-10 col-10 mx-auto"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,53,"div",[["class","p-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"div",[["class","auth-logo text-center mb-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,0,"img",[["alt",""],["class","ng-tns-c2-1"],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,1,"h1",[["class","mb-3 text-18"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Reset Password"])),(l()(),o["\u0275eld"](8,0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0,s=l.component;return"submit"===n&&(r=!1!==o["\u0275nov"](l,10).onSubmit(u)&&r),"reset"===n&&(r=!1!==o["\u0275nov"](l,10).onReset()&&r),"ngSubmit"===n&&(r=!1!==s.resetPassword()&&r),r},null,null)),o["\u0275did"](9,16384,null,0,f["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](10,540672,null,0,f.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,f.ControlContainer,null,[f.FormGroupDirective]),o["\u0275did"](12,16384,null,0,f.NgControlStatusGroup,[[4,f.ControlContainer]],null,null),(l()(),o["\u0275eld"](13,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](14,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Password"])),(l()(),o["\u0275eld"](16,0,null,null,5,"input",[["class","form-control form-control-rounded"],["formControlName","password"],["id","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==o["\u0275nov"](l,17)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==o["\u0275nov"](l,17).onTouched()&&r),"compositionstart"===n&&(r=!1!==o["\u0275nov"](l,17)._compositionStart()&&r),"compositionend"===n&&(r=!1!==o["\u0275nov"](l,17)._compositionEnd(u.target.value)&&r),r},null,null)),o["\u0275did"](17,16384,null,0,f.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,f.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,f.NG_VALUE_ACCESSOR,function(l){return[l]},[f.DefaultValueAccessor]),o["\u0275did"](19,671744,null,0,f.FormControlName,[[3,f.ControlContainer],[8,null],[8,null],[6,f.NG_VALUE_ACCESSOR],[2,f["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,f.NgControl,null,[f.FormControlName]),o["\u0275did"](21,16384,null,0,f.NgControlStatus,[[4,f.NgControl]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,F)),o["\u0275did"](23,16384,null,0,v.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,N)),o["\u0275did"](25,16384,null,0,v.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,R)),o["\u0275did"](27,16384,null,0,v.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](28,0,null,null,2,"password-strength-meter",[],null,null,null,h.b,h.a)),o["\u0275prd"](512,null,w.c,w.c,[]),o["\u0275did"](30,638976,null,0,w.a,[w.c],{password:[0,"password"]},null),(l()(),o["\u0275eld"](31,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](32,0,null,null,1,"label",[["for","repassword"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Confirm password"])),(l()(),o["\u0275eld"](34,0,null,null,5,"input",[["class","form-control form-control-rounded"],["formControlName","confirm_password"],["id","repassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0;return"input"===n&&(r=!1!==o["\u0275nov"](l,35)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==o["\u0275nov"](l,35).onTouched()&&r),"compositionstart"===n&&(r=!1!==o["\u0275nov"](l,35)._compositionStart()&&r),"compositionend"===n&&(r=!1!==o["\u0275nov"](l,35)._compositionEnd(u.target.value)&&r),r},null,null)),o["\u0275did"](35,16384,null,0,f.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,f.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,f.NG_VALUE_ACCESSOR,function(l){return[l]},[f.DefaultValueAccessor]),o["\u0275did"](37,671744,null,0,f.FormControlName,[[3,f.ControlContainer],[8,null],[8,null],[6,f.NG_VALUE_ACCESSOR],[2,f["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,f.NgControl,null,[f.FormControlName]),o["\u0275did"](39,16384,null,0,f.NgControlStatus,[[4,f.NgControl]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,x)),o["\u0275did"](41,16384,null,0,v.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,k)),o["\u0275did"](43,16384,null,0,v.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,P)),o["\u0275did"](45,16384,null,0,v.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](46,0,null,null,2,"password-strength-meter",[],null,null,null,h.b,h.a)),o["\u0275prd"](512,null,w.c,w.c,[]),o["\u0275did"](48,638976,null,0,w.a,[w.c],{password:[0,"password"]},null),(l()(),o["\u0275eld"](49,0,null,null,2,"btn-loading",[["btnClass","btn-primary btn-rounded btn-block mt-3"]],null,null,null,b.b,b.a)),o["\u0275did"](50,114688,null,0,C.a,[],{loading:[0,"loading"],btnClass:[1,"btnClass"],loadingText:[2,"loadingText"]},null),(l()(),o["\u0275ted"](-1,0,[" Reset Now "])),(l()(),o["\u0275eld"](52,0,null,null,4,"div",[["class","mt-3 text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](53,0,null,null,3,"a",[["class","text-muted"],["routerLink","/sessions/signin"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var r=!0;return"click"===n&&(r=!1!==o["\u0275nov"](l,54).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r},null,null)),o["\u0275did"](54,671744,null,0,d.t,[d.q,d.a,v.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),o["\u0275eld"](55,0,null,null,1,"u",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Login"]))],function(l,n){var u=n.component;l(n,10,0,u.resetPasswordForm),l(n,19,0,"password"),l(n,23,0,u.f.controls.password.dirty&&(null==u.f.controls.password.errors?null:u.f.controls.password.errors.required)),l(n,25,0,u.f.controls.password.dirty&&(null==u.f.controls.password.errors?null:u.f.controls.password.errors.minlength)),l(n,27,0,u.f.controls.password.dirty&&(null==u.f.controls.password.errors?null:u.f.controls.password.errors.match)),l(n,30,0,u.f.value.password),l(n,37,0,"confirm_password"),l(n,41,0,u.f.controls.confirm_password.dirty&&(null==u.f.controls.confirm_password.errors?null:u.f.controls.confirm_password.errors.required)),l(n,43,0,u.f.controls.confirm_password.dirty&&(null==u.f.controls.confirm_password.errors?null:u.f.controls.confirm_password.errors.minlength)),l(n,45,0,u.f.controls.confirm_password.dirty&&(null==u.f.controls.confirm_password.errors?null:u.f.controls.confirm_password.errors.match)),l(n,48,0,u.f.value.confirm_password),l(n,50,0,u.loading,"btn-primary btn-rounded btn-block mt-3",u.loadingText),l(n,54,0,"/sessions/signin")},function(l,n){l(n,8,0,o["\u0275nov"](n,12).ngClassUntouched,o["\u0275nov"](n,12).ngClassTouched,o["\u0275nov"](n,12).ngClassPristine,o["\u0275nov"](n,12).ngClassDirty,o["\u0275nov"](n,12).ngClassValid,o["\u0275nov"](n,12).ngClassInvalid,o["\u0275nov"](n,12).ngClassPending),l(n,16,0,o["\u0275nov"](n,21).ngClassUntouched,o["\u0275nov"](n,21).ngClassTouched,o["\u0275nov"](n,21).ngClassPristine,o["\u0275nov"](n,21).ngClassDirty,o["\u0275nov"](n,21).ngClassValid,o["\u0275nov"](n,21).ngClassInvalid,o["\u0275nov"](n,21).ngClassPending),l(n,34,0,o["\u0275nov"](n,39).ngClassUntouched,o["\u0275nov"](n,39).ngClassTouched,o["\u0275nov"](n,39).ngClassPristine,o["\u0275nov"](n,39).ngClassDirty,o["\u0275nov"](n,39).ngClassValid,o["\u0275nov"](n,39).ngClassInvalid,o["\u0275nov"](n,39).ngClassPending),l(n,53,0,o["\u0275nov"](n,54).target,o["\u0275nov"](n,54).href)})}var E=o["\u0275ccf"]("app-reset-password",y,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-reset-password",[],null,null,null,S,I)),o["\u0275did"](1,114688,null,0,y,[d.a,d.q,_.a,c.j,a.a,f.FormBuilder,c.j],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=u("9AJC"),O=u("4GxJ"),T=u("xkgV"),D=u("9Bt9"),U=u("qAlS"),L=function(){},A=u("bse0"),M=u("Ey38"),q=u("aYsj"),j=u("mnDI"),B=u("ate/"),G=u("jgPy");u.d(n,"SiteModuleNgFactory",function(){return Y});var Y=o["\u0275cmf"](r,[],function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,g,E,V.a,V.b,V.m,V.i,V.j,V.k,V.l]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[o.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,f.FormBuilder,f.FormBuilder,[]),o["\u0275mpd"](4608,f["\u0275angular_packages_forms_forms_j"],f["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,O.v,O.v,[o.ComponentFactoryResolver,o.Injector,O.Y,O.w]),o["\u0275mpd"](4608,T.e,T.e,[]),o["\u0275mpd"](4608,D.f,D.f,[v.DOCUMENT,o.NgZone,U.a,D.h]),o["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),o["\u0275mpd"](1073742336,d.u,d.u,[[2,d.A],[2,d.q]]),o["\u0275mpd"](1073742336,L,L,[]),o["\u0275mpd"](1073742336,f["\u0275angular_packages_forms_forms_bc"],f["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,f.ReactiveFormsModule,f.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,w.b,w.b,[]),o["\u0275mpd"](1073742336,O.c,O.c,[]),o["\u0275mpd"](1073742336,O.f,O.f,[]),o["\u0275mpd"](1073742336,O.g,O.g,[]),o["\u0275mpd"](1073742336,O.k,O.k,[]),o["\u0275mpd"](1073742336,O.l,O.l,[]),o["\u0275mpd"](1073742336,f.FormsModule,f.FormsModule,[]),o["\u0275mpd"](1073742336,O.q,O.q,[]),o["\u0275mpd"](1073742336,O.t,O.t,[]),o["\u0275mpd"](1073742336,O.x,O.x,[]),o["\u0275mpd"](1073742336,O.B,O.B,[]),o["\u0275mpd"](1073742336,O.E,O.E,[]),o["\u0275mpd"](1073742336,O.H,O.H,[]),o["\u0275mpd"](1073742336,O.K,O.K,[]),o["\u0275mpd"](1073742336,O.Q,O.Q,[]),o["\u0275mpd"](1073742336,O.U,O.U,[]),o["\u0275mpd"](1073742336,O.V,O.V,[]),o["\u0275mpd"](1073742336,O.W,O.W,[]),o["\u0275mpd"](1073742336,O.y,O.y,[]),o["\u0275mpd"](1073742336,T.a,T.a,[]),o["\u0275mpd"](1073742336,A.c,A.c,[]),o["\u0275mpd"](1073742336,M.a,M.a,[]),o["\u0275mpd"](1073742336,q.a,q.a,[]),o["\u0275mpd"](1073742336,j.a,j.a,[]),o["\u0275mpd"](1073742336,D.g,D.g,[]),o["\u0275mpd"](1073742336,B.a,B.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,d.k,function(){return[[{path:"verify/:action/:code",component:i},{path:"reset-password/:code",component:y}]]},[])])})},xXU7:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var o=u("6blF"),r=u("T1DM"),s=u("/21U");function t(l,n){return void 0===l&&(l=0),void 0===n&&(n=r.a),(!Object(s.a)(l)||l<0)&&(l=0),n&&"function"==typeof n.schedule||(n=r.a),new o.a(function(u){return u.add(n.schedule(e,l,{subscriber:u,counter:0,period:l})),u})}function e(l){var n=l.subscriber,u=l.counter,o=l.period;n.next(u),this.schedule({subscriber:n,counter:u+1,period:o},o)}}}]);