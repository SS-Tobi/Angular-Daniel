import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompetitorService} from "../../../shared/services/competitor.service";

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {

  data$;

  constructor(
      private route: ActivatedRoute,
      private competitorService: CompetitorService,
  ) { }

  ngOnInit() {
    this.data$ = this.competitorService.getAllCompetitors();
  }
}
