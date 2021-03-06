import React, { Component } from 'react';
import './App.css';
import LibraryHeader from './LibraryHeader.js';
import LibraryFooter from './LibraryFooter.js';
import BookListings from './BookListings.js';
import CartItems from './CartItems.js';
import AddNewBook from './AddNewBook.js';
import EditBook from './EditBooks.js';
import axios from 'axios';

const url = process.env.REACT_APP_URL;

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      library: [],
      filterBy: 'title',
      shoppingCart: []
    }
  };

getLibrary = async () => {
    try {
        const response = await axios.get(`${url}/books`);
        this.setState({
            library: response.data
        })
        } catch(err) {
            console.log(err)
        }
  };

  getBook = async (book) => {
    try {
      const response = await axios.get(`${url}/books/${book}`);
      this.setState({
        library: [response.data]
      })
    } catch(err) {
      console.log(err)
    }
  };

  getCart = async () => {
    try {
      const response = await axios.get(`${url}/books`);
      const yourCart = response.data.filter(book => book.inCart === true);
      this.setState({
          shoppingCart: yourCart || []
      })
      } catch(err) {
          console.log(err)
      }
  };

addToCart = async (book) => {
  try { 
    await axios.patch(`${url}/books/cart/add/${book}`);
    this.getCart();
  } catch(err) {
    console.log(err)
  }
};

dropFromCart = async (book) => {
  try {
    await axios.patch(`${url}/books/cart/remove/${book}`);
    this.getCart();

  } catch(err) {
    console.log(err)
  }
};

handleFilter = (event) => {
  this.setState({
    filterBy: event.target.value
  })
};

addBook = async (book) => {
  try {
    await axios.post(`${url}/books`, book);
    this.getLibrary();
  } catch(err) {
    console.log(err)
  }
};

editBook = async (id, book) => {
  try {
    await axios.put(`${url}/books/${id}`, book);
    this.getLibrary();
  } catch(err) {
    console.log(err)
  }
};

componentDidMount() {
  this.getLibrary();
  this.getCart();
};

  render() {
    return (
      <div className="App">
        <div className="container bg-light border">
          <div className="row">
            <div className="col-12">
              <LibraryHeader handleFilter={this.handleFilter} getBook={this.getBook}/>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <BookListings addToCart={this.addToCart} library={this.state.library} filterBy={this.state.filterBy} />
            </div>
            <div className="col-4">
              <CartItems shoppingCart={this.state.shoppingCart} dropFromCart={this.dropFromCart}/>
            </div>
          </div>
          <div className="row bg-dark text-light">
            <div className="col">
              <h3>Admin Section</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <AddNewBook addBook={this.addBook} />
            </div>
            <div className="col-6">
              <EditBook editBook={this.editBook} />
            </div>
          </div>
            <div className="row text-light">
              <div className="col">
                <LibraryFooter />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

