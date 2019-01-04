import React, { Component } from 'react';
import axios from 'axios';

export default class EditBook extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      };

      handleSubmit = async (event) => {
          event.preventDefault();
          console.log(this.state.bookID)
          try {
            const response = await axios.get(`http://localhost:8082/api/books/${this.state.bookID}`);
            this.setState({
                id: response.data.id,
                bookTitle: response.data.title,
                bookSubtitle: response.data.subtitle,
                bookAuthor: response.data.author,
                bookPublished: response.data.published,
                bookPublisher: response.data.publisher,
                bookPages: response.data.pages,
                bookDesc: response.data.description,
                bookSite: response.data.website,
                bookPrice: response.data.price
            });
            console.log(this.state)
          }catch(err) {
              console.log(err)
          }
      }

      handleUpdate = (event) => {
        event.preventDefault();
        const bookID = this.state.id;
        const updateBook = {
            title: this.state.bookTitle,
            subtitle: this.state.bookSubtitle,
            author: this.state.bookAuthor,
            published: this.state.bookPublished,
            publisher: this.state.bookPublisher,
            pages: this.state.bookPages,
            description: this.state.bookDesc,
            website: this.state.bookSite,
        }

        document.getElementById('newBookForm').reset()
        this.props.editBook(bookID, updateBook);
        this.setState({
            id: '',
            bookTitle: '',
            bookSubtitle: '',
            bookAuthor: '',
            bookPublished: '',
            bookPublisher: '',
            bookPages: 0,
            bookDesc: '',
            bookSite: '',
            bookPrice: 0
        });
      };

    render() {
        return (
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <h3>Edit Book</h3>
                        </div>
                        <div className="col">
                            <input className="form-control mr-sm-2" type="search" placeholder="Enter ID" name="bookID" value={this.state.bookID} onChange={this.handleChange} aria-label="Search"/>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Load</button>
                        </div>
                    </div>
                </form>
                <form onSubmit={this.handleUpdate} id="newBookForm">
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="bookTitle" value={this.state.bookTitle} onChange={this.handleChange} placeholder="Enter Title" required/>
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" name="bookSubtitle" value={this.state.bookSubtitle} onChange={this.handleChange} placeholder="Sub Title" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="bookAuthor" value={this.state.bookAuthor} onChange={this.handleChange} placeholder="Enter Author" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" name="bookPages" value={this.state.bookPages} onChange={this.handleChange} placeholder="# of Pages" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="bookPublisher" value={this.state.bookPublisher} onChange={this.handleChange} placeholder="Enter Publisher" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" name="bookPublished" value={this.state.bookPublished} onChange={this.handleChange} placeholder="Publication Date" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="bookDesc" value={this.state.bookDesc} onChange={this.handleChange} placeholder="Enter Description" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="url" class="form-control" name="bookSite" value={this.state.bookSite} onChange={this.handleChange} placeholder="Enter Website" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" name="bookPrice" value={this.state.bookPrice} onChange={this.handleChange} placeholder="Enter Price" disabled />
                        </div> 
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Update Book</button>
                        </div>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}