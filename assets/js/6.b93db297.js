(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{431:function(t,a,e){t.exports=e.p+"assets/img/RDBMSflow.9f678a67.png"},432:function(t,a,e){t.exports=e.p+"assets/img/ESflow.d4596412.png"},433:function(t,a,e){t.exports=e.p+"assets/img/InvertedIndexExample.f180ffb4.png"},434:function(t,a,e){t.exports=e.p+"assets/img/Invertedindexflow.cd48dd0b.png"},435:function(t,a,e){t.exports=e.p+"assets/img/forwardvsinvertedindex.381b84c7.png"},436:function(t,a,e){t.exports=e.p+"assets/img/IndexandDocument.2f1db41a.png"},492:function(t,a,e){"use strict";e.r(a);var s=e(65),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[t._v("#")]),t._v(" ELasticsearch")]),t._v(" "),s("p",[t._v("📕 "),s("strong",[t._v("Chapter Objectives")])]),t._v(" "),s("ul",[s("li",[t._v("ELasticsearch 更多基礎知識")]),t._v(" "),s("li",[t._v("如同進行正規球賽前要先熟悉規則，使用 ELasticsearch 前基本相關名詞也需要略知一二")]),t._v(" "),s("li",[t._v("由關聯型數據庫的概念切入 Elasticsearch 加速理解速度")]),t._v(" "),s("li",[t._v("Elasticsearch = ES(縮寫)")])]),t._v(" "),s("p",[t._v("📘 "),s("strong",[t._v("Reference")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.elastic.co/elasticsearch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官網"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.elastic.co/blog/what-is-an-elasticsearch-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is an Elasticsearch Index?(2013)"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"more-about-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-about-elasticsearch"}},[t._v("#")]),t._v(" More About ELasticsearch")]),t._v(" "),s("p",[t._v("ELasticsearch 有著 Scalability(可擴展) 與 Near real-time search(接近即時搜尋) 的特性，"),s("br"),t._v("\n同時也提供了高可用(high availability)的集群架構，"),s("br"),t._v("\nELasticsearch 想解決的核心問題就是在數據量大的狀況下也能保有搜尋速度，"),s("br"),t._v("\n當初作者 Shay Banon 在設計的時候，一開始就是朝向分布式部屬的面相開發 ELasticsearch"),s("br"),t._v("\nELasticsearch 核心要素有三個:")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Data in : documents and indices")])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Information out : search and analyze")])])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Scalability and resilience")])])],1)]),t._v(" "),s("p"),t._v(" "),s("ul",[s("li",[s("p",[t._v("📓 "),s("font",{attrs:{color:"008000"}},[s("strong",[t._v("關於系統設計知識補充")])])],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("分散式系統設計準則 CAP")]),t._v(" "),s("ul",[s("li",[t._v("Consistency (一致性)")]),t._v(" "),s("li",[t._v("Availability (可用性)")]),t._v(" "),s("li",[t._v("Partition Tolerance (分區容忍性)")])]),t._v(" "),s("p",[t._v("📝 一般來說一個分散式架構下，三種特性中只能滿足兩種，"),s("br"),t._v("\n      拿CAP理論對比資料處理也會有以下三種特性:")])]),t._v(" "),s("li",[s("p",[t._v("資料處理系統設計")]),t._v(" "),s("ul",[s("li",[t._v("數據量龐大")]),t._v(" "),s("li",[t._v("近即時處理")]),t._v(" "),s("li",[t._v("資料準確性")])]),t._v(" "),s("p",[t._v("📝 同理，在資料處理上好像也有類似的概念(之前看到的，找不到原文了...)，"),s("br"),t._v("\n      而 Elasticsearch 當然是做了某些取捨，使用上請依自身情況把握")]),t._v(" "),s("ul",[s("li",[t._v("Elasticsearch 捨棄的是資料準確性，不過在某些數據量巨大的應用場景下，已經不會在乎那一點點資料錯誤了")]),t._v(" "),s("li",[t._v("若要滿足數據量巨大與資料準確性兩個因素，可以使用 Hadoop 或 HBase ...來處理，但就不可能 Realtime 了")]),t._v(" "),s("li",[t._v("資料量小的情況下，什麼!你說資料量小的情況，那沒事了")])])])])])]),t._v(" "),s("h2",{attrs:{id:"rdbms-vs-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-vs-elasticsearch"}},[t._v("#")]),t._v(" RDBMS vs. Elasticsearch")]),t._v(" "),s("p",[t._v("要瞭解 Elasticsearch 可以先用 RDBMS 的概念來對比會比較好理解，但必須"),s("br"),t._v(" "),s("font",{attrs:{color:"#FF0000",size:"4"}},[t._v("注意只是拿使用概念來類比，並非 Elasticsearch 本身設計是依 RDBMS 的邏輯開發，兩者在本質上是天差地別")]),s("br"),t._v("\n以下是以 RDBMS 的方式理解 Elasticsearch :"),s("br")],1),t._v(" "),s("ul",[s("li",[t._v("📓 "),s("font",{attrs:{color:"008000"}},[s("strong",[t._v("Type補充")])])],1)]),t._v(" "),s("p",[t._v("    Type 這個概念已經在新版本 8.x 中移除，"),s("br"),t._v("\n    而在 7.x 版本中 Type 已經被定義為預設的 _doc，"),s("br"),t._v("\n    因為在 Elasticsearch 中一切皆是索引，不需要再額外劃分一層 Type 來分類，於是被當成過度設計而"),s("font",{attrs:{color:"#FF0000",size:"4"}},[t._v("棄用")]),s("br")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("RDBMS    ")]),t._v(" "),s("th",[t._v("Elasticsearch  ")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Database")]),t._v(" "),s("td",[t._v("Index")])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Table")])]),t._v(" "),s("td",[s("s",[t._v("Type")])])]),t._v(" "),s("tr",[s("td",[t._v("Row")]),t._v(" "),s("td",[t._v("Document")])]),t._v(" "),s("tr",[s("td",[t._v("Column")]),t._v(" "),s("td",[t._v("Fields")])]),t._v(" "),s("tr",[s("td",[t._v("Schema")]),t._v(" "),s("td",[t._v("Mapping")])]),t._v(" "),s("tr",[s("td",[t._v("SQL")]),t._v(" "),s("td",[t._v("Query DSL")])])])]),t._v(" "),s("p"),t._v(" "),s("p",[t._v('用最簡單的方式，建立"儲存資料的容器"到"將資料儲存到實體位置"的實用角度上來切入 :')]),t._v(" "),s("ul",[s("li",[s("p",[t._v("RDBMS")]),t._v(" "),s("ul",[s("li",[t._v("建資料庫")]),t._v(" "),s("li",[t._v("建資料表")]),t._v(" "),s("li",[t._v("設計欄位")]),t._v(" "),s("li",[t._v("插入資料")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(431),alt:"RDBMSflow"}})])]),t._v(" "),s("li",[s("p",[t._v("Elasticsearch")]),t._v(" "),s("ul",[s("li",[t._v("建立索引 (Index)")]),t._v(" "),s("li",[t._v("設計映射 (Mapping)，此步驟也不一定要有")]),t._v(" "),s("li",[t._v("插入文件 (Document)")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(432),alt:"ESflow"}})])])]),t._v(" "),s("p",[t._v("最後來看一下官方部落格上面的論述(2013年，所有還有Type的概念)")]),t._v(" "),s("blockquote",[s("p",[t._v("The easiest and most familiar layout clones what you would expect from a relational database."),s("br"),t._v("\nYou can (very roughly) think of an index like a database."),s("br"),t._v("\n● MySQL => Databases => Tables => Columns/Rows"),s("br"),t._v("\n● Elasticsearch => Indices => Types => Documents with Properties")])]),t._v(" "),s("p",[t._v("Elasticsearch 一詞拆開來看就是 Elastic + Search，"),s("br"),t._v("\nElastic 有靈活的意思；Search 則是搜尋，"),s("br"),t._v("\n為了讓使用者能靈活搜尋，Elasticsearch 在一些格式定義上相對靈活，"),s("br"),t._v('\n不過要百分之百發揮 Elasticsearch 的搜尋速度還是建議將 "需搜尋的欄位" 的定義給確定下來'),s("br"),t._v("\n不然官方就不會有文件是專門闡述 Mapping 這個部份了"),s("br"),t._v(" "),s("br"),t._v("\n另一個 Elasticsearch 與 RDBMS 的巨大差異就是 "),s("font",{attrs:{color:"#FF0000"}},[t._v("Elasticsearch 不具備 Transaction 的概念")]),t._v("，"),s("br"),t._v("\n但單個請求下是保有 ACID 特性，雖然講起來好像有點矛盾!?"),s("br"),t._v("\n不過實際使用過 Elasticsearch API 之後，就會有比較深刻的了解 (前提是必須了解RDBMS ACID And Transaction)"),s("br"),t._v(" "),s("br"),t._v("\n所以在真實的應用場景下 Elasticsearch 不會取代 RDBMS，反而是兩者併行相輔相成，"),s("br"),t._v("\nRDBMS 負責插入與更新資料，再把資料同步到 Elasticsearch 進行搜索。")],1),t._v(" "),s("h2",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),s("p",[t._v("Index (索引)為 Elasticsearch 的核心概念之一，"),s("br"),t._v("\n核心三要之一便是 "),s("code",[t._v("Data in : documents and indices")]),t._v("，"),s("br"),t._v("\n當資料往 Elasticsearch 輸入時，兩個關鍵便是 "),s("strong",[t._v("documents")]),t._v(" and "),s("strong",[t._v("indices")]),t._v("，"),s("br"),t._v("\n若是說"),s("font",{attrs:{color:"#FF0000"}},[t._v("搜尋引擎為 Elasticsearch 的核心概念，Index 就是支撐這個核心概念的基石")]),t._v("，"),s("br"),t._v("\n若要在 ELK Stack 相關應用上有良好的使用體驗，務必要掌握一下 Index，"),s("br"),t._v('\n自身的心得是 Elasticsearch Index 這個東西"極端神秘"')],1),t._v(" "),s("ul",[s("li",[t._v("索引為文件的集合，簡單來說就是把同類型的 documents 藉由 Index 集合再一起，"),s("br"),t._v("\n當然索引的設計牽涉到整體搜尋的速度，假設把系統中所有的 documents 都用一個 Index 存起來"),s("br"),t._v("\n想當然爾...")]),t._v(" "),s("li",[t._v("而一個 Elasticsearch Index 又會分布在一個或多個 Shard 中，而每一個 Shard 又會有自身的 Lucene Index")]),t._v(" "),s("li",[t._v("Inverted Index")])]),t._v(" "),s("p",[s("s",[t._v("這小節有點難寫.. 先擱置一下")])]),t._v(" "),s("h3",{attrs:{id:"inverted-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inverted-index"}},[t._v("#")]),t._v(" Inverted Index")]),t._v(" "),s("p",[t._v("🌍 "),s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("www.elastic.co")])])],1),t._v(" "),s("blockquote",[s("p",[t._v("Elasticsearch uses a data structure called an inverted index that supports very fast full-text searches.")])]),t._v(" "),s("p",[t._v("🌍 "),s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Wikipedia")])])],1),t._v(" "),s("blockquote",[s("p",[t._v("倒排索引（英語：Inverted index），也常被稱為反向索引、置入檔案或反向檔案，"),s("br"),t._v("\n是一種索引方法，被用來儲存在全文搜尋下某個單詞在一個文件或者一組文件中的儲存位置的對映。"),s("br"),t._v("\n它是文件檢索系統中最常用的資料結構。")])]),t._v(" "),s("p",[s("font",{attrs:{color:"#FF0000"}},[s("strong",[t._v("Elasticsearch 使用 Inverted Index 的資料結構來實現快速的全文搜尋")])]),t._v("，"),s("br"),t._v("\n關於反向索引或稱倒排索引已經是老生常談了(Google一下就一堆)，"),s("br"),t._v("\n簡單的記錄一下")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(433),alt:"invertedindexexample"}})]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("簡略的轉置流程")])])],1)]),t._v(" "),s("p",[t._v("若要建立 Inverted Index，首先所有的 Document 會先經過分詞、分析、停用詞、字元轉換後，"),s("br"),t._v("\n割成一個一個最小的單詞，再由這些單詞集合成 Inverted Index，"),s("br"),t._v("\n※所以當我們搜尋 "),s("code",[t._v("what")]),t._v(" 的時候，我們可以知道 "),s("code",[t._v("what")]),t._v(" 這個關鍵字在文件ID為 "),s("code",[t._v("0,1")]),t._v(" 這兩個文件中，便不用在每個文件尋訪，"),s("br"),t._v("\n以 Wiki 的三句文字為例子，流程如下圖:"),s("br"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:e(434),alt:"invertedindexflow"}}),s("br")]),t._v(" "),s("p",[t._v("若以 Forward Index (索引) vs. Invert Index (反向索引) 來切入，"),s("br"),t._v("\nInvert Index 資料結構是典型的搜尋引擎檢索演算法重要的部分，"),s("br"),t._v("\n事實上正因為 Invert Index 的特性，Invert Index 也是文件檢索系統中最常用的資料結構，"),s("br"),t._v("\nForward Index vs. Invert Index 兩者比較如下圖:"),s("br"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:e(435),alt:"forwardvsinvertedindex"}}),s("br")]),t._v(" "),s("h3",{attrs:{id:"inverted-index-for-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inverted-index-for-elasticsearch"}},[t._v("#")]),t._v(" Inverted Index For Elasticsearch")]),t._v(" "),s("p",[t._v("更深入的來探討 Elasticsearch 對於 Inverted Index 的實現"),s("br"),t._v(" "),s("s",[t._v("這個要整理很久，先把大綱打好")]),t._v("(未完待續)")]),t._v(" "),s("h2",{attrs:{id:"document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[t._v("#")]),t._v(" Document")]),t._v(" "),s("blockquote",[s("p",[t._v("Elasticsearch is a distributed document store."),s("br"),t._v("\nInstead of storing information as rows of columnar data,"),s("br"),t._v("\nElasticsearch stores complex data structures that have been serialized as JSON documents.")])]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("重點 =>")])]),t._v(" "),s("code",[t._v("Elasticsearch is a distributed document store")]),s("br"),t._v(" "),s("strong",[t._v("Elasticsearch 是一個"),s("font",{attrs:{color:"#FF0000"}},[t._v("分布式")]),t._v("的"),s("font",{attrs:{color:"#FF0000"}},[t._v("文件資料庫")])],1),s("br"),t._v(" "),s("strong",[t._v("Elasticsearch 是一個"),s("font",{attrs:{color:"#FF0000"}},[t._v("分布式")]),t._v("的"),s("font",{attrs:{color:"#FF0000"}},[t._v("文件資料庫")])],1),s("br"),t._v(" "),s("strong",[t._v("Elasticsearch 是一個"),s("font",{attrs:{color:"#FF0000"}},[t._v("分布式")]),t._v("的"),s("font",{attrs:{color:"#FF0000"}},[t._v("文件資料庫")])],1)],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Index 與 Documents 的關係")])]),s("br"),t._v("\n最 "),s("font",{attrs:{color:"FF4500"}},[s("strong",[t._v("簡單")])]),t._v(" 來說就是一個 Index 裡面，會有很多同屬性的 Documents"),s("br"),t._v("\n(當然實際場景下遠比這個複雜得多，還有 Node; Shard; 那些有的沒的)"),s("br"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:e(436),alt:"IndexandDocument"}})],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("數據最小單位")])])],1),t._v(" "),s("p",[t._v("Document 已經是 Elasticsearch 儲存資料單元中最小的單位了")])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("JSON Documents")])])],1),t._v(" "),s("blockquote",[s("p",[t._v("Elasticsearch stores complex data structures that have been serialized as JSON documents")])]),t._v(" "),s("p",[t._v("儲存進 Elasticsearch 的資料都將被序列化為 JSON documents，"),s("br"),t._v("\n所以 documents 通常以 JSON 來表示，"),s("br"),t._v("\n事實上，再使用 Elasticsearch 時也都透過 HTTP 與 JSON 來與 Elasticsearch 溝通居多")])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Unique Id")])])],1),t._v(" "),s("p",[t._v("每個 Document 接有自己的唯一 ID，"),s("br"),t._v("\n不管是在建立的時候使用者賦予，或是由系統自身配給，"),s("br"),t._v("\n通常讓系統本身管理會是比較明智的選擇")])]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#63C5DA",size:"4"}},[s("strong",[t._v("Schema-less")])])],1),t._v(" "),s("blockquote",[s("p",[t._v("Elasticsearch also has the ability to be schema-less")])]),t._v(" "),s("p",[t._v("Schema-less 為一種彈性的儲存結構，並不僅限存在於 Elasticsearch 中，"),s("br"),t._v("\nMongoDB ...等等的資料庫，也是具備 Schema-less 屬性，"),s("br"),t._v("\nSchema-less 提供了什麼特性?")]),t._v(" "),s("blockquote",[s("p",[t._v("which means that documents can be indexed without explicitly specifying how to handle each of the different fields that might occur in a document.")])]),t._v(" "),s("p",[t._v("在存儲資料時不需要事先定義美個文件中的格式(fields)便可將文件儲存，"),s("br"),t._v("\nElasticsearch 中提供 "),s("font",{attrs:{color:"FF4500"}},[t._v("Dynamic mapping")]),t._v(" 的機制，"),s("br"),t._v("\n在文件進到 Elasticsearch Index 時會自動的判別 fields 並把 fields 添加進 Index 中，")],1),t._v(" "),s("blockquote",[s("p",[t._v("​just start indexing documents and Elasticsearch will detect and map booleans,"),s("br"),t._v("\nfloating point and integer values, dates, and strings to the appropriate Elasticsearch data types.")])]),t._v(" "),s("p",[t._v("使用者僅需要往索引中間添加文件，Elasticsearch 會自動幫你判別型態，"),s("br"),t._v("\n需要注意的是 Dynamic mapping 也不是如此的完美，"),s("br"),t._v("\n所以有時候還是需要使用者自己定義")])]),t._v(" "),s("li",[s("p",[t._v("📓 "),s("font",{attrs:{color:"008000"}},[s("strong",[t._v("Schema-less 知識補充")])])],1),t._v(" "),s("p",[t._v("Schema-less 雖然看似方便其實還是有些問題存在 1. 需要大量 Index ; 2.弱資料正確性"),s("br"),t._v("\n所以 MongoDB 變成有點類似 Dynamic schema，"),s("br"),t._v("\nElasticsearch 則是有 Dynamic mapping，"),s("br"),t._v("\n到若要在本質上攻克 Schema-less 有另一個東西，Wide Column Stores - "),s("code",[t._v("Cassandra")])])]),t._v(" "),s("li",[s("p",[t._v("📓 "),s("font",{attrs:{color:"008000"}},[s("strong",[t._v("關於 NoSQL 知識補充")])])],1),t._v(" "),s("p",[t._v("Elasticsearch 屬於文件型資料庫，"),s("br"),t._v("\nGoogle "),s("code",[t._v("NoSQL")]),t._v(" 拉到文件儲存列表就會看到了，"),s("br"),t._v("\n目前對於 NoSQL 分類的主流說法，大體分成四個:")]),t._v(" "),s("ul",[s("li",[t._v("文件型資料庫")]),t._v(" "),s("li",[t._v("Key-value 鍵值對資料庫")]),t._v(" "),s("li",[t._v("圖資料庫")]),t._v(" "),s("li",[t._v("列資料庫")])])])]),t._v(" "),s("h3",{attrs:{id:"mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[t._v("#")]),t._v(" Mapping")]),t._v(" "),s("blockquote",[s("p",[t._v("Mapping is the process of defining how a document, and the fields it contains, are stored and indexed.")])]),t._v(" "),s("ul",[s("li",[t._v("📓 "),s("font",{attrs:{color:"008000"}},[s("strong",[t._v("Mapping Types 知識補充")])])],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Elasticsearch 8.0.0 no longer supports mapping types."),s("br"),t._v("\nFor details on how to migrate your clusters away from mapping types,"),s("br"),t._v("\nsee the removal of types documentation for the 7.x release.")])]),t._v(" "),s("p",[t._v("隨著 types 的棄用，Elasticsearch 8.0.0 已經不提供 Mapping Types 機制，\n稍微注意一下就好")]),t._v(" "),s("h3",{attrs:{id:"dynamic-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-mapping"}},[t._v("#")]),t._v(" Dynamic mapping")]),t._v(" "),s("h3",{attrs:{id:"explicit-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explicit-mapping"}},[t._v("#")]),t._v(" Explicit mapping")]),t._v(" "),s("h3",{attrs:{id:"field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field"}},[t._v("#")]),t._v(" Field")]),t._v(" "),s("h3",{attrs:{id:"metadata-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadata-fields"}},[t._v("#")]),t._v(" Metadata fields")]),t._v(" "),s("h3",{attrs:{id:"field-data-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-data-types"}},[t._v("#")]),t._v(" Field data types")]),t._v(" "),s("h2",{attrs:{id:"search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[t._v("#")]),t._v(" Search")]),t._v(" "),s("h2",{attrs:{id:"analyzer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyzer"}},[t._v("#")]),t._v(" Analyzer")]),t._v(" "),s("h2",{attrs:{id:"distributed-document-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distributed-document-store"}},[t._v("#")]),t._v(" Distributed Document Store")]),t._v(" "),s("h3",{attrs:{id:"shard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shard"}},[t._v("#")]),t._v(" Shard")]),t._v(" "),s("h3",{attrs:{id:"replica"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replica"}},[t._v("#")]),t._v(" Replica")])])}),[],!1,null,null,null);a.default=r.exports}}]);