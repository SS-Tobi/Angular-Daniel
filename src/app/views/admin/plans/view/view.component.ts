import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PlansService} from "../../../../shared/services/plans/plans.service";
import {Utils} from "../../../../shared/utils";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  rows = [];
  env;

  constructor(private route: ActivatedRoute,
              private factory: PlansService,
              private message: ToastrService,
              private router: Router
          ) { }

  ngOnInit() {
    if(this.route.snapshot.data.plans){
      this.rows = this.route.snapshot.data.plans;
    }
    this.env = Utils.getConstants();
  }

  doEdit(id){
    //open edit page
    this.router.navigate(['admin/plans/edit/'+id]);
  }
  doDelete(id){
    this.factory.delete(id).subscribe((res)=>{
      this.message.success('Successful','The plan was removed successfully.');
      this.rows = this.rows.filter((elem)=>{
        return elem._id != id;
      })
    },(err)=>{
      this.message.error('Oops','There was an error in deleting the plan');
    });
  }

}
