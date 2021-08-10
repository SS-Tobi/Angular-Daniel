import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {echartStyles} from "../../../shared/echart-styles";
import { EChartOption } from 'echarts';
import {SocialService} from "../../../shared/services/social/social.service";
import {Utils} from "../../../shared/utils";
import {AnalyticsService} from "../../../shared/services/web/analytics.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private socialService: SocialService,
      private analyticsService: AnalyticsService
  ) { }

  public user = {
    _id:'',
    full_name:'',
    email:'',
    added_on:'',
    role:''
  };

  googleBusinessReview: EChartOption;
  yelpReview: EChartOption;
  profiles:any = [];
  profileData = {};

  chartLineOption1: EChartOption;

  analytics_enabled = false;

  summary_stats;
  chart_data;
  chart_headers;

  ngOnInit() {
    this.user = this.route.snapshot.data.user[0];
    this.reviewCharts();
    this.socialMediaData();
    this.loadWebOverview();
  }

  private reviewCharts() {
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

  private socialMediaData() {
    this.socialService.getUserSocialProfiles(this.user._id).subscribe(
        res=>{
          this.profiles = res;
          if(this.profiles.length > 0){
            this.profiles.forEach((value)=>{
              this.profileData[value.type] = value.stats;
            })
          }
          console.log("PD",this.profileData);
        }
    );
  }

  private loadWebOverview() {

    this.analyticsService.getUserOverview(this.user._id).subscribe(
        res=>{
          if(res.status=='success'){
            this.analytics_enabled = true;
            this.summary_stats = res.data;

            this.chart_data = Utils.parseAnalyticsChartData(
                res.chart_data);

            this.chart_headers = res.chart_headers;

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
    );


  }
}
