# Beats Introduction

>Beats is a free and open platform for single-purpose data shippers. They send data from hundreds or thousands of machines and systems to Logstash or Elasticsearch.

Beats 為 Elastic Stack 中的一員，在其中主要負責資料採集與資料推送；Beats 是一個以GO語言開發的開源(Open source)應用，作為一個輕量級的應用 Beats 能輕鬆採集系統中的各項資料，並將資料傳送至 Logstash 或 Elasticsearch 上

:blue_book: Reference

* [Beats: Data Shippers for Elasticsearch](https://www.elastic.co/beats/)
* [Beats Github](https://github.com/elastic/beats)

## The Beats family

進到 Beats 官方頁面可以看到有許多種類的 Beat，這些 Beat 分別針對不同的環境與不同的數據進行採集

## Filebeat

## Metricbeat

## Packetbeat

## Winlogbeat

## Auditbeat

## Heartbeat

## Functionbeat

## Other

假設上面的 Beats 都不符合需求的話其實也可以擴展自己的 Beat，每個 Beat 皆是以 libbeat 這個 Lib 為基礎來開發，所以真的需要高度客製化也是可以自製自己的 Beats，[list of community Beats](https://www.elastic.co/guide/en/beats/libbeat/current/community-beats.html) 此處收錄一些 Beats 擴展的相關討論社群
