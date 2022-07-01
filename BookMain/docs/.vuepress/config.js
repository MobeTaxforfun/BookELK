module.exports = {
    title:'我的 Elastic Stack 筆記',
    description:'已經到了不記下來就會忘記的年紀了，紀錄一下自身學習 Elasticsearch;Logstash;Kibana;Beats 的一些歷程',
    base: '/BookELK/',
    // theme: "book",
    themeConfig: {
        locales:{
            '/':{
                sidebar: [
                  {
                    title: 'Elastic stack 實用篇',
                    collapsable: false,
                    children: [
                      ['/chapter1/buildenvironmet', 'Elastic stack 環境建置'],
                      ['/chapter1/buildenvwithdockercompose', 'Elastic stack 環境建置(docker compose)'],
                    ]
                  },
                  {
                    title: 'Elasticsearch 入門',
                    collapsable: false,
                    children: [
                      ['/chapter2/01Elasticsearchintroduction', 'Elasticsearch 基本'],
                      ['/chapter2/01ElasticsearchTemplate',     'Elasticsearch 測試資料'],
                      ['/chapter2/02ElasticsearchBasicIndex',   'Elasticsearch Index'],
                      ['/chapter2/02ElasticsearchMapping',      'Elasticsearch Mapping'],
                      ['/chapter2/02ElasticsearchAliases',      'Elasticsearch Aliases'],
                      ['/chapter2/03Elasticsearchcat',          'Elasticsearch cat']
                    ]
                  }
                  //,
                  // {
                  //   title: 'Elastic stack 理論篇(施工中)',
                  //   collapsable: false,
                  //   children: [
                  //     ['/chapter3/one', '第一小節(施工中)'],
                  //     ['/chapter3/two', '第二小節(施工中)'],
                  //   ]
                  // }
                ]
            }
        }
    }
}