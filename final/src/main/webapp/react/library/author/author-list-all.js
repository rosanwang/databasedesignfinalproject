//import AuthorEditorInline from "./author-editor-inline";
//import authorService, {createAuthorForBook} from "./author-service"
import authorService, {findAuthorForBook} from "./author-service"

const BOOK_URL = "http://localhost:8080/api/book"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const AuthorAllList = () => {
    const [authors, setAuthors] = useState([])
    const [newAuthor, setNewAuthor] = useState({})

    useEffect(() => {
        findAllAuthors()
    }, [])


    const updateAuthor = (newAuthor, id) =>
        authorService.updateAuthor(newAuthor, id)
            .then(author => setAuthors(authors => (authors.map(author => author.id === id ? newAuthor : author))))

    const findAllAuthors = () =>
        authorService.findAllAuthors().then(authors => setAuthors(authors))

    const deleteAuthor = (id) =>
        authorService.deleteAuthor(id)
            .then(authors => setAuthors(authors => authors.filter(author => author.id !== id)))
    return(
        <div>
            <h2>
                Authors
            </h2>
                {
                    authors.map(author =>
                        <li key={author.id} className="list-group-item">
                            <Link to={`/author/${author.id}`}>
                            {author.firstName}, {author.lastName}
                            </Link>
                        </li>)
                }
        </div>
    )
}

export default AuthorAllList;