import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDecimals} from "../../../shared/helper/show-decimals";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  competitors = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.competitors = this.route.snapshot.data.competitors;
  }

  showAfterConvertToDecimals(value){
    return ShowDecimals(value,3);
  }

}
