# Elasticsearch Mapping

在 Index 中的 Mapping 用來定義索引中的欄位名稱與類型，相當於關聯型數據庫中創建Table時指定的 Schema，但在 Elasticsearch 並不一定要指定 Index Mapping 才能儲存資料 Elasticsearch 其特有的 Dynamic Mapping 機制也可以根據鍵入的資料來生成相對應的 Mapping field

## 如何使用 Index Mapping

在創建索引時;透過 "mappings" 來指定，Field data Type 可以看這邊 [官方文件](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html)

```sh
PUT /my-user-000001
{
  "mappings": {
    "properties": {
      "age":    { "type": "integer" },  
      "email":  { "type": "keyword"  }, 
      "name":   { "type": "text"  }     
    }
  }
}
```

* age 為 integer : 毫無反應；就是一個整數
* email 為 keyword : 若指定為 keyworld，將不會享有全文搜索的特性，單單視為普通參數做使用
    >Avoid using keyword fields for full-text search. Use the text field type instead.
* name 為 text : 若指定為 text，這個 Field 將會經過 `analysis` 分詞轉換為全文索引 analysis 是 Elasticsearch 中一個非常重要機制
    > A field to index full-text values, such as the body of an email or the description of a product. These fields are analyzed, that is they are passed through an analyzer to convert the string into a list of individual terms before being indexed.

