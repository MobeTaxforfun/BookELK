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

* Elasticsearch : Elasticsearch 相關使用心得
* kibana : Kibana 相關使用心得
* Logstash : Logstash 相關使用心得
* Filebeat : Filebeat 相關使用心得
* Elastic stack : 總體ELK環境建置
* Demo : 存放一些小 Demo 的地方

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
