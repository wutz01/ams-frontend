webpackJsonp([5],{"JwS/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),i=a.n(r),s=a("exGp"),n=a.n(s),l=a("PJh5"),c=a.n(l),o=a("gyMJ"),u={name:"masterlist-brethren",data:function(){return{rowPerPageItems:[15,25,50,{text:"All",value:-1}],headers:[{text:"ID",align:"left",sortable:!0,value:"churchId"},{text:"Name",align:"left",sortable:!1,value:"name"},{text:"Address",align:"left",value:"address"},{text:"Contact Number",align:"left",value:"contactNumber"},{text:"Status",align:"left",value:"status"},{text:"Actions",align:"left",value:"id"}],search:null,input:{churchId:null,firstname:null,lastname:null,middlename:null,address:null,contactNumber:null,email:null,status:null,isOfficer:!1},memberList:[],memberDialog:{show:!1,selected:null},loading:{create:!1}}},methods:{updateMember:function(e){var t=this;return n()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t.loading.create=!1,t.$refs.createMemberForm.validate()){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,t.loading.create=!0,a.next=7,o.b.updateMember({userId:e,firstname:t.input.firstname,lastname:t.input.lastname,middlename:t.input.middlename,address:t.input.address,contactNumber:t.input.contactNumber,churchId:t.input.churchId,email:t.input.email,status:t.input.status,memberType:"MEMBER",isOfficer:t.input.isOfficer});case 7:t.displayToast("Member has been updated"),t.loadMemberList(),t.cancelModal(),t.$refs.createMemberForm.reset(),t.loading.create=!1,a.next=18;break;case 14:a.prev=14,a.t0=a.catch(3),t.loading.create=!1,t.displayToast(t.parseErrorRes(a.t0)||"An error occured when trying to update member. Please try again","error");case 18:case"end":return a.stop()}},a,t,[[3,14]])}))()},cancelModal:function(){this.memberDialog.show=!1,this.input={churchId:null,firstname:null,lastname:null,middlename:null,address:null,contactNumber:null,email:null,status:null,isOfficer:!1},this.memberDialog.selected=null},dateFormat:function(e){return e?c()(e).format(this.timeformat()):""},deleteMember:function(e){var t=this;return n()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.displayToast("This function is not yet available","error"),t.loadMemberList()}catch(e){console.log("e",e),t.displayToast(t.parseErrorRes(e)||"An error occured when trying to delete member. Please try again","error")}case 1:case"end":return e.stop()}},e,t)}))()},selectMember:function(e){this.input={firstname:e.firstname,lastname:e.lastname,middlename:e.middlename,address:e.address,contactNumber:e.contactNumber,churchId:e.churchId,email:e.email,status:e.status,isOfficer:e.isOfficer},this.memberDialog.selected=e.id,this.memberDialog.show=!0},createMember:function(){var e=this;return n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading.create=!1,e.$refs.createMemberForm.validate()){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.loading.create=!0,e.input.memberType="MEMBER",t.next=8,o.b.createMember(e.input);case 8:e.loadMemberList(),e.displayToast("Successfully added new member","success"),e.memberDialog.show=!1,e.loading.create=!1,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),e.loading.create=!1,e.displayToast(e.parseErrorRes(t.t0)||"An error occured. Please try again","error");case 18:case"end":return t.stop()}},t,e,[[3,14]])}))()},loadMemberList:function(){var e=this;return n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.loadMasterList("MEMBER");case 3:e.memberList=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.displayToast("An error occured when trying to load your member List. Please try again","error");case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},components:{},mounted:function(){this.loadMemberList()}},d=a("XyMi"),m=Object(d.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{staticClass:"mb-2",attrs:{"append-icon":"search",label:"Search","single-line":"single-line","hide-details":"hide-details"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.memberList,search:e.search,"rows-per-page-items":e.rowPerPageItems},scopedSlots:e._u([{key:"headerCell",fn:function(t){return[a("v-tooltip",{attrs:{bottom:"bottom"}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[e._v(e._s(t.header.text))]),a("span",[e._v(e._s(t.header.text))])])]}},{key:"items",fn:function(t){return[a("tr",{staticClass:"pointer",on:{click:function(a){a.stopPropagation(),e.selectMember(t.item)}}},[a("td",[e._v(e._s(t.item.churchId))]),a("td",[e._v(e._s(t.item.lastname)+", "+e._s(t.item.firstname)+" "+e._s(t.item.middlename))]),a("td",[e._v(e._s(t.item.address))]),a("td",[e._v(e._s(t.item.contactNumber))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.status))]),a("td",{staticClass:"text-xs-left"},[a("v-btn",{staticClass:"white--text pointer",attrs:{icon:"icon",light:"light",small:"small",color:"red"},nativeOn:{click:function(a){a.stopPropagation(),e.deleteMember(t.item)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px",persistent:"persistent"},model:{value:e.memberDialog.show,callback:function(t){e.$set(e.memberDialog,"show",t)},expression:"memberDialog.show"}},[a("v-form",{ref:"createMemberForm"},[a("v-card",[a("v-card-title",{staticClass:"title"},[e._v(e._s(e.memberDialog.selected?"Update Member":"Add Member"))]),a("v-card-text",[a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-account-box",label:"Church ID",rules:[e.inputRules().required],required:"required"},model:{value:e.input.churchId,callback:function(t){e.$set(e.input,"churchId",t)},expression:"input.churchId"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-shape",label:"Last Name",rules:[e.inputRules().required],required:"required"},model:{value:e.input.lastname,callback:function(t){e.$set(e.input,"lastname",t)},expression:"input.lastname"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-shape",label:"First Name",rules:[e.inputRules().required],required:"required"},model:{value:e.input.firstname,callback:function(t){e.$set(e.input,"firstname",t)},expression:"input.firstname"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light","single-line":"single-line","prepend-icon":"mdi-shape",label:"Middle Name"},model:{value:e.input.middlename,callback:function(t){e.$set(e.input,"middlename",t)},expression:"input.middlename"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light",required:"required","single-line":"single-line","prepend-icon":"mdi-map-marker",label:"Address",rules:[e.inputRules().required]},model:{value:e.input.address,callback:function(t){e.$set(e.input,"address",t)},expression:"input.address"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light",required:"required","single-line":"single-line","prepend-icon":"mdi-phone",label:"Contact Number",rules:[e.inputRules().required]},model:{value:e.input.contactNumber,callback:function(t){e.$set(e.input,"contactNumber",t)},expression:"input.contactNumber"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-text-field",{attrs:{light:"light",required:"required","single-line":"single-line","prepend-icon":"mdi-email",label:"Email Address",rules:[e.inputRules().required]},model:{value:e.input.email,callback:function(t){e.$set(e.input,"email",t)},expression:"input.email"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-select",{attrs:{items:["ACTIVE","INACTIVE","RFA","UNKNOWN","OUT OF COUNTRY","CANNOT BE LOC"],label:"Status",rules:[e.inputRules().required],required:"required","prepend-icon":"mdi-battery"},model:{value:e.input.status,callback:function(t){e.$set(e.input,"status",t)},expression:"input.status"}})],1),a("v-flex",{attrs:{xs12:"xs12"}},[a("v-switch",{attrs:{label:"is Officer?"},model:{value:e.input.isOfficer,callback:function(t){e.$set(e.input,"isOfficer",t)},expression:"input.isOfficer"}})],1)],1)],1),a("v-card-actions",{staticClass:"display-flex justify-end"},[a("v-btn",{attrs:{color:"red",flat:"flat",disabled:e.loading.create},on:{click:function(t){t.stopPropagation(),e.cancelModal(t)}}},[e._v("Close")]),e.memberDialog.selected?e._e():a("v-btn",{attrs:{medium:"medium",color:"primary",loading:e.loading.create},on:{click:function(t){t.stopPropagation(),e.createMember(t)}}},[e._v("Add Member")]),e.memberDialog.selected?a("v-btn",{attrs:{medium:"medium",color:"primary",loading:e.loading.create},on:{click:function(t){t.stopPropagation(),e.updateMember(e.memberDialog.selected)}}},[e._v("Update Member")]):e._e()],1)],1)],1)],1),a("v-btn",{attrs:{fab:"fab",bottom:"bottom",left:"left",color:"green",dark:"dark",fixed:"fixed"},on:{click:function(t){t.stopPropagation(),e.memberDialog.show=!0}}},[a("v-icon",[e._v("add")])],1)],1)},[],!1,null,null,null);t.default=m.exports}});
//# sourceMappingURL=5.b06ea4292e18a898fcad.js.map