"use strict";(self.webpackChunkfreshecommerce=self.webpackChunkfreshecommerce||[]).push([[691],{9691:(f,_,r)=>{r.r(_),r.d(_,{DetailsComponent:()=>x});var c=r(6814),n=r(756),t=r(4769),d=r(1120),u=r(7064),p=r(5371),m=r(2425);function g(i,l){if(1&i&&t._UZ(0,"img",16),2&i){const e=t.oxw().$implicit,s=t.oxw(2);t.Q6J("src",e,t.LSH)("alt",s.productDetails.title)("title",s.productDetails.title)}}function D(i,l){if(1&i&&(t.ynx(0),t.YNc(1,g,1,3,"ng-template",15),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("id",e.productDetails._id)}}function v(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,1,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h3",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",11),t._UZ(18,"i",12),t._uU(19),t.qZA()(),t.TgZ(20,"button",13,14),t.NdJ("click",function(){t.CHM(e);const o=t.MAs(21),a=t.oxw();return t.KtG(a.addProduct(a.productDetails._id,o))}),t._uU(22,"+Add To Cart"),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("options",e.detailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.Oqu(t.xi3(16,7,e.productDetails.price,"EGP")),t.xp6(4),t.hij(" ",e.productDetails.ratingsAverage,"")}}let x=(()=>{class i{constructor(e,s,o,a,h){this._ActivatedRoute=e,this._ProductService=s,this._Renderer2=o,this._CartService=a,this._ToastrService=h,this.productDetails=null,this.detailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id")}}),this._ProductService.getProductDetails(this.productId).subscribe({next:e=>{console.log(e.data),this.productDetails=e.data}})}addProduct(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(e).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(d.gz),t.Y36(u.M),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-3 mb-2",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-3","mb-2"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted","small"],[1,"d-flex","align-items-center","justify-content-between","my-3"],[1,"small"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100",3,"click"],["btnAdd",""],["carouselSlide","",3,"id"],[3,"src","alt","title"]],template:function(s,o){1&s&&t.YNc(0,v,23,10,"section",0),2&s&&t.Q6J("ngIf",o.productDetails)},dependencies:[c.ez,c.sg,c.O5,c.H9,n.bB,n.Fy,n.Mp]})}return i})()}}]);