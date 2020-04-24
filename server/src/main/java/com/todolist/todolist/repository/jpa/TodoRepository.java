package com.todolist.todolist.repository.jpa;

import com.todolist.todolist.domain.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.ArrayList;


public interface TodoRepository extends JpaRepository<Todo, BigInteger> {

    Todo findByTitle(String title);

    void deleteByTitle(String title);

    Todo save(Todo todo);

    ArrayList<Todo> findAll();
}
