(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{461:function(s,t,a){s.exports=a.p+"assets/img/indexArchitechture.15faf759.png"},505:function(s,t,a){"use strict";a.r(t);var e=a(65),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"elasticsearch-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-index"}},[s._v("#")]),s._v(" Elasticsearch Index")]),s._v(" "),e("p",[s._v("📕 Chapter Objectives")]),s._v(" "),e("ul",[e("li",[s._v("索引的基本")]),s._v(" "),e("li",[s._v("基本API的使用")])]),s._v(" "),e("p",[s._v("📘 Reference")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文件"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.elastic.co/blog/what-is-an-elasticsearch-index",target:"_blank",rel:"noopener noreferrer"}},[s._v("What is an Elasticsearch Index?(2013)"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"basic-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-definition"}},[s._v("#")]),s._v(" Basic Definition")]),s._v(" "),e("blockquote",[e("p",[s._v("An index is like a ‘database' in a relational database."),e("br"),s._v("\nIt has a mapping which defines multiple types.\nAn index is a logical namespace which maps to one or more primary shards and can have zero or more replica shards.")])]),s._v(" "),e("ul",[e("li",[s._v("Collection of JSON documents.")]),s._v(" "),e("li",[s._v("To add one or more JSON documents to Elasticsearch. This process is called indexing.")])]),s._v(" "),e("h2",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[s._v("#")]),s._v(" Index")]),s._v(" "),e("p",[s._v("在 Elasticsearch 中 "),e("code",[s._v("Index")]),s._v(" 為多個 Document 的集合，而 "),e("code",[s._v("Document")]),s._v(" 又是多個 "),e("code",[s._v("fields")]),s._v(" 的集合，"),e("br"),s._v("\n每個索引都可有自己的 "),e("code",[s._v("mapping")]),s._v("，mapping 會決定 "),e("code",[s._v("Document")]),s._v(" 中每個 "),e("code",[s._v("fields")]),s._v(" 的名稱與類型；"),e("br"),s._v("\n在 ES 中 "),e("code",[s._v("index")]),s._v(" 也可以分布在不同的 "),e("code",[s._v("Shard")]),s._v(" 上，來達到儲存空間的水平擴展，以系統架構的角度可以這樣看:"),e("br"),s._v(" "),e("br"),s._v(" "),e("img",{attrs:{src:a(461),alt:"Index Architecture"}})]),s._v(" "),e("h2",{attrs:{id:"create-index-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-index-api"}},[s._v("#")]),s._v(" Create index API")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("創建索引")]),s._v(" "),e("p",[s._v("Request: "),e("code",[s._v("PUT /<index>")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("PUT /book-index-0001\n")])])]),e("p",[s._v("Result:")]),s._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"acknowledged"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"shards_acknowledged"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book-index-0001"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("可以透過 Index body 設定的選項")]),s._v(" "),e("ul",[e("li",[s._v("aliases 別名;傳送門")]),s._v(" "),e("li",[s._v("mappings 映射;概念類似SQL中的Schema;傳送門")]),s._v(" "),e("li",[s._v("settings 索引設置 replicas; shard;")])]),s._v(" "),e("p",[s._v("簡單的使用")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("PUT /book-index-0002\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("Result:")]),s._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"acknowledged"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"shards_acknowledged"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book-index-0002"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("索引命名原則")]),s._v(" "),e("ul",[e("li",[s._v("Lowercase only(只能小寫)")]),s._v(" "),e("li",[s._v('Cannot include , /, *, ?, ", <, >, |, '),e("code"),s._v(" (space character), ,, #(不能包含這些字元)")]),s._v(" "),e("li",[s._v("Cannot start with -, _, +")]),s._v(" "),e("li",[s._v("Cannot be . or ..")]),s._v(" "),e("li",[s._v("Cannot be longer than 255 bytes (note it is bytes, so multi-byte characters will count towards the 255 limit faster)(涉及底層設計不能超過 255 bytes)")])])])]),s._v(" "),e("h2",{attrs:{id:"delete-index-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-index-api"}},[s._v("#")]),s._v(" Delete index API")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("刪除索引")]),s._v(" "),e("p",[s._v("Request: "),e("code",[s._v("DELETE /<index>")])]),s._v(" "),e("blockquote",[e("p",[s._v("To delete all indices, use _all or * . To disallow the deletion of indices with _all or wildcard expressions, set the action.destructive_requires_name cluster setting to true.")])]),s._v(" "),e("p",[s._v("可以使用 _all 或 * 刪除所有索引，可以在某個設定中設定禁止此類型操作")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("DELETE /book-index-0002\n")])])]),e("p",[s._v("Result:")]),s._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"acknowledged"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"get-index-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-index-api"}},[s._v("#")]),s._v(" Get index API")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("檢視某個索引")]),s._v(" "),e("p",[s._v("Request: "),e("code",[s._v("GET /<target>")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("GET /book-index-0001\n")])])]),e("p",[s._v("Result:")]),s._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"book-index-0001"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"aliases"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mappings"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"routing"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allocation"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_tier_preference"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data_content"')]),s._v("\n                        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number_of_shards"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"provided_name"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book-index-0001"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"creation_date"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1656515329424"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number_of_replicas"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"uuid"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7DdAjOwdSlmXGuX7dKp_9g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"created"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7170199"')]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"listed-indices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listed-indices"}},[s._v("#")]),s._v(" Listed indices")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("列出索引")]),s._v(" "),e("p",[s._v("使用 cat API Request: "),e("code",[s._v("GET /_cat/indices")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("    yellow "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" mybeat-2022.06.27               9SdlB48_RaKldQRgBQhKhg "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   243kb   243kb\n    green  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .geoip_databases                1cJrOdYzQruU1fc_A5o3Hw "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(".9mb  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(".9mb\n    yellow "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" mybeat-2022.06.28               fItzFNKkRSiLJzWEFSxMzg "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v(".4kb  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v(".4kb\n    green  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .apm-custom-link                UE04kRu1Q32E23P9o2aHWg "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    226b    226b\n    yellow "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" book-index-0001                 7DdAjOwdSlmXGuX7dKp_9g "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    226b    226b\n    green  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .apm-agent-configuration        5H2_N1KXQEyAczk8Szpq5w "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    226b    226b\n    yellow "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" movie-index-000001              Y29WUJ1JRZurwFxrCWETBA "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    226b    226b\n    green  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .kibana_task_manager_7.17.1_001 fG9VCeHmTS6i5zrUAPzj4A "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5910")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("879")]),s._v(".9kb "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("879")]),s._v(".9kb\n    green  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .kibana_7.17.1_001              h3kEcPD0RhWmRKYdSlATOQ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".7mb   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".7mb\n    yellow "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" mybeat-2022.06.26               mEBdUe-wRum4gI-VxhSsuA "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("138")]),s._v(".6kb "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("138")]),s._v(".6kb\n    green  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .tasks                          kh3_uU9iQJmofYrXL7DslQ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(".7kb  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(".7kb\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"rename-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rename-index"}},[s._v("#")]),s._v(" Rename Index")]),s._v(" "),e("p",[s._v("基本上滿麻煩的先使用 Clone Index API 再把原來的 Delete Index API")])])}),[],!1,null,null,null);t.default=n.exports}}]);