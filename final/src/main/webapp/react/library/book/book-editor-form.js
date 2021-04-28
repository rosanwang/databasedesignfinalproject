import bookService, {findBooksForUser} from "./book-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const BOOK_URL = "http://localhost:8080/api/book"

const BookEditorForm = () => {
    const [book, setBook] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findBookById(id)
    }, []);
    const findBookById = (id) =>
        bookService.findBookById(id)
            .then(book => setBook(book))
    const updateBook = (id, newBook) =>
        bookService.updateBook(id, newBook)
            .then(() => history.goBack())
    const deleteBook = (id) =>
        bookService.deleteBook(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Book Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={book.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setBook(book => ({...book, title: e.target.value}))}
                value={book.title}/>
            <label>Summary</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setBook(book => ({...book, summary: e.target.value}))}
                value={book.summary}/>
            <label>Genre</label>
            <select
                className="form-control margin-bottom-10px"
                value={book.genreId}
                onChange={(e)=>setBook(book => ({...book, genreId: e.target.value}))}>
                <option>FICTION</option>
                <option>YA</option>
                <option>GRAPHIC</option>
                <option>NONFICTION</option>
            </select>
            <button
                onClick={() => updateBook(book.id, book)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteBook(book.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default BookEditorForm