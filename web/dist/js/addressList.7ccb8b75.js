(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addressList"],{"1ddc":function(t,e,c){"use strict";c("a874")},"4fa0":function(t,e,c){"use strict";c("ad9c")},"58b0":function(t,e,c){"use strict";var n=c("5530"),i=(c("d3b7"),c("7a23"));Object(i["z"])("data-v-60f7eb3f");var s={key:0,class:"xe-popup xe-dialog"},a=Object(i["i"])("div",{class:"xe-popup-mask"},null,-1),o={class:"xe-popup-box xe-popup-center"},l={class:"xe-popup-content"},u={class:"xe-dialog-box"},d={class:"xe-dialog-content"},r={class:"xe-dialog-title fz-m"},b={class:"xe-dialog-text fz-s"},f={class:"xe-dialog-action box-flex bd-top-1px"},O=Object(i["i"])("span",{class:"fz-m"},"取消",-1),j=[O],p=Object(i["i"])("span",{class:"fz-m"},"确认",-1),v=[p];function m(t,e,c,n,O,p){return Object(i["w"])(),Object(i["f"])(i["b"],{name:"bounce"},{default:Object(i["O"])((function(){return[c.value?(Object(i["w"])(),Object(i["h"])("div",s,[a,Object(i["i"])("div",o,[Object(i["i"])("div",l,[Object(i["i"])("div",u,[Object(i["i"])("div",d,[t.$slots.default?Object(i["g"])("",!0):(Object(i["w"])(),Object(i["h"])(i["a"],{key:0},[Object(i["i"])("div",r,Object(i["H"])(c.title),1),Object(i["i"])("div",b,Object(i["H"])(c.message),1)],64)),Object(i["D"])(t.$slots,"default",{},void 0,!0)]),Object(i["i"])("div",f,[Object(i["P"])(Object(i["i"])("div",{class:"xe-button xe-cancel-button bd-right-1px flex",onClick:e[0]||(e[0]=function(t){return c.onClose("cancel")})},j,512),[[i["M"],c.showCancelButton]]),Object(i["P"])(Object(i["i"])("div",{class:"xe-button xe-confirm-buttom flex",onClick:e[1]||(e[1]=function(t){return c.onClose("confirm")})},v,512),[[i["M"],c.showConfirmButton]])])])])])])):Object(i["g"])("",!0)]})),_:3})}Object(i["x"])();var h={props:{value:{type:Boolean,default:!1},title:{type:String,default:"提示"},message:{type:String},showCancelButton:{type:Boolean,default:!1},showConfirmButton:{type:Boolean,default:!0},onClose:{type:Function},callback:{type:Function}},methods:{}},g=(c("4fa0"),c("d959")),w=c.n(g);const x=w()(h,[["render",m],["__scopeId","data-v-60f7eb3f"]]);var C,y=x,k=function(t){return new Promise((function(e,c){var s=document.createElement("div");document.body.appendChild(s),C=Object(i["e"])(y,Object(n["a"])({onClose:function(t){console.log(t),"confirm"===t?e(t):c(t),C.unmount(s)}},t)),C.mount(s)}))};k.defaultOptions={value:!1,title:"",message:"",showConfirmButton:!0,showCancelButton:!1},k.confirm=function(t){return k(Object(n["a"])(Object(n["a"])({},k.defaultOptions),{},{showCancelButton:!0,value:!0},t))},k.alert=function(t){return k(Object(n["a"])(Object(n["a"])({},k.defaultOptions),{},{value:!0},t))};e["a"]=k},"933d":function(t,e,c){"use strict";c.r(e);var n=c("7a23");Object(n["z"])("data-v-3216c4fa");var i={class:"app-shell app-shell-bottom-navigation"},s={class:"app-view-wrapper"},a={class:"container app-view app-view-with-header"},o={class:"page-wrap"},l={class:"address-manager"},u={class:"address-manager-list"},d={class:"ui-card-item ui-list"},r={class:"ui-list-item identity"},b=["onClick"],f={class:"consignee"},O={key:0},j={class:"add"},p=Object(n["i"])("span",null,"新建地址",-1);function v(t,e,c,v,m,h){var g=Object(n["E"])("MiTitle"),w=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["h"])("div",i,[Object(n["i"])("div",s,[Object(n["l"])(g,{title:"收货地址","show-search-icon":!1}),Object(n["i"])("div",a,[Object(n["i"])("div",o,[Object(n["i"])("div",l,[Object(n["i"])("div",u,[(Object(n["w"])(!0),Object(n["h"])(n["a"],null,Object(n["C"])(m.lists,(function(t,e){return Object(n["w"])(),Object(n["h"])("div",{key:t.address_id,class:"ui-card"},[Object(n["i"])("ul",d,[Object(n["i"])("li",r,[Object(n["i"])("a",{onClick:function(c){return h.remove(t,e)}},"删除",8,b),Object(n["i"])("span",f,Object(n["H"])(t.consignee),1),Object(n["i"])("span",null,Object(n["H"])(t.tel),1),t.is_default?(Object(n["w"])(),Object(n["h"])("em",O," [默认]")):Object(n["g"])("",!0)]),Object(n["l"])(w,{to:{name:"addressEdit",query:{address_id:t.address_id}},tag:"li",class:"ui-list-item edit"},{default:Object(n["O"])((function(){return[Object(n["i"])("p",null,Object(n["H"])(t.province)+" "+Object(n["H"])(t.city)+" "+Object(n["H"])(t.district)+" "+Object(n["H"])(t.area),1),Object(n["i"])("p",null,Object(n["H"])(t.address),1)]})),_:2},1032,["to"])])])})),128))])])]),Object(n["i"])("div",j,[Object(n["l"])(w,{to:{name:"addressEdit"},class:"btn ui-button ui-button-active"},{default:Object(n["O"])((function(){return[p]})),_:1})])])])])}Object(n["x"])();c("b0c0"),c("a434");var m=c("8ed0"),h=c("58b0"),g=c("f093"),w={components:{MiTitle:m["a"]},data:function(){return{lists:[],showDialog:!1,removeCash:{}}},beforeRouteEnter:function(t,e,c){e.name?g["a"].list().then((function(t){200===t.status&&c((function(e){return e.setLists(t)}))})):c((function(t){return t.getLists()}))},methods:{getLists:function(){var t=this;g["a"].list().then((function(e){200===e.status&&t.setLists(e)}))},setLists:function(t){this.$store.commit("setViewLoading",!1),this.$NProgress.done(),this.lists=t.data},remove:function(t,e){var c=this;h["a"].confirm({message:"确定删除当前地址?"}).then((function(n){console.log("dialog"),console.log(n),g["a"].remove(t.address_id).then((function(t){200===t.status&&c.lists.splice(e,1)}))})).catch((function(t){console.log(t)}))}}},x=(c("1ddc"),c("d959")),C=c.n(x);const y=C()(w,[["render",v],["__scopeId","data-v-3216c4fa"]]);e["default"]=y},a434:function(t,e,c){"use strict";var n=c("23e7"),i=c("da84"),s=c("23cb"),a=c("5926"),o=c("07fa"),l=c("7b0b"),u=c("65f0"),d=c("8418"),r=c("1dde"),b=r("splice"),f=i.TypeError,O=Math.max,j=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!b},{splice:function(t,e){var c,n,i,r,b,m,h=l(this),g=o(h),w=s(t,g),x=arguments.length;if(0===x?c=n=0:1===x?(c=0,n=g-w):(c=x-2,n=j(O(a(e),0),g-w)),g+c-n>p)throw f(v);for(i=u(h,n),r=0;r<n;r++)b=w+r,b in h&&d(i,r,h[b]);if(i.length=n,c<n){for(r=w;r<g-n;r++)b=r+n,m=r+c,b in h?h[m]=h[b]:delete h[m];for(r=g;r>g-n+c;r--)delete h[r-1]}else if(c>n)for(r=g-n;r>w;r--)b=r+n-1,m=r+c-1,b in h?h[m]=h[b]:delete h[m];for(r=0;r<c;r++)h[r+w]=arguments[r+2];return h.length=g-n+c,i}})},a874:function(t,e,c){},ad9c:function(t,e,c){}}]);
//# sourceMappingURL=addressList.7ccb8b75.js.map