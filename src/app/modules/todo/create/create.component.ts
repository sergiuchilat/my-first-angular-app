import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() todoAdded:  EventEmitter<any> = new EventEmitter();

  changeTitle(event: any) {
    this.todo.title = event?.target?.value;
  }

  createTodo(){
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    todos.push(this.todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    this.todoAdded.emit(null);
    this.initTodo()
  }

  initTodo(){
    this.todo = {
      id: Math.random(),
      title: ''
    }
  }

  ngOnInit(): void {
    this.initTodo()
  } 
}
