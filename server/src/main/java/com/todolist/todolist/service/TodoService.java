package com.todolist.todolist.service;

import com.todolist.todolist.domain.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface TodoService {

    Todo findTodoByTitle(String title);

    void deleteByTitle(String title);

    void save(Todo todo);

    ArrayList<Todo> getAllTodo();

}
