import React from 'react'

const BookItem = ({book}) => {
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
        </tr>
    )
}

const BookList = ({books}) => {
    return (
        <table>
            <thead>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Author
                </th>
            </thead>
            <tbody>
                {books.map((book) => <BookItem book={book}/>)}
            </tbody>
        </table>
    )
}

export default BookList
