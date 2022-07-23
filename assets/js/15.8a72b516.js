(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{431:function(a,t,s){a.exports=s.p+"assets/img/eswiki.21560d36.png"},484:function(a,t,s){"use strict";s.r(t);var e=s(65),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"elk-stack-intro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elk-stack-intro"}},[a._v("#")]),a._v(" ELK Stack Intro")]),a._v(" "),e("p",[a._v("📕 "),e("strong",[a._v("What is ELK Stack")])]),a._v(" "),e("ul",[e("li",[a._v("ELK Stack = E(Elasticsearch) + L(Logstash) + K(Kibana) + Beats + Other")]),a._v(" "),e("li",[a._v("本小節偏重於 Elasticsearch")])]),a._v(" "),e("p",[a._v("📘 Reference")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Elastic 官方傳送門"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"what-is-elk-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-elk-stack"}},[a._v("#")]),a._v(" What is ELK Stack")]),a._v(" "),e("ul",[e("li",[a._v("ELK 是三個開放原始碼專案的頭一字，分別是 E("),e("code",[a._v("Elasticsearch")]),a._v(") + L("),e("code",[a._v("Logstash")]),a._v(") + K("),e("code",[a._v("Kibana")]),a._v(")")]),a._v(" "),e("li",[a._v("Elasticsearch : 一個搜索引擎")]),a._v(" "),e("li",[a._v('Logstash : 一個 "server‑side" 的資料轉換管道(pipeline) "stash" 有存起來的意思，所以 '),e("code",[a._v("Logstash")]),a._v(' 可以讓資料經過 "pipeline" 處理後儲存到某個地方')]),a._v(" "),e("li",[a._v("Kibana : 一個資料化可視平台")]),a._v(" "),e("li",[a._v("Beats : 一個輕量級資料採集解決方案，相較於 "),e("code",[a._v("Logstash")]),a._v(' 離"應用"距離更近')])]),a._v(" "),e("h2",{attrs:{id:"elasticsearch-basic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-basic"}},[a._v("#")]),a._v(" Elasticsearch Basic")]),a._v(" "),e("p",[a._v("以下是來至 Wiki 的說明:"),e("br"),a._v(" "),e("br"),a._v(" "),e("img",{attrs:{src:s(431),alt:"Es wiki"}}),a._v(" "),e("br"),a._v("\n小結幾個重點:")]),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("搜尋引擎")])]),a._v(" "),e("p",[a._v("當有人問 Elasticsearch 是什麼? 最簡單的回答就是四個字 : "),e("strong",[a._v("搜尋引擎 (search engine)")])]),a._v(" "),e("blockquote",[e("p",[a._v("搜尋引擎（英語：search engine）是一種資訊檢索系統，旨在協助搜尋儲存在電腦系統中的資訊。\n搜尋結果一般被稱為「hits」，通常會以表單的形式列出。\n網路搜尋引擎是最常見、公開的一種搜尋引擎，其功能為搜尋全球資訊網上儲存的資訊。")])]),a._v(" "),e("ul",[e("li",[a._v("不管在什麼環境下當成功啟動 Elasticsearch 的那一刻，它會就會告訴你 "),e("strong",[a._v("「You Know, for Search!」")])]),a._v(" "),e("li",[a._v("搜尋結果一般被稱為「hits」，事實上使用 Elasticsearch 做搜尋，在搜尋結果中就是會有 "),e("strong",[a._v("「hits」")]),a._v(" 這個屬性欄位")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("基於 Lucene 庫的搜尋引擎")])]),a._v(" "),e("blockquote",[e("p",[a._v("Lucene是一套用於全文檢索和搜尋的開放原始碼程式庫，由Apache軟體基金會支援和提供。"),e("br"),a._v("\nLucene提供了一個簡單卻強大的應用程式介面，能夠做全文索引和搜尋。"),e("br"),a._v("\nLucene是現在最受歡迎的免費Java資訊檢索程式庫。"),e("br"),a._v("\nFrom Wiki")])]),a._v(" "),e("p",[a._v("Elasticsearch 是基於 "),e("code",[a._v("Lucene")]),a._v(" 封裝的應用，因為 Lucene 有些 API 再用於開發時，並不是那麼容易操作，"),e("br"),a._v("\n就像 Docker 跟容器技術一樣( Docker 的出現使容器技術更容易使用)，"),e("br"),a._v("\nElasticsearch 讓使用者可以用更簡便的方式使用 Lucene 來進行全文檢索與作為搜索引擎使用")]),a._v(" "),e("p",[a._v("📓 小知識 :")]),a._v(" "),e("ul",[e("li",[a._v("Lucene 的作者為 "),e("strong",[a._v("Doug Cutting")])]),a._v(" "),e("li",[e("strong",[a._v("Doug Cutting")]),a._v(" 同時也是一項知名開源框架的作者 【 Hadoop 】")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("分散式、支援多租戶")])]),a._v(" "),e("p",[a._v("Elasticsearch 是一個分散式的 "),e("code",[a._v("No SQL")]),a._v(" 資料庫，Elasticsearch 自帶分散式的架構可以輕鬆實現水平擴容，"),e("br"),a._v("\n藉由搭建 Elasticsearch Cluster，在 Cluster 中啟動各種不同功能的結點 (Node)，可以任意搭建自己的分散式架構"),e("br"),a._v("\nMulti-Tenancy(多租戶)方面在 Elasticsearch 常見的策略有 Cluster per tenant ; Index per tenant ; Tenant-based routing"),e("br"),a._v("\n或者是"),e("strong",[a._v("百度")]),a._v("有自己擴展的 Elasticsearch "),e("code",[a._v("BES")]),a._v("，可以參考看看")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("全文搜尋引擎")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("HTTP Web介面和無模式JSON文件")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Elasticsearch是用Java開發的")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("開源軟體")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("官方客戶端在Java、.NET（C#）、PHP、Python、Apache Groovy、Ruby和許多其他語言中都是可用的")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("根據DB-Engines的排名顯示，Elasticsearch是最受歡迎的企業搜尋引擎")])])])]),a._v(" "),e("h2",{attrs:{id:"index-索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-索引"}},[a._v("#")]),a._v(" Index 索引")]),a._v(" "),e("h2",{attrs:{id:"document-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#document-文件"}},[a._v("#")]),a._v(" Document 文件")]),a._v(" "),e("h2",{attrs:{id:"field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field"}},[a._v("#")]),a._v(" Field")]),a._v(" "),e("h2",{attrs:{id:"mapping-翻譯不能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapping-翻譯不能"}},[a._v("#")]),a._v(" Mapping (翻譯不能)")]),a._v(" "),e("h2",{attrs:{id:"index-aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-aliases"}},[a._v("#")]),a._v(" Index Aliases")]),a._v(" "),e("h2",{attrs:{id:"analyzer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analyzer"}},[a._v("#")]),a._v(" Analyzer")]),a._v(" "),e("h2",{attrs:{id:"shard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shard"}},[a._v("#")]),a._v(" Shard")]),a._v(" "),e("h2",{attrs:{id:"replica"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replica"}},[a._v("#")]),a._v(" Replica")])])}),[],!1,null,null,null);t.default=r.exports}}]);