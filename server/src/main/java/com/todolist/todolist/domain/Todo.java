package com.todolist.todolist.domain;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Document
public class Todo {
    @Id
    @GeneratedValue
    //MongoDB must use ObjectId or String or BigInteger
    private String id;
    private String title;
    private String note;
    private String scheduleTime;
    private Boolean completed;

    public Todo(){

    }

    public Todo(String title, String note, String scheduleTime){
        this.title = title;
        this.note = note;
        this.scheduleTime = scheduleTime;
        this.completed = false;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getScheduleTime() {
        return scheduleTime;
    }

    public void setScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

}
