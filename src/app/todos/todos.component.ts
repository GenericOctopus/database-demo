import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOLIST } from '../mock-todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  selectedTodo?: Todo;
  

  

  constructor(private todoService: TodoService, private messageSerivce: MessageService) { 


  }

  ngOnInit(): void {
    this.getTodos();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    this.messageSerivce.add('Todo Component: Selected todo id=${{todo.id}');
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

}
