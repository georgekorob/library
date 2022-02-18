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
            <thead>
                <th>
                    First name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Birth year
                </th>
            </thead>
            <tbody>
                {authors.map((author) => <AuthorItem author={author}/>)}
            </tbody>
        </table>
    )
}

export default AuthorList
