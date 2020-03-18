import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from './task';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {
  
    constructor() { }

    tasks: Task[];

    public getTasks() {
        this.tasks = [new Task('27.03','[ToDo-2] List of my TODOs','Done'), new Task('28.03','[ToDo-3] Create a TODO item', 'InProgress'), new Task('-/-','[ToDo-4] Link on creating new TODO ', 'TODO'), new Task('-/-','[ToDo-5] Persist my TODOs', 'TODO') ]
        return this.tasks
    } 
};


 