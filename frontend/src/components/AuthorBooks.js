import React from 'react'
import {useParams} from "react-router-dom";

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


const AuthorsBookList = ({books}) => {

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
            {filteredItem.map((book) => <BookItem book={book}/>)}
        </table>
    )
}


export default AuthorsBookList
