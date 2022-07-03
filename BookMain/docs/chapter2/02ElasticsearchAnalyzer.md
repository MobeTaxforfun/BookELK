# Elasticsearch Analyzer

Elasticsearch 中的分析器，是為什麼 Elasticsearch 能夠作為搜尋引擎的關鍵，在將 Document 加入 index 前，會先透過 Analyzer 將 Document 進行拆解(過濾、分詞)，並建立反向索引，以便 Elasticsearch 透過反向索引進行字詞搜尋

* [官方API文件](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-analyze.html)

## 基本 Analyzer

使用一個簡單的範例來看看 Elasticsearch 是如何分詞的，先將 The Old Man and the Sea 插入索引中

```sh
POST book/_doc/1
{
    "title":"The Old Man and the Sea"
}
```

接著使用下列API，查詢分詞結果

```JSON
GET <index>/_analyze
{
  "field": "欄位名",
  "text": "內容"
}
```

```sh
GET book/_analyze
{
  "field": "title",
  "text": "The Old Man and the Sea"
}
```

elasticsearch 中預設的 analyzer 是 `"analyzer" : "standard"`，會將所有的字詞進行拆分，結果如下:

```JSON
{
    {
        "tokens" : [
            {
            "token" : "the",
            "start_offset" : 0,
            "end_offset" : 3,
            "type" : "<ALPHANUM>",
            "position" : 0
            },
            {
            "token" : "old",
            "start_offset" : 4,
            "end_offset" : 7,
            "type" : "<ALPHANUM>",
            "position" : 1
            },
            {
            "token" : "man",
            "start_offset" : 8,
            "end_offset" : 11,
            "type" : "<ALPHANUM>",
            "position" : 2
            },
            {
            "token" : "and",
            "start_offset" : 12,
            "end_offset" : 15,
            "type" : "<ALPHANUM>",
            "position" : 3
            },
            {
            "token" : "the",
            "start_offset" : 16,
            "end_offset" : 19,
            "type" : "<ALPHANUM>",
            "position" : 4
            },
            {
            "token" : "sea",
            "start_offset" : 20,
            "end_offset" : 23,
            "type" : "<ALPHANUM>",
            "position" : 5
            }
        ]
    }
}
```

也可以直接指定 Analyzer 做測試

```JSON
GET _analyze
{
    "analyzer": "分析器種類",
    "text" : "內容"
}
```

```JSON
GET _analyze
{
    "analyzer": "standard",
    "text" : "The Old Man and the Sea"
}
```

## 對Index Mapping Analyzer

可以在創建 Index 時 Mapping 自己想要的 Analyzer，但要注意的是 Mapping 後的欄位就不能更改其 Analyzer 了，除非使用 Reindex
