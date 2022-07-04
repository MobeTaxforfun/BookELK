# Elasticsearch 中文分詞

在 Elasticsearch 中，中文分詞是一個非常特殊的存在，中文幾乎是不可能靠著原生的分析器做到合理的斷詞，所以我們必須借助一些其他的 Plugin 來幫助我們處理中文斷詞的問題，以下紀錄一下安裝以及使用 IK Analysis 的過程

[ik 分詞器](https://github.com/medcl/elasticsearch-analysis-ik)

## 安裝 analysis-ik

## 安裝  analysis-ik 繁中

## 使用中文分詞

```JSON
PUT /ikanalyzertest/_mapping
{
  "properties":{
    "title":{
      "type":"text",
      "analyzer":"ik_max_word"
    }
  }
}
```

```JSON
GET /_analyze/
{
  "analyzer": "ik_smart",
  "text": "憧憬是距離理解最遙遠的感情"
}
```

## 字庫

## 結巴分詞

待續
