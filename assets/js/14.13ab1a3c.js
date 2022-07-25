(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{431:function(a,t,s){a.exports=s.p+"assets/img/RDBMSflow.9f678a67.png"},432:function(a,t,s){a.exports=s.p+"assets/img/ESflow.d4596412.png"},488:function(a,t,s){"use strict";s.r(t);var r=s(65),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"elasticsearch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[a._v("#")]),a._v(" ELasticsearch")]),a._v(" "),r("p",[a._v("📕 "),r("strong",[a._v("Chapter Objectives")])]),a._v(" "),r("ul",[r("li",[a._v("ELasticsearch 更多基礎知識")]),a._v(" "),r("li",[a._v("如同進行正規球賽前要先熟悉規則，使用 ELasticsearch 前基本相關名詞也需要略知一二")]),a._v(" "),r("li",[a._v("由關聯型數據庫的概念切入 Elasticsearch 加速理解速度")]),a._v(" "),r("li",[a._v("Elasticsearch = ES(縮寫)")])]),a._v(" "),r("p",[a._v("📘 "),r("strong",[a._v("Reference")])]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.elastic.co/elasticsearch/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官網"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"more-about-elasticsearch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-about-elasticsearch"}},[a._v("#")]),a._v(" More About ELasticsearch")]),a._v(" "),r("p",[a._v("ELasticsearch 有著 Scalability(可擴展) 與 Near real-time search(接近即時搜尋) 的特性，"),r("br"),a._v("\n同時也提供了高可用(high availability)的集群架構，"),r("br"),a._v("\nELasticsearch 想解決的核心問題就是在數據量大的狀況下也能保有搜尋速度，"),r("br"),a._v("\n當初作者 Shay Banon 在設計的時候，一開始就是朝向分布式部屬的面相開發 ELasticsearch"),r("br"),a._v("\nELasticsearch 核心要素有三個:")]),a._v(" "),r("ul",[r("li",[a._v("Data in : documents and indices")]),a._v(" "),r("li",[a._v("Information out : search and analyze")]),a._v(" "),r("li",[a._v("Scalability and resilience")])]),a._v(" "),r("p"),a._v(" "),r("ul",[r("li",[r("p",[a._v("📓 關於系統設計知識補充")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("分散式系統設計準則 CAP")]),a._v(" "),r("ul",[r("li",[a._v("Consistency (一致性)")]),a._v(" "),r("li",[a._v("Availability (可用性)")]),a._v(" "),r("li",[a._v("Partition Tolerance (分區容忍性)")])]),a._v(" "),r("p",[a._v("📝 一般來說一個分散式架構下，三種特性中只能滿足兩種，"),r("br"),a._v("\n      拿CAP理論對比資料處理也會有以下三種特性:")])]),a._v(" "),r("li",[r("p",[a._v("資料處理系統設計")]),a._v(" "),r("ul",[r("li",[a._v("數據量龐大")]),a._v(" "),r("li",[a._v("近即時處理")]),a._v(" "),r("li",[a._v("資料準確性")])]),a._v(" "),r("p",[a._v("📝 同理，在資料處理上好像也有類似的概念(之前看到的，找不到原文了...)，"),r("br"),a._v("\n      而 Elasticsearch 當然是做了某些取捨，使用上請依自身情況把握")]),a._v(" "),r("ul",[r("li",[a._v("Elasticsearch 捨棄的是資料準確性，不過在某些數據量巨大的應用場景下，已經不會在乎那一點點資料錯誤了")]),a._v(" "),r("li",[a._v("若要滿足數據量巨大與資料準確性兩個因素，可以使用 Hadoop 或 HBase ...來處理，但就不可能 Realtime 了")]),a._v(" "),r("li",[a._v("資料量小的情況下，什麼!你說資料量小的情況，那沒事了")])])])])])]),a._v(" "),r("h2",{attrs:{id:"rdbms-vs-elasticsearch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-vs-elasticsearch"}},[a._v("#")]),a._v(" RDBMS vs. Elasticsearch")]),a._v(" "),r("p",[a._v("要瞭解 Elasticsearch 可以先用 RDBMS 的概念來對比會比較好理解，但必須"),r("br"),a._v(" "),r("font",{attrs:{color:"#FF0000",size:"4"}},[a._v("注意只是拿使用概念來類比，並非 Elasticsearch 本身設計是依 RDBMS 的邏輯開發，兩者在本質上是天差地別")]),r("br"),a._v("\n以下是以 RDBMS 的方式理解 Elasticsearch :"),r("br"),a._v(" "),r("br"),a._v("\n📓  Type 這個概念已經在新版本中移除，"),r("br"),a._v("\n      而在 Type 7.x 版本中已經被定義為預設的 _doc，"),r("br"),a._v("\n      因為在 Elasticsearch 中一切皆是索引，不需要再額外劃分一層 Type 來分類，於是被當成過度設計而棄用"),r("br")],1),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("RDBMS    ")]),a._v(" "),r("th",[a._v("Elasticsearch  ")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("Database")]),a._v(" "),r("td",[a._v("Index")])]),a._v(" "),r("tr",[r("td",[r("s",[a._v("Table")])]),a._v(" "),r("td",[r("s",[a._v("Type")])])]),a._v(" "),r("tr",[r("td",[a._v("Row")]),a._v(" "),r("td",[a._v("Document")])]),a._v(" "),r("tr",[r("td",[a._v("Column")]),a._v(" "),r("td",[a._v("Fields")])]),a._v(" "),r("tr",[r("td",[a._v("Schema")]),a._v(" "),r("td",[a._v("Mapping")])]),a._v(" "),r("tr",[r("td",[a._v("SQL")]),a._v(" "),r("td",[a._v("Query DSL")])])])]),a._v(" "),r("p"),a._v(" "),r("p",[a._v('用最簡單的方式，建立"儲存資料的容器"到"將資料儲存到實體位置"的實用角度上來切入 :')]),a._v(" "),r("ul",[r("li",[r("p",[a._v("RDBMS")]),a._v(" "),r("ul",[r("li",[a._v("建資料庫")]),a._v(" "),r("li",[a._v("建資料表")]),a._v(" "),r("li",[a._v("設計欄位")]),a._v(" "),r("li",[a._v("插入資料")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(431),alt:"RDBMSflow"}})])]),a._v(" "),r("li",[r("p",[a._v("Elasticsearch")]),a._v(" "),r("ul",[r("li",[a._v("建立索引 (Index)")]),a._v(" "),r("li",[a._v("設計映射 (Mapping)，此步驟也不一定要有")]),a._v(" "),r("li",[a._v("插入文件 (Document)")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(432),alt:"ESflow"}})])])]),a._v(" "),r("p",[a._v("Elasticsearch 一詞拆開來看就是 Elastic + Search，"),r("br"),a._v("\nElastic 有靈活的意思；Search 則是搜尋，"),r("br"),a._v("\n為了讓使用者能靈活搜尋，Elasticsearch 在一些格式定義上相對靈活，"),r("br"),a._v('\n不過要百分之百發揮 Elasticsearch 的搜尋速度還是建議將 "需搜尋的欄位" 的定義給確定下來'),r("br"),a._v("\n不然官方就不會有文件是專門闡述 Mapping 這個部份了"),r("br"),a._v(" "),r("br"),a._v("\n另一個 Elasticsearch 與 RDBMS 的巨大差異就是 "),r("font",{attrs:{color:"#FF0000"}},[a._v("Elasticsearch 不具備 Transaction 的概念")]),a._v("，"),r("br"),a._v("\n但單個請求下是保有 ACID 特性，雖然講起來好像有點矛盾!?"),r("br"),a._v("\n不過實際使用過 Elasticsearch API 之後，就會有比較深刻的了解 (前提是必須了解RDBMS ACID And Transaction)"),r("br"),a._v(" "),r("br"),a._v("\n所以在真實的應用場景下 Elasticsearch 不會取代 RDBMS，反而是兩者併行相輔相成，"),r("br"),a._v("\nRDBMS 負責插入與更新資料，再把資料同步到 Elasticsearch 進行搜索。")],1),a._v(" "),r("h2",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[a._v("#")]),a._v(" Index")]),a._v(" "),r("h2",{attrs:{id:"document"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[a._v("#")]),a._v(" Document")]),a._v(" "),r("h2",{attrs:{id:"field"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#field"}},[a._v("#")]),a._v(" Field")]),a._v(" "),r("h2",{attrs:{id:"mapping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[a._v("#")]),a._v(" Mapping")]),a._v(" "),r("h2",{attrs:{id:"cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[a._v("#")]),a._v(" Cluster")]),a._v(" "),r("h2",{attrs:{id:"shard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shard"}},[a._v("#")]),a._v(" Shard")]),a._v(" "),r("h2",{attrs:{id:"replica"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replica"}},[a._v("#")]),a._v(" Replica")])])}),[],!1,null,null,null);t.default=v.exports}}]);