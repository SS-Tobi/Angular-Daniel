import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDomain} from '../../models/IDomain';
import {Observable, Subject} from 'rxjs';
import {INameserver} from '../../models/INameserver';
import {ToastrService} from 'ngx-toastr';
import {Utils} from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class DomainService implements OnInit {

  domains:IDomain[] = [];
  private domainUpdatedListener:Subject<IDomain> = new Subject<IDomain>();

  constructor(private http: HttpClient,
              private message: ToastrService) { }

  ngOnInit(): void {

  }

  registerDomain(domain:IDomain,cb){
    this.http.post<IDomain>(Utils.getConstants().API_HOST+'modules/web/domains',{
      domain
    }).subscribe((response:any)=>{
      console.log("Domain registered",response);
      if(response.status == 'success'){
        this.domainUpdatedListener.next(domain);
      }
      this.message.success(domain.domain+' registered successfully.',
          'Cool!');
      cb();
    },(err)=>{
      console.log("Error in adding domain");
      this.message.success('Error in registering ' +domain.domain,
          'Oops!');
      cb();
    })
  }

  getDomains():Observable<IDomain[]>{
    return this.http.get<IDomain[]>
    (Utils.getConstants().API_HOST+"modules/web/domains");
  }

  getAllDomains():Observable<IDomain[]>{
    return this.http.get<IDomain[]>
    (Utils.getConstants().API_HOST+"modules/web/all-domains");
  }

  updateNameservers(id,nameservers:INameserver):Observable<IDomain>{
    return this.http.put<IDomain>(
        Utils.getConstants().API_HOST+"modules/web/domains/"+id,
        {nameservers}
    );
  }
  getDomain(id):Observable<IDomain>{
    return this.http.get<IDomain>
    (Utils.getConstants().API_HOST+"modules/web/domains/"+id);
  }

  getDomainUpdatedListener(): Observable<IDomain> {
    return this.domainUpdatedListener.asObservable();
  }

  deleteDomain(domainId: string):Observable<string>{
    return this.http.delete<string>(Utils.getConstants().API_HOST+
        "modules/web/domains/"+domainId);
  }


}
