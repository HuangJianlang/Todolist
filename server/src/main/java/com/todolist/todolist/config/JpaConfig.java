package com.todolist.todolist.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableJpaRepositories(basePackages = "com.todolist.todolist.repository.jpa")
@EnableMongoRepositories(basePackages = "com.todolist.todolist.repository.mongo")
@Configuration
public class JpaConfig {
}
