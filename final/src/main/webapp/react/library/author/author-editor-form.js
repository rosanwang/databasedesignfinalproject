import authorService from "./author-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const AuthorEditorForm = () => {
    const [author, setAuthor] = useState({})
    const {authorId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findAuthorById(authorId)
    }, []);
    const findAuthorById = (id) =>
        authorService.findAuthorById(id)
            .then(author => setAuthor(author))
    const updateAuthor = (id, newAuthor) =>
        authorService.updateAuthor(id, newAuthor)
            .then(() => history.goBack())
    const deleteAuthor = (id) =>
        authorService.deleteAuthor(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Author Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={author.id}/>
            <label>First Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAuthor(author => ({...author, firstName: e.target.value}))}
                value={author.firstName}/>
            <label>Last Name</label>
            <input
                className="form-control margin-bottom-10px"
                value={author.lastName}
                onChange={(e)=>setAuthor(author => ({...author, lastName: e.target.value}))}/>
            <br/>
            <button
                onClick={() => updateAuthor(author.id, author)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteAuthor(author.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default AuthorEditorForm