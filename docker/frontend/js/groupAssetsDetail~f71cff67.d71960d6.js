(window.webpackJsonp=window.webpackJsonp||[]).push([["groupAssetsDetail~f71cff67"],{"0a069":function(t,e,a){"use strict";var n=a("6489");a.n(n).a},"0e9d":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("c975"),a("a15b"),a("d81d"),a("fb6a"),a("b0c0"),a("cca6"),a("b64b"),a("d3b7"),a("a79d"),a("ac1f"),a("1276"),a("159b");var n=a("5530"),r=a("90d8");e.a={data:function(){return{tableConfig:[],currentIndex:0,currentKey:+new Date,targetName:"",currentComponent:{columns:[],total:0,dataList:[],searchGroup:[],params:{page:1,size:10}},downloadMethod:{site:r.y,domain:r.t,url:r.z,ip:r.x,asset_domain:r.u,asset_ip:r.v,asset_site:r.w,c:r.s,asset_ip_domain:r.n,asset_ip_ip:r.o},isLoading:!1,imgVisible:!1,imgSrc:"",originalQuery:{}}},watch:{$route:function(t,e){this.checkParams()}},computed:{page_num:function(){return this.currentComponent.total%this.currentComponent.params.size>0?parseInt(this.currentComponent.total/this.currentComponent.params.size)+1:this.currentComponent.total/this.currentComponent.params.size}},mounted:function(){if(this.$route.query.targetName){var t=this.$route.query.targetName;this.targetName=(t.length>30?this.$route.query.targetName.slice(0,30)+"...":this.$route.query.targetName)+"相关资产"}},methods:{initTabs:function(t){this.currentKey=(new Date).getTime(),this.currentIndex=t,this.resetParams(t),this.initData(t),this.originalQuery=Object(n.a)({},this.$route.query)},operateCallback:function(t){"reset"===t&&this.initData(this.currentIndex)},changeTabs:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.currentIndex=t,this.currentKey=(new Date).getTime(),!e)return this.$route.query.page=1,this.$route.query.size=10,void this.$router.push({query:Object(n.a)(Object(n.a)({},this.$route.query),{},{tabIndex:this.currentIndex,ts:(new Date).getTime()})});this.initParams(t),this.initData(t)},resetParams:function(t){this.currentComponent={columns:this.tableConfig[t].columns,total:this.tableConfig[t].total,tableList:this.tableConfig[t].tableList,searchGroup:this.tableConfig[t].searchGroup,params:{page:1,size:10}},this.tableConfig[t].params={page:1,size:10}},clearFilter:function(){this.currentComponent.params={page:1,size:10},this.tableConfig[this.currentIndex].params={page:1,size:10},this.initData(this.currentIndex)},exportData:function(t){var e=Object(n.a)({},this.currentComponent.params);e.size=1e4,["site","domain","ip"].includes(t)&&(e.size=1e5),this.$route.query.task_id&&(e.task_id=this.$route.query.task_id),this.$route.query.scope_id&&(e.scope_id=this.$route.query.scope_id),["site","domain","url","ip","asset_site","asset_domain","asset_ip","","c","asset_ip_domain","asset_ip_ip"].includes(t)&&this.downloadMethod[t](Object(n.a)({},e)).then((function(t){var e=t.headers["content-disposition"].split("filename=")[1];if("download"in document.createElement("a")){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t.data)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}else navigator.msSaveBlob(t,e)}))},initParams:function(t){this.currentComponent={columns:this.tableConfig[t].columns,total:this.tableConfig[t].total,tableList:this.tableConfig[t].tableList,searchGroup:this.tableConfig[t].searchGroup,params:Object(n.a)({},Object.assign(this.tableConfig[t].params,this.currentComponent.params))}},changeContent:function(t,e){this.tableConfig[this.currentIndex].params[t]=e+"",this.currentComponent.params[t]=e,this.$route.query[t]=e},searchContent:function(t,e){for(var a in this.tableConfig[this.currentIndex].params.page=1,this.currentComponent.params.page=1,this.tableConfig[this.currentIndex].params.size=10,this.currentComponent.params.size=10,this.tableConfig[this.currentIndex].params[t]=e+"",this.$route.query[t]=e,this.$route.query)this.$route.query[a]||delete this.$route.query[a];this.$route.query.page=1,this.$route.query.size=10,this.$router.push({query:Object(n.a)(Object(n.a)({},this.$route.query),{},{ts:(new Date).getTime()})})},checkParams:function(){for(var t in this.currentComponent.params={page:1,size:10},9===this.currentIndex&&(this.currentComponent.params.order=""),this.tableConfig[this.currentIndex].params={page:1,size:10},this.$route.query)["page","size"].includes(t)&&(this.$route.query[t]=parseInt(this.$route.query[t])),this.currentComponent.params[t]=this.$route.query[t],Object.assign(this.tableConfig[this.currentIndex].params,this.currentComponent.params);this.changeTabs(parseInt(this.$route.query.tabIndex)||0,!0)},initData:function(t){var e=this,a={};Object.keys(this.tableConfig[t].params).forEach((function(n){void 0!==e.tableConfig[t].params[n]&&e.tableConfig[t].params[n]&&(a[n]=e.tableConfig[t].params[n])})),a.update_date&&delete a.update_date,this.$route.query.task_id&&(a.task_id=this.$route.query.task_id),this.$route.query.scope_id&&(a.scope_id=this.$route.query.scope_id),-1!=this.tabList[this.currentIndex].indexOf("WIH")&&(a.select_type||a.record_value?a.record_value&&!a.select_type?(a.record_type=a.record_value,delete a.record_type__neq,delete a.record_type__not):a.record_value&&a.select_type?"record_type"==a.select_type?(a.record_type=a.record_value?a.record_value:"",delete a.record_type__neq,delete a.record_type__not):"record_type__neq"==a.select_type?(a.record_type__neq=a.record_value?a.record_value:"",delete a.record_type,delete a.record_type__not):"record_type__not"==a.select_type&&(a.record_type__not=a.record_value?a.record_value:"",delete a.record_type,delete a.record_type__neq):!a.record_value&&a.select_type&&(delete a.record_type,delete a.record_type__neq,delete a.record_type__not):(delete a.record_type,delete a.record_type__neq,delete a.record_type__not)),this.isLoading=!0,this.tableConfig[t].api(Object(n.a)({},a)).then((function(t){t.items.forEach((function(t,a){t.key=t._id,t.index=(e.currentComponent.params.page-1)*e.currentComponent.params.size+a+1,t.currentTab=e.tabList[e.currentIndex],e.transformItem(t),Object.keys(t).forEach((function(e){t[e]||(t[e]="-")}))})),e.currentComponent.tableList=t.items,e.currentComponent.total=t.total,document.querySelector("#contentWrap").scrollTop=0})).finally((function(){setTimeout((function(){e.isLoading=!1}),200)}))},transformItem:function(t){switch(this.currentIndex){case 0:this.transformSite(t);break;case 2:this.transformIp(t);break;case 3:this.transformSSL(t);break;case 4:this.transformServe(t);break;case 5:this.transformFile(t)}},transformIp:function(t){t.os_name=void 0===t.os_info||"{}"===JSON.stringify(t.os_info)?"-":t.os_info.name,t.port=t.port_info&&t.port_info.length?t.port_info.map((function(t){return t.port_id})).join(", "):"-",t.geo_asn=void 0===t.geo_asn||"{}"===JSON.stringify(t.geo_asn)?"-":t.geo_asn.organization,t.geo_city="{}"===(void 0===t.geo_city&&JSON.stringify(t.geo_city))?"-":!(void 0===t.geo_city||void 0===t.geo_city.city)&&t.geo_city.country_name+" / "+t.geo_city.region_name},transformSSL:function(t){t.ipInfo="".concat(t.ip,":").concat(t.port),t.detailInfo={subjectName:t.cert&&t.cert.subject_dn?t.cert.subject_dn:"-",serialName:t.cert&&t.cert.serial_number?t.cert.serial_number:"-",issuerName:t.cert&&t.cert.issuer&&t.cert.issuer.common_name?t.cert.issuer.common_name:"-",rangeTime:t.cert&&t.cert.validity?"".concat(t.cert.validity.start," 至 ").concat(t.cert.validity.end):"-",useName:t.cert&&t.cert.extensions&&t.cert.extensions.subjectAltName?t.cert.extensions.subjectAltName:"-",endTime:t.cert&&t.cert.validity&&t.cert.validity.end?t.cert.validity.end:"-",sha256:t.cert&&t.cert.fingerprint&&t.cert.fingerprint.sha256?t.cert.fingerprint.sha256:"-",sha1:t.cert&&t.cert.fingerprint&&t.cert.fingerprint.sha1?t.cert.fingerprint.sha1:"-",md5:t.cert&&t.cert.fingerprint&&t.cert.fingerprint.md5?t.cert.fingerprint.md5:"-"}},transformSite:function(t){t.hash=t.favicon&&t.favicon.hash},transformServe:function(t){t.protsArr=[],t.productArr=[],t.service_info&&t.service_info.length&&t.service_info.forEach((function(e){t.protsArr.push(e.ip+":"+e.port_id),t.productArr.push({name:e.product?e.product:"-",version:e.version})}))},transformFile:function(t){t.content_length=t.content_length?t.content_length:"0"},checkProductRepeat:function(t,e,a){if(!t)return!0;var n=!1;return a.forEach((function(e){e.name===t&&(n=!0)})),n},turnPageCallback:function(t,e){this.tableConfig[this.currentIndex].params.page=this.tableConfig[this.currentIndex].params.size===e?t:1,this.tableConfig[this.currentIndex].params.size=e,this.currentComponent.params.page=this.tableConfig[this.currentIndex].params.size===e?t:1,this.currentComponent.params.size=e,this.$route.query.size&&this.$route.query.size!==e?this.$route.query.page=1:this.$route.query.page=this.currentComponent.params.page,this.$route.query.size=this.currentComponent.params.size,this.$router.push({query:Object(n.a)(Object(n.a)({},this.$route.query),{},{ts:(new Date).getTime()})})}}}},"0fd1":function(t,e,a){"use strict";a.r(e);var n={props:{text:{type:[Array,Object]},record:{type:Object}}},r=a("2877"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.text.length?a("div",t._l(t.text,(function(e,n){return a("p",{key:n},[t._v(" "+t._s(e.name))])})),0):a("div",[t._v("-")])])}),[],!1,null,"3cbdd361",null);e.default=i.exports},"1b26":function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"g",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"f",(function(){return l}));var n=a("e20a"),r=function(t){return n.a.get("/policy/",{params:t})},i=function(t){return n.a.post("/task/policy/",t)},s=function(t){return n.a.post("/policy/add/",t)},o=function(t){return n.a.post("/policy/edit/",t)},c=function(t){return n.a.post("/policy/delete/",t)},u=function(){return n.a.get("/poc/?plugin_type=poc&size=10000")},l=function(){return n.a.get("/poc/?plugin_type=brute&size=10000")}},"1b78":function(t,e,a){"use strict";a.r(e),a("a9e3");var n={props:{text:{type:Number},record:{type:Object}},methods:{watchTask:function(t){this.$router.push({name:"taskList",query:{searchId:t}})}}},r=a("2877"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticStyle:{color:"#00c5dc"},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.watchTask(t.record.task_id)}}},[t._v(t._s(t.text))])])}),[],!1,null,"317077e8",null);e.default=i.exports},"1bdf":function(t,e,a){"use strict";a.r(e);var n=a("2877"),r=Object(n.a)({},(function(t,e){return(0,e._c)("a",{staticClass:"ftColor",attrs:{href:"/groupAssetsManagement/groupAssetsDetail?scope_id="+e.props.record._id+"&targetName="+e.props.record.name,title:e.props.text}},[e._v(e._s(e.props.text.length>26?e.props.text.slice(0,26)+"...":e.props.text))])}),[],!0,null,null,null);e.default=r.exports},"209b":function(t,e,a){},2805:function(t,e,a){},"2e61":function(t,e,a){"use strict";a.r(e);var n=a("90d8"),r={props:{text:{type:String},record:{type:Object}},data:function(){return{tagContent:""}},methods:{addTagOption:function(){var t=this;Object(n.g)({_id:this.record._id,tag:this.tagContent}).then((function(e){200===e.code&&(t.$message.success("添加成功"),t.tagContent="",t.resetTable())}))},deleteItem:function(t){var e=this;Object(n.m)({_id:this.record._id,tag:t}).then((function(t){200===t.code&&(e.tagContent="",e.$message.success("删除成功"),e.resetTable())}))},resetTable:function(){this.$emit("operateCallback","reset")}}},i=(a("6006"),a("2877")),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-header"},[a("a",{staticStyle:{color:"#00c5dc"},attrs:{href:t.text,target:"_blank"}},[t.record.favicon&&t.record.favicon.data&&t.record.favicon.url.includes("svg")?a("img",{staticClass:"site-img",attrs:{src:"data:image/svg+xml;base64,"+t.record.favicon.data,alt:""}}):t.record.favicon&&t.record.favicon.data?a("img",{staticClass:"site-img",attrs:{src:"data:image/png;base64,"+t.record.favicon.data,alt:""}}):t._e(),t._v(" "+t._s(t.text))]),t.record.favicon&&t.record.favicon.hash?a("p",{staticClass:"site-word"},[t._v(" Favicon Hash: "+t._s(t.record.favicon.hash)+" ")]):t._e(),a("div",{staticClass:"mt5"},[t._l(t.record.tag,(function(e,n){return a("a-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.deleteItem(e)}}},[t._v(t._s(e))])})),a("a-popconfirm",{attrs:{placement:"top"},on:{confirm:t.addTagOption}},[a("template",{staticClass:"no-padding",slot:"title"},[a("a-input",{attrs:{placeholder:"请输入标签名称"},model:{value:t.tagContent,callback:function(e){t.tagContent=e},expression:"tagContent"}})],1),a("i",{attrs:{slot:"icon"},slot:"icon"}),a("span",{staticClass:"add-tag"},[t._v("添加标签")])],2)],2)])}),[],!1,null,null,null);e.default=s.exports},"306b":function(t,e,a){"use strict";var n=a("209b");a.n(n).a},"3d18":function(t,e,a){},"4a84":function(t,e,a){},"4ec0":function(t,e,a){"use strict";a.r(e);var n={props:{text:{type:String},record:{type:Object}},methods:{deleteTaskOption:function(t){this.$emit("operateCallback","deleteAssetsGourp",t)},addMonitorTask:function(t){this.$emit("operateCallback","addMonitor",t)},addScopeAssets:function(t){this.$emit("operateCallback","addScopeAssets",t)},addMonitorTaskSite:function(t){this.$emit("operateCallback","addMonitorTaskSite",t)},addMonitorTaskWih:function(t){this.$emit("operateCallback","addMonitorTaskWih",t)}}},r=(a("306b"),a("2877")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{},[a("a-button",{staticClass:"operate-link",on:{click:function(e){return t.addScopeAssets(t.record)}}},[t._v("添加资产分组范围")]),a("a-button",{staticClass:"operate-link",on:{click:function(e){return t.addMonitorTask(t.record)}}},[t._v("添加监控任务")]),a("p"),a("a-button",{staticClass:"operate-link",on:{click:function(e){return t.addMonitorTaskSite(t.record)}}},[t._v("添加站点监控任务")]),a("a-button",{staticClass:"operate-link",on:{click:function(e){return t.addMonitorTaskWih(t.record)}}},[t._v("添加WIH监控任务")])],1)}),[],!1,null,"4e82ee1d",null);e.default=i.exports},"56d4":function(t,e,a){"use strict";a.r(e),a("a15b"),a("d81d"),a("b0c0"),a("d3b7"),a("a79d");var n=a("5530"),r=a("bc6a"),i=a("0e9d"),s=a("1b26"),o={props:["type"],data:function(){return{form:this.$form.createForm(this),submitFLag:!1,policyList:[]}},methods:{subForm:function(){var t=this;this.form.validateFields((function(e,a){e||t.$emit("addAssetsSubmit",a)}))},handleCancel:function(){this.$emit("closeModal")}},mounted:function(){var t=this;Object(s.e)({size:1e3}).then((function(e){t.policyList=e.items.map((function(t){return{id:t._id,name:t.name}}))}))}},c=(a("74fa"),a("2877")),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.type?"添加子域名":"添加站点",visible:!0},on:{ok:t.subForm,cancel:t.handleCancel}},[a("a-form",{attrs:{form:t.form,"label-col":{span:5},"wrapper-col":{span:18}}},[a("a-form-item",{attrs:{label:t.type?"子域名":"站点"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["value",{rules:[{required:!0,message:"请输入域名!"}]}],expression:"[\n          'value',\n          {\n            rules: [{ required: true, message:'请输入域名!' }]\n          },\n        ]"}],staticStyle:{height:"100px"},attrs:{placeholder:t.type?"请输入域名，多个域名请用空格或者换行隔开。":"请输入站点!"}}),t.type?a("div",{staticClass:"tip"},[t._v("会对子域名自动下发侦察任务, 获取子域名关联的ip、站点等信息。示例: live.freebuf.com")]):a("div",{staticClass:"tip"},[t._v("会对站点进行探测, 获取标题、headers, finger等信息。示例: https://www.freebuf.com/")])],1),a("a-form-item",{attrs:{label:"策略"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["policy_id"],expression:"['policy_id']"}],attrs:{allowClear:"","aria-label":"policy_id",placeholder:"请选择策略"}},t._l(t.policyList,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1)],1)}),[],!1,null,"7bd06630",null).exports,l=a("90d8"),d=a("d550"),p=a("8b4c"),f={mixins:[i.a],components:{addAssets:u,policyTask:p.a,batchDelete:d.a},data:function(){return{tabList:["站点","域名","IP","WIH"],exportKeysArr:["asset_site","asset_domain","asset_ip","asset_whi"],selectedRowKeys:[],isAddAssets:!1,policyTaskModal:!1,resultId:"",resultTotal:0,isSaveResult:!1}},mounted:function(){this.tableConfig=r.b,this.initTabs(0),this.initParams(0)},methods:{transformItem:function(t){switch(this.currentIndex){case 0:this.transformSiteData(t);break;case 2:this.transformIpData(t)}},transformIpData:function(t){t.port=t.port_info&&t.port_info.length?t.port_info.map((function(t){return t.port_id})).join(", "):"",t._osName=t.os_info&&t.os_info.name?t.os_info.name:"",t.geo_asn=void 0===t.geo_asn||"{}"===JSON.stringify(t.geo_asn)?"-":t.geo_asn.organization,t.geo_city="{}"===(void 0===t.geo_city&&JSON.stringify(t.geo_city))?"-":!(void 0===t.geo_city||void 0===t.geo_city.city)&&t.geo_city.country_name+" / "+t.geo_city.region_name},transformSiteData:function(t){t._faviconHash=t.favicon&&t.favicon.hash?t.favicon.hash:"",t._fingerName=t.finger?t.finger:[]},selectRowCallback:function(t){this.selectedRowKeys=t},checkDate:function(t,e){e.length||(this.currentComponent.params.update_date__dlt="",this.currentComponent.params.update_date__dgt="",this.tableConfig[this.currentIndex].params.update_date__dlt="",this.tableConfig[this.currentIndex].params.update_date__dgt="",this.tableConfig[this.currentIndex].params.update_date=[],this.initData(this.currentIndex))},getFilterTime:function(t,e){this.currentComponent.params.update_date__dgt=e[0],this.currentComponent.params.update_date__dlt=e[1],this.tableConfig[this.currentIndex].params.update_date__dgt=e[0],this.tableConfig[this.currentIndex].params.update_date__dlt=e[1],this.tableConfig[this.currentIndex].params.update_date=e,this.initData(this.currentIndex)},initParams:function(t){this.currentComponent={columns:this.tableConfig[t].columns,total:this.tableConfig[t].total,tableList:this.tableConfig[t].tableList,searchGroup:this.tableConfig[t].searchGroup,params:Object(n.a)({},this.tableConfig[t].params),deleteAPI:this.tableConfig[t].deleteAPI,addAPI:this.tableConfig[t].addAPI}},deleteSelectData:function(){var t=this;this.currentComponent.deleteAPI({_id:this.selectedRowKeys}).then((function(e){200===e.code&&(t.$message.success("删除成功"),t.initData(t.currentIndex),t.selectedRowKeys=[])}))},addDetailAssets:function(t){var e=this,a={scope_id:this.$route.query.scope_id};0===this.currentIndex?(a.site=t.value,a.policy_id=t.policy_id):(a.domain=t.value,a.policy_id=t.policy_id),this.currentComponent.addAPI(Object(n.a)({},a)).then((function(t){200===t.code&&(e.isAddAssets=!1,e.$message.success("添加成功"),e.changeTabs(e.currentIndex))}))},saveResult:function(){var t=this,e=Object(n.a)({},this.currentComponent.params);e.scope_id=this.$route.query.scope_id,delete e.ts,delete e.size,delete e.page,delete e.update_date,delete e.update_date__dgt,delete e.update_date__dlt,this.isSaveResult=!0,Object(l.F)(Object(n.a)({},e)).then((function(e){200===e.code&&(t.policyTaskModal=!0,t.resultId=e.data.result_set_id,t.resultTotal=e.data.result_total)})).finally((function(){t.isSaveResult=!1}))}}},m=(a("9bae"),Object(c.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-wrap"},[t.targetName?a("div",{staticClass:"top-info"},[a("h2",[t._v(t._s(t.targetName))])]):t._e(),a("a-tabs",{attrs:{type:"card",tabBarGutter:8},on:{change:t.changeTabs},model:{value:t.currentIndex,callback:function(e){t.currentIndex=e},expression:"currentIndex"}},t._l(t.tabList,(function(t,e){return a("a-tab-pane",{key:e,attrs:{tab:t}})})),1),a("div",{staticClass:"search-wrap"},[2===t.currentIndex?a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[t._v("IP类别：")]),a("a-select",{staticStyle:{width:"260px"},attrs:{allowClear:"",placeholder:"请选择IP类型进行搜索"},on:{change:function(e){return t.searchContent("ip_type",t.currentComponent.params.ip_type)}},model:{value:t.currentComponent.params.ip_type,callback:function(e){t.$set(t.currentComponent.params,"ip_type",e)},expression:"currentComponent.params['ip_type']"}},[a("a-select-option",{attrs:{value:"PRIVATE"}},[t._v("内网")]),a("a-select-option",{attrs:{value:"PUBLIC"}},[t._v("公网")])],1)],1):t._e(),t._l(t.currentComponent.searchGroup,(function(e,n){return a("span",{key:n,staticClass:"item",class:[3==t.currentIndex?"active-item-box":""]},[a("span",{staticClass:"label"},[t._v(t._s(e.label+"："))]),"input"===e.filterType?a("a-input-search",{key:t.currentKey+n,staticStyle:{width:"260px"},attrs:{allowClear:"",placeholder:"请输入"+e.label+"进行搜索"},on:{change:function(a){return t.changeContent(e.value,t.currentComponent.params[e.value])},search:function(a){return t.searchContent(e.value,a)}},model:{value:t.currentComponent.params[e.value],callback:function(a){t.$set(t.currentComponent.params,e.value,a)},expression:"currentComponent.params[item.value]"}},[e.select_value?[a("a-select",{staticStyle:{width:"80px"},attrs:{slot:"addonAfter"},on:{change:function(a){return t.searchContent(e.select_value,a)}},slot:"addonAfter",model:{value:t.currentComponent.params[e.select_value],callback:function(a){t.$set(t.currentComponent.params,e.select_value,a)},expression:"currentComponent.params[item.select_value]"}},[a("a-select-option",{attrs:{value:"record_type"}},[t._v(" 包含 ")]),a("a-select-option",{attrs:{value:"record_type__not"}},[t._v(" 不包含 ")]),a("a-select-option",{attrs:{value:"record_type__neq"}},[t._v(" 不等于 ")])],1)]:t._e()],2):t._e(),"date"===e.filterType?a("a-range-picker",{staticStyle:{width:"400px"},attrs:{"show-time":"",valueFormat:"YYYY-MM-DD HH:mm:ss"},on:{change:function(e){return t.checkDate(n,e)},ok:function(e){return t.getFilterTime(n,e)}},model:{value:t.currentComponent.params[e.value],callback:function(a){t.$set(t.currentComponent.params,e.value,a)},expression:"currentComponent.params[item.value]"}}):t._e()],1)})),a("span",{staticClass:"item"},[a("a-button",{on:{click:t.clearFilter}},[t._v("清除")]),t.currentComponent.total&&t.exportKeysArr[t.currentIndex]&&"asset_whi"!=t.exportKeysArr[t.currentIndex]?a("a-button",{staticClass:"ml16",attrs:{type:"primary"},on:{click:function(e){return t.exportData(t.exportKeysArr[t.currentIndex])}}},[t._v("导出"+t._s("IP"===t.tabList[t.currentIndex]?" IP 端口":t.tabList[t.currentIndex]))]):t._e(),0===t.currentIndex?a("a-button",{staticClass:"ml16",attrs:{type:"primary",loading:t.isSaveResult},on:{click:function(e){return t.saveResult(t.exportKeysArr[t.currentIndex])}}},[t._v("风险任务下发")]):t._e(),"asset_ip"==t.exportKeysArr[t.currentIndex]?a("a-button",{staticClass:"ml16",attrs:{type:"primary"},on:{click:function(e){return t.exportData("asset_ip_domain")}}},[t._v("导出域名")]):t._e(),"asset_ip"==t.exportKeysArr[t.currentIndex]?a("a-button",{staticClass:"ml16",attrs:{type:"primary"},on:{click:function(e){return t.exportData("asset_ip_ip")}}},[t._v("导出IP")]):t._e()],1)],2),"asset_whi"!=t.exportKeysArr[t.currentIndex]?a("batch-delete",{attrs:{selectedRowKeys:t.selectedRowKeys},on:{deleteCallback:t.deleteSelectData}},[a("a-button",{directives:[{name:"show",rawName:"v-show",value:[0,1].includes(t.currentIndex),expression:"[0, 1].includes(currentIndex)"}],staticClass:"add-assets",attrs:{type:"primary"},on:{click:function(e){t.isAddAssets=!0}}},[t._v(" "+t._s(t.currentIndex?"添加子域名":"添加站点")+" ")])],1):t._e(),a("table-component",{attrs:{columns:t.currentComponent.columns,selectedRowKeys:t.selectedRowKeys,isLoading:t.isLoading,tableList:t.currentComponent.tableList,pagination:!1,isSelect:!0,scroll:{x:1500},total:t.currentComponent.total,params:t.currentComponent.params},on:{selectRowCallback:t.selectRowCallback,operateCallback:t.operateCallback,turnPageCallback:t.turnPageCallback}}),t.isAddAssets?a("add-assets",{attrs:{type:t.currentIndex},on:{addAssetsSubmit:t.addDetailAssets,closeModal:function(e){t.isAddAssets=!1}}}):t._e(),t.policyTaskModal?a("policy-task",{attrs:{resultId:t.resultId,resultTotal:t.resultTotal},on:{closeModal:function(e){t.policyTaskModal=!1}}}):t._e()],1)}),[],!1,null,"3a787afe",null));e.default=m.exports},6006:function(t,e,a){"use strict";var n=a("4a84");a.n(n).a},6489:function(t,e,a){},6609:function(t,e,a){"use strict";a.r(e);var n={props:{text:{type:String},record:{type:Object}}},r=a("2877"),i=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll-x"},[this.text?e("pre",[this._v(this._s(this.text))]):e("div",[this._v("-")])])}),[],!1,null,"2d7fad56",null);e.default=i.exports},"74fa":function(t,e,a){"use strict";var n=a("3d18");a.n(n).a},8631:function(t,e,a){"use strict";a("c975"),a("d3b7"),a("380f");var n=a("f64c"),r=a("bc3a"),i=a.n(r),s=a("a18c"),o=i.a.create({baseURL:"/api",timeout:12e3});o.interceptors.request.use((function(t){t.headers["Content-Type"]="application/json; charset=UTF-8";var e=localStorage.getItem("token");return e&&(t.headers.token=e),t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){var e=t;return void 0!==e.code&&200!==e.code?[401,403,404].indexOf(e.code)>-1?void s.a.push({name:"login"}):(n.a.error(e.message),Promise.reject(new Error(e.message||"Error"))):e}),(function(t){return n.a.error(t.message),Promise.reject(t)})),e.a=o},"8b4c":function(t,e,a){"use strict";a("4de4"),a("caad"),a("b0c0"),a("a9e3"),a("d3b7"),a("a79d"),a("ac1f"),a("2532"),a("1276");var n=a("5530"),r=a("1b26"),i={name:"policyTask",props:{resultId:{type:String,default:""},resultTotal:{type:Number,default:0}},data:function(){return{isLoading:!1,form:this.$form.createForm(this),policyData:[],nameString:void 0,isEmpty:!1}},mounted:function(){var t=this;Object(r.e)({size:1e3}).then((function(e){200===e.code&&(t.policyData=e.items.filter((function(t){return t.name+=" (PoC : ".concat(t.policy.poc_config.length,")"),t.policy.poc_config})))}))},methods:{handleSubmit:function(){var t=this;this.form.validateFields((function(e,a){if(t.nameString||(t.isEmpty=!0),!e){t.isLoading=!0;var i=a.policy_id.split(","),s={name:t.nameString,task_tag:"risk_cruising",target:"",policy_id:i[0],result_set_id:t.resultId};Object(r.g)(Object(n.a)({},s)).then((function(e){200===e.code&&(t.$message.success("下发成功"),t.closeModal())})).finally((function(){t.isLoading=!1}))}}))},changeTaskName:function(t){this.nameString&&!this.nameString.includes("风险巡航任务-")||(this.nameString="风险巡航任务-".concat(t.split(",")[1]))},closeModal:function(){this.$emit("closeModal")}}},s=(a("99aa"),a("2877")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{visible:!0,title:"添加风险巡航任务",confirmLoading:t.isLoading},on:{ok:t.handleSubmit,cancel:t.closeModal}},[a("a-form",{attrs:{form:t.form,"label-col":{span:5},"wrapper-col":{span:18}}},[a("a-form-item",{attrs:{label:"策略名称"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["policy_id",{rules:[{required:!0,message:"请选择策略名称!"}]}],expression:"[\n          'policy_id',\n          { rules: [{ required: true, message: '请选择策略名称!' }] },\n        ]"}],attrs:{"show-search":"",optionFilterProp:"label",allowClear:"",placeholder:"请选择策略名称"},on:{change:t.changeTaskName}},t._l(t.policyData,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e._id+","+e.name,label:e.name}},[t._v(t._s(e.name))])})),1)],1),a("a-form-item",{staticClass:"required",class:t.isEmpty?"has-error":"",attrs:{label:"任务名称"}},[a("a-input",{attrs:{allowClear:"",placeholder:"请输入任务名称"},on:{change:function(e){t.isEmpty=!1}},model:{value:t.nameString,callback:function(e){t.nameString=e},expression:"nameString"}}),t.isEmpty?a("span",{staticClass:"errorTip"},[t._v("请输入策略名称!")]):t._e()],1),a("a-form-item",{attrs:{label:"目标"}},[a("span",{staticClass:"total-num"},[t._v("选择目标数 "+t._s(t.resultTotal))])])],1)],1)}),[],!1,null,"634dce05",null);e.a=o.exports},"90d8":function(t,e,a){"use strict";a.d(e,"D",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"l",(function(){return c})),a.d(e,"k",(function(){return u})),a.d(e,"A",(function(){return l})),a.d(e,"B",(function(){return d})),a.d(e,"C",(function(){return p})),a.d(e,"j",(function(){return f})),a.d(e,"i",(function(){return m})),a.d(e,"h",(function(){return h})),a.d(e,"b",(function(){return _})),a.d(e,"a",(function(){return b})),a.d(e,"y",(function(){return v})),a.d(e,"s",(function(){return g})),a.d(e,"t",(function(){return y})),a.d(e,"z",(function(){return x})),a.d(e,"x",(function(){return C})),a.d(e,"w",(function(){return I})),a.d(e,"u",(function(){return k})),a.d(e,"n",(function(){return w})),a.d(e,"o",(function(){return T})),a.d(e,"v",(function(){return $})),a.d(e,"p",(function(){return S})),a.d(e,"q",(function(){return A})),a.d(e,"r",(function(){return j})),a.d(e,"F",(function(){return O})),a.d(e,"m",(function(){return q})),a.d(e,"g",(function(){return D})),a.d(e,"e",(function(){return P})),a.d(e,"f",(function(){return z})),a.d(e,"E",(function(){return N}));var n=a("e20a"),r=a("8631"),i=function(t){return n.a.get("/asset_scope/",{params:t})},s=function(t){return n.a.post("/asset_scope/",t)},o=function(t){return n.a.post("/asset_scope/add/",t)},c=function(t){return n.a.get("/asset_scope/delete/",{params:t})},u=function(t){return n.a.post("/asset_scope/delete/",t)},l=function(t){return n.a.get("/asset_domain/",{params:t})},d=function(t){return n.a.get("/asset_ip/",{params:t})},p=function(t){return n.a.get("/asset_site/",{params:t})},f=function(t){return n.a.post("/asset_site/delete/",t)},m=function(t){return n.a.post("/asset_ip/delete/",t)},h=function(t){return n.a.post("/asset_domain/delete/",t)},_=function(t){return n.a.post("/asset_site/",t)},b=function(t){return n.a.post("/asset_domain/",t)},v=function(t){return r.a.get("/site/export/",{params:t})},g=function(t){return r.a.get("/cip/export/",{params:t})},y=function(t){return r.a.get("/domain/export/",{params:t})},x=function(t){return r.a.get("/url/export/",{params:t})},C=function(t){return r.a.get("/ip/export/",{params:t})},I=function(t){return r.a.get("/asset_site/export/",{params:t})},k=function(t){return r.a.get("/asset_domain/export/",{params:t})},w=function(t){return r.a.get("/asset_ip/export_domain/",{params:t})},T=function(t){return r.a.get("/asset_ip/export_ip/",{params:t})},$=function(t){return r.a.get("/asset_ip/export/",{params:t})},S=function(t){return r.a.post("/batch_export/asset_domain/",t)},A=function(t){return r.a.post("/batch_export/asset_ip/",t)},j=function(t){return r.a.post("/batch_export/asset_site/",t)},O=function(t){return n.a.get("/asset_site/save_result_set/",{params:t})},q=function(t){return n.a.post("/asset_site/delete_tag/",t)},D=function(t){return n.a.post("/asset_site/add_tag/",t)},P=function(t){return n.a.post("/scheduler/add/site_monitor/",t)},z=function(t){return n.a.post("/scheduler/add/wih_monitor/",t)},N=function(t){return n.a.get("/asset_wih/",{params:t})}},9348:function(t,e,a){var n={"./arrTip.vue":"e286","./dataIndex.vue":"1b78","./finger.vue":"0fd1","./headers.vue":"6609","./name.vue":"1bdf","./operate.vue":"4ec0","./site.vue":"2e61","./tag.vue":"c09b"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="9348"},"99aa":function(t,e,a){"use strict";var n=a("cd99");a.n(n).a},"9bae":function(t,e,a){"use strict";var n=a("ea0c");a.n(n).a},bc6a:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return u})),a("b0c0");var n=a("90d8"),r=(a("4160"),a("e260"),a("d3b7"),a("ac1f"),a("466d"),a("159b"),a("ddb0"),a("9348")),i={};r.keys().forEach((function(t){i[t.match(/(\.\/)(\w*)/)[2]]=r(t).default}));var s=i,o=[{name:"资产组名称",key:"name"},{name:"资产范围",key:"scope"},{name:"资产范围ID",key:"_id"}],c=[{title:"资产组名称",dataIndex:"title",fixed:"left",sorter:!0,scopedSlots:{customRender:"name",component:s.name}},{title:"资产范围",dataIndex:"scope_array",scopedSlots:{customRender:"scope_array",component:s.tag}},{title:"资产范围ID",dataIndex:"_id",scopedSlots:{customRender:"_id",component:s.name}},{width:400,title:"操作",dataIndex:"operate",scopedSlots:{customRender:"operate",component:s.operate}}],u=[{columns:[{width:80,title:"序号",dataIndex:"index",scopedSlots:{customRender:"dataIndex",component:s.dataIndex}},{width:300,title:"站点",dataIndex:"site",scopedSlots:{customRender:"site",component:s.site}},{width:300,title:"标题",dataIndex:"title"},{width:400,title:"headers",dataIndex:"headers",scopedSlots:{customRender:"headers",component:s.headers}},{width:200,title:"finger",dataIndex:"_fingerName",scopedSlots:{customRender:"finger",component:s.finger}},{width:300,title:"更新时间",dataIndex:"update_date"}],api:n.C,addAPI:n.b,deleteAPI:n.j,searchGroup:[{label:"站点",value:"site",filterType:"input"},{label:"主机名",value:"hostname",filterType:"input"},{label:"标题",value:"title",filterType:"input"},{label:"Web Server",value:"http_server",filterType:"input"},{label:"状态码",value:"status",filterType:"input"},{label:"标头",value:"headers",filterType:"input"},{label:"指 纹",value:"finger.name",filterType:"input"},{label:"favicon hash",value:"favicon.hash",filterType:"input"},{label:"标签",value:"tag",filterType:"input"},{label:"更新时间",value:"update_date",filterType:"date"}],total:0,params:{page:1,size:10}},{columns:[{width:100,title:"序号",dataIndex:"index",scopedSlots:{customRender:"dataIndex",component:s.dataIndex}},{width:300,title:"域名",dataIndex:"domain"},{width:100,title:"解析类型",dataIndex:"type"},{width:150,title:"记录值",dataIndex:"record",scopedSlots:{customRender:"record",component:s.arrTip}},{width:120,title:"关联IP",dataIndex:"ips",scopedSlots:{customRender:"ips",component:s.arrTip}},{width:100,title:"来源",dataIndex:"source"},{width:300,title:"更新时间",dataIndex:"update_date"}],total:0,api:n.A,addAPI:n.a,deleteAPI:n.h,searchGroup:[{label:"域名",value:"domain",filterType:"input"},{label:"记录值",value:"record",filterType:"input"},{label:"类型",value:"type",filterType:"input"},{type:"number",label:"IP",value:"ips",filterType:"input"},{label:"来源",value:"source",filterType:"input"},{label:"更新时间",value:"update_date",filterType:"date"}],params:{page:1,size:10}},{columns:[{width:100,title:"序号",dataIndex:"index",scopedSlots:{customRender:"dataIndex",component:s.dataIndex}},{width:200,title:"IP",dataIndex:"ip"},{width:250,title:"操作系统",dataIndex:"_osName"},{width:320,title:"开放端口",dataIndex:"port"},{width:300,title:"关联域名",dataIndex:"domain",scopedSlots:{customRender:"domain",component:s.arrTip}},{width:200,title:"Geo",dataIndex:"geo_city"},{width:300,title:"AS",dataIndex:"geo_asn"},{width:300,title:"更新时间",dataIndex:"update_date"}],total:0,api:n.B,addAPI:"",deleteAPI:n.i,searchGroup:[{type:"number",label:"IP",value:"ip",filterType:"input"},{type:"number",label:"端口",value:"port_info.port_id",filterType:"input"},{label:"操作系统",value:"os_info.name",filterType:"input"},{label:"域名",value:"domain",filterType:"input"},{label:"CDN",value:"cdn_name",filterType:"input"},{label:"更新时间",value:"update_date",filterType:"date"}],params:{page:1,size:10}},{columns:[{width:200,title:"记录类型",dataIndex:"record_type"},{width:250,title:"内容",dataIndex:"content"},{width:320,title:"来源 JS",dataIndex:"source"},{width:300,title:"来源站点",dataIndex:"site"},{width:200,title:"更新时间",dataIndex:"update_date"}],total:0,api:n.E,searchGroup:[{label:"记录类型",value:"record_value",filterType:"input",select_value:"select_type"},{label:"内容",value:"content",filterType:"input"},{label:"来源 JS",value:"source",filterType:"input"},{label:"来源站点",value:"site",filterType:"input"}],params:{page:1,size:10}}]},c09b:function(t,e,a){"use strict";a.r(e);var n={props:{text:{type:Array||String,default:function(){return[]}},record:{type:Object}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open;try{var t=document.createEvent("Event");t.initEvent("resize",!0,!0),window.dispatchEvent(t)}catch(t){}},deleteAssets:function(t,e){this.$emit("operateCallback","deleteTag",t,e)},onCopy:function(t){this.$message.success("内容已复制到剪切板！")},onError:function(t){this.$message.error("抱歉，复制失败！")}}},r=(a("0a069"),a("2877")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{close:!t.open&&t.text.length>4}},[t.text.length?a("div",{staticClass:"taglist"},[t._l(t.text,(function(e,n){return a("div",{key:n,staticClass:"tag-wrap"},[a("a-tag",{attrs:{visible:!0,closable:""},on:{close:function(a){return t.deleteAssets(t.record._id,e)}}},[t._v(" "+t._s(e)+" ")])],1)})),a("div",{staticClass:"btns"},[t.text.length>4?a("a-button",{attrs:{type:"link"},on:{click:t.toggle}},[t._v(t._s(t.open?"收起":"展开"))]):t._e(),a("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.text+"",expression:"text+''",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"link"}},[t._v("复制")])],1)],2):a("div",[t._v("-")])])}),[],!1,null,"abb17e16",null);e.default=i.exports},cd99:function(t,e,a){},d550:function(t,e,a){"use strict";var n={name:"batchDelete",props:{selectedRowKeys:{type:Array,default:function(){return[]}}},methods:{deleteCallback:function(){this.$emit("deleteCallback")}}},r=(a("fb70"),a("2877")),i=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"option-btn inline-btn"},[this.selectedRowKeys.length?e("a-popconfirm",{attrs:{"ok-text":"确认","cancel-text":"取消"},on:{confirm:this.deleteCallback}},[e("template",{slot:"title"},[e("p",[this._v("确认删除所选数据吗？")])]),e("a-button",[this._v("批量删除")])],2):e("a-button",{attrs:{disabled:!0}},[this._v("批量删除")]),this._t("default")],2)}),[],!1,null,"4072efce",null);e.a=i.exports},e286:function(t,e,a){"use strict";a.r(e);var n=a("2877"),r=Object(n.a)({},(function(t,e){var a=e._c;return a("div",[void 0!==e.props.text&&e.props.text.length?a("div",[e.props.text.length>5?a("div",[a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},e._l(e.props.text,(function(t,n){return a("p",{key:n},[e._v(e._s(t))])})),0),e._l(e.props.text.slice(0,5),(function(t,n){return a("div",{key:n},[e._v(" "+e._s(4===n?t+"...":t)+" ")])}))],2)],1):a("div",e._l(e.props.text,(function(t,n){return a("p",{key:n},[e._v(e._s(t))])})),0)]):a("div",[e._v("-")])])}),[],!0,null,null,null);e.default=r.exports},ea0c:function(t,e,a){},fb70:function(t,e,a){"use strict";var n=a("2805");a.n(n).a}}]);