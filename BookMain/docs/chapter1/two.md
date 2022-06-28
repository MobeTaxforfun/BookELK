# Elastic stack 環境建置(docker compose)

此篇用 docker compose 搭建 Elastic stack ，達到一鍵啟動 Elastic stack 單節點環境的效果，需要達到的目標如下

* 編寫專用的 docker compose yml 啟動服務
* 將 Elastic stack 各項服務資料持久化到硬碟上
* 將 Elastic stack 各項 Config 暴露到實體路徑
* 詳細設定各種參數
* 因為各種莫名奇妙的原因版號變成 7.17.1 了，~~懶得改回 7.17.4...~~

架構參考至原文傳送門 [The Elastic stack (ELK) powered by Docker and Compose.](https://github.com/deviantony/docker-elk)

## Docker Compose 檔案結構

整個 ELK Stack 啟動文件如下，每個服務皆用一個資料夾維護其需要持久化的檔案分別為 elasticsearch;filebeat;kibana;logstash;nginx :

```Text
|
├── elasticsearch                       # elasticsearch
│   ├── config                          # elasticsearch 設定文件
│   │   └── elasticsearch.yml
│   ├── data                            # 主要持久化資料的地方
│   └── plugins                         # 預留要掛插件的資料夾
|
├── filebeat                            # filebeat
│   ├── config                          # filebeat 設定文件
│   │   └── filebeat.yml
|   └── modules                         # filebeat modules 設定文件
|       └── nginx.yml
|
├── kibana                              # kibana 
│   └── config                          # kibana 設定文件
│       └── kibana.yml
|
├── logstash                            # logstash
│   ├── config                          # logstash 設定文件
│   │   └── logstash.yml
│   └── pipeline                        # logstash pipeline 設定文件
│       └── logstash.conf
|
├── nginx                               # NGINX
│   ├── conf.d                          # 預計放 Config 的地方
│   ├── log                             # nginx log > filebeat 主要會指向這邊並擷取資料
│   |   ├── access.log
│   |   └── error.log
|   └── html                            # 放一些預設的靜態頁面以方便測試
|
└── docker-compose.yml                  # docker-compose up -d 在docker中執行上述所有服務
```

## Docker Compose 啟動文件

```YAML
version: '3.8'
services:
  elasticsearch01:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.1
    container_name: myelasticsearch01
    environment:
      - "discovery.type=single-node"
    restart: on-failure
    ports:
      - 9200:9200
      - 9300:9300
    volumes:
      - type: bind
        source: ./elasticsearch/config/elasticsearch.yml
        target: /usr/share/elasticsearch/config/elasticsearch.yml
      - ./elasticsearch/data:/usr/share/elasticsearch/data
      - ./elasticsearch/plugins:/usr/share/elasticsearch/plugins
    networks:
      - elknetwrok

  kibana:
    image: docker.elastic.co/kibana/kibana:7.17.1
    container_name: mykibana
    environment:
      - "ELASTICSEARCH_HOSTS=http://myelasticsearch01:9200"
    ports:
      - 5601:5601
    volumes:
        - type: bind
          source: ./kibana/config/kibana.yml
          target: /usr/share/kibana/config/kibana.yml
    networks:
      - elknetwrok

  logstash:
    image: docker.elastic.co/logstash/logstash:7.17.1
    container_name: mylogstash
    ports:
      - 5044:5044
      - 9600:9600
    volumes:
      - type: bind
        source: ./logstash/config/logstash.yml
        target: /usr/share/logstash/config/logstash.yml
      - type: bind
        source: ./logstash/pipeline/logstash.conf
        target: /usr/share/logstash/pipeline/logstash.conf
    networks:
      - elknetwrok

  nginx:
    image: nginx:latest
    container_name: mynginx
    ports:
      - 7414:80
    volumes:
      - ./nginx/log/nginx:/var/log/nginx
      - ./nginx/html:/usr/share/nginx/html
    networks:
      - elknetwrok

  filebeat:
    image: docker.elastic.co/beats/filebeat:7.17.1
    user: root
    container_name: myfilebeat
    command: filebeat -e -strict.perms=false
    volumes:
      - type: bind
        source: ./filebeat/config/filebeat.yml
        target: /usr/share/filebeat/filebeat.yml
      - ./nginx/log/nginx:/var/log/nginx
    networks:
      - elknetwrok
    depends_on:
      - elasticsearch
      - logstash
      - kibana
      - nginx

networks:
  elknetwrok:
    name: elknetwrok
```
