# Elasticsearch SearchAPI

在 Elasticsearch 體系中若要搜尋已經入檔的資料，我們需要透過 SearchAPI 結合 Elasticsearch 的特色語法 Query DSL 來進行查詢 (其實也有 SQL API，不過基於人類的好奇心，還是先從 DSL 入門吧)，本章記錄自己閱讀 Elasticsearch 搜尋相關文件的小整理(全部真的太多了...搜尋很大一章)

:blue_book: Reference

* [Search APIs 文件](https://www.elastic.co/guide/en/elasticsearch/reference/current/search.html)
* [Query DSL 文件](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)
* [URI Search](https://www.elastic.co/guide/en/elasticsearch/reference/7.4/search-uri-request.html)
* [測試資料來源自官方的 github 請安心食用](https://github.com/elastic/elasticsearch/blob/v6.8.18/docs/src/test/resources/accounts.json)

## Elasticsearch 資料搜尋

Elasticsearch 中的資料搜尋的請求模式，基本上可以分成兩種模式:

* 以 `GET` 為主，以 `Uri` + `Parameter` 發送查詢請求
* 以 `GET` 或 `POST` 為主要 Method，以 `Uri` + `Request body` 發送查詢請求

若以資料成面區分也分

* Query 一般查詢
* aggregations

通常網路社群上使用的大多都是使用第二種，但第一種也簡單過一下知道怎麼用，畢竟有時候如果只是一些簡單的查詢也是挺方便的，順便餵一下測試資料

## 準備測資

* 官方測資
