# Elasticsearch Index

簡單過一下索引的API，看教學的時候才不會慌張

## Index APIs

今天的我看官方文件了嗎?請加油好嗎 文件走這裡
[https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices.html)

### Create index API

* 創建索引

    Request: `PUT /<index>`

    ```sh
    PUT /book-index-0001
    ```

    Result:

    ```JSON
    {
        "acknowledged" : true,
        "shards_acknowledged" : true,
        "index" : "book-index-0001"
    }
    ```

* 可以透過 Index body 設定的選項

  * aliases 別名;傳送門
  * mappings 映射;概念類似SQL中的Schema;傳送門
  * settings 索引設置 replicas; shard;
  
  簡單的使用

    ```sh
    PUT /book-index-0002
    {
        "settings": {
            "number_of_shards": 2,
            "number_of_replicas": 2
        },
        "mappings": {
            "properties": {
                "title": { "type": "object" }
            }
        }
    }
    ```

    Result:

    ```JSON
    {
        "acknowledged" : true,
        "shards_acknowledged" : true,
        "index" : "book-index-0002"
    }
    ```

* 索引命名原則
  * Lowercase only(只能小寫)
  * Cannot include \, /, *, ?, ", <, >, |, ` ` (space character), ,, #(不能包含這些字元)
  * Cannot start with -, _, +
  * Cannot be . or ..
  * Cannot be longer than 255 bytes (note it is bytes, so multi-byte characters will count towards the 255 limit faster)(涉及底層設計不能超過 255 bytes)

### Delete index API

* 刪除索引

    Request: `DELETE /<index>`

    >To delete all indices, use _all or * . To disallow the deletion of indices with _all or wildcard expressions, set the action.destructive_requires_name cluster setting to true.

    可以使用 _all 或 * 刪除所有索引，可以在某個設定中設定禁止此類型操作

    ```sh
    DELETE /book-index-0002
    ```

    Result:

    ```JSON
    {
        "acknowledged" : true
    }
    ```

### Get index API

* 檢視某個索引
  
  Request: `GET /<target>`

    ```sh
    GET /book-index-0001
    ```

    Result:

    ```JSON
    {
        "book-index-0001" : {
            "aliases" : { },
            "mappings" : { },
            "settings" : {
                "index" : {
                    "routing" : {
                        "allocation" : {
                            "include" : {
                            "_tier_preference" : "data_content"
                            }
                        }
                    },
                    "number_of_shards" : "1",
                    "provided_name" : "book-index-0001",
                    "creation_date" : "1656515329424",
                    "number_of_replicas" : "1",
                    "uuid" : "7DdAjOwdSlmXGuX7dKp_9g",
                    "version" : {
                        "created" : "7170199"
                    }
                }
            }
        }
    }
    ```

### Listed indices

* 列出索引
  
  使用 cat API Request: `GET /_cat/indices`
    ```sh
        yellow open mybeat-2022.06.27               9SdlB48_RaKldQRgBQhKhg 1 1  7    0   243kb   243kb
        green  open .geoip_databases                1cJrOdYzQruU1fc_A5o3Hw 1 0 40   77  75.9mb  75.9mb
        yellow open mybeat-2022.06.28               fItzFNKkRSiLJzWEFSxMzg 1 1  2    0  69.4kb  69.4kb
        green  open .apm-custom-link                UE04kRu1Q32E23P9o2aHWg 1 0  0    0    226b    226b
        yellow open book-index-0001                 7DdAjOwdSlmXGuX7dKp_9g 1 1  0    0    226b    226b
        green  open .apm-agent-configuration        5H2_N1KXQEyAczk8Szpq5w 1 0  0    0    226b    226b
        yellow open movie-index-000001              Y29WUJ1JRZurwFxrCWETBA 1 1  0    0    226b    226b
        green  open .kibana_task_manager_7.17.1_001 fG9VCeHmTS6i5zrUAPzj4A 1 0 17 5910 879.9kb 879.9kb
        green  open .kibana_7.17.1_001              h3kEcPD0RhWmRKYdSlATOQ 1 0 37    3   4.7mb   4.7mb
        yellow open mybeat-2022.06.26               mEBdUe-wRum4gI-VxhSsuA 1 1  4    0 138.6kb 138.6kb
        green  open .tasks                          kh3_uU9iQJmofYrXL7DslQ 1 0 16    0  55.7kb  55.7kb
    ```

### Rename Index

基本上滿麻煩的先使用 Clone Index API 再把原來的 Delete Index API