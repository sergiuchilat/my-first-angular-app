import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import * as moment from 'moment';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input() todos?: Todo[]; 
  @Input() userName: String = ''

  onTodoAdded(event: any){
    this.getTodos()
  }
  onUserNameSaved(event: any){
    this.userName = localStorage.getItem('userName') || ''
  }

  getTodos(){
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]').map((todo:Todo) => {
      return {
        ...todo,
        createdAtFormatted: moment(todo.createdAt).format("DD.MM.YYYY HH:mm")
      }
    })
  }

  deleteTodo(id: Number){
    this.todos = this.todos?.filter(todo => todo.id != id)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  ngOnInit(): void {
    this.getTodos()
    this.userName = localStorage.getItem('userName') || ''
  }
}
