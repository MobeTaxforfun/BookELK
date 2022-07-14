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
                      ['/Elasticstack01/buildenvironmet', 'Elastic stack 環境建置'],
                      ['/Elasticstack01/buildenvwithdockercompose', 'Elastic stack 環境建置(docker compose)'],
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
                      ['/Elasticsearch01/01_Introduction', '基本'],
                      ['/Elasticsearch01/01_Template',     '測試資料'],
                      ['/Elasticsearch01/02_Index',        'Index'],
                      ['/Elasticsearch01/02_Document',     'Document'],
                      ['/Elasticsearch01/02_Mapping',      'Mapping'],
                      ['/Elasticsearch01/02_Aliases',      'Index Aliases'],
                      ['/Elasticsearch01/02_Analyzer',     'Analyzer'],
                      ['/Elasticsearch01/02_AnalyzerCh',   'Analyzer 中文分詞'],
                      ['/Elasticsearch01/02_SearchAPI',    'Search API'],
                      ['/Elasticsearch01/02_Query',        'Query DSL'],
                      ['/Elasticsearch01/02_Aggregations', 'Aggregations'],
                      ['/Elasticsearch01/03_Cat',          'cat']
                    ]
                  },
                  {
                    title: 'kibana',
                    collapsable: true
                  },
                  {
                    title: 'Logstash',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                      ['/Logstash01/02_Filter_csv', 'Filter csv'],
                    ]
                  },
                  {
                    title: 'Beats',
                    collapsable: true,
                    children: [
                      ['/Beat01/01_BeatsIntro', 'Beats Introduction'],
                      ['/Beat01/01_Filebeat_IIS', 'Filebeat IIS'],
                      ['/Beat01/01_Filebeat_NGINX', 'Filebeat NGINX'],
                      ['/Beat01/01_Heartbeat', 'Heartbeat'],
                      ['/Beat01/01_Metricbeat_System_Win', 'Metricbeat system(windows)'],
                      ['/Beat01/01_Winlogbeat', 'Winlogbeat'],
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
    },
    markdown:{
      extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
      }
    }
}