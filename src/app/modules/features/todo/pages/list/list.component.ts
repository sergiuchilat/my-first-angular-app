import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import * as moment from 'moment';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() todos?: Todo[];
  @Input() userName: String = '';

  constructor(
    private todoService: TodoService,
    private authService: AuthService
  ) {}
  onTodoAdded(event: any) {
    this.getTodos();
  }
  onUserNameSaved(event: any) {
    this.userName = this.authService.getUsername();
  }

  getTodos() {
    this.todos = this.todoService.get();
  }

  deleteTodo(id: Number) {
    this.todoService.delete(id);
    this.todos = this.todoService.get();
  }

  ngOnInit(): void {
    this.getTodos();
    this.userName = localStorage.getItem('userName') || '';
  }
}
