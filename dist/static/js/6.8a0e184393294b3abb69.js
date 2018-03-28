webpackJsonp([6],{UWpV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),s=a.n(r),n=a("exGp"),i=a.n(n),l=a("PJh5"),o=a.n(l),c=a("gyMJ"),d={name:"masterlist-brethren",data:function(){return{rowPerPageItems:[15,25,50,{text:"All",value:-1}],headers:[{text:"ID",align:"left",sortable:!0,value:"churchId"},{text:"Name",align:"left",sortable:!1,value:"lastname"},{text:"Address",align:"left",value:"address"},{text:"Contact Number",align:"left",value:"contactNumber"},{text:"Status",align:"left",value:"status"},{text:"Actions",align:"left",value:"id"}],search:null,input:{lastname:null,firstname:null,middlename:null,address:null,contactNumber:null},memberList:[],memberDialog:{show:!1,selected:null},loading:{create:!1}}},methods:{updateMember:function(e){var t=this;return i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading.create=!1,t.$refs.createMemberForm.validate()){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,t.loading.create=!0,e.next=7,c.a.updateMember({id:t.memberDialog.selected,firstname:t.input.firstname,lastname:t.input.lastname,middlename:t.input.middlename,address:t.input.address,contactNumber:t.input.contactNumber});case 7:t.displayToast("Worker has been updated"),t.loadMemberList(),t.cancelModal(),t.$refs.createMemberForm.reset(),t.loading.create=!1,e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),t.loading.create=!1,t.displayToast(t.parseErrorRes(e.t0)||"An error occured when trying to update worker. Please try again","error");case 18:case"end":return e.stop()}},e,t,[[3,14]])}))()},cancelModal:function(){this.memberDialog.show=!1,this.input={firstname:null,lastname:null,middlename:null,address:null,contactNumber:null},this.memberDialog.selected=null},dateFormat:function(e){return e?o()(e).format(this.timeformat()):""},deleteMember:function(e){var t=this;return i()(s.a.mark(function a(){var r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{r=e.lastname+", "+e.firstname+" "+e.middlename,t.displayToast("Successfully deleted worker - "+r),t.loadMemberList()}catch(e){console.log("e",e),t.displayToast(t.parseErrorRes(e)||"An error occured when trying to delete worker. Please try again","error")}case 1:case"end":return a.stop()}},a,t)}))()},selectMember:function(e){this.input={firstname:e.firstname,lastname:e.lastname,middlename:e.middlename,address:e.address,contactNumber:e.contactNumber},this.memberDialog.selected=e.id,this.memberDialog.show=!0},createMember:function(){var e=this;return i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading.create=!1,e.$refs.createMemberForm.validate()){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.loading.create=!0,t.next=7,c.a.createMember(e.input);case 7:e.loadMemberList(),e.displayToast("Successfully added new worker","success"),e.memberDialog.show=!1,e.loading.create=!1,t.next=17;break;case 13:t.prev=13,t.t0=t.catch(3),e.loading.create=!1,e.displayToast(e.parseErrorRes(t.t0)||"An error occured. Please try again","error");case 17:case"end":return t.stop()}},t,e,[[3,13]])}))()},loadMemberList:function(){var e=this;return i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.loadMasterList("WORKERS");case 3:e.memberList=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.displayToast("An error occured when trying to load your workers List. Please try again","error");case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},components:{},mounted:function(){this.loadMemberList()}},m=a("XyMi"),u=Object(m.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{staticClass:"mb-2",attrs:{"append-icon":"search",label:"Search","single-line":"single-line","hide-details":"hide-details"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.memberList,search:e.search,"rows-per-page-items":e.rowPerPageItems},scopedSlots:e._u([{key:"headerCell",fn:function(t){return[a("v-tooltip",{attrs:{bottom:"bottom"}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[e._v(e._s(t.header.text))]),a("span",[e._v(e._s(t.header.text))])])]}},{key:"items",fn:function(t){return[a("tr",{staticClass:"pointer",on:{click:function(a){a.stopPropagation(),e.selectMember(t.item)}}},[a("td",[e._v(e._s(t.item.churchId))]),a("td",[e._v(e._s(t.item.lastname)+", "+e._s(t.item.firstname)+" "+e._s(t.item.middlename))]),a("td",[e._v(e._s(t.item.address))]),a("td",[e._v(e._s(t.item.contactNumber))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.status))]),a("td",{staticClass:"text-xs-left"},[a("v-btn",{staticClass:"white--text",attrs:{light:"light",small:"small",color:"red"},nativeOn:{click:function(a){a.stopPropagation(),e.deleteMember(t.item)}}},[e._v("Delete")])],1)])]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px",persistent:"persistent"},model:{value:e.memberDialog.show,callback:function(t){e.$set(e.memberDialog,"show",t)},expression:"memberDialog.show"}},[a("v-form",{ref:"createMemberForm"},[a("v-card",[a("v-card-title",{staticClass:"title"},[e._v(e._s(e.memberDialog.selected?"Update Member":"Add Member"))]),a("v-card-text",[a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-shape",label:"Last Name",rules:[e.inputRules().required],required:"required"},model:{value:e.input.lastname,callback:function(t){e.$set(e.input,"lastname",t)},expression:"input.lastname"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-shape",label:"First Name",rules:[e.inputRules().required],required:"required"},model:{value:e.input.firstname,callback:function(t){e.$set(e.input,"firstname",t)},expression:"input.firstname"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-shape",label:"Middle Name"},model:{value:e.input.middlename,callback:function(t){e.$set(e.input,"middlename",t)},expression:"input.middlename"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light",required:"required","single-line":"single-line","prepend-icon":"mdi-map-marker",label:"Address",rules:[e.inputRules().required]},model:{value:e.input.address,callback:function(t){e.$set(e.input,"address",t)},expression:"input.address"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light",required:"required","single-line":"single-line","prepend-icon":"mdi-phone",label:"Contact Number",rules:[e.inputRules().required]},model:{value:e.input.contactNumber,callback:function(t){e.$set(e.input,"contactNumber",t)},expression:"input.contactNumber"}})],1)],1)],1),a("v-card-actions",{staticClass:"display-flex justify-end"},[a("v-btn",{attrs:{color:"red",flat:"flat",disabled:e.loading.create},on:{click:function(t){t.stopPropagation(),e.cancelModal(t)}}},[e._v("Close")]),e.memberDialog.selected?e._e():a("v-btn",{attrs:{medium:"medium",color:"primary",loading:e.loading.create},on:{click:function(t){t.stopPropagation(),e.createMember(t)}}},[e._v("Add Member")]),e.memberDialog.selected?a("v-btn",{attrs:{medium:"medium",color:"primary",loading:e.loading.create},on:{click:function(t){t.stopPropagation(),e.updateMember(e.memberDialog.selected)}}},[e._v("Update Member")]):e._e()],1)],1)],1)],1),a("v-btn",{attrs:{fab:"fab",bottom:"bottom",right:"right",color:"green",dark:"dark",fixed:"fixed"},on:{click:function(t){t.stopPropagation(),e.memberDialog.show=!0}}},[a("v-icon",[e._v("add")])],1)],1)},[],!1,null,null,null);t.default=u.exports}});
//# sourceMappingURL=6.8a0e184393294b3abb69.js.map