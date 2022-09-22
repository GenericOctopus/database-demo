import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOLIST } from './mock-todos';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
  
})

export class TodoService {

  constructor(private messageService: MessageService) { }
  
  getTodos(): Observable<Todo[]> {
    const todos = of(TODOLIST);
    this.messageService.add('TodoService: fetched list');
    return todos;
  }
}
