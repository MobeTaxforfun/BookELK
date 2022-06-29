# Elasticsearch index 基本操作

簡單過一下索引的API，看教學的時候才不會慌張

## Index APIs

### Create index API

* 最簡單的創建索引

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
