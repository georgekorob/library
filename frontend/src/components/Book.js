import React from 'react'

const BookItem = ({book, deleteBook}) => {
    return (
        <tr>
            <td>
                {book.id}
            </td>
            <td>
                {book.name}
            </td>
            <td>
                {book.authors}
            </td>
            <td>
                <button onClick={() => deleteBook(book.id)} type="button">Delete</button>
            </td>
        </tr>
    )
}

const BookList = ({books, deleteBook}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) =>
                    <BookItem book={book} key={book.id} deleteBook={deleteBook}/>
                )}
            </tbody>
        </table>
    )
}

export default BookList
