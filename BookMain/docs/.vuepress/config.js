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
                    title: 'Elastic stack',
                    collapsable: true,
                    children: [
                      ['/chapter1/buildenvironmet', 'Elastic stack 環境建置'],
                      ['/chapter1/buildenvwithdockercompose', 'Elastic stack 環境建置(docker compose)'],
                    ]
                  },
                  {
                    title: 'Elastic Stack Demo',
                    collapsable: true
                  },
                  {
                    title: 'Elasticsearch',
                    collapsable: true,
                    sidebarDepth: 2, 
                    children: [
                      ['/chapter2/01_Introduction', '基本'],
                      ['/chapter2/01_Template',     '測試資料'],
                      ['/chapter2/02_Index',        'Index'],
                      ['/chapter2/02_Document',     'Document'],
                      ['/chapter2/02_Mapping',      'Mapping'],
                      ['/chapter2/02_Aliases',      'Index Aliases'],
                      ['/chapter2/02_Analyzer',     'Analyzer'],
                      ['/chapter2/02_AnalyzerCh',   'Analyzer 中文分詞'],
                      ['/chapter2/02_SearchAPI',    'Search API'],
                      ['/chapter2/02_Query',        'Query DSL'],
                      ['/chapter2/02_Aggregations', 'Aggregations'],
                      ['/chapter2/03_Cat',          'cat']
                    ]
                  },
                  {
                    title: 'kibana',
                    collapsable: true
                  },
                  {
                    title: 'Logstash',
                    collapsable: true
                  },
                  {
                    title: 'Filebeat ',
                    collapsable: true
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
    },
    markdown:{
      extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
      }
    }
}