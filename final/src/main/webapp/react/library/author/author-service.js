const BOOK_URL = "http://localhost:8080/api/book"
const AUTHOR_URL = "http://localhost:8080/api/author"


export const createAuthorForBook = (bookId, author) =>
    fetch(`${BOOK_URL}/${bookId}/author`, {
        method: 'POST',
        body: JSON.stringify(author),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAuthorForBook = (bookId) =>
    fetch(`${BOOK_URL}/${bookId}/author`)
        .then(response => response.json())

export const findAllAuthors = () =>
    fetch(AUTHOR_URL)
        .then(response => response.json())

export const findAuthorById = (id) =>
    fetch(`${AUTHOR_URL}/${id}`)
        .then(response => response.json())

export const updateAuthor = (id, author) =>
    fetch(`${AUTHOR_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(author),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteAuthor = (id) =>
    fetch(`${AUTHOR_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createAuthorForBook,
    findAuthorForBook,
    findAuthorById,
    updateAuthor,
    deleteAuthor,
    findAllAuthors
}