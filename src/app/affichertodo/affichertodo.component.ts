import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-affichertodo',
  templateUrl: './affichertodo.component.html',
  styleUrls: ['./affichertodo.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AffichertodoComponent implements OnInit {
todo:Todo;
  categories: CatTodo[] = [
    {value: 'Todo', viewValue: 'Todo'},
    {value: 'Terminer', viewValue: 'Terminer'},
    {value: 'Retard', viewValue: 'Retard'}
 ];
  Categorie;
  
  selected() {
    console.log(this.Categorie);
  }
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Todo[];
  display: boolean = false;
  for: FormGroup
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: TodoService, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
    this.for = this.form.group({
      titre: [''],
      description: [''],
      datededebut:[''],
      datedecheance:[''],
      status:['']

    })
  }
  openNew() {
    this.info = {};
    this.submitted = false;
    this.ajoutInf = true;

  }
  hideDialog() {
    this.infDialog = false;
    this.submitted = false;
  }

    showDialog() {
        this.display = true;
    }

 
 



  getdata() {
    this.fin.getTodoList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }

  display1=false;
  onEdit(todo) {
    this.display1 = true;
    this.fin.getre('http://localhost:8099/examen/servlet/getOneTodo/' + this.todo.getId).subscribe(data => 
    {this.todo= data; },
      error1 => {console.log(error1); });
  }
  isSuccessful=false;
  onupdateprod(value: any) {
    this.fin.updateTodo('http://localhost:8099/examen/servlet/Todo/' + this.todo.getId, value).subscribe
    (data => {alert('mise ajour terminer'),  this.isSuccessful = true; });
  }

  ngOnInit(): void {
    this.getdata();
    this.save();
  }

  
}
export interface CatTodo {
  value: string;
  viewValue: string;
}