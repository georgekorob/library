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
                <tr>
                    <th>
                        First name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Birth year
                    </th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => <AuthorItem key={author.id} author={author}/>)}
            </tbody>
        </table>
    )
}

export default AuthorList
