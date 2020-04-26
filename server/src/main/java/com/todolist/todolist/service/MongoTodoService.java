package com.todolist.todolist.service;

import com.todolist.todolist.domain.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface MongoTodoService {

    List<Todo> findTodosByKeyWords(String title);

    Todo findTodoById(String id);

    Todo findTodoByTitle(String title);

    void deleteTodoById(String id);

    void updateTodo(Todo todo);

    void save(Todo todo);

    List<Todo> getAllTodo();
}
