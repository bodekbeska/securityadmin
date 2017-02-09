import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { SorterService } from '../sorter.service'

import 'rxjs/Rx';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
private sub: any;
iHUBRoles: any[];
HCMRoles: any[];
CRMRoles: any[];
ELMRoles: any[];
BURoles: any[];
TLRoles: any[];
SDSecurity : any[];
thisEmployee: any;
loading: boolean;
id: string;
MDTRVRoles : any[];
ascdesc: boolean;
currentRole : string;
listOfUsersForThisRole: any[];

  constructor(private route: ActivatedRoute, private es: EmployeeService, private sorter: SorterService) { 
    this.thisEmployee ={
           bUnit: '',
    bUnitDescr : '',
    dept: '',
    deptDescr: '',
    email: '',
    emplid: '',
    firstName: '',
    lastName: '',
    jobCode: '',
    jobCodeDescr: '',
    location: '',
    locationDescr: '',
    name: '',
    nuid: '',
    source: '',
    md_mgr_nuid : '',
    md_phone_work: '',
    md_phone_home: '',
    md_phone_cell: '',
     job_family: '',
	  md_jobfamily_descr: '',
	  md_last_four_ssn: '',
	  md_adm_ldr: '',
	  empl_status: '',
	  hire_dt: '',
	  last_hire_dt: '',
	  termination_dt: '',
	  company: '',
	  md_entity: '',
	  rundttm: ''
};
  }

  ngOnInit() {
  

        this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number this.id = +params['id'];
        this.loading=true;
       // In a real app: dispatch action to load the details here.
       console.log(this.id);



      this.es.searchEmployee(this.id )
      .subscribe(data => { this.thisEmployee = data[0]; this.loading=false;  });

      this.es.getRolesEmployee("iHUB", this.id)
      .subscribe(data => { this.iHUBRoles = data; });

      this.es.getRolesEmployee("HCM", this.id)
      .subscribe(data => {  this.HCMRoles = data; });

      this.es.getRolesEmployee("CRM", this.id)
      .subscribe(data => {  this.CRMRoles = data; });

      this.es.getRolesEmployee("ELM", this.id)
      .subscribe(data => {  this.ELMRoles = data; });

       this.es.getRolesEmployee("bu", this.id)
      .subscribe(data => {  this.BURoles = data; });

       this.es.getRolesEmployee("tl", this.id)
      .subscribe(data => {  this.TLRoles = data; });

      this.es.getRolesEmployee("mdtrv", this.id)
      .subscribe(data => {  this.MDTRVRoles = data;});

      this.es.getShareDriveSecurity(this.id)
      .subscribe(data => this.SDSecurity = data);

    });
  }


thisRole(application,r){
   this.loading=true;  
   this.es.getEmployeesForThisRole(application, r)
      .subscribe(data => {      
          this.listOfUsersForThisRole = data;   this.loading=false;
      });
    this.currentRole = r;
}


sortNow(table, column){
  this.sorter.sort(table, column);
}




     ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
