
package com.example.usersapi.controller;
import com.example.usersapi.repositories.UserRepository;

import com.example.usersapi.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsersController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User findUserById(@PathVariable Long userId) {
        return userRepository.findOne(userId);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }
    @PostMapping("/")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
    @PatchMapping("/{userId}")
    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
        User userFromDb = userRepository.findOne(userId);
        userFromDb.setFirstName(userRequest.getFirstName());
        userFromDb.setLastName(userRequest.getLastName());
        userFromDb.setEmail(userRequest.getEmail());
        return userRepository.save(userFromDb);
    }

}
