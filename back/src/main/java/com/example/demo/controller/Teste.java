package com.example.demo.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;

import com.example.demo.model.Roadmap;
import com.example.demo.model.Topic;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Teste {

    @GetMapping("/teste")
    public Object teste() {
        var teste = new Roadmap();
        var teste2 = new Topic();

        teste.getTopics().add(teste2);

        return teste;
    }

}
