# ELK Stack Intro

:closed_book: **What is ELK Stack**

* ELK Stack = E(Elasticsearch) + L(Logstash) + K(Kibana) + Beats + Other
* 本小節偏重於 Elasticsearch

:blue_book: Reference

* [Elastic 官方傳送門](https://www.elastic.co/)

## What is ELK Stack

* ELK 是三個開放原始碼專案的頭一字，分別是 E(`Elasticsearch`) + L(`Logstash`) + K(`Kibana`)
* Elasticsearch : 一個搜索引擎
* Logstash : 一個 "server‑side" 的資料轉換管道(pipeline) "stash" 有存起來的意思，所以 `Logstash` 可以讓資料經過 "pipeline" 處理後儲存到某個地方
* Kibana : 一個資料化可視平台
* Beats : 一個輕量級資料採集解決方案，相較於 `Logstash` 離"應用"距離更近

## Elasticsearch Basic

以下是來至 Wiki 的說明:  
&nbsp;  
![Es wiki](../.vuepress/public/chapter2/Intro/eswiki.png)
&nbsp;  
小結幾個重點:

* **搜尋引擎**

  當有人問 Elasticsearch 是什麼? 最簡單的回答就是四個字 : **搜尋引擎 (search engine)**

  > 搜尋引擎（英語：search engine）是一種資訊檢索系統，旨在協助搜尋儲存在電腦系統中的資訊。
  > 搜尋結果一般被稱為「hits」，通常會以表單的形式列出。
  > 網路搜尋引擎是最常見、公開的一種搜尋引擎，其功能為搜尋全球資訊網上儲存的資訊。  

  * 不管在什麼環境下當成功啟動 Elasticsearch 的那一刻，它會就會告訴你 **「You Know, for Search!」**
  * 搜尋結果一般被稱為「hits」，事實上使用 Elasticsearch 做搜尋，在搜尋結果中就是會有 **「hits」** 這個屬性欄位

* **基於 Lucene 庫的搜尋引擎**

  > Lucene是一套用於全文檢索和搜尋的開放原始碼程式庫，由Apache軟體基金會支援和提供。  
  > Lucene提供了一個簡單卻強大的應用程式介面，能夠做全文索引和搜尋。  
  > Lucene是現在最受歡迎的免費Java資訊檢索程式庫。  
  > From Wiki

  Elasticsearch 是基於 `Lucene` 封裝的應用，因為 Lucene 有些 API 再用於開發時，並不是那麼容易操作，  
  就像 Docker 跟容器技術一樣( Docker 的出現使容器技術更容易使用)，  
  Elasticsearch 讓使用者可以用更簡便的方式使用 Lucene 來進行全文檢索與作為搜索引擎使用  

  :notebook: 小知識 :
  * Lucene 的作者為 **Doug Cutting**
  * **Doug Cutting** 同時也是一項知名開源框架的作者 【 Hadoop 】

* **分散式、支援多租戶**
  
  Elasticsearch 是一個分散式的 `No SQL` 資料庫，Elasticsearch 自帶分散式的架構可以輕鬆實現水平擴容，  
  藉由搭建 Elasticsearch Cluster，在 Cluster 中啟動各種不同功能的結點 (Node)，可以任意搭建自己的分散式架構  
  Multi-Tenancy(多租戶)方面在 Elasticsearch 常見的策略有 Cluster per tenant ; Index per tenant ; Tenant-based routing  
  或者是**百度**有自己擴展的 Elasticsearch `BES`，可以參考看看

* **全文搜尋引擎**
* **HTTP Web介面和無模式JSON文件**
* **Elasticsearch是用Java開發的**
* **開源軟體**
* **官方客戶端在Java、.NET（C#）、PHP、Python、Apache Groovy、Ruby和許多其他語言中都是可用的**
* **根據DB-Engines的排名顯示，Elasticsearch是最受歡迎的企業搜尋引擎**

## Index 索引

## Document 文件

## Field

## Mapping (翻譯不能)

## Index Aliases

## Analyzer

## Shard

## Replica
