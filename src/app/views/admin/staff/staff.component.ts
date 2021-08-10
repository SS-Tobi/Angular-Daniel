import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  data$;

  constructor(
      private route: ActivatedRoute,
      private userService: UserService,
      private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.data$ = this.userService.getAllStaff();
  }

    deleteUser(_id: any) {
        this.userService.delete(_id).subscribe(
            res=>{
              this.toastrService.success('Staff deleted successfully','Success');
              this.loadData();
            },
            error=>{
              this.toastrService.error('Failed to deletee staff','Oops');
            }
        )
    }
}
