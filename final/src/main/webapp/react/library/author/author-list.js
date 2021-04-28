import AuthorEditorInline from "./author-editor-inline";
//import authorService, {createAuthorForBook} from "./author-service"
import authorService, {findAuthorForBook} from "./author-service"

const BOOK_URL = "http://localhost:8080/api/book"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const AuthorList = () => {
    const [authors, setAuthors] = useState([])
    const [newAuthor, setNewAuthor] = useState({})
    const {bookId} = useParams()

    useEffect(() => {

        //findAllAuthors()
        findAuthorForBook(bookId)
    }, [])

    const createAuthorForBook = (author) =>
        authorService.createAuthorForBook(bookId, author)
            .then(author => {
                setNewAuthor({lastName:''})
                setAuthors(authors => ([...authors, author]))
            })

    /*
    const updateAuthor = (id, newAuthor) =>
    authorService.updateAuthor(id, newAuthor)
            .then(author => setAuthors(authors => (authors.map(author => author.id === id ? newAuthor : author))))
     */

    const updateAuthor = (newAuthor, id) =>
        authorService.updateAuthor(newAuthor, id)
            .then(author => setAuthors(authors => (authors.map(author => author.id === id ? newAuthor : author))))
    const findAuthorForBook = (bookId) =>
        authorService.findAuthorForBook(bookId)
            .then(authors => setAuthors(authors))
    const deleteAuthor = (id) =>
        authorService.deleteAuthor(id)
            .then(authors => setAuthors(authors => authors.filter(author => author.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Authors
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Author Name"
                                   title="Please enter a name for the Author"
                                   className="form-control"
                                   value={newAuthor.lastName}
                                   onChange={(e) => setNewAuthor(newAuthor => ({...newAuthor, lastName: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createAuthorForBook(newAuthor)}></i>
                        </div>
                    </div>
                </li>
            {
                authors.map(author =>
                    <li key={author.id} className="list-group-item">
                        <AuthorEditorInline key={author._id}
                                            updateAuthor={updateAuthor}
                                            deleteAuthor={deleteAuthor}
                                            author={author}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default AuthorList;