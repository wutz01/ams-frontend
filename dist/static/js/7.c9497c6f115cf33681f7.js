webpackJsonp([7],{q19Y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),o=a.n(s),l=a("gyMJ"),d={name:"attendance-view",data:function(){return{attendance:null,attendanceCount:0,attendees:[],downloadLink:null,rowPerPageItems:[{text:"All",value:-1}],headers:[{text:"ID",align:"left",sortable:!0,value:"churchId"},{text:"Last Name",align:"left",sortable:!1,value:"lastname"},{text:"First Name",align:"left",sortable:!1,value:"firstname"},{text:"Middle Name",align:"left",sortable:!1,value:"middlename"}],search:null}},methods:{loadAttendance:function(){var e=this;return o()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$route.params.id||(e.displayToast("An error occured when trying to load attendance. Please try again","error"),e.$router.go(-1)),t.prev=1,t.next=4,l.a.getAttendance(e.$route.params.id);case 4:a=t.sent,e.attendance=a.attendance,e.attendanceCount=a.count,e.attendees=a.attendees,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.displayToast("An error occured when trying to load your attendance List. Please try again","error");case 13:case"end":return t.stop()}},t,e,[[1,10]])}))()},downloadExcel:function(){var e=this;return o()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.downloadAttendance(e.$route.params.id);case 2:a=t.sent,e.displayToast("Downloading Excel...","success"),e.downloadLink=""+a.url;case 5:case"end":return t.stop()}},t,e)}))()}},components:{},mounted:function(){this.loadAttendance()}},i=a("XyMi"),c=Object(i.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("v-flex",{attrs:{xs6:"xs6"}},[e.attendance?a("h3",[e._v(e._s(e.attendance.batch))]):e._e(),e.attendance?a("p",[e._v("Attendees Count: "+e._s(e.attendanceCount))]):e._e(),e.downloadLink?a("div",[a("p",[e._v("Copy the link below and paste it to another tab to download.")]),a("p",[e._v("This is temporary.")]),a("code",[e._v(e._s(e.downloadLink))])]):e._e(),e.downloadLink?e._e():a("v-btn",{attrs:{primary:"primary",outline:"outline"},on:{click:function(t){t.stopPropagation(),e.downloadExcel(t)}}},[e._v("Generate Excel")])],1),a("v-text-field",{staticClass:"mb-2",attrs:{"append-icon":"search",label:"Search","single-line":"single-line","hide-details":"hide-details"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.attendees,search:e.search,"rows-per-page-items":e.rowPerPageItems},scopedSlots:e._u([{key:"headerCell",fn:function(t){return[a("v-tooltip",{attrs:{bottom:"bottom"}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[e._v(e._s(t.header.text))]),a("span",[e._v(e._s(t.header.text))])])]}},{key:"items",fn:function(t){return[a("tr",[a("td",[e._v(e._s(t.item.churchId))]),a("td",[e._v(e._s(t.item.lastname))]),a("td",[e._v(e._s(t.item.firstname))]),a("td",[e._v(e._s(t.item.middlename))])])]}}])})],1)],1)},[],!1,null,null,null);t.default=c.exports}});
//# sourceMappingURL=7.c9497c6f115cf33681f7.js.map