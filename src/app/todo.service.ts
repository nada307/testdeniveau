import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl :string = "http://localhost:8099/examen/servlet/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

 
  createTodo(todo: Todo): Observable<Todo> {
    const headers={'content-type':'application/json'};
    const body = JSON.stringify(Todo);
    console.log(body);
    return this.http.post<Todo>(this.baseUrl,body,{'headers':headers});
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+ '/getOneTodo/'}/${id}`);
  }


  getTodoList(): Observable<any> {
    return this.http.get<Todo[]>(this.baseUrl + '/getAllT');     
}


/*public update(url, data): Observable<any> {
  return this.http.put<any>(url, data);
}
*/

public getre(url): Observable<any> {
  return this.http.get<any>(url);
}

public updateTodo(url, data): Observable<any> {
  return this.http.put<any>(url,data);
}
updatTodot(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl + '/Todo'}/${id}`, value);
}




}
