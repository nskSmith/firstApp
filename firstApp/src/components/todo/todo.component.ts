import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../../tasks/task' 
import { TaskService } from "../../tasks/task.service";

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

    dateFormat(task: Task) {
      return new Intl.DateTimeFormat('ru-RU').format(task.date);
    }

    isTaskStatusDone(task: Task): boolean {
      return task.status === Status.Done;
    }
    isTaskStatusInProgress(task: Task): boolean {
      return task.status === Status.InProgress;
    }
}



