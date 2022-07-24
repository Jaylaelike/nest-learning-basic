import { Injectable, NotFoundException } from '@nestjs/common';
import { timeEnd } from 'console';
import { randomUUID } from 'crypto';
import { Todo } from './todo.entity';
import { v1 as uuidv1 } from 'uuid';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(title: string, subtitle: string) {
    console.log(`Title : ${title}, Subtitle : ${subtitle} `);
    const todo = new Todo();
    todo.id = uuidv1();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
  }

  findById(id:string){
      return this.todoArray.find((e) => e.id === id)
  }

  getTodo(){
    return this.todoArray
  }

  removeTodoById(id: string){
    const found = this.todoArray.find(item=> item.id === id)
    if(!found){
     throw new NotFoundException(`Todo with ${id} not found`)
    }
    this.todoArray = this.todoArray.filter(item=> {return item.id !== id})
    return this.todoArray
  }
}
