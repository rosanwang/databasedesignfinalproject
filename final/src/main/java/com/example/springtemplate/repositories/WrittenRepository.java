package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Written;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WrittenRepository extends CrudRepository<Written, Integer> {
    @Query(value = "SELECT * FROM written",
            nativeQuery = true)
    public List<Written> findAllWritten();

    @Query(value = "SELECT book_id FROM written WHERE author_id=:writtenId",
            nativeQuery = true)
    public Integer findBookByAuthorId(@Param("writtenId") Integer id);

    @Query(value = "SELECT author_id FROM written WHERE book_id=:bookId",
            nativeQuery = true)
    public Integer findAuthorByBookId(@Param("bookId") Integer id);

    @Query(value = "SELECT * FROM written WHERE id=:writtenId",
            nativeQuery = true)
    public Written findWrittenById(@Param("writtenId") Integer id);

    @Query(value = "SELECT * FROM written WHERE book_id=:bookId",
            nativeQuery = true)
    public Written findWrittenByBookId(@Param("bookId") Integer id);


}
