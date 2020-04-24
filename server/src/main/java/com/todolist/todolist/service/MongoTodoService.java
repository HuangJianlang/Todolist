package com.todolist.todolist.service;

import com.todolist.todolist.domain.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface MongoTodoService {

    Todo findTodoByTitle(String title);

    void deleteByTitle(String title);

    void save(Todo todo);

    List<Todo> getAllTodo();
}
