import { Component, NgModule } from '@angular/core';
import { TaskService } from "../../tasks/task.service";
import { Router } from '@angular/router';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  constructor(private taskService: TaskService,private router: Router) { }

  
  newItemText : string;
  createdState = false;
  nowDate = new Date();

  public createItem() { 
    this.taskService.createItem(this.nowDate,this.newItemText )
    if(this.newItemText) { this.createdState = true }
    setTimeout(() => {  this.router.navigateByUrl('/todo'); }, 1000); 
  }

}
