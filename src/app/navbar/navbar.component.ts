import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
path: string;
public thisUser : any;
username : string;
user : Employee;

  constructor(private _router:Router, private es: EmployeeService) { 
 
     this.user ={
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
     
      this._router.events.subscribe(val=>{       
        this.path=val.url;
      });
    



      this.es.getUser().subscribe(data=>
        {
                this.thisUser=data;
                this.thisUser = this.thisUser.substr(3);
                this.es.searchEmployee(this.thisUser )
                .subscribe((data : Employee) => {
                    this.user = data[0]; 
                    console.log(this.user);               
                  });
              }
      );


    
  }

}
