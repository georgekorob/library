import React from "react";


class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', authors: []}
    }

    handleAuthorChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({authors: []})
        } else {
            let authors = []
            for (let i = 0; i < event.target.selectedOptions.length; i++) {
                authors.push(+event.target.selectedOptions.item(i).value)
            }
            this.setState({authors: authors})
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }


    handleSubmit(event) {
        this.props.createBook(this.state.name, this.state.authors)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <select name="authors" multiple onChange={(event) =>
                    this.handleAuthorChange(event)}>
                    {this.props.authors.map((item) =>
                        <option key={item.id} value={item.id}>{item.first_name}</option>)}
                </select>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default BookForm