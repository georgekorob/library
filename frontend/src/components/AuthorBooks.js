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
                <div>{book.authors.map((authorID) => {
                    let author = authors.find((author) => author.id === authorID);
                    if(author) {
                        return <div key={authorID}>{author.first_name} {author.last_name}</div>
                    }
                    else {
                        return null
                    }
                })}</div>
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
                    Authors
                </th>
            </thead>
            <tbody>
                {filteredBooks.map((book) => <BookItem key={book.id} book={book} authors={authors}/>)}
            </tbody>
        </table>
    )
}

export default AuthorsBookList
