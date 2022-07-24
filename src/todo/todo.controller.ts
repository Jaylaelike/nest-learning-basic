import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){

    }
    @Get()
    getTodo(){
        return this.todoService.getTodo()
    }
    @Post()
    postTodo(@Body('title') title:string, @Body('subtitle') subtitle:string){
      this.todoService.addTodo(title,subtitle)
      
    }

    @Get('/:id')
    getTodoById(@Param('id') id: string){
        return this.todoService.findById(id)
        
    }

    @Delete("/:id")
    deleteTodoById(@Param('id') id:string){
        console.log(`id : ${id}`);
        return this.todoService.removeTodoById(id);
    }
}
