package com.example.demo.model;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Data;

@Entity
@Data
public class Roadmap {

    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Integer id;
    private String name;
    private String description;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
    private boolean deleted;
    @ManyToMany
    private List<Topic> topics = new ArrayList<>();

}
