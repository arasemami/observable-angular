import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
