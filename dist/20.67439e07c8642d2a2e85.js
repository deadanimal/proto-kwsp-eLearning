(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{nWYI:function(t,e,b){"use strict";b.r(e);var n=b("Valr"),i=b("oW1M"),o=b("89/Q"),r=b("QJY3"),a=b("X2FZ"),c=b("R/Hu"),l=b("DUip"),d=b("PSD3"),s=b.n(d),f=b("TYT/");function m(t,e){if(1&t){var b=f.Ub();f.Tb(0,"a",52),f.bc("click",(function(t){return f.wc(b),f.fc().toggleEdit()})),f.Tb(1,"span",53),f.Pb(2,"i",54),f.Sb(),f.Tb(3,"span",55),f.Fc(4,"Edit profile"),f.Sb(),f.Sb()}}function p(t,e){if(1&t){var b=f.Ub();f.Tb(0,"a",56),f.bc("click",(function(t){return f.wc(b),f.fc().toggleEdit()})),f.Tb(1,"span",53),f.Pb(2,"i",57),f.Sb(),f.Tb(3,"span",55),f.Fc(4,"Back"),f.Sb(),f.Sb()}}function u(t,e){if(1&t){var b=f.Ub();f.Tb(0,"a",58),f.bc("click",(function(t){return f.wc(b),f.fc().confirm()})),f.Tb(1,"span",53),f.Pb(2,"i",59),f.Sb(),f.Tb(3,"span",55),f.Fc(4,"Save"),f.Sb(),f.Sb()}}function S(t,e){1&t&&(f.Tb(0,"h3",60),f.Fc(1,"Profile"),f.Sb())}function T(t,e){1&t&&(f.Tb(0,"h3",60),f.Fc(1," Edit Profile"),f.Sb())}function v(t,e){1&t&&(f.Tb(0,"a",61),f.Fc(1," Settings "),f.Sb())}function h(t,e){1&t&&(f.Tb(0,"form"),f.Tb(1,"h6",62),f.Fc(2,"User information"),f.Sb(),f.Tb(3,"div",63),f.Tb(4,"div",17),f.Tb(5,"div",64),f.Tb(6,"div",65),f.Tb(7,"label",66),f.Fc(8," Name "),f.Sb(),f.Pb(9,"input",67),f.Sb(),f.Sb(),f.Tb(10,"div",64),f.Tb(11,"div",65),f.Tb(12,"label",68),f.Fc(13," Email address "),f.Sb(),f.Pb(14,"input",69),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Pb(15,"hr",70),f.Tb(16,"h6",62),f.Fc(17,"Contact information"),f.Sb(),f.Tb(18,"div",63),f.Tb(19,"div",17),f.Tb(20,"div",71),f.Tb(21,"div",65),f.Tb(22,"label",72),f.Fc(23," Address "),f.Sb(),f.Pb(24,"input",73),f.Sb(),f.Sb(),f.Sb(),f.Tb(25,"div",17),f.Tb(26,"div",74),f.Tb(27,"div",65),f.Tb(28,"label",75),f.Fc(29," City "),f.Sb(),f.Pb(30,"input",76),f.Sb(),f.Sb(),f.Tb(31,"div",74),f.Tb(32,"div",65),f.Tb(33,"label",77),f.Fc(34," Country "),f.Sb(),f.Pb(35,"input",78),f.Sb(),f.Sb(),f.Tb(36,"div",74),f.Tb(37,"div",65),f.Tb(38,"label",77),f.Fc(39," Postal code "),f.Sb(),f.Pb(40,"input",79),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb())}function g(t,e){if(1&t&&(f.Tb(0,"form",80),f.Tb(1,"h6",62),f.Fc(2,"User information"),f.Sb(),f.Tb(3,"div",63),f.Tb(4,"div",17),f.Tb(5,"div",64),f.Tb(6,"div",65),f.Tb(7,"label",66),f.Fc(8," Name "),f.Sb(),f.Pb(9,"input",81),f.Sb(),f.Sb(),f.Tb(10,"div",64),f.Tb(11,"div",65),f.Tb(12,"label",68),f.Fc(13," Email address "),f.Sb(),f.Pb(14,"input",82),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Pb(15,"hr",70),f.Tb(16,"h6",62),f.Fc(17,"Contact information"),f.Sb(),f.Tb(18,"div",63),f.Tb(19,"div",17),f.Tb(20,"div",71),f.Tb(21,"div",65),f.Tb(22,"label",72),f.Fc(23," Address "),f.Sb(),f.Pb(24,"input",83),f.Sb(),f.Sb(),f.Sb(),f.Tb(25,"div",17),f.Tb(26,"div",74),f.Tb(27,"div",65),f.Tb(28,"label",75),f.Fc(29," City "),f.Sb(),f.Pb(30,"input",84),f.Sb(),f.Sb(),f.Tb(31,"div",74),f.Tb(32,"div",65),f.Tb(33,"label",77),f.Fc(34," Country "),f.Sb(),f.Pb(35,"input",85),f.Sb(),f.Sb(),f.Tb(36,"div",74),f.Tb(37,"div",65),f.Tb(38,"label",77),f.Fc(39," Postal code "),f.Sb(),f.Pb(40,"input",86),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb()),2&t){var b=f.fc();f.lc("formGroup",b.editForm)}}var y=function(){function t(t){this.formBuilder=t,this.editEnabled=!1,this.editFormMessages={name:[{type:"required",message:"Name is required"}],email:[{type:"required",message:"Email is required"},{type:"email",message:"A valid email is required"}]}}return t.prototype.ngOnInit=function(){this.editForm=this.formBuilder.group({name:new r.d("",r.t.compose([r.t.required])),email:new r.d("",r.t.compose([r.t.required,r.t.email]))})},t.prototype.toggleEdit=function(){this.editEnabled=!this.editEnabled},t.prototype.confirm=function(){var t=this;s.a.fire({title:"Confirmation",text:"Are you sure to save this edit?",type:"info",buttonsStyling:!1,confirmButtonClass:"btn btn-info",confirmButtonText:"Confirm",showCancelButton:!0,cancelButtonClass:"btn btn-danger",cancelButtonText:"Cancel"}).then((function(e){e.value&&t.edit()}))},t.prototype.edit=function(){var t=this;s.a.fire({title:"Success",text:"Update has been saved",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"Close"}).then((function(e){e.value&&t.editForm.reset()}))},t.\u0275fac=function(e){return new(e||t)(f.Ob(r.c))},t.\u0275cmp=f.Ib({type:t,selectors:[["app-profile"]],decls:76,vars:8,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-chart-bar","text-dark"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],["class","btn btn-default btn-sm text-white btn-icon btn-3",3,"click",4,"ngIf"],["class","btn btn-danger btn-sm text-white btn-icon btn-3",3,"click",4,"ngIf"],["class","btn btn-success btn-sm text-white btn-icon btn-3",3,"click",4,"ngIf"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col-xl-4","order-xl-2"],[1,"card","card-profile"],["alt","Image placeholder","src","assets/img/theme/img-1-1000x600.jpg",1,"card-img-top"],[1,"row","justify-content-center"],[1,"col-lg-3","order-lg-2"],[1,"card-profile-image"],["src","assets/img/default/avatar.png",1,"rounded-circle"],[1,"card-header","text-center","border-0","pt-8","pt-md-4","pb-0","pb-md-4"],[1,"d-flex","justify-content-between"],["href","javascript:void(0)",1,"btn","btn-sm","btn-info","mr-4"],["href","javascript:void(0)",1,"btn","btn-sm","btn-default","float-right"],[1,"card-body","pt-0"],[1,"col"],[1,"card-profile-stats","d-flex","justify-content-center"],[1,"heading"],[1,"description"],[1,"text-center"],[1,"h3"],[1,"font-weight-light"],[1,"h5","font-weight-300"],[1,"fas","fa-location-arrow","mr-2"],[1,"h5","mt-4"],[1,"fas","fa-briefcase","mr-2"],[1,"col-xl-8","order-xl-1"],[1,"card"],[1,"card-header"],[1,"row","align-items-center"],[1,"col-8"],["class","mb-0",4,"ngIf"],[1,"col-4","text-right"],["class","btn btn-sm btn-primary","href","javascript:void(0)",4,"ngIf"],[1,"card-body"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"btn","btn-default","btn-sm","text-white","btn-icon","btn-3",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-user-edit"],[1,"btn-inner--text"],[1,"btn","btn-danger","btn-sm","text-white","btn-icon","btn-3",3,"click"],[1,"fas","fa-arrow-left"],[1,"btn","btn-success","btn-sm","text-white","btn-icon","btn-3",3,"click"],[1,"fas","fa-save"],[1,"mb-0"],["href","javascript:void(0)",1,"btn","btn-sm","btn-primary"],[1,"heading-small","text-muted","mb-4"],[1,"pl-lg-4"],[1,"col-lg-6"],[1,"form-group"],["for","input-username",1,"form-control-label"],["id","input-username","placeholder","Name","type","text","value","Ali Imran","disabled","",1,"form-control"],["for","input-email",1,"form-control-label"],["id","input-email","placeholder","Email address","type","email","value","imran@prototype.com.my","disabled","",1,"form-control"],[1,"my-4"],[1,"col-md-12"],["for","input-address",1,"form-control-label"],["id","input-address","placeholder","Home Address","type","text","value","No. 199, Lorong Esplanade 91/8A","disabled","",1,"form-control"],[1,"col-lg-4"],["for","input-city",1,"form-control-label"],["id","input-city","placeholder","City","type","text","value","Petaling Jaya","disabled","",1,"form-control"],["for","input-country",1,"form-control-label"],["id","input-country","placeholder","Country","type","text","value","Malaysia","disabled","",1,"form-control"],["id","input-postal-code","placeholder","Postal code","type","number","value","41240","disabled","",1,"form-control"],[3,"formGroup"],["id","input-username","placeholder","Name","type","text","value","Ali Imran","formControlName","name",1,"form-control"],["id","input-email","placeholder","Email address","type","email","value","imran@prototype.com.my","formControlName","email",1,"form-control"],["id","input-address","placeholder","Home Address","type","text","value","No. 199, Lorong Esplanade 91/8A","formControlName","address",1,"form-control"],["id","input-city","placeholder","City","type","text","value","Petaling Jaya","formControlName","city",1,"form-control"],["id","input-country","placeholder","Country","type","text","value","Malaysia","formControlName","country",1,"form-control"],["id","input-postal-code","placeholder","Postal code","type","number","value","41240","formControlName","postcode",1,"form-control"]],template:function(t,e){1&t&&(f.Tb(0,"div",0),f.Tb(1,"div",1),f.Tb(2,"div",2),f.Tb(3,"div",3),f.Tb(4,"div",4),f.Tb(5,"h6",5),f.Fc(6,"Profile"),f.Sb(),f.Tb(7,"nav",6),f.Tb(8,"ol",7),f.Tb(9,"li",8),f.Tb(10,"a",9),f.Pb(11,"i",10),f.Sb(),f.Sb(),f.Tb(12,"li",11),f.Fc(13," Profile "),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(14,"div",12),f.Dc(15,m,5,0,"a",13),f.Dc(16,p,5,0,"a",14),f.Dc(17,u,5,0,"a",15),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(18,"div",16),f.Tb(19,"div",17),f.Tb(20,"div",18),f.Tb(21,"div",19),f.Pb(22,"img",20),f.Tb(23,"div",21),f.Tb(24,"div",22),f.Tb(25,"div",23),f.Tb(26,"a"),f.Pb(27,"img",24),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(28,"div",25),f.Tb(29,"div",26),f.Tb(30,"a",27),f.Fc(31," Connect "),f.Sb(),f.Tb(32,"a",28),f.Fc(33," Message "),f.Sb(),f.Sb(),f.Sb(),f.Tb(34,"div",29),f.Tb(35,"div",17),f.Tb(36,"div",30),f.Tb(37,"div",31),f.Tb(38,"div"),f.Tb(39,"span",32),f.Fc(40," 22 "),f.Sb(),f.Tb(41,"span",33),f.Fc(42," Friends "),f.Sb(),f.Sb(),f.Tb(43,"div"),f.Tb(44,"span",32),f.Fc(45," 10 "),f.Sb(),f.Tb(46,"span",33),f.Fc(47," Photos "),f.Sb(),f.Sb(),f.Tb(48,"div"),f.Tb(49,"span",32),f.Fc(50," 89 "),f.Sb(),f.Tb(51,"span",33),f.Fc(52," Comments "),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(53,"div",34),f.Tb(54,"h5",35),f.Fc(55," Ali Imran"),f.Tb(56,"span",36),f.Fc(57," , 27 "),f.Sb(),f.Sb(),f.Tb(58,"div",37),f.Pb(59,"i",38),f.Fc(60," Ampang, Kuala Lumpur "),f.Sb(),f.Tb(61,"div",39),f.Pb(62,"i",40),f.Fc(63," IT Manager "),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(64,"div",41),f.Tb(65,"div",42),f.Tb(66,"div",43),f.Tb(67,"div",44),f.Tb(68,"div",45),f.Dc(69,S,2,0,"h3",46),f.Dc(70,T,2,0,"h3",46),f.Sb(),f.Tb(71,"div",47),f.Dc(72,v,2,0,"a",48),f.Sb(),f.Sb(),f.Sb(),f.Tb(73,"div",49),f.Dc(74,h,41,0,"form",50),f.Dc(75,g,41,1,"form",51),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb()),2&t&&(f.Bb(15),f.lc("ngIf",!e.editEnabled),f.Bb(1),f.lc("ngIf",e.editEnabled),f.Bb(1),f.lc("ngIf",e.editEnabled),f.Bb(52),f.lc("ngIf",!e.editEnabled),f.Bb(1),f.lc("ngIf",e.editEnabled),f.Bb(2),f.lc("ngIf",!e.editEnabled),f.Bb(2),f.lc("ngIf",!e.editEnabled),f.Bb(1),f.lc("ngIf",e.editEnabled))},directives:[n.l,r.v,r.n,r.o,r.g,r.b,r.m,r.e,r.r],styles:[""]}),t}(),F=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Ib({type:t,selectors:[["app-settings"]],decls:2,vars:0,template:function(t,e){1&t&&(f.Tb(0,"p"),f.Fc(1,"settings works!"),f.Sb())},styles:[""]}),t}(),x=[{path:"",children:[{path:"notifications",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Ib({type:t,selectors:[["app-notifications"]],decls:2,vars:0,template:function(t,e){1&t&&(f.Tb(0,"p"),f.Fc(1,"notifications works!"),f.Sb())},styles:[""]}),t}()},{path:"profile",component:y},{path:"settings",component:F}]}];b.d(e,"GlobalModule",(function(){return P}));var P=function(){function t(){}return t.\u0275mod=f.Mb({type:t}),t.\u0275inj=f.Lb({factory:function(e){return new(e||t)},imports:[[n.c,i.b.forRoot(),o.c.forRoot(),i.f.forRoot(),i.i.forRoot(),i.k.forRoot(),i.l.forRoot(),i.m.forRoot(),r.h,r.s,c.b,a.e,l.g.forChild(x)]]}),t}()}}]);