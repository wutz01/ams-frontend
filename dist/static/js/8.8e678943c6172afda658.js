webpackJsonp([8],{eleo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),o=a.n(s),i=a("PJh5"),c=a.n(i),l=a("gyMJ"),d={name:"attendance-list",data:function(){return{rowPerPageItems:[15,25,50,{text:"All",value:-1}],headers:[{text:"Batch",align:"left",sortable:!0,value:"batch"},{text:"Time",align:"left",sortable:!1,value:"time"},{text:"Date",align:"left",value:"date"},{text:"Actions",align:"left",value:"id"}],search:null,input:{batch:null,time:null,date:null,workerAssign:null,officerAssign:null},attendanceList:[],attendanceDialog:{show:!1,selected:null},loading:{create:!1}}},methods:{updateMember:function(e){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading.create=!1,t.$refs.attendanceForm.validate()){e.next=3;break}return e.abrupt("return");case 3:try{t.loading.create=!0,t.displayToast("Member has been updated"),t.loadAttendanceList(),t.cancelModal(),t.$refs.attendanceForm.reset(),t.loading.create=!1}catch(e){t.loading.create=!1,t.displayToast(t.parseErrorRes(e)||"An error occured when trying to update member. Please try again","error")}case 4:case"end":return e.stop()}},e,t)}))()},cancelModal:function(){this.attendanceDialog.show=!1,this.input={batch:null,time:null,date:null,workerAssign:null,officerAssign:null},this.attendanceDialog.selected=null},dateFormat:function(e){return e?c()(e).format(this.timeformat()):""},deleteMember:function(e){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.displayToast("This function is not yet available","error"),t.loadAttendanceList()}catch(e){console.log("e",e),t.displayToast(t.parseErrorRes(e)||"An error occured when trying to delete member. Please try again","error")}case 1:case"end":return e.stop()}},e,t)}))()},selectAttendance:function(e){this.$router.push({name:"attendance-view",params:{id:e.id}})},createAttendance:function(){var e=this;return o()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading.create=!1,e.$refs.attendanceForm.validate()){t.next=3;break}return t.abrupt("return");case 3:try{e.loading.create=!0,e.input.memberType="MEMBER",e.loadAttendanceList(),e.displayToast("Successfully added new attendance","success"),e.attendanceDialog.show=!1,e.loading.create=!1}catch(t){e.loading.create=!1,e.displayToast(e.parseErrorRes(t)||"An error occured. Please try again","error")}case 4:case"end":return t.stop()}},t,e)}))()},loadAttendanceList:function(){var e=this;return o()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.loadAttendanceList();case 3:e.attendanceList=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.displayToast("An error occured when trying to load your attendance List. Please try again","error");case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},components:{},mounted:function(){this.loadAttendanceList()}},u=a("XyMi"),p=Object(u.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{staticClass:"mb-2",attrs:{"append-icon":"search",label:"Search","single-line":"single-line","hide-details":"hide-details"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.attendanceList,search:e.search,"rows-per-page-items":e.rowPerPageItems},scopedSlots:e._u([{key:"headerCell",fn:function(t){return[a("v-tooltip",{attrs:{bottom:"bottom"}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[e._v(e._s(t.header.text))]),a("span",[e._v(e._s(t.header.text))])])]}},{key:"items",fn:function(t){return[a("tr",{staticClass:"pointer",on:{click:function(a){a.stopPropagation(),e.selectAttendance(t.item)}}},[a("td",[e._v(e._s(t.item.batch))]),a("td",[e._v(e._s(t.item.time))]),a("td",[e._v(e._s(t.item.date))]),a("td",{staticClass:"text-xs-left"},[a("v-btn",{staticClass:"white--text pointer",attrs:{icon:"icon",light:"light",small:"small",color:"red"},nativeOn:{click:function(a){a.stopPropagation(),e.deleteMember(t.item)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px",persistent:"persistent"},model:{value:e.attendanceDialog.show,callback:function(t){e.$set(e.attendanceDialog,"show",t)},expression:"attendanceDialog.show"}},[a("v-form",{ref:"attendanceForm"},[a("v-card",[a("v-card-title",{staticClass:"title"},[e._v(e._s(e.attendanceDialog.selected?"Update Attendance":"Add Attendance"))]),a("v-card-text"),a("v-card-actions",{staticClass:"display-flex justify-end"},[a("v-btn",{attrs:{color:"red",flat:"flat",disabled:e.loading.create},on:{click:function(t){t.stopPropagation(),e.cancelModal(t)}}},[e._v("Close")]),e.attendanceDialog.selected?e._e():a("v-btn",{attrs:{medium:"medium",color:"primary",loading:e.loading.create},on:{click:function(t){t.stopPropagation(),e.createMember(t)}}},[e._v("Add Attendance")]),e.attendanceDialog.selected?a("v-btn",{attrs:{medium:"medium",color:"primary",loading:e.loading.create},on:{click:function(t){t.stopPropagation(),e.updateMember(e.attendanceDialog.selected)}}},[e._v("Update Attendance")]):e._e()],1)],1)],1)],1),a("v-btn",{attrs:{fab:"fab",bottom:"bottom",left:"left",color:"green",dark:"dark",fixed:"fixed"},on:{click:function(t){t.stopPropagation(),e.attendanceDialog.show=!0}}},[a("v-icon",[e._v("add")])],1)],1)},[],!1,null,null,null);t.default=p.exports}});
//# sourceMappingURL=8.8e678943c6172afda658.js.map