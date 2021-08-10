import { Component, OnInit } from '@angular/core';
import {HostingService} from "../../../shared/services/web/hosting.service";


@Component({
  selector: 'app-hostings',
  templateUrl: './hostings.component.html',
  styleUrls: ['./hostings.component.scss']
})
export class HostingsComponent implements OnInit {

  data$;

  constructor(
      private hostingService: HostingService
  ) { }

  ngOnInit() {
    this.data$ = this.hostingService.getAll();
  }

}
