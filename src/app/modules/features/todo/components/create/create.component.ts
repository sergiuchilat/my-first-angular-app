import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import * as moment from 'moment';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() todoAdded:  EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  changeTitle(event: any) {
    this.todo.title = event?.target?.value;
  }

  createTodoOnEnter(event: any){
    this.changeTitle(event)
    this.createTodo();
  }

  createTodo(){
    this.todo.createdAt = new Date()
    this.todoService.create(this.todo)
    this.todoAdded.emit(null);
    setTimeout(() => {
      this.initTodo()
    }, 200)
  }

  initTodo(){
    this.todo = {
      id: Math.random(),
      title: '',
      createdAt: new Date(),
      createdAtFormatted: moment().format('DD.MM.YYYY HH:ii')
    }
  }

  ngOnInit(): void {
    this.initTodo()
  }
}
