package com.example.springtemplate.daos;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.User;
import com.example.springtemplate.models.Written;
import com.example.springtemplate.repositories.BookRepository;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserORMDao {
    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/api/users/{userId}/book")
    public Book createBookForUser(@PathVariable("userId") Integer id, @RequestBody Book book) {
        //book = bookRepository.save(book);
        User u = userRepository.findUserById(id);
        //List<Book> temp = u.getBooks();
        //temp.add(book);
        //u.getBooks().add(book);
        //userRepository.save(u);
        book.setUser(u);
        return bookRepository.save(book);
    }
    
    @GetMapping("/api/users")
    public List<User> findAllUsers() {
        return userRepository.findAllUsers();
    }

    @GetMapping("/api/users/{userId}/book")
    public List<Book> findBooksForUser( @PathVariable("userId") Integer id) {
        User u = userRepository.findUserById(id);
        //TODO error
        return u.getBooks();
    }
    
    @GetMapping("/api/users/{userId}")
    public User findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }
    
    @PutMapping("/api/users/{userId}")
    public User updateUser(
            @PathVariable("userId") Integer id,
            @RequestBody User userUpdates) {
        User user = userRepository.findUserById(id);
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setEmail(userUpdates.getEmail());
        user.setDate(userUpdates.getDate());
        return userRepository.save(user);
    }
    
    @DeleteMapping("/api/users/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }
}