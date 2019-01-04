import React, { Component } from 'react';

export default class LibraryHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getBook(this.state.bookID)
      };

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Your Library</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <select name="filterBy" id="itemSelect" className="form-control" value={this.state.itemSelect} onChange={this.props.handleFilter}>
                            <option selected disabled>Filter Library By...</option>
                            <option>name</option>
                            <option>author</option>
                        </select>
                    </li>
                </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Books by ID</button>  
                <input className="form-control mr-sm-2" type="search" placeholder="Search" name="bookID" value={this.state.bookID} onChange={this.handleChange} aria-label="Search"/>
            </form>
            </div>
        </nav>
        )
    }

}