# Discord bot

```JSON
  GET gossiping-v1/_mapping
```

```JSON
PUT gossiping-v1
{
    "mappings": {
        "properties": {
        "question":{
            "type": "text",
            "analyzer": "ik_max_word",
            "fields": {
                "keyword":{
                    "type":"keyword"
                }
          }
        },
        "answer":{
            "type": "text",
            "analyzer": "ik_max_word",
            "fields": {
            "keyword":{
                "type":"keyword"
            }
          }
        }
      }
    }
}
```
