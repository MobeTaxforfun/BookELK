(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{442:function(t,s,a){"use strict";a.r(s);var e=a(65),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-mapping"}},[t._v("#")]),t._v(" Elasticsearch Mapping")]),t._v(" "),a("p",[t._v("在 Index 中的 Mapping 用來定義索引中的欄位名稱與類型，相當於關聯型數據庫中創建Table時指定的 Schema，但在 Elasticsearch 並不一定要指定 Index Mapping 才能儲存資料 Elasticsearch 其特有的 Dynamic Mapping 機制也可以根據鍵入的資料來生成相對應的 Mapping field")]),t._v(" "),a("h2",{attrs:{id:"如何使用-index-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-index-mapping"}},[t._v("#")]),t._v(" 如何使用 Index Mapping")]),t._v(" "),a("p",[t._v('在創建索引時;透過 "mappings" 來指定，Field data Type 可以看這邊 '),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文件"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("PUT /my-user-000001\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"integer"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",  \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("age 為 integer : 毫無反應；就是一個整數")]),t._v(" "),a("li",[t._v("email 為 keyword : 若指定為 keyworld，將不會享有全文搜索的特性，單單視為普通參數做使用\n"),a("blockquote",[a("p",[t._v("Avoid using keyword fields for full-text search. Use the text field type instead.")])])]),t._v(" "),a("li",[t._v("name 為 text : 若指定為 text，這個 Field 將會經過 "),a("code",[t._v("analysis")]),t._v(" 分詞轉換為全文索引 analysis 是 Elasticsearch 中一個非常重要機制\n"),a("blockquote",[a("p",[t._v("A field to index full-text values, such as the body of an email or the description of a product. These fields are analyzed, that is they are passed through an analyzer to convert the string into a list of individual terms before being indexed.")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);