import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import {UserService} from '../../../shared/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {utils} from 'protractor';
import {Utils} from '../../../shared/utils';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.scss']
})
export class DashboadDefaultComponent implements OnInit {
	chartLineOption1: EChartOption;


    analytics_enabled = false;

    summary_stats;
    chart_data;
    chart_headers;
    profiles:any = [];
    profileData = {};

    competitors:any = [];

	constructor(private userService: UserService,
                private route:ActivatedRoute
    ) { }

	ngOnInit() {

        this.profiles = this.route.snapshot.data.profiles;

        if(this.profiles.length > 0){
            this.profiles.forEach((value)=>{
                this.profileData[value.type] = value.stats;
            })
        }


        if(
            this.route.snapshot.data.competitors
            &&
            this.route.snapshot.data.competitors.length>0
        ){
            this.competitors = this.route.snapshot.data.competitors;

        }

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



        this.userService.getDashboard();
	    //get profile



	}

}
