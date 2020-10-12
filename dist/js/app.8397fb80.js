(function(t){function e(e){for(var o,d,s=e[0],r=e[1],c=e[2],l=0,f=[];l<s.length;l++)d=s[l],Object.prototype.hasOwnProperty.call(a,d)&&a[d]&&f.push(a[d][0]),a[d]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=d(d.s=n[0]))}return t}var o={},a={app:0},i=[];function d(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=o,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)d.d(n,o,function(e){return t[e]}.bind(null,o));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},1812:function(t,e,n){},"224a":function(t,e,n){"use strict";var o=n("1812"),a=n.n(o);a.a},"3d7a":function(t,e,n){"use strict";var o=n("9819"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"todo-app",attrs:{"data-theme":t.store.app.theme}},[n("toolbar"),n("div",{staticClass:"main-container add-todos"},[n("add-todo")],1),n("todos"),!t.store.todos.isLoading&&t.selectedCount>1?n("div",{staticClass:"main-container"},[n("delete-todos")],1):t._e()],1)},i=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todos-container"},[t.store.todos.isLoading?n("div",{staticClass:"loading"},[n("loading")],1):t._e(),t._l(t.store.todos.todos,(function(t){return n("todo",{key:t.id,attrs:{todo:t}})}))],2)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"todo",attrs:{flat:""}},[n("div",{staticClass:"check-todo"},[n("v-checkbox",{attrs:{dense:"","input-value":t.todo.completed},on:{change:function(e){return t.updateCompleted(e,t.todo)}}})],1),n("div",{staticClass:"todo-description",class:{completed:t.todo.completed}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}]},[t._v(" "+t._s(t.todo.id)+". "+t._s(t.todo.title)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}]},[n("input",{ref:"editTodoInput",staticClass:"edit-todo-input",attrs:{type:"text"},domProps:{value:t.todo.title},on:{input:t.onTodoEdit,keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.isEditing=!1}}})])]),n("div",[n("span",{staticClass:"material-icons todo-edit",on:{click:t.startEditing}},[t._v(" create ")])]),n("div",{staticClass:"todo-delete"},[n("v-icon",{on:{click:function(e){return t.deleteTodo(t.todo)}}},[t._v(" mdi-delete ")])],1)])},c=[],u=(n("96cf"),n("1da1")),l={props:{todo:{type:Object}},data:function(){return{isEditing:!1}},methods:{onTodoEdit:function(t){this.$store.dispatch("todos/updateTodo",{id:this.todo.id,title:t.target.value})},startEditing:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isEditing=!t.isEditing,e.next=3,t.$nextTick();case 3:t.$refs.editTodoInput.focus(),t.$refs.editTodoInput.select();case 5:case"end":return e.stop()}}),e)})))()},updateCompleted:function(t,e){this.$store.dispatch("todos/updateCompleted",{id:e.id,completed:!!t})},deleteTodo:function(t){this.$store.dispatch("todos/delete",t)}}},f=l,p=(n("7a2c"),n("2877")),h=n("6544"),g=n.n(h),v=n("b0af"),m=n("ac7c"),b=n("132d"),_=Object(p["a"])(f,r,c,!1,null,"38c4d8ec",null),y=_.exports;g()(_,{VCard:v["a"],VCheckbox:m["a"],VIcon:b["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-todo"},[n("v-text-field",{attrs:{solo:"",flat:"","hide-details":"",placeholder:t.lang("What needs to be done?")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodo,callback:function(e){t.newTodo=e},expression:"newTodo"}}),n("v-btn",{staticClass:"btn-add",attrs:{depressed:"",color:"primary"},on:{click:t.addTodo}},[t._v(" "+t._s(t.lang("Add todo"))+" ")])],1)},x=[],C={data:function(){return{newTodo:""}},methods:{addTodo:function(){this.$store.dispatch("todos/add",this.newTodo),this.clear()},clear:function(){this.newTodo=""}}},w=C,k=(n("6a8e"),n("8336")),$=n("8654"),j=Object(p["a"])(w,T,x,!1,null,"6967f14c",null),E=j.exports;g()(j,{VBtn:k["a"],VTextField:$["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-progress-linear",{attrs:{indeterminate:"",height:"10",color:"cyan"}})],1)},L=[],S={},V=S,P=n("8e36"),I=Object(p["a"])(V,O,L,!1,null,null,null),A=I.exports;g()(I,{VProgressLinear:P["a"]});var D={components:{todo:y,"add-todo":E,loading:A},data:function(){return{store:this.$store.state}},created:function(){this.$store.dispatch("todos/fetch")}},M=D,R=(n("224a"),Object(p["a"])(M,d,s,!1,null,"0164e106",null)),W=R.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"toolbar"},[n("v-toolbar",{attrs:{dark:"",src:"/img/vbanner.jpg"}},[n("v-toolbar-title",[t._v("Todo")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.changeLanguage}},[t._v(" "+t._s(t.otherLanguage)+" ")]),n("v-btn",{staticClass:"dark-mode-toggle",attrs:{icon:""},on:{click:t.toggleTheme}},[n("span",{staticClass:"material-icons"},[t._v(" "+t._s("light"==t.store.app.theme?"nights_stay":"wb_sunny")+" ")])])],1)],1)},B=[],J={data:function(){return{store:this.$store.state}},methods:{changeLanguage:function(){this.$store.dispatch("app/changeLanguage")},toggleTheme:function(){this.$store.dispatch("app/toggleTheme")}},computed:{otherLanguage:function(){return this.$store.getters["app/otherLanguage"]}}},N=J,F=(n("88b4"),n("2fa4")),K=n("71d9"),q=n("2a7f"),G=Object(p["a"])(N,z,B,!1,null,"6f23c011",null),H=G.exports;g()(G,{VBtn:k["a"],VCard:v["a"],VSpacer:F["a"],VToolbar:K["a"],VToolbarTitle:q["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"delete-btn",attrs:{depressed:"",color:"primary"},on:{click:t.deleteSelected}},[t._v(" "+t._s(t.lang("Delete selected"))+" ("+t._s(t.selectedCount)+") ")])},U=[],X={methods:{deleteSelected:function(){this.$store.dispatch("todos/deleteSelected")}},computed:{selectedCount:function(){return this.$store.getters["todos/selectedCount"]}}},Y=X,Z=(n("3d7a"),Object(p["a"])(Y,Q,U,!1,null,"6749af10",null)),tt=Z.exports;g()(Z,{VBtn:k["a"]});var et={components:{toolbar:H,todos:W,"add-todo":E,"delete-todos":tt},data:function(){return{store:this.$store.state}},computed:{selectedCount:function(){return this.$store.getters["todos/selectedCount"]}}},nt=et,ot=(n("034f"),n("7496")),at=Object(p["a"])(nt,a,i,!1,null,null,null),it=at.exports;g()(at,{VApp:ot["a"]});var dt=n("2f62"),st={namespaced:!0,state:{theme:"light",language:"en"},mutations:{toggleTheme:function(t){t.theme="light"==t.theme?"dark":"light"},changeLanguage:function(t){t.language="lv"==t.language?"en":"lv"}},actions:{toggleTheme:function(t){var e=t.commit;e("toggleTheme")},changeLanguage:function(t){var e=t.commit;e("changeLanguage")}},getters:{otherLanguage:function(t){return"lv"==t.language?"en":"lv"}}};n("4de4"),n("c740"),n("4160"),n("26e9"),n("a434"),n("0d03"),n("d3b7"),n("25f0"),n("159b"),n("4795");function rt(t){var e=1e3*t;return new Promise((function(t){return setTimeout(t,e)}))}var ct={namespaced:!0,state:{todos:[],isLoading:!1,selected:[]},mutations:{setTodos:function(t,e){t.todos=e.reverse(),t.todos.forEach((function(e){e.completed&&t.selected.push(e.id)}))},add:function(t,e){t.todos.unshift(e)},delete:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.id}));var n=t.selected.findIndex((function(t){return t===e.id}));t.selected.splice(n,1)},setLoading:function(t,e){t.isLoading=e},updateCompleted:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));t.todos[n].completed=e.completed},updateTodo:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));t.todos[n].title=e.title},updateSelected:function(t,e){if(e.completed)t.selected.push(e.id);else{var n=t.selected.findIndex((function(t){return t===e.id}));n>=0&&t.selected.splice(n,1)}},deleteSelected:function(t){t.selected.forEach((function(e,n){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1)})),t.selected=[]}},actions:{add:function(t,e){var n,o,a=t.commit,i=t.state;if(""!==e){var d=null!==(n=null===(o=i.todos[0])||void 0===o?void 0:o.id)&&void 0!==n?n:0;a("add",{id:d+1,title:e,completed:!1})}},delete:function(t,e){var n=t.commit;n("delete",e)},fetch:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.dispatch,n("setLoading",!0),e.next=4,rt(1);case 4:return e.next=6,fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");case 6:return o=e.sent,e.next=9,o.json();case 9:a=e.sent,n("setTodos",a),n("setLoading",!1);case 12:case"end":return e.stop()}}),e)})))()})),updateCompleted:function(t,e){var n=t.commit;n("updateCompleted",e),n("updateSelected",e)},updateTodo:function(t,e){var n=t.commit;n("updateTodo",e)},deleteSelected:function(t){var e=t.commit;e("deleteSelected")}},getters:{selectedCount:function(t){return t.selected.length}}},ut={namespaced:!0,state:{lv:{"Add todo":"Pievienot","What needs to be done?":"Kas šodien jāizdara?","Delete selected":"Dzēst atzīmētos"},en:{"Add todo":"Add todo","What needs to be done?":"What needs to be done?","Delete selected":"Delete selected"}}};o["a"].use(dt["a"]);var lt=new dt["a"].Store({modules:{app:st,todos:ct,languages:ut}}),ft=n("f309");o["a"].use(ft["a"]);var pt=new ft["a"]({});o["a"].prototype.lang=function(t){return lt.state.languages[lt.state.app.language][t]},new o["a"]({store:lt,vuetify:pt,render:function(t){return t(it)}}).$mount("#app")},6579:function(t,e,n){},"6a8e":function(t,e,n){"use strict";var o=n("b7cd"),a=n.n(o);a.a},"7a2c":function(t,e,n){"use strict";var o=n("6579"),a=n.n(o);a.a},"85ec":function(t,e,n){},"88b4":function(t,e,n){"use strict";var o=n("bb0a"),a=n.n(o);a.a},9819:function(t,e,n){},b7cd:function(t,e,n){},bb0a:function(t,e,n){}});
//# sourceMappingURL=app.8397fb80.js.map