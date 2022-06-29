# Elasticsearch cat

cat 為 Compact and aligned text (CAT) APIs 的縮寫，
在 elasticsearch 中大多用於管理、監控或部屬，直接下_cat 可查詢可愛的貓貓怎麼用

Request `GET /_cat`

Result:

```sh
=^.^=
/_cat/allocation
/_cat/shards
/_cat/shards/{index}
/_cat/master
...下略
```

之後會把用到的慢慢補過來

## 我的貓

* `/_cat/indices` : 查所有索引
