import React, { Component } from 'react';

export default class AddNewBook extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
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
        this.props.addBook(newBook);
        
        this.setState({
            newBookTitle: '',
            newBookSubtitle: '',
            newBookAuthor: '',
            newBookPublished: '',
            newBookPublisher: '',
            newBookPages: 0,
            newBookDesc: '',
            newBookSite: '',
            newBookPrice: 0

        })
      }

    render() {
        return (
            <div className="col">
                <form onSubmit={this.handleSubmit} id="newBookForm">
                    <h3>Enter New Book</h3>
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookTitle" value={this.state.newBookTitle} onChange={this.handleChange} placeholder="Enter Title" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" name="newBookSubtitle" value={this.state.newBookSubtitle} onChange={this.handleChange} placeholder="Sub Title" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookAuthor" value={this.state.newBookAuthor} onChange={this.handleChange} placeholder="Enter Author" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" name="newBookPages" value={this.state.newBookPages} onChange={this.handleChange} placeholder="# of Pages" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookPublisher" value={this.state.newBookPublisher} onChange={this.handleChange} placeholder="Enter Publisher" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" name="newBookPublished" value={this.state.newBookPublished} onChange={this.handleChange} placeholder="Publication Date" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" name="newBookDesc" value={this.state.newBookDesc} onChange={this.handleChange} placeholder="Enter Description" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="url" class="form-control" name="newBookSite" value={this.state.newBookSite} onChange={this.handleChange} placeholder="Enter Website" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" name="newBookPrice" value={this.state.newBookPrice} onChange={this.handleChange} placeholder="Enter Price" required />
                        </div> 
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Book</button>
                        </div>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}