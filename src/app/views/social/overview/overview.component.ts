import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {SocialService} from '../../../shared/services/social/social.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  socialMediaStats: EChartOption;
  profiles:any = [];

  profileData = {};

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private route: ActivatedRoute,
      private factory: SocialService
  ) { }

  ngOnInit() {

    this.profiles = this.route.snapshot.data.profiles;

    if(this.profiles.length > 0){
      this.profiles.forEach((value)=>{
        this.profileData[value.type] = value.stats;
      })
    }
    console.log("PD",this.profileData);


    this.socialMediaStats = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [40, 80, 20, 90,
            30, 80, 40, 90, 20, 80, 30, 45, 50, 110],
          lineStyle: {
            color: 'rgba(102, 51, 153, 0.86)',
            width: 3,
            ...echartStyles.lineShadow
          },
          label: { show: true, color: '#333' },
          type: 'line',
          smooth: true,
          itemStyle: {
            borderColor: 'rgba(102, 51, 153, 1)'
          }
        },
          {
            data: [40, 100, 40, 110, 50, 100, 60, 110, 40, 100, 50, 75, 70, 130],
            lineStyle: {
              color: '#1eee20',
              width: 3,
              ...echartStyles.lineShadow
            },
            label: { show: true, color: '#333' },
            type: 'line',
            smooth: true,
            itemStyle: {
              borderColor: '#1eee20'
            }
          },{
            data: [60,120,60,130,70,120,80,130,60,120,70,95,90,150],
            lineStyle: {
              color: '#f13033',
              width: 3,
              ...echartStyles.lineShadow
            },
            label: { show: true, color: '#212121' },
            type: 'line',
            smooth: true,
            itemStyle: {
              borderColor: '#f13033'
            }
          },{
            data: [80,140,80,150,90,140,100,150,80,140,90,115,110,170],
            lineStyle: {
              color: '#fff318',
              width: 3,
              ...echartStyles.lineShadow
            },
            label: { show: true, color: '#212121' },
            type: 'line',
            smooth: true,
            itemStyle: {
              borderColor: '#fff318'
            }
          }]
      }
    };
  }

}
