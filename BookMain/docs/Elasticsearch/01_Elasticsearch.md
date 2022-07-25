# ELasticsearch

:closed_book: **Chapter Objectives**  

* ELasticsearch 更多基礎知識
* 如同進行正規球賽前要先熟悉規則，使用 ELasticsearch 前基本相關名詞也需要略知一二
* 由關聯型數據庫的概念切入 Elasticsearch 加速理解速度
* Elasticsearch = ES(縮寫)

:blue_book: **Reference**

* [官網](https://www.elastic.co/elasticsearch/)

## More About ELasticsearch

ELasticsearch 有著 Scalability(可擴展) 與 Near real-time search(接近即時搜尋) 的特性，  
同時也提供了高可用(high availability)的集群架構，  
ELasticsearch 想解決的核心問題就是在數據量大的狀況下也能保有搜尋速度，  
當初作者 Shay Banon 在設計的時候，一開始就是朝向分布式部屬的面相開發 ELasticsearch  
ELasticsearch 核心要素有三個:

* Data in : documents and indices
* Information out : search and analyze
* Scalability and resilience

&nbsp;

* :notebook: 關於系統設計知識補充

  * 分散式系統設計準則 CAP
    * Consistency (一致性)
    * Availability (可用性)
    * Partition Tolerance (分區容忍性)

    :pencil: 一般來說一個分散式架構下，三種特性中只能滿足兩種，  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拿CAP理論對比資料處理也會有以下三種特性:

  * 資料處理系統設計
    * 數據量龐大
    * 近即時處理
    * 資料準確性

    :pencil: 同理，在資料處理上好像也有類似的概念(之前看到的，找不到原文了...)，  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而 Elasticsearch 當然是做了某些取捨，使用上請依自身情況把握
    * Elasticsearch 捨棄的是資料準確性，不過在某些數據量巨大的應用場景下，已經不會在乎那一點點資料錯誤了
    * 若要滿足數據量巨大與資料準確性兩個因素，可以使用 Hadoop 或 HBase ...來處理，但就不可能 Realtime 了
    * 資料量小的情況下，什麼!你說資料量小的情況，那沒事了

## RDBMS vs. Elasticsearch

要瞭解 Elasticsearch 可以先用 RDBMS 的概念來對比會比較好理解，但必須  
<font color="#FF0000" size="4">注意只是拿使用概念來類比，並非 Elasticsearch 本身設計是依 RDBMS 的邏輯開發，兩者在本質上是天差地別</font>  
以下是以 RDBMS 的方式理解 Elasticsearch :  
&nbsp;  
:notebook:&nbsp;&nbsp;Type 這個概念已經在新版本中移除，  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而在 Type 7.x 版本中已經被定義為預設的 _doc，  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因為在 Elasticsearch 中一切皆是索引，不需要再額外劃分一層 Type 來分類，於是被當成過度設計而棄用  
&nbsp;  
|RDBMS&emsp;&emsp;&emsp;&emsp;|Elasticsearch&emsp;&emsp;|
|----|----|
|Database|Index|
|~~Table~~|~~Type~~|
|Row|Document|
|Column|Fields|
|Schema|Mapping|
|SQL|Query DSL|
&nbsp;  

用最簡單的方式，建立"儲存資料的容器"到"將資料儲存到實體位置"的實用角度上來切入 :

* RDBMS

  * 建資料庫
  * 建資料表
  * 設計欄位
  * 插入資料  

  ![RDBMSflow](../.vuepress/public/chapter2/elasticsearch/RDBMSflow.png)

* Elasticsearch

  * 建立索引 (Index)
  * 設計映射 (Mapping)，此步驟也不一定要有
  * 插入文件 (Document)

  ![ESflow](../.vuepress/public/chapter2/elasticsearch/ESflow.png)

Elasticsearch 一詞拆開來看就是 Elastic + Search，  
Elastic 有靈活的意思；Search 則是搜尋，  
為了讓使用者能靈活搜尋，Elasticsearch 在一些格式定義上相對靈活，  
不過要百分之百發揮 Elasticsearch 的搜尋速度還是建議將 "需搜尋的欄位" 的定義給確定下來  
不然官方就不會有文件是專門闡述 Mapping 這個部份了  
&nbsp;  
另一個 Elasticsearch 與 RDBMS 的巨大差異就是 <font color="#FF0000">Elasticsearch 不具備 Transaction 的概念</font>，  
但單個請求下是保有 ACID 特性，雖然講起來好像有點矛盾!?  
不過實際使用過 Elasticsearch API 之後，就會有比較深刻的了解 (前提是必須了解RDBMS ACID And Transaction)  
&nbsp;  
所以在真實的應用場景下 Elasticsearch 不會取代 RDBMS，反而是兩者併行相輔相成，  
RDBMS 負責插入與更新資料，再把資料同步到 Elasticsearch 進行搜索。

## Index

## Document

## Field

## Mapping

## Cluster

## Shard

## Replica
