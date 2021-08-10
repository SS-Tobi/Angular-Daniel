import { Component, OnInit } from '@angular/core';
import {DomainService} from "../../../shared/services/web/domain.service";

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {

  data$;

  constructor(
      private domainService: DomainService
  ) { }

  ngOnInit() {
    this.data$ = this.domainService.getAllDomains();
  }

}
