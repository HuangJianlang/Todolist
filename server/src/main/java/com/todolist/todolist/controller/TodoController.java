package com.todolist.todolist.controller;

import com.todolist.todolist.domain.Todo;
import com.todolist.todolist.service.MongoTodoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public Todo findTodoByTitle(@RequestParam("title") String title){
        logger.debug(title);
        return mongoTodoService.findTodoByTitle(title);
    }

    @PostMapping("/todo/add")
    public String addTodo(@RequestBody Map<String, Object> request){
        mongoTodoService.save(new Todo((String)request.get("title"), (String)request.get("note"), new Date()));
        return "Save!";
    }

    @GetMapping("/todo/all")
    public List<Todo> getAllTodo(){
        return mongoTodoService.getAllTodo();
    }

    @PostMapping("/todo/delete")
    public String deleteTodo(@RequestParam("title") String title){
        Todo deleted = null;
        deleted = mongoTodoService.findTodoByTitle(title);
        if (deleted != null){
            mongoTodoService.deleteByTitle(title);
            return "Success";
        }
        return "Fail";
    }


}
