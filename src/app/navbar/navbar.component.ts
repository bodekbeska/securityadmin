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

  constructor(private _router:Router, private es: EmployeeService) {}

  ngOnInit() {
    this.thisUser = {
        photoURL:'',
        md_nuid:'',
        last_name:'',
        first_name:''
      }     
      this._router.events.subscribe(val=>this.path=val.url);

if (localStorage.getItem("adminUser") === null) {
        this.es.getUser().subscribe(data=>{
          this.thisUser=data;
          localStorage.setItem("adminUser", JSON.stringify(this.thisUser)); 
      });
}else{
 this.thisUser = JSON.parse(localStorage.getItem("adminUser"));
}

      
     



  }

}
