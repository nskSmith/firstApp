import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from 'src/components/todo/todo.component'
import { CreateTodoComponent } from 'src/components/create-todo/create-todo.component';


const routes: Routes = [
  {
    path:'todo',
    component: ToDoComponent,
    data: { title: 'TODO List'}
  },
  {
    path:'item',
    component: CreateTodoComponent,
    data: { title: 'Create TODO Item'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
