import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
history: any[];
  constructor() { }

  ngOnInit() {
     this.history =[];
   
    if (localStorage.getItem("history") !== null) {
              this.history = JSON.parse(localStorage.getItem("history"));
    }
     
  }

}
