package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date dateOfBirth;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Book> books;

    public List<Book> getBooks() {return this.books;}
    public List<Book> setBooks(List<Book> newBooks) {return this.books = newBooks; }
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String profilePicture) { this.email = profilePicture; }
    public Date getDate() { return dateOfBirth; }
    public void setDate(Date handle) { this.dateOfBirth = handle; }

    public User(String username, String password, String first_name, String last_name, String profile_picture,
                List<Book> books) {
        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = profile_picture;
        this.books = books;
    }

    public User() {}
}
