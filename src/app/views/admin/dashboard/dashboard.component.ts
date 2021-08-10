import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../shared/services/dashboard.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stats = {
    users:'',
    staff:'',
    competitors: '',
    domains: '',
    hosting: '',
    tickets: ''
  };

  constructor(
      private service: DashboardService,
      private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadStats();
  }

  private loadStats() {
    this.service.getStats().subscribe(
      res=>{
        this.stats = res.stats;
      },
      error=>{
        this.toastr.error("Failed to load stats, please after sometime.","Oh!");
      }
    );
  }
}
