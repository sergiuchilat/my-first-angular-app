import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import * as moment from 'moment/moment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  get(): Todo[] {
    return JSON.parse(localStorage.getItem('todos') || '[]').map(
      (todo: Todo) => {
        return {
          ...todo,
          createdAtFormatted: moment(todo.createdAt).format('DD.MM.YYYY HH:mm'),
        };
      }
    );
  }

  create(todo: Todo): Todo {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return todo;
  }

  delete(id: Number) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]').filter(
      (todo: Todo) => todo.id != id
    );
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
