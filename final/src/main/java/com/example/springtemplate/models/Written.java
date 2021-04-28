package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name="written")
//@IdClass(WrittenId.class)
public class Written {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @PrimaryKeyJoinColumn(name="bookId", referencedColumnName = "bookId")
    @JsonIgnore
    private Book book;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @PrimaryKeyJoinColumn(name="authorId", referencedColumnName = "authorId")
    @JsonIgnore
    private Author author;



    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Book getBook() { return this.book; }
    public void setBook(Book book) { this.book = book; }
    public Author getAuthor() { return author; }
    public void setAuthor(Author author) { this.author = author; }


    public Written(Book book, Author author) {
        this.book = book;
        this.author = author;
    }

    public Written() {}
}
