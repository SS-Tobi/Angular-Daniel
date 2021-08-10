import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitorService} from '../../../shared/services/competitor.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  rows = [];

  constructor(private route: ActivatedRoute,
              private factory: CompetitorService,
              private message: ToastrService,
              private router: Router
          ) { }

  ngOnInit() {
    if(this.route.snapshot.data.competitors){
      this.rows = this.route.snapshot.data.competitors;
    }

  }

  doEdit(id){
    //open edit page
    this.router.navigate(['competitor/edit/'+id]);
  }
  doDelete(id){
    this.factory.deleteCompetitor(id).subscribe((res)=>{
      this.message.success('Successful','The competitor was removed successfully.');
      this.rows = this.rows.filter((elem)=>{
        return elem._id != id;
      })
    },(err)=>{
      this.message.error('Oops','There was an error in deleting the competitor');
    });
  }

}
