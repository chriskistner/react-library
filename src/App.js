import React, { Component } from 'react';
import './App.css';
import LibraryHeader from './LibraryHeader.js';
import LibraryFooter from './LibraryFooter.js';
import BookListings from './BookListings.js';
import CartItems from './CartItems.js'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      library: [],
      filterBy: 'name',
      shoppingCart: []
    }
  }

getLibrary = async () => {
    try {
        const response = await axios.get('http://localhost:8082/api/books');
        console.log(response.data)
        this.setState({
            library: response.data
        })
        } catch(err) {
            console.log(err)
        }
}

addToCart = async () => {
  try {


  } catch(err) {
    console.log(err)
  }
}

componentDidMount() {
    this.getLibrary()
};

handleFilter = (event) => {
  this.setState({
    filterBy: event.target.value
  })
}

  render() {
    console.log('check render')
    return (
      <div className="App">
        <div className="container">
          <LibraryHeader handleFilter={this.handleFilter}/>
          <div className="row border">
            <div className="col-8 border">
              <BookListings library = {this.state.library} filterBy={this.state.filterBy} />
            </div>
            <div className="col-4 border">
              <CartItems shoppingCart={this.state.shoppingCart}/>
            </div>
          </div>
          <LibraryFooter/>
        </div>
      </div>
    );
  }
}

