import { Injectable } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import { Task } from "src/components/todo/task"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
