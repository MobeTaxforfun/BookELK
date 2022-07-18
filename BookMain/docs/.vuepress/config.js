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
                    title: 'Elasticsearch',
                    collapsable: true,
                    sidebarDepth: 2, 
                    children: [
                      ['/Elasticsearch/01_Introduction', '基本'],
                      ['/Elasticsearch/01_Template',     '測試資料'],
                      ['/Elasticsearch/02_Index',        'Index'],
                      ['/Elasticsearch/02_Document',     'Document'],
                      ['/Elasticsearch/02_Mapping',      'Mapping'],
                      ['/Elasticsearch/02_Aliases',      'Index Aliases'],
                      ['/Elasticsearch/02_Analyzer',     'Analyzer'],
                      ['/Elasticsearch/02_AnalyzerCh',   'Analyzer 中文分詞'],
                      ['/Elasticsearch/02_SearchAPI',    'Search API'],
                      ['/Elasticsearch/02_Query',        'Query DSL'],
                      ['/Elasticsearch/02_Aggregations', 'Aggregations'],
                      ['/Elasticsearch/03_Cat',          'cat']
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
                      ['/Logstash/02_Filter_csv', 'Filter csv'],
                    ]
                  },
                  {
                    title: 'Beats',
                    collapsable: true,
                    children: [
                      ['/Beats/BeatsIntro', 'Beats Introduction'],
                      ['/Beats/01_Filebeat_IIS', 'Filebeat IIS'],
                      ['/Beats/01_Filebeat_NGINX', 'Filebeat NGINX'],
                      ['/Beats/01_Heartbeat', 'Heartbeat'],
                      ['/Beats/01_Metricbeat_System_Win', 'Metricbeat system(windows)'],
                      ['/Beats/01_Winlogbeat', 'Winlogbeat'],
                    ]
                  },
                  {
                    title: 'Demo',
                    collapsable: true,
                    children: [
                      ['/Example/DiscordGossip','Discord bot']
                    ]
                  },
                  {
                    title: 'Elastic stack',
                    collapsable: true,
                    children: [
                      ['/Elasticstack/buildenvironmet', 'Elastic stack 環境建置'],
                      ['/Elasticstack/buildenvwithdockercompose', 'Elastic stack 環境建置(docker compose)'],
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