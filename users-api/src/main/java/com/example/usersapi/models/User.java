package com.example.usersapi.models;
import lombok.*;
import javax.persistence.*;


public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "FIRSTNAME")
    private String firstname;

    @Column(name = "LASTNAME")
    private String lastname;

    @Column(name = "SUBSCRIPTION")
    private String subscription;
}
