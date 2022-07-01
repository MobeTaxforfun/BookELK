# Elasticsearch 一個放測試資料的地方

這個地方用來放一些測試用的資料

## 建立測試 Index

到博客來隨便複製一些書籍資料

```sh
    PUT bookstore/_doc/1
    {
      "title":"對你說的謊【博客來獨家限量贈：番外篇】",
      "author" : "尾巴",
      "publisher" : "悅知文化",
      "publishTime" : "2022-07-04",
      "language" : "繁體中文",
      "price" : 340,
      "introduction" : "博客來、金石堂___青春文學暢銷作家．尾巴 全新校園揪心篇章即便此刻的我並不認識那個人，但過去我的傷痛，卻像是穿越了時空，直直地傳達給——我所遺忘的，去年的你。",
      "country" : "台灣、蘭嶼、綠島、澎湖、金門、馬祖",
      "ISBN" : "9789865102258",
      "tag":  [ "文學小說","華文創作","小說"],
      "spec" : {
        "Bookbinding" : "平裝",
        "page" : 320,
        "grade":"普通級"
      }
    }
```

```sh
    PUT bookstore/_doc/2
    {
        "title":"如無頭作祟之物【博客來獨家：作家親簽扉頁．限量插畫明信片】",
        "author" : "三津田信三",
        "publisher" : "獨步文化",
        "publishTime" : "2022-07-02",
        "language" : "繁體中文",
        "price" : 340,
        "introduction" : "「本格推理小說BEST OF BEST 1997-2016」第1名 獨走時代巔峰的經典傑作！恐怖推理小說巨匠——三津田信三「刀城言耶系列」集大成，不可不讀的生涯代表作！",
        "country" : "台灣、蘭嶼、綠島、澎湖、金門、馬祖",
        "ISBN" : "9786267073643",
        "tag":  [ "文學小說","懸疑/推理小說","日本懸疑/推理小說"],
        "spec" : {
            "Bookbinding" : "平裝",
            "page" : 488,
            "grade":"普通級"
        }
    }
```

```sh
    PUT bookstore/_doc/3
    {
        "title":"男孩、鼴鼠、狐狸與馬",
        "author" : "查理‧麥克斯",
        "publisher" : "天下雜誌",
        "publishTime" : "2022-01-26",
        "language" : "繁體中文",
        "price" : 699,
        "introduction" : "即使被生活所傷，也不要忘記你值得被愛，你還有能力愛！席捲全球現象級療癒系繪本，繁體中文版暖心上市！紐約時報暢銷書‧全球銷售破450萬冊",
        "country" : "台灣、蘭嶼、綠島、澎湖、金門、馬祖",
        "ISBN" : "9789863987284",
        "tag":  [ "心理勵志","個人成長","心靈成長"],
        "spec" : {
            "Bookbinding" : "平裝",
            "page" : 128,
            "grade":"普通級"
        }
    }
```

## 刪除測試

`DELETE bookstore`

## 查詢 Index

`GET _cat/indices?v`

## 查詢 Index 內所有資料

```sh
GET bookstore/_search
{
    "query": {
        "match_all": {}
    }
}
```
