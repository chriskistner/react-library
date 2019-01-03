import React, { Component } from 'react';
import BookRow from './BookRow';

export default class BookListings extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        console.log(this.props.library.sort((a, b) => a[this.props.filterBy] > b[this.props.filterBy] ? 1 : -1))
        return (
            <div className="container">
            {this.props.library.map(book => {return <BookRow key= {book.id} {...book}/>})}
          </div>
        )
    }
}