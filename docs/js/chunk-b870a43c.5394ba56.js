(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b870a43c"],{"02c8":function(t,e,r){},"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?o(t):c(n(t))}},"0fde":function(t,e,r){"use strict";r("72a0")},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),a=r("17c2"),i=r("9112");for(var o in c){var u=n[o],s=u&&u.prototype;if(s&&s.forEach!==a)try{i(s,"forEach",a)}catch(f){s.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),a=c("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1bda":function(t,e,r){},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"72a0":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||i(e,t,{value:a.f(t)})}},"79bd":function(t,e,r){"use strict";r("1bda")},8418:function(t,e,r){"use strict";var n=r("c04e"),c=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?c.f(t,i,a(0,r)):t[i]=r}},"857a":function(t,e,r){var n=r("1d80"),c=/"/g;t.exports=function(t,e,r,a){var i=String(n(t)),o="<"+e;return""!==r&&(o+=" "+r+'="'+String(a).replace(c,"&quot;")+'"'),o+">"+i+"</"+e+">"}},8792:function(t,e,r){"use strict";r("02c8")},"90ca":function(t,e,r){"use strict";r("ff05")},9911:function(t,e,r){"use strict";var n=r("23e7"),c=r("857a"),a=r("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(t){return c(this,"a","href",t)}})},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("d039"),a=r("e8b5"),i=r("861d"),o=r("7b0b"),u=r("50c4"),s=r("8418"),f=r("65f0"),b=r("1dde"),l=r("b622"),d=r("2d00"),g=l("isConcatSpreadable"),p=9007199254740991,y="Maximum allowed index exceeded",O=d>=51||!c((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=b("concat"),h=function(t){if(!i(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},j=!O||!v;n({target:"Array",proto:!0,forced:j},{concat:function(t){var e,r,n,c,a,i=o(this),b=f(i,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?i:arguments[e],h(a)){if(c=u(a.length),l+c>p)throw TypeError(y);for(r=0;r<c;r++,l++)r in a&&s(b,l,a[r])}else{if(l>=p)throw TypeError(y);s(b,l++,a)}return b.length=l,b}})},"9bd0":function(t,e,r){"use strict";var n=r("7a23"),c={class:"tab-control"};function a(t,e,r,a,i,o){return Object(n["r"])(),Object(n["e"])("div",c,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.titles,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{key:e,class:["tab-control-item",{active:e===i.currentIndex}],onClick:function(t){return o.itemClick(e)}},[Object(n["i"])("span",null,Object(n["D"])(t),1)],10,["onClick"])})),128))])}var i={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}};r("79bd");i.render=a;e["a"]=i},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),a=r("d066"),i=r("c430"),o=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),b=r("5135"),l=r("e8b5"),d=r("861d"),g=r("825a"),p=r("7b0b"),y=r("fc6a"),O=r("c04e"),v=r("5c6c"),h=r("7c73"),j=r("df75"),m=r("241c"),w=r("057f"),S=r("7418"),D=r("06cf"),k=r("9bf2"),x=r("d1e7"),C=r("9112"),I=r("6eeb"),_=r("5692"),T=r("f772"),P=r("d012"),E=r("90e3"),N=r("b622"),z=r("e538"),J=r("746f"),M=r("d44e"),L=r("69f3"),V=r("b727").forEach,A=T("hidden"),G="Symbol",W="prototype",$=N("toPrimitive"),F=L.set,K=L.getterFor(G),q=Object[W],B=c.Symbol,Q=a("JSON","stringify"),R=D.f,H=k.f,U=w.f,X=x.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=c.QObject,ct=!nt||!nt[W]||!nt[W].findChild,at=o&&f((function(){return 7!=h(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=R(q,e);n&&delete q[e],H(t,e,r),n&&t!==q&&H(q,e,n)}:H,it=function(t,e){var r=Y[t]=h(B[W]);return F(r,{type:G,tag:t,description:e}),o||(r.description=e),r},ot=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ut=function(t,e,r){t===q&&ut(Z,e,r),g(t);var n=O(e,!0);return g(r),b(Y,n)?(r.enumerable?(b(t,A)&&t[A][n]&&(t[A][n]=!1),r=h(r,{enumerable:v(0,!1)})):(b(t,A)||H(t,A,v(1,{})),t[A][n]=!0),at(t,n,r)):H(t,n,r)},st=function(t,e){g(t);var r=y(e),n=j(r).concat(gt(r));return V(n,(function(e){o&&!bt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?h(t):st(h(t),e)},bt=function(t){var e=O(t,!0),r=X.call(this,e);return!(this===q&&b(Y,e)&&!b(Z,e))&&(!(r||!b(this,e)||!b(Y,e)||b(this,A)&&this[A][e])||r)},lt=function(t,e){var r=y(t),n=O(e,!0);if(r!==q||!b(Y,n)||b(Z,n)){var c=R(r,n);return!c||!b(Y,n)||b(r,A)&&r[A][n]||(c.enumerable=!0),c}},dt=function(t){var e=U(y(t)),r=[];return V(e,(function(t){b(Y,t)||b(P,t)||r.push(t)})),r},gt=function(t){var e=t===q,r=U(e?Z:y(t)),n=[];return V(r,(function(t){!b(Y,t)||e&&!b(q,t)||n.push(Y[t])})),n};if(u||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===q&&r.call(Z,t),b(this,A)&&b(this[A],e)&&(this[A][e]=!1),at(this,e,v(1,t))};return o&&ct&&at(q,e,{configurable:!0,set:r}),it(e,t)},I(B[W],"toString",(function(){return K(this).tag})),I(B,"withoutSetter",(function(t){return it(E(t),t)})),x.f=bt,k.f=ut,D.f=lt,m.f=w.f=dt,S.f=gt,z.f=function(t){return it(N(t),t)},o&&(H(B[W],"description",{configurable:!0,get:function(){return K(this).description}}),i||I(q,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:B}),V(j(rt),(function(t){J(t)})),n({target:G,stat:!0,forced:!u},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!o},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),Q){var pt=!u||f((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,c=[t],a=1;while(arguments.length>a)c.push(arguments[a++]);if(n=e,(d(e)||void 0!==t)&&!ot(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),c[1]=e,Q.apply(null,c)}})}B[W][$]||C(B[W],$,B[W].valueOf),M(B,G),P[A]=!0},af03:function(t,e,r){var n=r("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),a=r("df75"),i=r("d039"),o=i((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return a(c(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c=Object(n["J"])("data-v-059bbe9e");Object(n["u"])("data-v-059bbe9e");var a={id:"category"},i=Object(n["h"])("商品分类"),o={class:"content"};Object(n["s"])();var u=c((function(t,e,r,u,s,f){var b=Object(n["z"])("nav-bar"),l=Object(n["z"])("tab-menu"),d=Object(n["z"])("tab-content-category"),g=Object(n["z"])("tab-control"),p=Object(n["z"])("tab-content-detail"),y=Object(n["z"])("scroll");return Object(n["r"])(),Object(n["e"])("div",a,[Object(n["i"])(b,{class:"category-nav"},{center:c((function(){return[i]})),_:1}),Object(n["i"])("div",o,[Object(n["i"])(l,{categories:s.categories,onSelectItem:f.selectItem,class:"tab-menu"},null,8,["categories","onSelectItem"]),Object(n["i"])(y,{id:"tab-content",data:[s.categoryData]},{default:c((function(){return[Object(n["i"])("div",null,[Object(n["i"])(d,{subcategories:f.showSubcategory},null,8,["subcategories"]),Object(n["i"])(g,{titles:["综合","新品","销量"],onTabClick:f.tabClick},null,8,["onTabClick"]),Object(n["i"])(p,{"category-detail":f.showCategoryDetail},null,8,["category-detail"])])]})),_:1},8,["data"])])])})),s=r("5530"),f=r("a7ac"),b=r("5d17"),l=r("9bd0"),d=(r("9911"),Object(n["J"])("data-v-5c1a7552"));Object(n["u"])("data-v-5c1a7552");var g={class:"item-text"};Object(n["s"])();var p=d((function(t,e,r,c,a,i){var o=Object(n["z"])("grid-view");return Object(n["r"])(),Object(n["e"])("div",null,[r.subcategories.list?(Object(n["r"])(),Object(n["e"])(o,{key:0,cols:3,lineSpace:15,"v-margin":20},{default:d((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.subcategories.list,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{class:"item",key:e},[Object(n["i"])("a",{href:t.link},[Object(n["i"])("img",{class:"item-img",src:t.image,alt:""},null,8,["src"]),Object(n["i"])("div",g,Object(n["D"])(t.title),1)],8,["href"])])})),128))]})),_:1})):Object(n["f"])("",!0)])})),y=Object(n["J"])("data-v-a45fce7a");Object(n["u"])("data-v-a45fce7a");var O={class:"grid-view",ref:"gridView"};Object(n["s"])();var v=y((function(t,e,r,c,a,i){return Object(n["r"])(),Object(n["e"])("div",O,[Object(n["y"])(t.$slots,"default")],512)})),h=(r("a9e3"),r("99af"),{name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var r=(t.clientWidth-2*this.hMargin-this.cols*this.itemSpace)/this.cols,n=0;n<e.length;n++){var c=e[n];c.style.width=r+"px",(n+1)%this.cols!==0&&(c.style.marginRight=this.itemSpace+"px"),n>=this.cols&&(c.style.marginTop=this.lineSpace+"px")}}}});r("90ca");h.render=v,h.__scopeId="data-v-a45fce7a";var j=h,m={name:"TabContentCategory",components:{GridView:j},props:{subcategories:{type:Object,default:function(){return{}}}}};r("fbed");m.render=p,m.__scopeId="data-v-5c1a7552";var w=m,S=Object(n["J"])("data-v-4b09c02e"),D=S((function(t,e,r,c,a,i){var o=Object(n["z"])("goods-list-item"),u=Object(n["z"])("grid-view");return Object(n["r"])(),Object(n["e"])(u,null,{default:S((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.categoryDetail,(function(t){return Object(n["r"])(),Object(n["e"])(o,{key:t.iid,goodsItem:t},null,8,["goodsItem"])})),128))]})),_:1})})),k=r("9977"),x={name:"TabContentDetail",components:{GridView:j,GoodsListItem:k["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}};x.render=D,x.__scopeId="data-v-4b09c02e";var C=x,I=r("1bab");function _(){return Object(I["a"])({url:"/category"})}function T(t){return Object(I["a"])({url:"/subcategory",params:{maitKey:t}})}function P(t,e){return Object(I["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var E=Object(n["J"])("data-v-6391e479");Object(n["u"])("data-v-6391e479");var N={class:"menu-list"};Object(n["s"])();var z=E((function(t,e,r,c,a,i){var o=Object(n["z"])("scroll");return Object(n["r"])(),Object(n["e"])(o,{id:"tab-menu",observeDOM:!0},{default:E((function(){return[Object(n["i"])("div",N,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.categories,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{class:["menu-list-item",{active:e===a.currentIndex}],key:e,onClick:function(t){return i.itemClick(e)}},Object(n["D"])(t.title),11,["onClick"])})),128))])]})),_:1})})),J={name:"TabMenu",components:{Scroll:b["a"]},props:{categories:Array},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}};r("0fde");J.render=z,J.__scopeId="data-v-6391e479";var M=J,L={name:"Category",components:{NavBar:f["a"],TabMenu:M,Scroll:b["a"],TabControl:l["a"],TabContentCategory:w,TabContentDetail:C},data:function(){return{categories:[],categoryData:[],currentIndex:-1,currentType:"pop"}},created:function(){this._getCategory()},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{_getCategory:function(){var t=this;_().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t._getSubcategories(0)}))},_getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;T(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(s["a"])({},e.categoryData),e._getCategoryDetail("pop"),e._getCategoryDetail("new"),e._getCategoryDetail("sell")}))},_getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;P(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(s["a"])({},e.categoryData)}))},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}},selectItem:function(t){this._getSubcategories(t)}}};r("8792");L.render=u,L.__scopeId="data-v-059bbe9e";e["default"]=L},c26c:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),a=r("56ef"),i=r("fc6a"),o=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),c=o.f,s=a(n),f={},b=0;while(s.length>b)r=c(n,e=s[b++]),void 0!==r&&u(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),a=r("fc6a"),i=r("06cf").f,o=r("83ab"),u=c((function(){i(1)})),s=!o||u;n({target:"Object",stat:!0,forced:s,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fbed:function(t,e,r){"use strict";r("c26c")},ff05:function(t,e,r){}}]);
//# sourceMappingURL=chunk-b870a43c.5394ba56.js.map