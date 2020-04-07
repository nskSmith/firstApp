import {Injectable, OnInit} from '@angular/core';
import {Task, Status} from './task';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {
  
    private defaultDate = new Date(2020, 2, 24);

    private tasks: Task[] = [
                            new Task(this.defaultDate,'[ToDo-2] List of my TODOs', Status.Done), 
                            new Task(this.defaultDate,'[ToDo-3] Create a TODO item', Status.InProgress), 
                            new Task(this.defaultDate,'[ToDo-4] Link on creating new TODO ', Status.ToDo), 
                            new Task(this.defaultDate,'[ToDo-5] Persist my TODOs', Status.ToDo)
                          ]

    public getTasks() {
        return this.tasks
    } 

    public createItem(date, text) {
      const newItem = new Task(new Date(), text, Status.ToDo);
      this.tasks.push(newItem);
    }
};  


 