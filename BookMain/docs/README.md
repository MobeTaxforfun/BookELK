# 我的 Elastic Stack 筆記

一個不成材的工程師  
已經到了不記下來就會忘記的年紀了  
紀錄一下自身學習 Elasticsearch; Logstash; Kibana; Beats 等等 Elastic Stack 的一些歷程  
筆記轉移中 ∠( ᐛ 」∠)＿

## Elastic Stack

![elasticsearch_host](./.vuepress/public/elastic-logo.svg)

官方網站傳送門 ["https://www.elastic.co/"]("https://www.elastic.co/")

## Introduction

:blue_book: 章節概述

* Elastic stack : 總體ELK環境建置
* Elastic Stack Demo : 存放一些小 Demo 的地方
* Elasticsearch : Elasticsearch 相關使用心得
* kibana : Kibana 相關使用心得
* Logstash : Logstash 相關使用心得
* Filebeat : Filebeat 相關使用心得

:wrench: 相關建議

* Docker 基本使用
* Linux 基本使用
* 對 NoSQL 有一定的了解，並認同 NoSQL 提供了不同的解決方案

```C#
console.log("Hello Elasticsearch and You Know, for Search !!");
```

Thank you!

## Todo

* 環境
  - [X] 初階 Elasticsearch With Docker
  - [X] 初階 Elasticsearch With DockerCompose
* DEMO
  - ~~[ ] 拿故宮 OpenAPI 做尋引擎~~(棄案 API權限請不下來 ==..)
    - [ ] ~~申請故宮 Open data~~
    - [ ] ~~抓取資料~~
    - [ ] ~~將資料入庫~~
    - [ ] ~~使用 Elasticsearch 進行持久化~~
    - [ ] ~~特定欄位實踐全文搜索~~
  - [ ] 以 Elasticsearch 為基礎的 Discord bot 語意機器人
    - [ ] ~~Dcard 爬蟲~~( 先暫緩爬到IP被擋.. 懶得跳 Proxy..)
    - [X] PTT八卦版訓練資料匯入
    - [X] discord bot
    - [X] 集成 .net core 開發對答服務
  - [ ] 比較 2000 萬筆資料下 SQL 與 Elasticsearch 的搜尋速度
    - [X]  SQL 資料建置
      - [ ] 產生假資料
    - [ ]  Elasticsearch 資料建置
    - [ ]  設計比較實驗
* Elasticsearch
  - [X] Mapping
  - [X] Index Aliases
  - [X] Analyzer
    - [ ] Custom Analyzer
  - [X] 中文 Analyzer
    - [X] IK中文
    - [ ] 結巴中文
  - [ ] Search
    - [ ] Full Text Query
    - [ ] Term Query
* Kibana
  - [ ] Simple Data Dashboards
    - [X] 資料匯入
* Logstash
  - [X] Load CSV File into Elasticsearch
* Beat
  - [X] Filebeat NGINX
  - [ ] Filebeat IIS
  - [ ] Heartbeat Redis
  - [ ] Metricbeat
  - [ ] Winlogbeat
* 未來式
  - [ ] 理解 Elastic Common Schema
