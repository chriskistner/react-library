import React, { Component } from 'react';

export default class AddNewBook extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            title: this.state.newBookTitle,
            subtitle: this.state.newBookSubTitle,
            author: this.state.newBookAuthor,
            published: this.state.newBookPublished,
            publisher: this.state.newBookPublisher,
            pages: this.state.newBookPages,
            description: this.state.newBookDesc,
            website: this.state.newBookSite,
        }
      }

    render() {
        return (
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter New Book</h3>
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" id="newBookTitle" value={this.state.newBookTitle} onChange={this.handleChange} placeholder="Enter Title" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" id="newBookSubtitle" value={this.state.newBookSubtitle} onChange={this.handleChange} placeholder="Sub Title" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" id="newBookAuthor" value={this.state.newBookAuthor} onChange={this.handleChange} placeholder="Enter Author" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" id="newBookPages" value={this.state.newBookPages} onChange={this.handleChange} placeholder="# of Pages" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" id="newBookPublisher" value={this.state.newBookPublisher} onChange={this.handleChange} placeholder="Enter Publisher" required />
                        </div>
                        <div className="col">
                            <input type="date" class="form-control" id="newBookPublished" value={this.state.newBookPublished} onChange={this.handleChange} placeholder="Publication Date" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="text" class="form-control" id="newBookDesc" value={this.state.newBookDesc} onChange={this.handleChange} placeholder="Enter Description" required />
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div className="col">
                            <input type="url" class="form-control" id="newBookSite" value={this.state.newBookSite} onChange={this.handleChange} placeholder="Enter Website" required />
                        </div>
                        <div className="col">
                            <input type="number" class="form-control" id="newBookPrice" value={this.state.newBookPrice} onChange={this.handleChange} placeholder="Enter Price" required />
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