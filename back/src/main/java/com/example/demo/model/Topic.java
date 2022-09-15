package com.example.demo.model;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToMany;

import lombok.Data;

@Data
@Entity
public class Topic {

    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Integer id;
    private String name;
    private String description;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
    private boolean deleted;
    @ManyToMany
    private List<Roadmap> roadmaps;

    @ManyToMany
    @JoinTable(name = "topic_question", joinColumns = @JoinColumn(name = "topic_id"), inverseJoinColumns = @JoinColumn(name = "question_id"))
    private List<Question> questions = new ArrayList<>();

}
