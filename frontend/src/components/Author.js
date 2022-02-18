import React from 'react'
import {Link} from "react-router-dom";


const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                <Link to={`/author/${author.id}`}>{author.first_name}</Link>
            </td>
            <td>
                {author.last_name}
            </td>
            <td>
                {author.birth_year}
            </td>
        </tr>
    )
}


const AuthorList = ({authors}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Birth year
            </th>
            {authors.map((author) => <AuthorItem author={author}/>)}
        </table>
    )
}


export default AuthorList
