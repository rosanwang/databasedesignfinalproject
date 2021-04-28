package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;


@Entity
@Table(name="book")

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String summary;
    private Date dueDate;

    @ManyToOne
    private User user;
    //@PrimaryKeyJoinColumn(name="userId",
            //referencedColumnName = "userId")


    @Enumerated(EnumType.STRING)
    private Genre genreId;

    @OneToMany(mappedBy = "book")
    private List<Written> authors;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    public Date getDate() { return dueDate; }
    public void setDate(Date dueDate) { this.dueDate = dueDate; }
    public Genre getGenre() { return this.genreId; }
    public void setGenre(Genre genre) {this.genreId = genre; }
    public List<Written> getAuthors() {return this.authors; }
    public void setAuthors(List<Written> authors) {this.authors = authors; }

    public Book(String title, String summary, Date dueDate, User user, List<Written> authors) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.user = user;
        this.authors = authors;
    }

    public Book() {}
}
