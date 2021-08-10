import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
  selector: 'app-review',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  googleBusinessReview: EChartOption;
  yelpReview: EChartOption;

  constructor() { }

  ngOnInit() {
    this.googleBusinessReview = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [
            1,6,8,10,12,10,8,4
          ],
          lineStyle: {
            color: '#8ec63f',
            width: 3,
            ...echartStyles.lineShadow
          },
          label: { show: true, color: '#8ec63f' },
          type: 'line',
          smooth: true,
          itemStyle: {
            borderColor: '#8ec63f'
          }
        }]
      }
    };
    this.googleBusinessReview.xAxis.data = [15,16,17,18,19,20,21,22];
    this.googleBusinessReview.yAxis.data = [0,1,2,3,4,5];

    this.yelpReview = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [
            1,4,5,6,8,10,11,14
          ],
          lineStyle: {
            color: '#66339c',
            width: 3,
            ...echartStyles.lineShadow
          },
          label: { show: true, color: '#66339c' },
          type: 'line',
          smooth: true,
          itemStyle: {
            borderColor: '#66339c'
          }
        }]
      }
    };
    this.yelpReview.xAxis.data = [15,16,17,18,19,20,21,22];
    this.yelpReview.yAxis.data = [0,1,2,3,4,5];

  }

}
