package com.example.usersapi.models;
import lombok.*;
import javax.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor @Getter @Setter
@Entity
@Table(name = "USERS")
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

    @Column(name = "EMAIL")
    private String email;

    public User(String username, String firstname, String lastname, String email) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    public String getUserName() {
        return username;
    }

    public String getFirstName() {
        return firstname;
    }

    public String getLastName() {
        return lastname;
    }
    public String getEmail() {
        return email;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public void setFirstName(String firstname) {
        this.firstname = firstname;
    }

    public void setLastName(String lastname) {
        this.lastname = lastname;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
