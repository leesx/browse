webpackJsonp([1],{0:function(e,t){},ANBw:function(e,t,i){e.exports=i.p+"static/img/normal.58a6d9f.png"},Dg48:function(e,t){},KgK4:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("KgK4");var n=i("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},o,!1,function(e){i("YWvu")},null,null).exports,s=i("/ocq"),r=i("mvHQ"),l=i.n(r),c=i("ANBw"),d=i.n(c),u=i("QU5o"),p=i.n(u),m={name:"Dialog",props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.visible}},methods:{modelSend:function(){this.$emit("confirm")},boardcast:function(){this.$emit("boardcast")}},watch:{visible:function(e){this.dialogVisible=e},dialogVisible:function(e){e!==this.visible&&this.$emit("update:visible",e)}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible,expression:"dialogVisible"}],staticClass:"model"},[e._t("default"),e._v(" "),i("div",{staticClass:"foot"},[i("input",{attrs:{type:"button",value:"send"},on:{click:e.modelSend}}),e._v(" "),i("input",{attrs:{type:"button",value:"boardcast"},on:{click:e.boardcast}}),e._v(" "),i("input",{attrs:{type:"button",value:"cancel"},on:{click:function(t){e.dialogVisible=!1}}})])],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible,expression:"dialogVisible"}],staticClass:"mask"})])},staticRenderFns:[]};var v=i("VU/8")(m,h,!1,function(e){i("PFCH")},null,null).exports,f={name:"Confirm",props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.visible}},watch:{visible:function(e){this.dialogVisible=e},dialogVisible:function(e){e!==this.visible&&this.$emit("update:visible",e)}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible,expression:"dialogVisible"}],staticClass:"model"},[e._t("default"),e._v(" "),i("div",{staticClass:"foot"},[i("input",{attrs:{type:"button",value:"ok"},on:{click:function(t){e.dialogVisible=!1}}})])],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogVisible,expression:"dialogVisible"}],staticClass:"mask"})])},staticRenderFns:[]};var g=i("VU/8")(f,b,!1,function(e){i("Dg48")},null,null).exports,w=i("DmT9"),y=i.n(w)()(location.host),_={components:{Dialog:v,Confirm:g},data:function(){return{id:(new Date).getTime(),files:[],dir:"",inputDir:"",tipText:"",hitText:"",modelInput:"",broadcastInput:"",sIP:"",imgSrc:{folder:p.a,file:d.a},pathEditable:!1,modelVisible:!1,confirmVisible:!1,hitVisible:!1,tipVisible:!1}},methods:{initSocket:function(){var e=this;y.on("connect",function(){console.log("conneted socket")}),y.on("disconnect",function(){console.log("disconneted socket")}),y.on("message res",function(t){e.hitVisible=!0,e.hitText=t}),y.on("broadcast res",function(t){t.id!==e.id&&(e.broadcastInput=t.text,e.confirmVisible=!0)})},uploadFile:function(e){var t=this;this.showTip("上传中...");var i=e.target.files;if(0!==i.length){var n=this.dir;if(i){for(var o in i)if(parseInt(o,10)>=0){var a=new FormData;a.append("file",i[o]),a.append("dir",n);var s=fetch("/uploadFile",{method:"POST",credentials:"include",body:a}).then(function(e){return e.json()}).then(function(i){"s_ok"===i.code?(console.log("succ"),t.refresh()):i.summary&&-4058===i.summary.errno?alert("文件名名称不支持！"):i.summary&&i.summary.errno?alert("err: "+i.summary.errno):alert("err"),t.hideTip(),e.target.value=""});console.log(s)}}else{var r=document.getElementById("form1"),l=document.getElementById("iframe");l||(l=document.createElement("iframe")),r.action="/uploadFile",r.target="iframe",l.name="iframe",l.src="",l.style.display="none",l.onload=function(){var e=l.contentWindow.document.body.innerText;e&&("s_ok"===(e=JSON.parse(e)).code?(console.log("succ"),t.hideTip()):alert("failed!-2"))},document.getElementById("options").appendChild(l),r.submit()}}},onTextareaKeydown:function(){this.hitVisible=!1},enterFolder:function(e){var t=this.findParentUntil(e.target,"td");if(!t)return!1;var i=t.getElementsByTagName("span")[0].innerText,n=this.dir;this.getFolder(n,i)},orderBy:function(e){var t=this.dir;this.getFolder(t,"",e)},toggleAll:function(){var e=0;this.files.forEach(function(t){t.check&&e++}),e>0?this.files.map(function(e){e.check=!1}):this.files.map(function(e){e.check=!0})},forwardFolder:function(){var e=this.$data.dir;this.getFolder(e,"..")},sendMessage:function(){y.emit("message",this.modelInput)},boardcastMessage:function(){y.emit("broadcast",{id:this.id,text:this.modelInput})},getFolder:function(e,t,i){var n=this;fetch("/loadFile",{method:"POST",credentials:"include",headers:new Headers({"Content-Type":"application/json"}),body:l()({dir:e,folderName:t,order:i})}).then(function(e){return e.json()}).then(function(e){if("s_ok"!==e.code)return alert(e.summary.code),!1;n.dir=e.path,n.inputDir=n.dir,n.sIP=e.sysInfo.ipv4[0],n.files=[],e.var.map(function(e){e.check=!1,n.files.push(e)})})},existFile:function(e,t){fetch("/existFile",{method:"POST",credentials:"include",headers:new Headers({"Content-Type":"application/json"}),body:l()({filePath:e})}).then(function(e){return e.json()}).then(function(e){"s_ok"===e.code?t&&t(e.res):alert(e.summary.code)})},changeDir:function(){var e=this;this.pathEditable=!0,setTimeout(function(){e.$refs.pathInput.focus()},0)},cancelPathInput:function(){this.pathEditable=!1,this.inputDir=this.dir},confirmDir:function(){var e=this;this.existFile(this.inputDir,function(t){t?(e.pathEditable=!1,e.getFolder(e.inputDir,"")):alert("wrong filePath")})},download:function(){var e=this,t=[];if(this.files.forEach(function(e,i){e.check&&t.push({name:e.name,type:e.type})}),!t.length)return!1;var i=this.dir;fetch("/download",{method:"POST",credentials:"include",headers:new Headers({"Content-Type":"application/json"}),body:l()({dir:i,fileArray:t})}).then(function(e){return e.json()}).then(function(t){"s_ok"===t.code?e.downloadByIframe(t.url):alert(t.summary)})},upload:function(){this.$refs.fileInput.click()},pushText:function(){this.modelVisible=!0},refresh:function(){var e=this.dir;this.getFolder(e,"")},findParentUntil:function(e,t){if(!e||!e.nodeType)return!1;t=t.toLowerCase();for(var i=e;;){if("#document"===i.nodeName.toLowerCase())return!1;if((i=i.parentNode).nodeName.toLowerCase()===t)break}return i},downloadByIframe:function(e){var t=document.getElementById("myIframe");t?t.src=e:((t=document.createElement("iframe")).style.display="none",t.src=e,t.id="myIframe",document.body.appendChild(t))},showTip:function(e,t){var i=this;this.tipText=e,this.tipVisible=!0,t&&setTimeout(function(){i.hideTip()},t)},hideTip:function(){this.tipVisible=!1}},mounted:function(){this.getFolder(),this.initSocket()}},k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticStyle:{"border-bottom":"1px solid black","margin-bottom":"5px","padding-bottom":"5px"},attrs:{id:"options"}},[i("input",{attrs:{type:"button",value:"forward"},on:{click:e.forwardFolder}}),e._v(" "),i("input",{attrs:{type:"button",value:"download"},on:{click:e.download}}),e._v(" "),i("input",{attrs:{type:"button",value:"upload"},on:{click:e.upload}}),e._v(" "),i("input",{attrs:{type:"button",value:"pushText"},on:{click:e.pushText}}),e._v(" "),i("form",{staticStyle:{display:"none"},attrs:{target:"iframe",action:"/uploadFile",method:"post",id:"form1",enctype:"multipart/form-data"}},[i("input",{ref:"fileInput",attrs:{name:"file",type:"file",multiple:"true"},on:{change:e.uploadFile}}),e._v(" "),i("input",{attrs:{name:"dir",type:"text"},domProps:{value:e.dir}})]),e._v(" "),i("span",[e._v("serviceIP: "+e._s(e.sIP)+";currentPath:\n        "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.pathEditable,expression:"!pathEditable"}],on:{click:e.changeDir}},[e._v(e._s(e.dir))]),e._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:e.pathEditable,expression:"pathEditable"},{name:"model",rawName:"v-model",value:e.inputDir,expression:"inputDir"}],ref:"pathInput",staticStyle:{width:"400px"},domProps:{value:e.inputDir},on:{input:function(t){t.target.composing||(e.inputDir=t.target.value)}}}),e._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:e.pathEditable,expression:"pathEditable"}],attrs:{type:"button",value:"confirm"},on:{click:e.confirmDir}}),e._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:e.pathEditable,expression:"pathEditable"}],attrs:{type:"button",value:"cancel"},on:{click:e.cancelPathInput}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.tipVisible,expression:"tipVisible"}],staticClass:"tips"},[e._v(e._s(e.tipText))])])]),e._v(" "),i("div",{attrs:{id:"data"}},[i("table",{staticStyle:{width:"100%"}},[i("thead",[i("tr",[i("td",{staticStyle:{width:"40px"}},[i("input",{attrs:{type:"button",value:"[x]"},on:{click:function(t){e.toggleAll()}}})]),e._v(" "),i("td",{on:{click:function(t){e.orderBy("name")}}},[e._v("Name")]),e._v(" "),i("td",{on:{click:function(t){e.orderBy("size")}}},[e._v("Size")]),e._v(" "),i("td",{on:{click:function(t){e.orderBy("birthtime")}}},[e._v("CreateTime")]),e._v(" "),i("td",{on:{click:function(t){e.orderBy("ctime")}}},[e._v("ModifyTime")])])]),e._v(" "),i("tbody",{attrs:{path:e.dir}},e._l(e.files,function(t,n){return i("tr",{key:n,attrs:{index:n}},[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"file.check"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.check)?e._i(t.check,null)>-1:t.check},on:{change:function(i){var n=t.check,o=i.target,a=!!o.checked;if(Array.isArray(n)){var s=e._i(n,null);o.checked?s<0&&e.$set(t,"check",n.concat([null])):s>-1&&e.$set(t,"check",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(t,"check",a)}}})]),e._v(" "),i("td",{on:{click:e.enterFolder}},[t.isDirectory?i("a",{attrs:{href:"javascript:void(0)"}},[i("img",{staticClass:"folder",attrs:{src:e.imgSrc.folder,width:"16",height:"16"}})]):e._e(),e._v(" "),t.isFile?i("img",{attrs:{src:e.imgSrc.normal,width:"16",height:"16"}}):e._e(),e._v(" "),i("a",{class:{folder:t.isDirectory,file:t.isFile},attrs:{href:"javascript:void(0)"}},[i("span",[e._v(e._s(t.name))])])]),e._v(" "),i("td",[e._v(e._s(t.size))]),e._v(" "),i("td",[e._v(e._s(t.birthtime))]),e._v(" "),i("td",[e._v(e._s(t.mtime))])])}))])]),e._v(" "),i("Dialog",{attrs:{visible:e.modelVisible},on:{"update:visible":function(t){e.modelVisible=t},confirm:e.sendMessage,boardcast:e.boardcastMessage}},[i("span",{staticClass:"title"},[e._v("set content")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.modelInput,expression:"modelInput"}],attrs:{rows:"5",cols:"55"},domProps:{value:e.modelInput},on:{keydown:e.onTextareaKeydown,input:function(t){t.target.composing||(e.modelInput=t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.hitVisible,expression:"hitVisible"}],staticClass:"messageHit"},[e._v(e._s(e.hitText))])]),e._v(" "),i("Confirm",{attrs:{visible:e.confirmVisible},on:{"update:visible":function(t){e.confirmVisible=t}}},[i("span",{staticClass:"title"},[e._v("broadcast")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.broadcastInput,expression:"broadcastInput"}],attrs:{rows:"5",cols:"55",disabled:""},domProps:{value:e.broadcastInput},on:{input:function(t){t.target.composing||(e.broadcastInput=t.target.value)}}})])],1)},staticRenderFns:[]};var x=i("VU/8")(_,k,!1,function(e){i("QGvP")},null,null).exports,A=i("lbHh"),I=i.n(A),T={data:function(){return{visible:!1,inputValue:""}},methods:{hasPassword:function(){var e=this;fetch("/hasPassword",{method:"get",credentials:"include"}).then(function(e){return e.json()}).then(function(t){"s_ok"===t.code?t.res?e.visible=!0:e.gotoMainPage():alert("server err")})},login:function(){var e=this;I.a.set("p",this.inputValue),fetch("/login",{method:"post",credentials:"include"}).then(function(e){return e.json()}).then(function(t){"s_ok"===t.code?t.res?e.gotoMainPage():alert("password wrong"):alert("server err")})},gotoMainPage:function(){this.$router.push({path:"browse"})},confirm:function(){this.login()}},mounted:function(){this.hasPassword()}},N={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}]},[i("p",[e._v("press password")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticStyle:{width:"200px"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})]),e._v(" "),i("div",{staticStyle:{"margin-top":"10px"}},[i("input",{attrs:{type:"button",value:"confirm"},on:{click:e.confirm}})])])},staticRenderFns:[]};var V=i("VU/8")(T,N,!1,function(e){i("Zf2P")},null,null).exports;n.a.use(s.a);var M=new s.a({routes:[{path:"/",name:"index",component:V},{path:"/login",name:"login",component:V},{path:"/browse",name:"browse",component:x}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:M,components:{App:a},template:"<App/>"})},PFCH:function(e,t){},QGvP:function(e,t){},QU5o:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMTk3NTM5MEEzNzMxMUUzQjc4MkNFN0M0QTc1MTBCQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMTk3NTM5MUEzNzMxMUUzQjc4MkNFN0M0QTc1MTBCQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMxOTc1MzhFQTM3MzExRTNCNzgyQ0U3QzRBNzUxMEJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMxOTc1MzhGQTM3MzExRTNCNzgyQ0U3QzRBNzUxMEJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZPrANwAAAO9JREFUeNpifLmeYUABEwPD8HIADxBXAPFdIP6PBz8DYk+QBhYqWh4FxH1cIiLinEKCDMxsbDgV/vz8WfLjw0dzgUwpFqhLQBxJSmznEOBn4BQSYmDl4iKolp2Xl4GNl0fy1+cvniAHzOWXl5MECdITgBwLdMBckAMkPz99xvDxzx/6Jj4WcOxLgsh/vErOTOwC8nR1wM8PDxk+3tr5D5QL6G45OB1A7GQaduXAqANGHTDqgFEHjDpg1AGjDhh1wNB0wPOfHx7R3WKonS8YgZ1TL2jHRILObngKxGmgZvk2SntFlADG////D2gaAAgwAFOjOlGA3XBHAAAAAElFTkSuQmCC"},YWvu:function(e,t){},Zf2P:function(e,t){}},["NHnr"]);