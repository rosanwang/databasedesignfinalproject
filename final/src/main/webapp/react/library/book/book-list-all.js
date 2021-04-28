
import bookService, {findAllBooks, findBooksForUser, createBookForUser} from "./book-service"
const {Link} = window.ReactRouterDOM;

const BOOK_URL = "http://localhost:8080/api/book"
const { useState, useEffect } = React;
const { useParams} = window.ReactRouterDOM;

const BookListAll = () => {
    const [books, setBook] = useState([])
    const [newBook, setNewBook] = useState({})
    const {userId} = useParams()

    //invoked when page first loads
    useEffect(() => {
        findAllBooks()
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
        </h2>

                {
                    books.map(book =>
                        <li key={book.id} className="list-group-item">
                            <Link to={`/book/${book.id}`}>
                                {book.title}, {book.summary}
                            </Link>

                        </li>)
                }
        </div>
    )
}

export default BookListAll;