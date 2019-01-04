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
            })
          }catch(err) {
              console.log(err)
          }
      }

      handleUpdate = (event) => {
        event.preventDefault();
        const newBook = {
            title: this.state.newBookTitle,
            subtitle: this.state.newBookSubtitle,
            author: this.state.newBookAuthor,
            published: this.state.newBookPublished,
            publisher: this.state.newBookPublisher,
            pages: this.state.newBookPages,
            description: this.state.newBookDesc,
            website: this.state.newBookSite,
            price: this.state.newBookPrice
        }
        document.getElementById('newBookForm').reset()
        this.props.addBook(newBook);
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
                            <input type="text" class="form-control" name="newBookTitle" value={this.state.bookTitle} onChange={this.handleChange} placeholder="Enter Title" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" name="newBookSubtitle" value={this.state.bookSubtitle} onChange={this.handleChange} placeholder="Sub Title" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookAuthor" value={this.state.bookAuthor} onChange={this.handleChange} placeholder="Enter Author" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" name="newBookPages" value={this.state.bookPages} onChange={this.handleChange} placeholder="# of Pages" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookPublisher" value={this.state.bookPublisher} onChange={this.handleChange} placeholder="Enter Publisher" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" name="newBookPublished" value={this.state.bookPublished} onChange={this.handleChange} placeholder="Publication Date" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookDesc" value={this.state.bookDesc} onChange={this.handleChange} placeholder="Enter Description" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="url" class="form-control" name="newBookSite" value={this.state.bookSite} onChange={this.handleChange} placeholder="Enter Website" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" name="newBookPrice" value={this.state.bookPrice} onChange={this.handleChange} placeholder="Enter Price" required />
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