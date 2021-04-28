const BOOK_URL = "http://localhost:8080/api/book"
const USER_URL = "http://localhost:8080/api/users"

export const createBook = (book) =>
    fetch(BOOK_URL, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createBookForUser = (userId, book) =>
    fetch(`${USER_URL}/${userId}/book`, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findAllBooks = () =>
    fetch(BOOK_URL)
        .then(response => response.json())

export const findBooksForUser = (id) =>
    fetch(`${USER_URL}/${id}/book`)
        .then(response => response.json())

export const findBookById = (id) =>
    fetch(`${BOOK_URL}/${id}`)
        .then(response => response.json())

export const updateBook = (id, book) =>
    fetch(`${BOOK_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteBook= (id) =>
    fetch(`${BOOK_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createBook,
    findAllBooks,
    findBookById,
    updateBook,
    deleteBook,
    findBooksForUser,
    createBookForUser


}