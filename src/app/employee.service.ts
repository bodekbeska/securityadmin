import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
private searchUrl : string;
public user : any;
public domainname: string;
  constructor(private http : Http) {  
    this.domainname='https://phrs02-dev.appl.kp.org:8444';
  //  this.domainname='http://office:8080';
   }

searchEmployee(str: string){
this.searchUrl =this.domainname+'/jersey/webapi/employees/'+str;
  return this.http.get(this.searchUrl)
  .map(res => res.json());
}

getRolesEmployee( application: string, str: string){
  this.searchUrl =this.domainname+'/jersey/webapi/security/'+application+"/"+str;
  return this.http.get(this.searchUrl)
  .map(res => res.json());
}

getEmployeesForThisRole( application: string, str: string){
  this.searchUrl =this.domainname+'/jersey/webapi/security/users/'+application+"/"+str;
  return this.http.get(this.searchUrl)
  .map(res => res.json());
}

getShareDriveSecurity( str: string){
  this.searchUrl =this.domainname+'/jersey/webapi/security/sharedrive/'+str;
  return this.http.get(this.searchUrl)
  .map(res => res.json());
}

getUser(){
  this.searchUrl ='https://phrs02-dev.appl.kp.org/detectuser/api/values/1';
  return this.http.get(this.searchUrl)
  .map(res => res.json());
}




}
