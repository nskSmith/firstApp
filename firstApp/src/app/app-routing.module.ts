import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from 'src/components/todo/todo.component'


const routes: Routes = [
  {
    path:'todo',
    component: ToDoComponent,
    data: { title: 'TODO List'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
