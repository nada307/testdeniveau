import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffichertodoComponent } from './affichertodo/affichertodo.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [ 
  { path: '', redirectTo: '', pathMatch: 'full' },
 
  {path:'todos', component:AffichertodoComponent},
  {path:'addTodo', component:TodoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
