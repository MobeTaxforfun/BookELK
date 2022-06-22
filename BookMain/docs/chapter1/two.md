# Elastic stack 環境建置(docker compose)

此篇用 docker compose 搭建 Elastic stack ，達到一鍵啟動 Elastic stack 單節點環境的效果，需要達到的目標如下

* 編寫專用的 docker compose yml 啟動服務
* 將 Elastic stack 各項服務資料持久化到硬碟上
* 將 Elastic stack 各項 Config 暴露到實體路徑
* 詳細設定各種參數

架構參考至原文傳送門 [The Elastic stack (ELK) powered by Docker and Compose.](https://github.com/deviantony/docker-elk)

## Docker Compose 啟動文件

```Text
|
├── elasticsearch
│   ├── config
│   │   └── elasticsearch.yml
├── filebeat
│   ├── config
│   │   └── filebeat.yml
├── kibana
│   ├── config
│   │   └── kibana.yml
├── logstash
│   ├── config
│   │   └── logstash.yml
│   └── pipeline
│       └── nginx.conf
├── nginx
│   ├── config
│   │   └── site.conf
│   └── log
│       ├── access.log
│       └── error.log
├── docker-compose.yml
├── LICENSE
└── README.md

```
