webpackJsonp([2],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},Dd8w:function(t,e,i){"use strict";e.__esModule=!0;var o,r=i("woOf"),n=(o=r)&&o.__esModule?o:{default:o};e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,i){var o=i("kM2E");o(o.S+o.F,"Object",{assign:i("To3L")})},To3L:function(t,e,i){"use strict";var o=i("lktj"),r=i("1kS7"),n=i("NpIQ"),a=i("sB3e"),l=i("MU5D"),s=Object.assign;t.exports=!s||i("S82l")(function(){var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach(function(t){e[t]=t}),7!=s({},t)[i]||Object.keys(s({},e)).join("")!=o})?function(t,e){for(var i=a(t),s=arguments.length,c=1,d=r.f,u=n.f;s>c;)for(var p,v=l(arguments[c++]),f=d?o(v).concat(d(v)):o(v),m=f.length,_=0;m>_;)u.call(v,p=f[_++])&&(i[p]=v[p]);return i}:s},TtzH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),r=i.n(o),n=i("NYxO"),a={menuItems:[{icon:"mdi-view-dashboard",text:"Dashboard",routeName:"dashboard"},{icon:"mdi-checkbox-multiple-marked",text:"Attendance",routeName:"attendance"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Masterlist",model:!1,children:[{icon:"mdi-account-multiple-outline",text:"Brethrens",routeName:"masterlist-member"},{icon:"mdi-shape",text:"Workers",routeName:"masterlist-workers"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Reports",model:!1,children:[{icon:"mdi-file-chart",text:"Sales"},{icon:"mdi-chart-timeline",text:"Delivery Receipt"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"User Management",model:!1,children:[{icon:"mdi-account-plus",text:"Users",allowedUser:["ADMIN"]},{icon:"mdi-verified",text:"User Roles",allowedUser:["ADMIN"]}]},{icon:"mdi-logout",text:"Logout",routeName:"logout"}]},l={name:"web-container",data:function(){return{drawer:null,items:a.menuItems}},computed:r()({},Object(n.b)(["getUser"]))},s=i("XyMi"),c=Object(s.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-navigation-drawer",{attrs:{fixed:"fixed",clipped:t.$vuetify.breakpoint.mdAndUp,app:"app"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:"dense"}},[t._l(t.items,function(e){return[e.heading?i("v-layout",{key:e.heading,attrs:{row:"row","align-center":"align-center"}},[i("v-flex",{attrs:{xs6:"xs6"}},[e.heading?i("v-subheader",[t._v(t._s(e.heading))]):t._e()],1),i("v-flex",{staticClass:"text-xs-center",attrs:{xs6:"xs6"}},[i("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?i("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":"append-icon"},model:{value:e.model,callback:function(i){t.$set(e,"model",i)},expression:"item.model"}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1),t._l(e.children,function(e,o){return i("v-list-tile",{key:o,on:{click:function(i){t.$router.push({name:e.routeName})}}},[e.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1):t._e(),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)})],2):i("v-list-tile",{key:e.text,on:{click:function(i){t.$router.push({name:e.routeName})}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)]})],2)],1),i("v-toolbar",{attrs:{color:"blue darken-3",dark:"dark",app:"app","clipped-left":t.$vuetify.breakpoint.mdAndUp,fixed:"fixed"}},[i("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("span",{staticClass:"hidden-sm-and-down"},[t._v("AMS v1.0")])],1),t.$route&&t.$route.meta?i("span",{staticClass:"title"},[t._v(t._s(t.$route.meta.title))]):t._e(),i("v-spacer"),t.getUser?i("span",[t._v("Howdy, "+t._s(t.getUser.firstname))]):t._e(),i("v-btn",{attrs:{icon:"icon",large:"large"}},[i("v-avatar",{attrs:{size:"32px",tile:"tile"}})],1)],1),i("v-content",[i("v-container",{attrs:{fluid:"fluid","fill-height":"fill-height"}},[i("router-view")],1)],1)],1)},[],!1,null,null,null);e.default=c.exports},V3tA:function(t,e,i){i("R4wc"),t.exports=i("FeBl").Object.assign},woOf:function(t,e,i){t.exports={default:i("V3tA"),__esModule:!0}}});
//# sourceMappingURL=2.c8236037116e925289b5.js.map