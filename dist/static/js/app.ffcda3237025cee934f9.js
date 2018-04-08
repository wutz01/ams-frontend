webpackJsonp([13],{"7zck":function(t,n){},IcnI:function(t,n,e){"use strict";var a=e("7+uW"),o=e("NYxO"),r=e("424j"),u={state:{user:null,token:null},getters:{getUser:function(t){return t.user},getToken:function(t){return t.token}},actions:{setCredentials:function(t,n){var e=t.commit;return t.state,e("setCredentials",n)},clearUser:function(t){var n=t.commit;return t.state,n("clearUser")}},mutations:{clearUser:function(t){t.user=t.token=null},setCredentials:function(t,n){n.token&&(t.token=n.token),n.user&&(t.user=n.user)}}};a.a.use(o.a);n.a=new o.a.Store({modules:{Authentication:u},plugins:[Object(r.a)({key:"_bst_",paths:["Authentication"]})]})},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=new a.a,r={name:"app",data:function(){return{snackBar:{show:!1,message:null,color:null,timeout:7e3}}},methods:{showToast:function(t){var n="primary";"success"===t.mode&&(n="black"),"error"===t.mode&&(n="red"),this.snackBar.show=!0,this.snackBar.message=t.text,this.snackBar.color=n}},mounted:function(){o.$on("display-toast",this.showToast)}},u=e("XyMi"),c=Object(u.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-snackbar",{attrs:{color:t.snackBar.color,timeout:t.snackBar.timeout,bottom:"bottom","multi-line":"multi-line"},model:{value:t.snackBar.show,callback:function(n){t.$set(t.snackBar,"show",n)},expression:"snackBar.show"}},[e("span",{staticClass:"white--text"},[t._v(t._s(t.snackBar.message))]),e("v-btn",{attrs:{flat:"flat",color:"white"},nativeOn:{click:function(n){t.snackBar.show=!1}}},[t._v("Close")])],1),e("router-view")],1)},[],!1,null,null,null).exports,i=e("/ocq"),s=e("gyMJ"),d=e("g2Wd");a.a.use(i.a);var l=function(t,n,e){t&&t.meta&&t.meta.public?e():s.c.me().then(function(n){t&&t.meta&&t.meta.auth&&t.meta.auth.length>0?-1!==Object(d.indexOf)(t.meta.auth,n.userType)?e():(o.$emit("display-toast",{text:"Permission Denied. You can't access the page.",mode:"error"}),e(!1)):e()}).catch(function(t){o.$emit("display-toast",{text:"Authentication Failed. Please login again.",mode:"error"}),s.c.logout(),e({name:"login"})}),e()},p=new i.a({mode:"history",routes:[{path:"/",name:"landing",meta:{public:!0},component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"BgHy"))}},{path:"/login",name:"login",meta:{public:!0},component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"BgHy"))}},{path:"/logout",name:"logout",meta:{public:!0},component:function(){return e.e(11).then(e.bind(null,"ikzh"))}},{path:"/registration",name:"registration",meta:{public:!0},component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"/UDR"))}},{path:"/our-products",name:"our-products",meta:{public:!0},component:function(){return e.e(10).then(e.bind(null,"kb3O"))}},{path:"/web",name:"web-container",component:function(){return e.e(2).then(e.bind(null,"TtzH"))},children:[{path:"dashboard",name:"dashboard",meta:{auth:!0,title:"Dashboard"},component:function(){return e.e(6).then(e.bind(null,"QWlh"))},beforeEnter:l},{path:"/attendance",name:"attendance",meta:{auth:["ADMIN"],title:"Attendance"},component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"eleo"))},beforeEnter:l},{path:"/attendance/:id/view",name:"attendance-view",meta:{auth:["ADMIN"],title:"Attendance > View"},component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"q19Y"))},beforeEnter:l},{path:"/masterlist/brethrens",name:"masterlist-member",meta:{auth:["ADMIN"],title:"Masterlist > Brethrens"},component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"JwS/"))},beforeEnter:l},{path:"/masterlist/workers",name:"masterlist-workers",meta:{auth:["ADMIN"],title:"Masterlist > Workers"},component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"UWpV"))},beforeEnter:l}]},{path:"/page-not-found",name:"page-not-found",component:function(){return e.e(3).then(e.bind(null,"BUYD"))},meta:{public:!0}},{path:"*",redirect:"/page-not-found"}]}),f=e("IcnI"),h=e("mtWM"),m=e.n(h),g=e("3EgV"),b=e.n(g),w=e("T2eB"),k=e.n(w),v=e("cTzj"),y=e.n(v),A=(e("j1ja"),e("1Rfu"));e("7zck"),e("xTAe"),e("aD/D");a.a.use(b.a),a.a.use(f.a),a.a.use(k.a),a.a.use(y.a,{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}}),a.a.config.productionTip=!1;var I=m.a.create({baseURL:"//167.99.79.83"});I.interceptors.request.use(function(t){return null!==f.a.getters.getToken&&(t.headers={Authorization:"Bearer "+f.a.getters.getToken}),t}),a.a.http=a.a.axios=I;var P={methods:{inputRules:function(){return{required:function(t){return!!t||"This is a required field"},email:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"Invalid Email"},phoneNumber:function(t){return/^[0-9]+$/.test(t)||"Invalid mobile number"},money:function(t){return/^\$?\-?([1-9]{1}[0-9]{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\-?\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\(\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))\)$/.test(t)||"Invalid amount"},multipleRequired:function(t){return t.length>0||"You must select atleast 1"}}},constructImageUrl:function(t){return console.log(t),t&&t.imagePath&&t.filename&&t.extension?t.imagePath+t.filename+"."+t.extension:null},timeformat:function(){return"DD-MMM-YY hh:mm a"},displayToast:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";o.$emit("display-toast",{text:t,mode:n})},parseErrorRes:function(t){var n=t.response,e=[];if(n)return n.data&&n.data.errors&&n.data.errors?(Object(A.mapKeys)(n.data.errors,function(t,n){e.push(t)}),e.join("\n\n")):n.data.error||"An error occured. Please try again."}}};a.a.mixin(P),new a.a({el:"#app",router:p,store:f.a,components:{App:c},template:"<App/>"})},"aD/D":function(t,n){},gyMJ:function(t,n,e){"use strict";var a=e("//Fk"),o=e.n(a),r=e("7+uW"),u=e("IcnI"),c={login:function(t,n){return new o.a(function(e,a){var o={email:t,password:n};r.a.http.post("api/user/login",o).then(function(t){if(t&&t.data&&t.data.user&&t.data.token){var n=t.data.token,o=t.data.user;u.a.dispatch("setCredentials",{user:o,token:n}),e(t.data)}else a("Invalid user")}).catch(function(t){u.a.dispatch("clearUser"),a(t)})})},logout:function(){u.a.dispatch("clearUser")},me:function(){return new o.a(function(t,n){r.a.http.get("api/getUserLogin").then(function(n){u.a.dispatch("setCredentials",{user:n.data.user}),t(n.data.user)}).catch(function(t){u.a.dispatch("clearUser"),n(t)})})},register:function(t){return new o.a(function(n,e){r.a.http.post("api/user/register",t).then(function(t){n(t.data)}).catch(function(t){u.a.dispatch("clearUser"),e(t)})})}},i={createCategory:function(t){return new o.a(function(n,e){r.a.http.post("api/category/create",t).then(function(t){n(t.data)}).catch(function(t){e(t)})})},createSupplier:function(t){return new o.a(function(n,e){r.a.http.post("api/supplier/create",t).then(function(t){n(t.data)}).catch(function(t){e(t)})})},updateCategory:function(t){return new o.a(function(n,e){r.a.http.post("api/category/update",t).then(function(t){n(t.data)}).catch(function(t){e(t)})})},updateSupplier:function(t){return new o.a(function(n,e){r.a.http.post("api/supplier/update",t).then(function(t){n(t.data)}).catch(function(t){e(t)})})},loadCategoryList:function(t){return new o.a(function(n,e){r.a.http.get("api/category/all?status="+t).then(function(t){n(t.data.categories)}).catch(function(t){e(t)})})},loadSupplierList:function(t){return new o.a(function(n,e){r.a.http.get("api/supplier/all?status="+t).then(function(t){n(t.data.suppliers)}).catch(function(t){e(t)})})},getProductById:function(t){return new o.a(function(n,e){r.a.http.get("api/product/"+t).then(function(t){n(t.data.product)}).catch(function(t){e(t)})})},loadProductList:function(t){return new o.a(function(n,e){r.a.http.get("api/product/all?status="+t).then(function(t){n(t.data.products)}).catch(function(t){e(t)})})},createProduct:function(t){return new o.a(function(n,e){r.a.http.post("api/product/create",t).then(function(t){n(t.data.product)}).catch(function(t){e(t)})})},updateProduct:function(t){return new o.a(function(n,e){r.a.http.post("api/product/update",t).then(function(t){n(t.data.product)}).catch(function(t){e(t)})})},updateProductStatus:function(t,n){return new o.a(function(e,a){r.a.http.get("api/product/update/"+t+"/status/"+n).then(function(t){e(t.data.categories)}).catch(function(t){a(t)})})},deleteProductImage:function(t,n){return new o.a(function(e,a){r.a.http.get("api/product/delete/image/"+t+"?imageId="+n).then(function(t){e(t.data.categories)}).catch(function(t){a(t)})})}},s={loadMasterList:function(t){return new o.a(function(n,e){r.a.http.get("api/member/all?memberType="+t).then(function(t){n(t.data.members)}).catch(function(t){e(t)})})},getMemberById:function(t){return new o.a(function(n,e){r.a.http.get("api/member/"+t).then(function(t){n(t.data.member)}).catch(function(t){e(t)})})},createMember:function(t){return new o.a(function(n,e){r.a.http.post("api/member/add",t).then(function(t){n(t.data.member)}).catch(function(t){e(t)})})},updateMember:function(t){return new o.a(function(n,e){r.a.http.post("api/member/update",t).then(function(t){n(t.data.member)}).catch(function(t){e(t)})})},updateProductStatus:function(t,n){return new o.a(function(e,a){r.a.http.get("api/product/update/"+t+"/status/"+n).then(function(t){e(t.data.categories)}).catch(function(t){a(t)})})},deleteProductImage:function(t,n){return new o.a(function(e,a){r.a.http.get("api/product/delete/image/"+t+"?imageId="+n).then(function(t){e(t.data.categories)}).catch(function(t){a(t)})})}},d={loadAttendanceList:function(){return new o.a(function(t,n){r.a.http.get("api/attendance/all").then(function(n){t(n.data.attendance)}).catch(function(t){n(t)})})},getAttendance:function(t){return new o.a(function(n,e){r.a.http.get("api/attendance/"+t).then(function(t){n(t.data)}).catch(function(t){e(t)})})},downloadAttendance:function(t){return new o.a(function(n,e){r.a.http.get("api/attendance/"+t+"/download-excel").then(function(t){n(t.data)}).catch(function(t){e(t)})})},createAttendance:function(t){return new o.a(function(n,e){r.a.http.post("api/attendance/add",t).then(function(t){n(t.data)}).catch(function(t){e(t)})})}};e.d(n,"c",function(){return c}),e.d(n,!1,function(){return i}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return d})},xTAe:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.ffcda3237025cee934f9.js.map