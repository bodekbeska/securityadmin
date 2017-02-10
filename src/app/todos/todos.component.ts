import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import {AbstractControl, FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasks: Task[];
  task: Task;
  currentTask: Task;
  form : FormGroup;
  taskItem:string;

  constructor(protected storage: AsyncLocalStorage, public fb : FormBuilder) { }

  ngOnInit() {
    this.taskItem='';
    this.tasks =[];
    this.task ={
        task:'',
        timestamp:'',
        status: false        
    }

     this.form= this.fb.group({
       taskItem:'',      
       status: false
     });



       this.storage.getItem('todos').subscribe((todos: Task[]) => {
        if (todos != null) {
         this.tasks = todos;
        }
      }, () => {});


  }


addTask(){
  this.task ={
    task :this.form.value.taskItem,
    timestamp : Date.now().toString(),
    status : false
  }

  this.tasks.push(this.task);

this.storage.setItem('todos',  this.tasks).subscribe(() => {}, () => {});
this.taskItem='';

}

deleteItem(index){
  console.log(index);
  this.tasks.splice(index, 1);
  this.storage.setItem('todos',  this.tasks).subscribe(() => {}, () => {});
}


}
