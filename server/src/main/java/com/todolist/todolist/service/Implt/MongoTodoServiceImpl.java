package com.todolist.todolist.service.Implt;

import com.todolist.todolist.domain.Todo;
import com.todolist.todolist.repository.mongo.MongoTodoRepository;
import com.todolist.todolist.service.MongoTodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MongoTodoServiceImpl implements MongoTodoService {

    @Autowired
    private MongoTodoRepository mongoTodoRepository;


    @Override
    public Todo findTodoByTitle(String title){

        return mongoTodoRepository.findByTitle(title);
    }

    @Override
    public void deleteByTitle(String title){

        mongoTodoRepository.deleteByTitle(title);
    }

    @Override
    public void save(Todo todo){
        mongoTodoRepository.insert(todo);
    }

    @Override
    public List<Todo> getAllTodo(){

        return mongoTodoRepository.findAll();
    }
}
