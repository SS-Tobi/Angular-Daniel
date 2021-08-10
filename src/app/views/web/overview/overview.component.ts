import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Utils} from '../../../shared/utils';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  chartLineOption1: EChartOption;

  analytics_enabled = false;

  summary_stats;
  chart_data;
  chart_headers;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    /*
    "ga:avgSessionDuration": "60.48913043478261"
"ga:bounceRate": "66.30434782608695"
"ga:bounces": "61"
"ga:hits": "182"
"ga:sessionDuration": "5565.0"​
"ga:sessions": "92"
     */



    if(this.route.snapshot.data.overview.status=='success'){
      this.analytics_enabled = true;
      this.summary_stats = this.route.snapshot.data.overview.data;

      this.chart_data = Utils.parseAnalyticsChartData(
          this.route.snapshot.data.overview.chart_data);

      this.chart_headers = this.route.snapshot.data.overview.chart_headers;

      this.chartLineOption1 = {
        ...echartStyles.lineFullWidth, ...{
          xAxis: {
            type: 'time',
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: (function(value){
                return value;
              })
            }
          },
          series: [{
            name: 'Hits',
            data: this.chart_data.hits,
            ...echartStyles.smoothLine,
            markArea: {
              label: {
                show: true
              }
            },
            areaStyle: {
              color: 'rgba(102, 51, 153, .2)',
              origin: 'start'
            },
            lineStyle: {
              color: '#663399',
            },
            itemStyle: {
              color: '#663399'
            }
          },
            {
              name: 'Sessions',
              data: this.chart_data.sessions,
              ...echartStyles.smoothLine,
              markArea: {
                label: {
                  show: true
                }
              },
              areaStyle: {
                color: 'rgba(255, 193, 7, 0.2)',
                origin: 'start'
              },
              lineStyle: {
                color: '#FFC107'
              },
              itemStyle: {
                color: '#FFC107'
              }
            }]
        }
      };
      this.chartLineOption1.xAxis.data = this.chart_data.dates;
    }


  }

}
