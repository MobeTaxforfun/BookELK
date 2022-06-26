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
                      ['/chapter1/one', 'Elastic stack 環境建置'],
                      ['/chapter1/two', 'Elastic stack 環境建置(docker compose)'],
                    ]
                  },
                  {
                    title: 'Elasticsearch 入門',
                    collapsable: false,
                    children: [
                      ['/chapter2/one', 'Elasticsearch 基本使用'],
                      ['/chapter2/two', '第二小節(施工中)'],
                    ]
                  },
                  {
                    title: 'Elastic stack 理論篇(施工中)',
                    collapsable: false,
                    children: [
                      ['/chapter3/one', '第一小節(施工中)'],
                      ['/chapter3/two', '第二小節(施工中)'],
                    ]
                  }
                ]
            }
        }
    }
}