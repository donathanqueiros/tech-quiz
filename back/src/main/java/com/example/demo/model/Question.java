package com.example.demo.model;

import java.time.OffsetDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Question {

    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Integer id;
    private String name;
    private String description;
    private String status;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
    private boolean deleted;

    @ManyToMany
    @JoinTable(name = "question_answer", joinColumns = @JoinColumn(name = "question_id"), inverseJoinColumns = @JoinColumn(name = "answer_id"))
    private List<Answer> answers;

}
