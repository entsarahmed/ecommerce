"use strict";(self.webpackChunkfreshecommerce=self.webpackChunkfreshecommerce||[]).push([[937],{937:(u,c,r)=>{r.r(c),r.d(c,{CategoriesComponent:()=>g});var a=r(6814),l=r(1120),t=r(4769),n=r(7064);const _=function(o){return["/categorydetails",o]};function e(o,d){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&o){const s=d.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,_,s._id)),t.xp6(1),t.Q6J("src",s.image,t.LSH)("alt",s.name),t.xp6(2),t.Oqu(s.name)}}let g=(()=>{class o{constructor(s){this._ProductService=s,this.categoryData=[]}ngOnInit(){this._ProductService.getCategories().subscribe({next:s=>{this.categoryData=s.data}})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(n.M))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-4"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],["role","button",1,"border","border-success","rounded","p-2","shadow",3,"routerLink"],["height","270",1,"w-100",3,"src","alt"],[1,"text-center","text-main"]],template:function(i,m){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,e,5,6,"div",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",m.categoryData))},dependencies:[a.ez,a.sg,l.rH]})}return o})()},7064:(u,c,r)=>{r.d(c,{M:()=>t});var a=r(4769),l=r(9862);let t=(()=>{class n{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}getProductDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}getBrandsDetails(e){return this._HttpClient.get(this.baseUrl+`brands/${e}`)}static#t=this.\u0275fac=function(g){return new(g||n)(a.LFG(l.eN))};static#e=this.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);