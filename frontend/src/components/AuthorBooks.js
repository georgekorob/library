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

    let {id} = useParams()
    console.log(id)
    let filteredItem = books.filter(book => book.authors.includes(parseInt(id)))

    return (
        <table>
            <th>
                Id
            </th>
            <th>
                Name
            </th>
            <th>
                Author
            </th>
            {filteredItem.map((book) => <BookItem book={book} authors={authors}/>)}
        </table>
    )
}


export default AuthorsBookList
