package com.todolist.todolist.controller;

import com.todolist.todolist.domain.Todo;
import com.todolist.todolist.service.MongoTodoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class TodoController {

    //Use service here
    @Autowired
    private MongoTodoService mongoTodoService;

    private static final Logger logger = LoggerFactory.getLogger(TodoController.class);

    @PostMapping("/todo/find")
    public List<Todo> findTodoByTitle(@RequestBody Map<String, Object> request){
        String title = (String)request.get("title");
        return mongoTodoService.findTodosByKeyWords(title);
    }

    @PostMapping("/todo/add")
    public List<Todo> addTodo(@RequestBody Map<String, Object> request) throws ParseException {
        mongoTodoService.save(new Todo((String)request.get("title"), (String)request.get("note"), (String)request.get("date")));
        return getAllTodo();
    }

    @GetMapping("/todo/all")
    public List<Todo> getAllTodo(){
        return mongoTodoService.getAllTodo();
    }

    @PostMapping("/todo/delete")
    public List<Todo> deleteTodo(@RequestBody Map<String, Object> request){
        String id = (String)request.get("id");
        Todo deleted = null;
        deleted = mongoTodoService.findTodoById(id);
        if (deleted != null){
            mongoTodoService.deleteTodoById(id);
        }
        return getAllTodo();
    }

    @PostMapping("/todo/update")
    public String updateTodo(@RequestBody List<Todo> todos){
        for (Todo todo: todos) {
            mongoTodoService.updateTodo(todo);
        }
        return "Updated";
    }


}
