package com.todolist.todolist.repository.mongo;

import com.todolist.todolist.domain.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

public interface MongoTodoRepository extends MongoRepository<Todo, BigInteger> {

    Todo findByTitle(String title);

    void deleteByTitle(String title);

    Todo insert(Todo todo);

    List<Todo> findAll();
}
