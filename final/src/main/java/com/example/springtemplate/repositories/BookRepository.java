package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Integer> {
    @Query(value = "SELECT * FROM book",
            nativeQuery = true)
    public List<Book> findAllBooks();
    @Query(value = "SELECT * FROM book WHERE id=:bookId",
            nativeQuery = true)
    public Book findBookById(@Param("bookId") Integer id);

    @Query(value = "SELECT user_id FROM book WHERE id=:bookId",
            nativeQuery = true)
    public Integer findUserByBookId(@Param("bookId") Integer id);
}
