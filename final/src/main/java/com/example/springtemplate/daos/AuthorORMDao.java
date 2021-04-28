package com.example.springtemplate.daos;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AuthorORMDao {

    @Autowired
    AuthorRepository authorRepository;

    @PostMapping("/api/author")
    public Author createAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }

    @GetMapping("/api/author")
    public List<Author> findAllAuthors() {
        return authorRepository.findAllAuthors();
    }

    @GetMapping("/api/author/{authorId}")
    public Author findAuthorById(
            @PathVariable("authorId") Integer id) {
        return authorRepository.findAuthorById(id);
    }


    @PutMapping("/api/author/{authorId}")
    public Author updateAuthor(
            @PathVariable("authorId") Integer id,
            @RequestBody Author authorUpdates) {
        Author author = authorRepository.findAuthorById(id);
        //TODO how is this null wut
        author.setFirstName(authorUpdates.getFirstName());
        author.setLastName(authorUpdates.getLastName());
        author.setId(authorUpdates.getId());
        author.setBooks(authorUpdates.getBooks());

        return authorRepository.save(author);
    }

    @DeleteMapping("/api/author/{authorId}")
    public void deleteAuthor(
            @PathVariable("authorId") Integer id) {
        authorRepository.deleteById(id);
    }
}
