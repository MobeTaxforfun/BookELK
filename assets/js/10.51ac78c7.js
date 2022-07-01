(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{428:function(a,e,s){a.exports=s.p+"assets/img/listedaliases.32dcd01b.png"},445:function(a,e,s){"use strict";s.r(e);var t=s(65),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch-aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-aliases"}},[a._v("#")]),a._v(" Elasticsearch Aliases")]),a._v(" "),t("p",[a._v("本章紀錄 Elasticsearch Aliases (別名)，以下為官方文件靈魂說明，基本上靈力值太低的我根本看不懂...")]),a._v(" "),t("blockquote",[t("p",[a._v("An alias is a secondary name for a group of data streams or indices. Most Elasticsearch APIs accept an alias in place of a data stream or index name.")]),a._v(" "),t("p",[a._v("You can change the data streams or indices of an alias at any time. If you use aliases in your application’s Elasticsearch requests, you can reindex data with no downtime or changes to your app’s code.")])]),a._v(" "),t("p",[a._v("為什麼要對索引使用 Alias，自身理解")]),a._v(" "),t("ul",[t("li",[a._v("靈活性")]),a._v(" "),t("li",[a._v("方便修改 Mapping")]),a._v(" "),t("li",[a._v("如同關聯型資料庫中的 View 表")])]),a._v(" "),t("p",[a._v("使用場景如下")]),a._v(" "),t("p",[a._v("⭐️ 以下打一百個星號 ⭐️ * 100")]),a._v(" "),t("p",[a._v("在 elasticsearch 中別名有兩種，"),t("strong",[a._v("在查資料的時候先確定文章是在說哪種 alias")]),a._v("，這一篇是紀錄  index alias，在官方文件中")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/aliases.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Aliases"),t("OutboundLink")],1),a._v(" 這是給 data stream alias 和  index alias 用的")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/field-alias.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alias field type"),t("OutboundLink")],1),a._v(" 這是給 field 用的，是一種 field type")])]),a._v(" "),t("p",[a._v("📘 Reference")]),a._v(" "),t("ul",[t("li",[a._v("官方文件；"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/aliases.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("走這裡"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"index-alias-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-alias-的使用"}},[a._v("#")]),a._v(" Index Alias 的使用")]),a._v(" "),t("h3",{attrs:{id:"列出所有的-alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出所有的-alias"}},[a._v("#")]),a._v(" 列出所有的 Alias")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("GET _cat/aliases?v\n")])])]),t("p",[t("img",{attrs:{src:s(428),alt:"列出所有別名"}})]),a._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])])])}),[],!1,null,null,null);e.default=r.exports}}]);