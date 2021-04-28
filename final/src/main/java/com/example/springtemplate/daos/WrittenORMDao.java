package com.example.springtemplate.daos;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Written;
import com.example.springtemplate.repositories.AuthorRepository;
import com.example.springtemplate.repositories.BookRepository;
import com.example.springtemplate.repositories.WrittenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WrittenORMDao {
    @Autowired
    WrittenRepository writtenRepository;
    @Autowired
    BookRepository bookRepository;
    @Autowired
    AuthorRepository authorRepository;

    @PostMapping("/api/written")
    public Written createWritten(@RequestBody Written written) {
        return writtenRepository.save(written);
    }

    @GetMapping("/api/written")
    public List<Written> findAllWritten() {
        return writtenRepository.findAllWritten();
    }

    @GetMapping("/api/written/book/{bookId}")
    public Written findByBookId(
            @PathVariable("bookId") Integer id) {
        //bookRepository.findBookById(
        return writtenRepository.findWrittenByBookId(id);
    }

    @GetMapping("/api/written/author/{Id}")
    public Author findAuthorByBookId(
            @PathVariable("Id") Integer id) {
        return authorRepository.findAuthorById(writtenRepository.findAuthorByBookId(id));
    }

    @PutMapping("/api/written/{Id}")
    public Written updateWritten(
            @PathVariable("Id") Integer id,
            @RequestBody Written writtenUpdates) {
        Written written = writtenRepository.findWrittenById(id);
        //written.setAuthorId(writtenUpdates.getAuthorId());
        //written.setBookId(writtenUpdates.getBookId());

        return writtenRepository.save(written);
    }

    @DeleteMapping("/api/written/{writtenId}")
    public void deleteWritten(
            @PathVariable("writtenId") Integer id) {
        writtenRepository.deleteById(id);
    }
}
