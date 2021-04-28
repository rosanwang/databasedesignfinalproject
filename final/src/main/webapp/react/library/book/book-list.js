import BookEditorInline from "./book-editor-inline";
import bookService, {findAllBooks, findBooksForUser, createBookForUser} from "./book-service"
const {Link} = window.ReactRouterDOM;

const BOOK_URL = "http://localhost:8080/api/book"
const { useState, useEffect } = React;
const { useParams} = window.ReactRouterDOM;

const BookList = () => {
    const [books, setBook] = useState([])
    const [newBook, setNewBook] = useState({})
    const {userId} = useParams()

    //invoked when page first loads
    useEffect(() => {
        findBooksForUser(userId)
    }, [])

    const findBooksForUser = (userId) =>
        bookService.findBooksForUser(userId).then(books => setBook(books))
    const createBook = (book) =>
        bookService.createBook(book)
            .then(book => {
                setNewBook({title:''})
                setBook(books => ([...books, book]))
            })
    const createBookForUser = (book) =>
        bookService.createBookForUser(userId, book)
            .then(book => {
                setNewBook({title:''})
                setBook(books => ([...books, book]))
            })
    const updateBook = (id, newBook) =>
        bookService.updateBook(id, newBook)
            .then(newBook => setBook(books => (books.map(book => book.id === id ? newBook : book))))
    const findAllBooks = () =>
        bookService.findAllBooks()
            .then(books => setBook(books))
    const deleteBook = (id) =>
        bookService.deleteBook(id)
            .then(book => setBook(books => books.filter(book => books.id !== id)))
    return(
        <div>
            <h2>
                Books
                    <Link onClick={() => history.back()}>
                        <i className="fas fa-arrow-left margin-right-10px"></i>
                    </Link>
                </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Book Title"
                                   title="Please enter a title for the book" className="form-control" value={newBook.title}
                                   onChange={(e) => setNewBook(newBook => ({...newBook, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createBookForUser(newBook)}></i>
                        </div>
                    </div>
                </li>
            {
                books.map(book =>
                    <li key={book.id} className="list-group-item">
                        <BookEditorInline key={book.id}
                                          updateBook={updateBook}
                                          deleteBook={deleteBook}
                                          book={book}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default BookList;