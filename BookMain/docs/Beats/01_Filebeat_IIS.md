# Beats Heartbeat

filebeat.modules:

- module: iis
  access:
    enabled: true
    #var.paths: ["C:/inetpub/logs/LogFiles/*/*.log"]
    var.paths: ["D:/DataRepository/IIS/6/u_ex220609.log"]
  error:
    enabled: false


output.elasticsearch:
  hosts: ["http://localhost:9200/"]
  pretty: true
  index: "api-access-2022-06-09"
# output.logstash:
#   hosts: ["mylogstash:5044"]

# output.console:
#   pretty: true

setup.template:
  name: 'api-access'
  pattern: 'api-access-*'
  enabled: false

setup.ilm.enabled: false
logging.metrics.enabled: false  