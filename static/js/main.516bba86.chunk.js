(this["webpackJsonpmy-graph"]=this["webpackJsonpmy-graph"]||[]).push([[0],{15:function(a,e,t){},205:function(a,e,t){},206:function(a,e,t){},215:function(a,e,t){},216:function(a,e,t){},217:function(a,e,t){},218:function(a,e,t){},219:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),c=t(80),d=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,s=function(a){a&&a instanceof Function&&t.e(15).then(t.bind(null,221)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,d=e.getTTFB;t(a),n(a),r(a),c(a),d(a)}))},o=t(5),i=function(){var a="#"+Math.floor(16777215*Math.random()).toString(16);if(7!==a.length)for(var e=a.length;e<7;e++)a+="0";return a},u=function(a){for(var e={raw:"",array:[]},t=0;t<a;t++){var n=Math.floor(100*Math.random())+1;e.raw+=n.toString()+",",e.array.push(n)}return e},T=function(a){switch(a){case 1:var e=u(10);return[{label:"Example",color:i(),raw:e.raw,array:e.array}];case 2:for(var t=u(3),n=[],r=0;r<=2;r++)n.push({label:"Example"+(r+1),raw:t.array[r],color:i()});return n;case 3:var c=u(20);return{color:i(),array:c.array,raw:c.raw,label:"Example"};case 4:var d={x:u(10),y:u(10)};return[{label:"Example",color:i(),rawX:d.x.raw,arrayX:d.x.array,rawY:d.y.raw,arrayY:d.y.array}];case 5:for(var l=[],s=0;s<2;s++){var o=u(4);l.push({raw:o.raw,array:o.array,color:i(),label:"Example"+s})}return{labels:"Example1,Example2,Example3,Example4,Example5",datasets:l};default:return[]}},b={selectedChart:0,chartStyle:0,dataSet1:T(1),dataSet2:T(2),dataSet3:T(3),dataSet4:T(4),dataSet5:T(5)},A=t(2);!function(a){a[a.SELECTEDCHART_SET=0]="SELECTEDCHART_SET",a[a.CHARTSTYLE_SET=1]="CHARTSTYLE_SET",a[a.DATASET_CLEAR=2]="DATASET_CLEAR",a[a.DATASET1_CLEAR=3]="DATASET1_CLEAR",a[a.DATASET1_ADD=4]="DATASET1_ADD",a[a.DATASET1_REMOVE=5]="DATASET1_REMOVE",a[a.DATASET1_SET_LABEL=6]="DATASET1_SET_LABEL",a[a.DATASET1_SET_RAW=7]="DATASET1_SET_RAW",a[a.DATASET1_SET_COLOR=8]="DATASET1_SET_COLOR",a[a.DATASET2_CLEAR=9]="DATASET2_CLEAR",a[a.DATASET2_ADD=10]="DATASET2_ADD",a[a.DATASET2_REMOVE=11]="DATASET2_REMOVE",a[a.DATASET2_SET_LABEL=12]="DATASET2_SET_LABEL",a[a.DATASET2_SET_VALUE=13]="DATASET2_SET_VALUE",a[a.DATASET2_SET_COLOR=14]="DATASET2_SET_COLOR",a[a.DATASET3_CLEAR=15]="DATASET3_CLEAR",a[a.DATASET3_SET_LABEL=16]="DATASET3_SET_LABEL",a[a.DATASET3_SET_RAW=17]="DATASET3_SET_RAW",a[a.DATASET3_SET_COLOR=18]="DATASET3_SET_COLOR",a[a.DATASET4_CLEAR=19]="DATASET4_CLEAR",a[a.DATASET4_ADD=20]="DATASET4_ADD",a[a.DATASET4_REMOVE=21]="DATASET4_REMOVE",a[a.DATASET4_SET_LABEL=22]="DATASET4_SET_LABEL",a[a.DATASET4_SET_RAWX=23]="DATASET4_SET_RAWX",a[a.DATASET4_SET_RAWY=24]="DATASET4_SET_RAWY",a[a.DATASET4_SET_COLOR=25]="DATASET4_SET_COLOR",a[a.DATASET5_CLEAR=26]="DATASET5_CLEAR",a[a.DATASET5_ADD=27]="DATASET5_ADD",a[a.DATASET5_REMOVE=28]="DATASET5_REMOVE",a[a.DATASET5_SET_RAW=29]="DATASET5_SET_RAW",a[a.DATASET5_SET_COLOR=30]="DATASET5_SET_COLOR",a[a.DATASET5_SET_LABEL=31]="DATASET5_SET_LABEL",a[a.DATASET5_SET_TITLE=32]="DATASET5_SET_TITLE"}(l||(l={}));var j=function(a,e){switch(e.type){case l.SELECTEDCHART_SET:switch(e.payload){case 0:return Object(A.a)(Object(A.a)({},a),{},{selectedChart:e.payload,dataSet1:T(1)});case 1:return Object(A.a)(Object(A.a)({},a),{},{selectedChart:e.payload,dataSet4:T(4)});case 2:case 3:case 4:case 7:return Object(A.a)(Object(A.a)({},a),{},{selectedChart:e.payload,dataSet2:T(2)});case 5:return Object(A.a)(Object(A.a)({},a),{},{selectedChart:e.payload,dataSet3:T(3)});case 6:return Object(A.a)(Object(A.a)({},a),{},{selectedChart:e.payload,dataSet5:T(5)});default:return a}default:return a}},S=function(a,e){switch(e.type){case l.CHARTSTYLE_SET:return Object(A.a)(Object(A.a)({},a),{},{chartStyle:e.payload});default:return a}},E=t(7),O=function(a){for(var e=[],t="",n=0;n<a.length;n++){var r=a[n];","!==r&&"."!==r&&"-"!==r&&isNaN(Number(r))||","===r&&t[t.length-1]===r||(t+=r)}for(var c=t.split(","),d=0;d<c.length;d++){var l=Number(c[d]);isNaN(l)||e.push(l)}return e},h=function(a){return a.split(",")},p=function(a){for(var e="",t=0;t<a.length;t++){var n=a[t];","!==n&&"."!==n&&"-"!==n&&isNaN(Number(n))||(e+=n)}return e},x=["X","Y","Z","P","Q","R","S","A","B","C","D","E","F","G","H","I","J","K","M","N","L","O","P","Q","R","S","V","O","W","X","Y","Z"],_=function(a){return a<x.length?x[a]:x[Math.floor(Math.random()*(x.length-0+1)+0)]},f=function(a,e){var t,n=Object(E.a)(a.dataSet1);switch(e.type){case l.DATASET1_CLEAR:return Object(A.a)(Object(A.a)({},a),{},{dataSet1:[]});case l.DATASET1_ADD:return Object(A.a)(Object(A.a)({},a),{},{dataSet1:[].concat(Object(E.a)(a.dataSet1),[{label:_(a.dataSet1.length),raw:"",array:[],color:i()}])});case l.DATASET1_REMOVE:return Object(A.a)(Object(A.a)({},a),{},{dataSet1:(t=a.dataSet1.slice(0,e.payload)).concat.apply(t,Object(E.a)(a.dataSet1.slice(e.payload+1)))});case l.DATASET1_SET_LABEL:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{label:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet1:n});case l.DATASET1_SET_RAW:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{raw:p(e.payload.data),array:O(e.payload.data)}),Object(A.a)(Object(A.a)({},a),{},{dataSet1:n});case l.DATASET1_SET_COLOR:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{color:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet1:n});default:return a}},D=function(a,e){var t,n=Object(E.a)(a.dataSet2);switch(e.type){case l.DATASET2_CLEAR:return Object(A.a)(Object(A.a)({},a),{},{dataSet2:[]});case l.DATASET2_ADD:return Object(A.a)(Object(A.a)({},a),{},{dataSet2:[].concat(Object(E.a)(a.dataSet2),[{label:_(a.dataSet2.length),raw:0,color:i()}])});case l.DATASET2_REMOVE:return Object(A.a)(Object(A.a)({},a),{},{dataSet2:(t=a.dataSet2.slice(0,e.payload)).concat.apply(t,Object(E.a)(a.dataSet2.slice(e.payload+1)))});case l.DATASET2_SET_LABEL:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{label:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet2:n});case l.DATASET2_SET_VALUE:return 3!==a.selectedChart&&4!==a.selectedChart||!e.payload.data.includes("-")?(n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{raw:Number(e.payload.data)}),Object(A.a)(Object(A.a)({},a),{},{dataSet2:n})):a;case l.DATASET2_SET_COLOR:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{color:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet2:n});default:return a}},y=function(a,e){switch(e.type){case l.DATASET3_CLEAR:return Object(A.a)(Object(A.a)({},a),{},{dataSet3:{label:"X",raw:"",array:[],color:i()}});case l.DATASET3_SET_LABEL:return Object(A.a)(Object(A.a)({},a),{},{dataSet3:Object(A.a)(Object(A.a)({},a.dataSet3),{},{label:e.payload})});case l.DATASET3_SET_RAW:return Object(A.a)(Object(A.a)({},a),{},{dataSet3:Object(A.a)(Object(A.a)({},a.dataSet3),{},{raw:p(e.payload),array:O(e.payload)})});case l.DATASET3_SET_COLOR:return Object(A.a)(Object(A.a)({},a),{},{dataSet3:Object(A.a)(Object(A.a)({},a.dataSet3),{},{color:e.payload})});default:return a}},C=function(a,e){var t,n=Object(E.a)(a.dataSet4);switch(e.type){case l.DATASET4_CLEAR:return Object(A.a)(Object(A.a)({},a),{},{dataSet4:[]});case l.DATASET4_ADD:return Object(A.a)(Object(A.a)({},a),{},{dataSet4:[].concat(Object(E.a)(a.dataSet4),[{label:_(a.dataSet4.length),rawX:"",rawY:"",arrayX:[],arrayY:[],color:i()}])});case l.DATASET4_REMOVE:return Object(A.a)(Object(A.a)({},a),{},{dataSet4:(t=a.dataSet4.slice(0,e.payload)).concat.apply(t,Object(E.a)(a.dataSet4.slice(e.payload+1)))});case l.DATASET4_SET_LABEL:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{label:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet4:n});case l.DATASET4_SET_RAWX:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{rawX:p(e.payload.data),arrayX:O(e.payload.data)}),Object(A.a)(Object(A.a)({},a),{},{dataSet4:n});case l.DATASET4_SET_RAWY:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{rawY:p(e.payload.data),arrayY:O(e.payload.data)}),Object(A.a)(Object(A.a)({},a),{},{dataSet4:n});case l.DATASET4_SET_COLOR:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{color:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet4:n});default:return a}},m=function(a,e){var t,n=Object(E.a)(a.dataSet5.datasets);switch(e.type){case l.DATASET5_CLEAR:return Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{datasets:[]})});case l.DATASET5_ADD:return Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{datasets:[].concat(Object(E.a)(a.dataSet5.datasets),[{color:i(),raw:"",array:[],label:_(a.dataSet5.datasets.length)}])})});case l.DATASET5_REMOVE:return Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{datasets:(t=a.dataSet5.datasets.slice(0,e.payload)).concat.apply(t,Object(E.a)(a.dataSet5.datasets.slice(e.payload+1)))})});case l.DATASET5_SET_LABEL:return Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{labels:e.payload})});case l.DATASET5_SET_RAW:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{raw:e.payload.data,array:O(e.payload.data)}),Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{datasets:n})});case l.DATASET5_SET_COLOR:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{color:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{datasets:n})});case l.DATASET5_SET_TITLE:return n[e.payload.index]=Object(A.a)(Object(A.a)({},n[e.payload.index]),{},{label:e.payload.data}),Object(A.a)(Object(A.a)({},a),{},{dataSet5:Object(A.a)(Object(A.a)({},a.dataSet5),{},{datasets:n})});default:return a}},g=function(a,e){switch(e.type){case l.SELECTEDCHART_SET:return j(a,e);case l.CHARTSTYLE_SET:return S(a,e);case l.DATASET1_CLEAR:case l.DATASET1_ADD:case l.DATASET1_REMOVE:case l.DATASET1_SET_LABEL:case l.DATASET1_SET_RAW:case l.DATASET1_SET_COLOR:return f(a,e);case l.DATASET2_CLEAR:case l.DATASET2_ADD:case l.DATASET2_REMOVE:case l.DATASET2_SET_LABEL:case l.DATASET2_SET_VALUE:case l.DATASET2_SET_COLOR:return D(a,e);case l.DATASET3_CLEAR:case l.DATASET3_SET_LABEL:case l.DATASET3_SET_RAW:case l.DATASET3_SET_COLOR:return y(a,e);case l.DATASET4_ADD:case l.DATASET4_CLEAR:case l.DATASET4_REMOVE:case l.DATASET4_SET_LABEL:case l.DATASET4_SET_RAWX:case l.DATASET4_SET_RAWY:case l.DATASET4_SET_COLOR:return C(a,e);case l.DATASET5_CLEAR:case l.DATASET5_ADD:case l.DATASET5_REMOVE:case l.DATASET5_SET_RAW:case l.DATASET5_SET_COLOR:case l.DATASET5_SET_LABEL:case l.DATASET5_SET_TITLE:return m(a,e);default:return a}},L=t(1),v=Object(n.createContext)(b),R=function(a){var e=Object(n.useReducer)(g,b),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(L.jsx)(v.Provider,{value:[r,c],children:a.children})},w=(t(92),t(93),function(a){return Object(L.jsx)("div",{style:{margin:a.m,marginRight:a.mr,marginLeft:a.ml,marginBottom:a.mb,marginTop:a.mt},className:"button",onClick:a.onClick,children:a.children})}),k=[{icon:"Plot",name:"Plot"},{icon:"ScatterPlot",name:"Scatter Plot"},{icon:"Bar",name:"Bar chart"},{icon:"Pie",name:"Pie Chart"},{icon:"Doughnut",name:"Doughnut"},{icon:"Histogram",name:"Histogram"},{icon:"Radar",name:"Radar"},{icon:"Polar",name:"Polar"}],B=(t(94),function(){var a=Object(n.useContext)(v),e=Object(o.a)(a,1)[0];return Object(L.jsxs)("div",{className:"fr chart-header",children:[Object(L.jsx)("div",{children:Object(L.jsx)("h3",{children:k[e.selectedChart].name})}),Object(L.jsx)("div",{className:"fr",children:Object(L.jsx)(w,{mr:10,onClick:function(){!function(){var a=document.createElement("a");a.download="mygraph-"+Math.floor(Date.now()/1e3)+".png",a.href=document.getElementsByTagName("canvas")[0].toDataURL(),a.click()}()},children:"Save image"})})]})}),M=t(52),N=t.n(M),W=t(81),V=(t(96),function(a){var e=Object(n.useState)(null),r=Object(o.a)(e,2),c=r[0],d=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(W.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=a.name,e.next="Bar"===e.t0?3:"Histogram"===e.t0?11:"Pie"===e.t0?19:"Plot"===e.t0?27:"ScatterPlot"===e.t0?35:"Doughnut"===e.t0?43:"Cross"===e.t0?51:"Tick"===e.t0?59:"Delete"===e.t0?67:"Edit"===e.t0?75:"Polar"===e.t0?83:"Radar"===e.t0?91:99;break;case 3:return e.t1=d,e.next=6,t.e(3).then(t.bind(null,222));case 6:return e.next=8,e.sent.default;case 8:return e.t2=e.sent,(0,e.t1)(e.t2),e.abrupt("break",99);case 11:return e.t3=d,e.next=14,t.e(8).then(t.bind(null,223));case 14:return e.next=16,e.sent.default;case 16:return e.t4=e.sent,(0,e.t3)(e.t4),e.abrupt("break",99);case 19:return e.t5=d,e.next=22,t.e(9).then(t.bind(null,224));case 22:return e.next=24,e.sent.default;case 24:return e.t6=e.sent,(0,e.t5)(e.t6),e.abrupt("break",99);case 27:return e.t7=d,e.next=30,t.e(10).then(t.bind(null,225));case 30:return e.next=32,e.sent.default;case 32:return e.t8=e.sent,(0,e.t7)(e.t8),e.abrupt("break",99);case 35:return e.t9=d,e.next=38,t.e(13).then(t.bind(null,226));case 38:return e.next=40,e.sent.default;case 40:return e.t10=e.sent,(0,e.t9)(e.t10),e.abrupt("break",99);case 43:return e.t11=d,e.next=46,t.e(6).then(t.bind(null,227));case 46:return e.next=48,e.sent.default;case 48:return e.t12=e.sent,(0,e.t11)(e.t12),e.abrupt("break",99);case 51:return e.t13=d,e.next=54,t.e(4).then(t.bind(null,228));case 54:return e.next=56,e.sent.default;case 56:return e.t14=e.sent,(0,e.t13)(e.t14),e.abrupt("break",99);case 59:return e.t15=d,e.next=62,t.e(14).then(t.bind(null,229));case 62:return e.next=64,e.sent.default;case 64:return e.t16=e.sent,(0,e.t15)(e.t16),e.abrupt("break",99);case 67:return e.t17=d,e.next=70,t.e(5).then(t.bind(null,230));case 70:return e.next=72,e.sent.default;case 72:return e.t18=e.sent,(0,e.t17)(e.t18),e.abrupt("break",99);case 75:return e.t19=d,e.next=78,t.e(7).then(t.bind(null,231));case 78:return e.next=80,e.sent.default;case 80:return e.t20=e.sent,(0,e.t19)(e.t20),e.abrupt("break",99);case 83:return e.t21=d,e.next=86,t.e(11).then(t.bind(null,232));case 86:return e.next=88,e.sent.default;case 88:return e.t22=e.sent,(0,e.t21)(e.t22),e.abrupt("break",99);case 91:return e.t23=d,e.next=94,t.e(12).then(t.bind(null,233));case 94:return e.next=96,e.sent.default;case 96:return e.t24=e.sent,(0,e.t23)(e.t24),e.abrupt("break",99);case 99:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,a.name]),Object(L.jsx)("div",{className:"icon",children:null!==c?Object(L.jsx)("img",{alt:"Icon",src:c}):Object(L.jsx)(L.Fragment,{})})}),P=(t(97),function(a){return Object(L.jsx)("input",{style:{margin:a.m,marginRight:a.mr,marginLeft:a.ml,marginBottom:a.mb,marginTop:a.mt,width:a.w},className:"input ",placeholder:a.placeholder,value:a.value,onChange:a.onChange})}),Y=(t(98),function(a){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),r=t[0],c=t[1],d=Object(n.useState)(a.value),l=Object(o.a)(d,2),s=l[0],i=l[1];Object(n.useEffect)((function(){i(a.value)}),[a.value,r]);var u=function(){c(!r)};return r?Object(L.jsxs)("div",{className:"editable-text-editing",children:[Object(L.jsx)("div",{className:"editable-text-editing-left",children:Object(L.jsx)(P,{w:"100%",value:s,onChange:function(a){i(a.target.value)}})}),Object(L.jsxs)("div",{className:"editable-text-editing-right",children:[Object(L.jsx)(w,{onClick:function(){a.onChange(s),c(!1)},mr:5,children:Object(L.jsx)(V,{name:"Tick"})}),Object(L.jsx)(w,{onClick:u,children:Object(L.jsx)(V,{name:"Cross"})})]})]}):Object(L.jsxs)("div",{className:"editable-text-idle",children:[Object(L.jsx)("div",{children:a.value}),Object(L.jsx)(w,{onClick:u,children:Object(L.jsx)(V,{name:"Edit"})})]})}),X=(t(15),function(a){return Object(L.jsxs)("div",{className:"dataset-input-inner-left",children:[Object(L.jsx)(Y,{value:a.data.label,onChange:a.handleOnChangeLabel}),Object(L.jsx)(P,{value:a.data.raw,onChange:a.handleOnChangeInput,placeholder:"value1, value2, value3 ..."})]})}),I=t(86),H=(t(205),function(a){return Object(L.jsx)("div",{className:"modal-wrapper",children:Object(L.jsx)("div",{className:"modal-interior",children:Object(L.jsxs)("div",{className:"modal-content",children:[Object(L.jsxs)("div",{className:"modal-content-header",children:[Object(L.jsx)("div",{children:a.title}),Object(L.jsx)(w,{onClick:a.onClose,children:"X"})]}),a.children]})})})}),F=function(a,e){var t=Object(n.useState)(!1),r=Object(o.a)(t,2),c=r[0],d=r[1],l=function(){d(!1)};return{isOpen:c,openModal:function(){d(!0)},closeModal:l,Component:U(a,c,l,e)}},U=function(a,e,t,n){return e?Object(L.jsx)(H,{title:n,onClose:t,children:a}):Object(L.jsx)(L.Fragment,{})},Z=function(a){var e=F(Object(L.jsx)(I.a,{color:a.value,onChange:function(e,t){a.handleOnChangeColor(e.hex)}}),"Color picker");return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(w,{onClick:e.openModal,children:Object(L.jsx)("div",{style:{border:"1px solid white",width:15,height:15,backgroundColor:a.value}})}),e.Component]})},z=function(a){return Object(L.jsxs)("div",{className:"dataset-input-inner-right",children:[Object(L.jsx)(Z,{value:a.data.color,handleOnChangeColor:a.handleOnChangeColor}),a.handleOnDeleteDataset&&Object(L.jsx)(w,{onClick:a.handleOnDeleteDataset,children:Object(L.jsx)(V,{name:"Delete"})})]})},J=function(a){return Object(L.jsx)("div",{className:"dataset-input",children:a.children})},Q={selectedChart:{set:function(a){return{type:l.SELECTEDCHART_SET,payload:a}}},chartStyle:{set:function(a){return{type:l.CHARTSTYLE_SET,payload:a}}},dataSet1:{clear:function(){return{type:l.DATASET1_CLEAR,payload:null}},add:function(){return{type:l.DATASET1_ADD,payload:null}},remove:function(a){return{type:l.DATASET1_REMOVE,payload:a}},setLabel:function(a,e){return{type:l.DATASET1_SET_LABEL,payload:{index:a,data:e}}},setRaw:function(a,e){return{type:l.DATASET1_SET_RAW,payload:{index:a,data:e}}},setColor:function(a,e){return{type:l.DATASET1_SET_COLOR,payload:{index:a,data:e}}}},dataSet2:{clear:function(){return{type:l.DATASET2_CLEAR,payload:null}},add:function(){return{type:l.DATASET2_ADD,payload:null}},remove:function(a){return{type:l.DATASET2_REMOVE,payload:a}},setLabel:function(a,e){return{type:l.DATASET2_SET_LABEL,payload:{index:a,data:e}}},setValue:function(a,e){return{type:l.DATASET2_SET_VALUE,payload:{index:a,data:e}}},setColor:function(a,e){return{type:l.DATASET2_SET_COLOR,payload:{index:a,data:e}}}},dataSet3:{clear:function(){return{type:l.DATASET2_CLEAR,payload:null}},setLabel:function(a){return{type:l.DATASET3_SET_LABEL,payload:a}},setRaw:function(a){return{type:l.DATASET3_SET_RAW,payload:a}},setColor:function(a){return{type:l.DATASET3_SET_COLOR,payload:a}}},dataSet4:{clear:function(){return{type:l.DATASET4_CLEAR,payload:null}},add:function(){return{type:l.DATASET4_ADD,payload:null}},remove:function(a){return{type:l.DATASET4_REMOVE,payload:a}},setLabel:function(a,e){return{type:l.DATASET4_SET_LABEL,payload:{index:a,data:e}}},setRawX:function(a,e){return{type:l.DATASET4_SET_RAWX,payload:{index:a,data:e}}},setRawY:function(a,e){return{type:l.DATASET4_SET_RAWY,payload:{index:a,data:e}}},setColor:function(a,e){return{type:l.DATASET4_SET_COLOR,payload:{index:a,data:e}}}},dataSet5:{clear:function(){return{type:l.DATASET5_CLEAR,payload:null}},add:function(){return{type:l.DATASET5_ADD,payload:null}},remove:function(a){return{type:l.DATASET5_REMOVE,payload:a}},setLabel:function(a){return{type:l.DATASET5_SET_LABEL,payload:a}},setRaw:function(a,e){return{type:l.DATASET5_SET_RAW,payload:{index:a,data:e}}},setTitle:function(a,e){return{type:l.DATASET5_SET_TITLE,payload:{index:a,data:e}}},setColor:function(a,e){return{type:l.DATASET5_SET_COLOR,payload:{index:a,data:e}}}}},q=function(a){return Object(L.jsxs)(J,{children:[Object(L.jsx)(X,{data:a.data,handleOnChangeInput:function(e){a.dispatcher(Q.dataSet1.setRaw(a.index,e.target.value))},handleOnChangeLabel:function(e){a.dispatcher(Q.dataSet1.setLabel(a.index,e))}}),Object(L.jsx)(z,{data:a.data,handleOnChangeColor:function(e){a.dispatcher(Q.dataSet1.setColor(a.index,e))},handleOnDeleteDataset:function(){a.dispatcher(Q.dataSet1.remove(a.index))}})]})},G=function(a){return Object(L.jsxs)(J,{children:[Object(L.jsx)(X,{data:a.data,handleOnChangeLabel:function(e){a.dispatcher(Q.dataSet2.setLabel(a.index,e))},handleOnChangeInput:function(e){a.dispatcher(Q.dataSet2.setValue(a.index,e.target.value))}}),Object(L.jsx)(z,{data:a.data,handleOnChangeColor:function(e){a.dispatcher(Q.dataSet2.setColor(a.index,e))},handleOnDeleteDataset:function(){a.dispatcher(Q.dataSet2.remove(a.index))}})]})},K=function(a){return Object(L.jsxs)(J,{children:[Object(L.jsx)(X,{data:a.data,handleOnChangeLabel:function(e){a.dispatcher(Q.dataSet3.setLabel(e))},handleOnChangeInput:function(e){a.dispatcher(Q.dataSet3.setRaw(e.target.value))}}),Object(L.jsx)(z,{data:a.data,handleOnChangeColor:function(e){a.dispatcher(Q.dataSet3.setColor(e))}})]})},$=function(a){return Object(L.jsxs)("div",{className:"dataset-input-inner-left",children:[Object(L.jsx)(Y,{value:a.data.label,onChange:a.handleOnChangeLabel}),Object(L.jsx)(P,{value:a.data.rawX,onChange:function(e){return a.handleOnChangeInput(e,"RAWX")},placeholder:"value1, value2, value3 ..."}),Object(L.jsx)(P,{value:a.data.rawY,onChange:function(e){return a.handleOnChangeInput(e,"RAWY")},placeholder:"value1, value2, value3 ...",mb:10})]})},aa=function(a){return Object(L.jsxs)(J,{children:[Object(L.jsx)($,{data:a.data,handleOnChangeLabel:function(e){a.dispatcher(Q.dataSet4.setLabel(a.index,e))},handleOnChangeInput:function(e,t){switch(t){case"RAWX":a.dispatcher(Q.dataSet4.setRawX(a.index,e.target.value));break;case"RAWY":a.dispatcher(Q.dataSet4.setRawY(a.index,e.target.value))}}}),Object(L.jsx)(z,{data:a.data,handleOnChangeColor:function(e){a.dispatcher(Q.dataSet4.setColor(a.index,e))},handleOnDeleteDataset:function(){a.dispatcher(Q.dataSet4.remove(a.index))}})]})},ea=function(a){return Object(L.jsxs)(J,{children:[Object(L.jsx)(X,{data:a.data,handleOnChangeInput:function(e){a.dispatcher(Q.dataSet5.setRaw(a.index,e.target.value))},handleOnChangeLabel:function(e){a.dispatcher(Q.dataSet5.setTitle(a.index,e))}}),Object(L.jsx)(z,{data:a.data,handleOnChangeColor:function(e){a.dispatcher(Q.dataSet5.setColor(a.index,e))},handleOnDeleteDataset:function(){a.dispatcher(Q.dataSet5.remove(a.index))}})]})},ta=function(a){return Object(L.jsx)("div",{className:"dataset-input-inner-left",children:Object(L.jsx)(P,{value:a.data,onChange:a.handleOnChangeLabel})})},na=function(){return Object(L.jsx)("div",{className:"dataset-input-inner-right"})},ra=function(a){return Object(L.jsxs)(J,{children:[Object(L.jsx)(ta,{data:a.data,handleOnChangeLabel:function(e){a.dispatcher(Q.dataSet5.setLabel(e.target.value))}}),Object(L.jsx)(na,{})]})},ca=function(){var a=Object(n.useContext)(v),e=Object(o.a)(a,2),t=e[0],r=e[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{style:{marginTop:5,marginBottom:5},children:"Datasets:"}),Object(L.jsx)(w,{onClick:function(){return r(Q.dataSet1.add())},children:"Add dataset"}),t.dataSet1.map((function(a,e){return Object(L.jsx)(q,{data:a,dispatcher:r,index:e})}))]})},da=function(){var a=Object(n.useContext)(v),e=Object(o.a)(a,2),t=e[0],r=e[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{style:{marginTop:5,marginBottom:5},children:"Datasets:"}),Object(L.jsx)(w,{onClick:function(){return r(Q.dataSet4.add())},children:"Add dataset"}),t.dataSet4.map((function(a,e){return Object(L.jsx)(aa,{data:a,dispatcher:r,index:e})}))]})},la=function(){var a=Object(n.useContext)(v),e=Object(o.a)(a,2),t=e[0],r=e[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{style:{marginTop:5,marginBottom:5},children:"Datasets:"}),Object(L.jsx)(w,{onClick:function(){return r(Q.dataSet2.add())},children:"Add dataset"}),t.dataSet2.map((function(a,e){return Object(L.jsx)(G,{data:a,index:e,dispatcher:r})}))]})},sa=function(){var a=Object(n.useContext)(v),e=Object(o.a)(a,2),t=e[0],r=e[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{style:{marginTop:5,marginBottom:5},children:"Data:"}),Object(L.jsx)(K,{dispatcher:r,data:t.dataSet3})]})},oa=function(){var a=Object(n.useContext)(v),e=Object(o.a)(a,2),t=e[0],r=e[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{style:{marginTop:5,marginBottom:5},children:"Labels:"}),Object(L.jsx)(ra,{data:t.dataSet5.labels,dispatcher:r}),Object(L.jsx)("div",{style:{marginTop:30,marginBottom:5},children:"Datasets:"}),Object(L.jsx)(w,{onClick:function(){return r(Q.dataSet5.add())},children:"Add dataset"}),t.dataSet5.datasets.map((function(a,e){return Object(L.jsx)(ea,{data:a,dispatcher:r,index:e})}))]})},ia=function(){var a=Object(n.useState)(Object(L.jsx)(L.Fragment,{})),e=Object(o.a)(a,2),t=e[0],r=e[1],c=Object(n.useContext)(v),d=Object(o.a)(c,1)[0];return Object(n.useEffect)((function(){switch(d.selectedChart){case 0:r(Object(L.jsx)(ca,{}));break;case 1:r(Object(L.jsx)(da,{}));break;case 2:case 3:case 4:case 7:r(Object(L.jsx)(la,{}));break;case 5:r(Object(L.jsx)(sa,{}));break;case 6:r(Object(L.jsx)(oa,{}))}}),[d.selectedChart]),t},ua=(t(206),function(){var a=ia();return Object(L.jsx)("div",{className:"chart-inputs",children:a})}),Ta=t(11),ba=function(a){var e=[],t=[],n=[];return a.forEach((function(a){e.push(a.label),t.push(a.raw),n.push(a.color)})),{labels:e,datasets:[{label:"",data:t,backgroundColor:n,hoverOffset:4}]}},Aa=function(a,e){var t=[];return a.forEach((function(a,n){t.push({x:a,y:e[n]})})),t},ja={data:{labels:[],datasets:[]},options:{}},Sa={Line:function(a){var e=[],t=[],n=0;a.forEach((function(a){e.push({label:a.label,data:a.array,fill:!1,borderColor:a.color,tension:.1}),a.array.length>n&&(n=a.array.length)}));for(var r=0;r<=n;r++)t.push("");return{labels:t,datasets:e}},Bar:{adapter:function(a){var e=[],t=[],n=[];return a.forEach((function(a){e.push(a.label),t.push(a.raw),n.push(a.color)})),{labels:e,datasets:[{label:"",data:t,backgroundColor:n,borderColor:n,borderWidth:1}]}},scale:function(a){var e=0,t=0;return a.forEach((function(a){a.raw<e&&(e=a.raw),a.raw>t&&(t=a.raw)})),{min:Math.floor(e-e/5),max:t+Math.floor(t/10),stepSize:Math.floor(t/10)}}},Pie:ba,Doughnut:ba,ScatterPlot:function(a){var e=[];return a.forEach((function(a){e.push({label:a.label,backgroundColor:a.color,data:Aa(a.arrayX,a.arrayY)})})),{datasets:e}},Histogram:function(a){if(0===a.array.length)return ja;var e,t,n=0,r=void 0;a.array.forEach((function(a){a>n&&(n=a),(!r||a<r)&&(r=a)})),t=(n-r)/(e=Math.floor(Math.sqrt(a.array.length)));for(var c=[],d=0;d<e;d++)c.push({min:r+d*t,max:r+d*t+t-(d===e-1?0:1),count:0});return a.array.forEach((function(a){c.forEach((function(e,t){a>=e.min&&a<=e.max&&(c[t].count=c[t].count+1)}))})),{data:{labels:c.map((function(a){return String(Math.round(a.min)+" - "+Math.round(a.max))})),datasets:[{label:a.label,data:c.map((function(a){return a.count})),backgroundColor:a.color}]},options:{scales:{xAxes:[{barPercentage:1.25}],yAxes:[{ticks:{beginAtZero:!0,min:void 0,max:void 0,stepSize:void 0}}]},legend:{display:!0}}}},Radar:function(a){var e=[];return a.datasets.forEach((function(a){e.push({label:a.label,data:a.array,fill:!0,backgroundColor:a.color+"33",borderColor:a.color,pointBackgroundColor:a.color})})),{labels:h(a.labels),datasets:e}}},Ea=function(){var a=Object(n.useState)(Object(L.jsx)(L.Fragment,{})),e=Object(o.a)(a,2),t=e[0],r=e[1],c=Object(n.useContext)(v),d=Object(o.a)(c,1)[0];return Object(n.useEffect)((function(){switch(d.selectedChart){case 0:r(Object(L.jsx)(Ta.Line,{data:Sa.Line(d.dataSet1)}));break;case 1:r(Object(L.jsx)(Ta.Scatter,{data:Sa.ScatterPlot(d.dataSet4)}));break;case 2:r(Object(L.jsx)(Ta.Bar,{data:Sa.Bar.adapter(d.dataSet2),options:{scales:{yAxes:[{type:"linear",ticks:Sa.Bar.scale(d.dataSet2)}]},legend:{display:!1}}}));break;case 3:r(Object(L.jsx)(Ta.Pie,{data:Sa.Pie(d.dataSet2)}));break;case 4:r(Object(L.jsx)(Ta.Doughnut,{data:Sa.Doughnut(d.dataSet2)}));break;case 5:var a=Sa.Histogram(d.dataSet3);r(Object(L.jsx)(Ta.Bar,{data:a.data,options:a.options}));break;case 6:r(Object(L.jsx)(Ta.Radar,{data:Sa.Radar(d.dataSet5)}));break;case 7:r(Object(L.jsx)(Ta.Polar,{data:Sa.Doughnut(d.dataSet2),options:{scale:{ticks:{beginAtZero:!0,min:0}}}}))}}),[d.selectedChart,d.dataSet1,d.dataSet2,d.dataSet3,d.dataSet4,d.dataSet5]),t},Oa=(t(215),function(){var a=Ea();return Object(L.jsx)("div",{className:"chart-visualize",children:a})}),ha=(t(216),t.p+"static/media/Logo.0a4ab6d3.svg"),pa=function(){return Object(L.jsxs)("div",{className:"chart-editor",children:[Object(L.jsx)("img",{src:ha,alt:"logo",style:{marginTop:20},className:"chart-logo"}),Object(L.jsx)(B,{}),Object(L.jsx)(Oa,{}),Object(L.jsx)(ua,{})]})},xa=(t(217),function(a){var e=Object(n.useContext)(v),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(L.jsx)("div",{onClick:function(){c(Q.selectedChart.set(a.index))},className:r.selectedChart===a.index?"chart-selector chart-selector-selected":"chart-selector",children:Object(L.jsx)("div",{className:"chart-selector-icon",children:a.icon})})}),_a=(t(218),function(){return Object(L.jsx)("div",{className:"chart-list",children:k.map((function(a,e){return Object(L.jsx)(xa,{name:a.name,index:e,icon:Object(L.jsx)(V,{name:a.icon})},e)}))})}),fa=function(){var a=Object(n.useState)(!1);return Object(o.a)(a,1)[0]?Object(L.jsx)("div",{children:"Loading"}):Object(L.jsxs)("div",{className:"fr",children:[Object(L.jsx)(_a,{}),Object(L.jsx)(pa,{})]})};d.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(R,{children:Object(L.jsx)(fa,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)})),s()},92:function(a,e,t){},93:function(a,e,t){},94:function(a,e,t){},96:function(a,e,t){},97:function(a,e,t){},98:function(a,e,t){}},[[219,1,2]]]);
//# sourceMappingURL=main.516bba86.chunk.js.map