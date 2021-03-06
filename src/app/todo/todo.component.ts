import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Todo } from 'src/app/Todo';
import { TodoService } from '../todo.service';

import { AffichertodoComponent } from '../affichertodo/affichertodo.component';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  categories: CatTodo[] = [
    {value: 'Todo', viewValue: 'Todo'},
    {value: 'Terminer', viewValue: 'Terminer'},
    {value: 'Retard', viewValue: 'Retard'}
 ];
  Categorie;
  
  selected() {
    console.log(this.Categorie);
  }
 // ajout:FormGroup;
  todo: Todo = new Todo();
  submitted = false;
  tabs = new Todo();

ajoutob:object= {};
  msj: string;
  ajoutinf :FormGroup;
  
  constructor(private TS: TodoService,private router: Router,private confirmationService: ConfirmationService, private http:HttpClient,private fr:FormBuilder,private tab :AffichertodoComponent) { 
this.ajoutinf=this.fr.group({
  titre:['',[Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
  description:['',[Validators.required,]],
  datededebut:['',[Validators.required]],
  datedecheance:['',[Validators.required]],
  status:['',[Validators.required]]
 
})
    }

// ---------- ADD METHOD ----------


add(todo)
{
  this.ajoutob=
  {
    "titre":todo.titre,
    "description":todo.description,
    "datededebut":todo.datededebut,
    "datedecheance":todo.datedecheance,
    "status":todo.status
  }
  this.http.post("http://localhost:8099/examen/servlet/addTodo",this.ajoutob).subscribe((res:Response)=>{
    this.msj="ajouter avec succ";
    console.log(this.ajoutinf.value);
    this.tab.getdata()

  })

  }

  save()
  {
    this.submitted = true;
    console.log(this.ajoutinf.value);

  }

 

  getdata() {
    this.TS.getTodoList().subscribe(data => this.tabs = data);
  }

// ----------------------------------- FIN METHOD -----------------------
  ngOnInit() {
  }

  get titre()
  {
    return this.ajoutinf.get("titre");
  }

  get description()
  {
    return this.ajoutinf.get("description");
  }

  get datededebut()
  {
    return this.ajoutinf.get("datededebut");
  }

  get datedecheance()
  {
    return this.ajoutinf.get("datedecheance");
  }

get status()
{
  return this.ajoutinf.get("status");
}



  gotoList() {
    this.router.navigate(['/todos']);

  }
 


}
export interface CatTodo {
  value: string;
  viewValue: string;
}