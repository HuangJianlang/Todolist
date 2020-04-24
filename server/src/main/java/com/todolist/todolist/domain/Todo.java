package com.todolist.todolist.domain;

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
    private BigInteger id;
    private String title;
    private String note;
    private Date scheduleTime;

    public Todo(){

    }

    public Todo(String title, String note, Date scheduleTime){
        this.title = title;
        this.note = note;
        this.scheduleTime = scheduleTime;
    }


    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
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

    public Date getScheduleTime() {
        return scheduleTime;
    }

    public void setScheduleTime(Date scheduleTime) {
        this.scheduleTime = scheduleTime;
    }

}
