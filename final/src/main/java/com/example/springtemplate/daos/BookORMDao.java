package com.example.springtemplate.daos;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.User;
import com.example.springtemplate.models.Written;
import com.example.springtemplate.repositories.AuthorRepository;
import com.example.springtemplate.repositories.BookRepository;
import com.example.springtemplate.repositories.UserRepository;
import com.example.springtemplate.repositories.WrittenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookORMDao {
    @Autowired
    BookRepository bookRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    AuthorRepository authorRepository;
    @Autowired
    WrittenRepository writtenRepository;

    @PostMapping("/api/book")
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @GetMapping("/api/book")
    public List<Book> findAllBooks() {
        return bookRepository.findAllBooks();
    }

    @GetMapping("/api/book/{bookId}")
    public Book findBookById(
            @PathVariable("bookId") Integer id) {
        return bookRepository.findBookById(id);
    }

    @GetMapping("/api/book/{bookId}/user")
    public User findUserByBookId(
            @PathVariable("bookId") Integer id) {
        return userRepository.findUserById(bookRepository.findUserByBookId(id));
    }

    @PostMapping("/api/book/{bookId}/author")
    public List<Author> createAuthorForBook(@RequestBody Author author, @PathVariable("bookId") Integer id) {
        Book b = bookRepository.findBookById(id);
        Written w = new Written(b, author);
        b.getAuthors().add(w);
        Author a = authorRepository.findAuthorById(author.getId());
        if (a == null ) {
            List<Written> list = new ArrayList<Written>();
            list.add(w);
            author.setBooks(list);
            authorRepository.save(author);
        }
        else {
            a.getBooks().add(w);
        }
        writtenRepository.save(w);
        this.updateBook(id, b);
        return this.writtenToAuthor(b.getAuthors());
    }

    @GetMapping("/api/book/{bookId}/author")
    public List<Author> findAuthorsForBook (
            @PathVariable("bookId") Integer id) {

        Book b = bookRepository.findBookById(id);

        return this.writtenToAuthor(b.getAuthors());
    }

    @PutMapping("/api/book/{bookId}")
    public Book updateBook(
            @PathVariable("bookId") Integer id,
            @RequestBody Book bookUpdates) {
        Book book = bookRepository.findBookById(id);
        book.setTitle(bookUpdates.getTitle());
        book.setSummary(bookUpdates.getSummary());
        book.setDate(bookUpdates.getDate());
        book.setGenre(bookUpdates.getGenre());
        book.setAuthors(bookUpdates.getAuthors());
        book.setUser(bookUpdates.getUser());

        return bookRepository.save(book);
    }

    @DeleteMapping("/api/book/{bookId}")
    public void deleteBook(
            @PathVariable("bookId") Integer id) {
        bookRepository.deleteById(id);
    }

    private List<Author> writtenToAuthor(List<Written> written) {
        List<Author> temp = new ArrayList<>();
        for (Written w: written) {
            temp.add(w.getAuthor());
        }
        return temp;
    }
}
