import React from 'react'
import {useParams} from "react-router-dom";

const BookItem = ({book, authors}) => {
    return (
        <tr>
            <td>
                {book.id}
            </td>
            <td>
                {book.name}
            </td>
            <td>
                {book.authors.map((authorID) => {
                    return authors.find((author) => author.id === authorID).first_name
                })}
            </td>
        </tr>
    )
}

const AuthorsBookList = ({books, authors}) => {

    let {id} = useParams();
    // console.log(id);
    let filteredBooks = books.filter(book => book.authors.includes(+id));

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
                {filteredBooks.map((book) => <BookItem book={book} authors={authors}/>)}
            </tbody>
        </table>
    )
}

export default AuthorsBookList
