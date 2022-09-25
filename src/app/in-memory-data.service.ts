import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const todos = [
    {id: 12, name: 'Work on Angular App'},
    {id: 13, name: 'Portfolio Site'},
    {id: 14, name: 'Install WordPress Docker'},
    {id: 15, name: 'Laravel Docker'},
    {id: 16, name: 'Tic-Tac-Toe'},
    {id: 17, name: 'Snake'},
    {id: 18, name: 'Space Invaders'},
    {id: 19, name: 'WGU Site proposal mock'},
    {id: 20, name: 'WGU Site prototype'},
    {id: 21, name: 'WGU Site work statement'},
    ];
    return {todos};
  }


  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }

  // constructor() { }
}
