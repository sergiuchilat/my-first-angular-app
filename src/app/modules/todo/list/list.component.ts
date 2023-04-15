import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input() todos?: Todo[]; 

  onTodoAdded(event: any){
    this.getTodos()
  }

  getTodos(){
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]')
  }

  deleteTodo(id: Number){
    this.todos = this.todos?.filter(todo => todo.id != id)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  ngOnInit(): void {
    this.getTodos()
  }
}
