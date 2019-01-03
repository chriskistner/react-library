import React, { Component } from 'react';

export default class LibraryHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Your Library</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Admin</a>
                    </li>
                    <li class="nav-item dropdown">
                        <select name="filterBy" id="itemSelect" class="form-control" value={this.state.itemSelect} onChange={this.props.handleFilter}>
                            <option selected disabled>Filter Library By...</option>
                            <option>name</option>
                            <option>author</option>
                        </select>
                    </li>
                </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search Books by ID</button>  
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            </div>
        </nav>
        )
    }

}