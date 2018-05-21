package com.example.usersapi;


import com.codeborne.selenide.CollectionCondition;
import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

//import static io.restassured.RestAssured.when;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.open;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.Is.is;




@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UserApiFeatureTest {

    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() {
        userRepository.deleteAll();
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void shouldAllowFullCrudFunctionalityForAUser() throws Exception {

        User firstUser = new User("username1",
                "Ima",
                "Person",
                "something@soemthing"
        );

        User secondUser = new User(
                "username2",
                "Someone",
                "Else",
                "some@email.com"
        );

        Stream.of(firstUser, secondUser)
                .forEach(user -> {
                    userRepository.save(user);
                });

        System.setProperty("selenide.browser", "Chrome");
        System.setProperty("selenide.headless", "true");

        // Visit the UI in a browser
        open("http://localhost:4200/users");
        $$("[data-user-display]").shouldHave(CollectionCondition.size(2));


        long firstUserId = firstUser.getId();
        $("#user-" + firstUserId + "-username").shouldHave(text("username1"));
        $("#user-" + firstUserId + "-firstname").shouldHave(text("Ima"));
        $("#user-" + firstUserId + "-lastname").shouldHave(text("Person"));
        $("#user-" + firstUserId + "-email").shouldHave(text("something@soemthing"));
    }
}