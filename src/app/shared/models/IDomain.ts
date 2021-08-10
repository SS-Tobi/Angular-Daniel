import {INameserver} from '../models/INameserver';

export class IDomain{
    _id:null;
    domain:string;
    years:number;
    nameservers:INameserver;
    user_id:string;

}
