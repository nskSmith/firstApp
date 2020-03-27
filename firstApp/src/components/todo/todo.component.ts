import { Component, OnInit } from '@angular/core';
import { Task } from './task' 
import { Observable } from "rxjs";
import { TaskService } from "./task.service";
import { Router } from '@angular/router';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent {
    constructor(private taskService: TaskService) {}   
    
    tasks: Task[];

    ngOnInit() {
        this.tasks = this.taskService.getTasks();
    }

    isTaskStatusDone(task: Task): boolean {
      return task.status == 'Done';
    }
    isTaskStatusInProgress(task: Task): boolean {
      return task.status == 'InProgress';
    }
}



