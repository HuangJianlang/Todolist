package com.todolist.todolist.service.Implt;

import com.todolist.todolist.domain.Todo;
import com.todolist.todolist.repository.jpa.TodoRepository;
import com.todolist.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;


    @Override
    public Todo findTodoByTitle(String title){
        return todoRepository.findByTitle(title);
    }

    @Override
    public void deleteByTitle(String title){
        todoRepository.deleteByTitle(title);
    }

    @Override
    public void save(Todo todo){
        todoRepository.save(todo);
    }

    @Override
    public ArrayList<Todo> getAllTodo(){
        return todoRepository.findAll();
    }
}
