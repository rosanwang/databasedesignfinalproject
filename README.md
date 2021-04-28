# databasedesignfinalproject

1. Books Database
2. Database Design 8 
3. Ruoxuan Wang, Section 1
4. This project represents system where users are able to "borrow" books with an associated author. 
5. UML diagram:
https://drive.google.com/file/d/1a-MHdYUnWKl7YyWi8xrlX9HqaFxPNIPj/view?usp=sharing  
6. A User represents an account such as a library account in this case which allows users to borrow books. 
7. Author represents the author of a book including a first name, last name, and also contains a list of books written by the author. Book represents a book with a list of authors (a book can have multiple authors), title, summary, genre (enum) and duedate. 
8. The user to domain relationship represents a user such as a library system where one user is able to borrow many books. For the database design purposes, there was only one copy of each book. 
9. A Book object is able to have multiple Authors and an Author can have many Books. This is a many to many relationship which is reifyed through written (contains a book and author ID). 
10. The portable enumerations represent the genre of the books. Possible values include Young Adult (YA), Graphic novels (graphic), fiction and nonfiction. 
11. The user interface was written as a webapp using react.js. The frontend starts off with a list of users and from there, you are able to navigate to the corresponding books for the user and the corresponding authors for the books. There is also a list of all the authors and all the books on the home page. Clicking on those links will lead to the editor for those entries. 


