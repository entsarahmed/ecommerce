"use strict";(self.webpackChunkfreshecommerce=self.webpackChunkfreshecommerce||[]).push([[177],{5177:(_,c,o)=>{o.r(c),o.d(c,{PaymentComponent:()=>h});var l=o(6814),r=o(95),t=o(4769),u=o(1120),a=o(5371);let h=(()=>{class e{constructor(s,n){this._ActivatedRoute=s,this._CartService=n,this.cartId="",this.orderForm=new r.cw({details:new r.NI(""),phone:new r.NI(""),city:new r.NI("")})}handleForm(){console.log(this.orderForm.value),this._CartService.checkOut(this.cartId,this.orderForm.value).subscribe({next:n=>{"success"===n.status&&window.open(n.session.url,"_self")}})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{console.log(s.get("id")),this.cartId=s.get("id")}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(u.gz),t.Y36(a.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment"]],standalone:!0,features:[t.jDz],decls:18,vars:1,consts:[[1,"w-75","mx-auto","rounded","shadow","p-3","bg-main-light","mb-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","details"],["type","text","formControlName","details","id","details",1,"form-control"],["for","phone"],["type","tel","id","phone","formControlName","phone",1,"form-control"],["for","city"],["type","text","id","city","formControlName","city",1,"form-control"],[1,"main-btn","mt-3",3,"click"]],template:function(n,m){1&n&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2,"Checkout Session"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return m.handleForm()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"details"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",5),t._uU(10,"phone"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"div",2)(13,"label",7),t._uU(14,"city"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"button",9),t.NdJ("click",function(){return m.handleForm()}),t._uU(17,"CheckOut"),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("formGroup",m.orderForm))},dependencies:[l.ez,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return e})()},5371:(_,c,o)=>{o.d(c,{N:()=>u});var l=o(5619),r=o(4769),t=o(9862);let u=(()=>{class a{constructor(e){this._HttpClient=e,this.cartNumber=new l.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addToCart(e){return this._HttpClient.post(this.baseUrl+"cart",{productId:e})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(e){return this._HttpClient.delete(this.baseUrl+`cart/${e}`)}updateCartCount(e,i){return this._HttpClient.put(this.baseUrl+`cart/${e}`,{count:i})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(e,i){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${e}?url=http://localhost:4200`,{shippingAddress:i})}static#t=this.\u0275fac=function(i){return new(i||a)(r.LFG(t.eN))};static#e=this.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);