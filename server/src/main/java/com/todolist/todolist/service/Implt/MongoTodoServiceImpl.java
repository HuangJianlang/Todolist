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
    public List<Todo> findTodosByKeyWords(String title){

        return mongoTodoRepository.findByTitleContains(title);
    }

    @Override
    public void deleteTodoById(String id){

        mongoTodoRepository.deleteById(id);
    }

    @Override
    public void save(Todo todo){
        mongoTodoRepository.insert(todo);
    }

    @Override
    public List<Todo> getAllTodo(){

        return mongoTodoRepository.findAll();
    }

    @Override
    public Todo findTodoByTitle(String title){
        return mongoTodoRepository.findByTitle(title);
    }

    @Override
    public void updateTodo(Todo todo){
        mongoTodoRepository.save(todo);
    }

    @Override
    public Todo findTodoById(String id){
        return mongoTodoRepository.findById(id);
    }
}
