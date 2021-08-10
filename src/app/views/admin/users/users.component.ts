import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data$;

  constructor(
      private route: ActivatedRoute,
      private userService: UserService,
  ) { }

  ngOnInit() {
    this.data$ = this.userService.getAllUsers();
  }

}
