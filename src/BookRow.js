import React from 'react';
import './BookRow.css'

export default function BookRow({title, subtitle, author, published, publisher, pages, description, website, price, inCart, id}) {
    return (
        <div className="collection-item">
        <div className="row border">
        <div className="col-md-6"><h4>Title:</h4></div>
            <div className="col-md-3"><h4>Author:</h4></div>
            <div className="col-md-3"><h4>Publisher:</h4></div>
        </div>
        <div className="row border">
            <div className="col-md-6">
                <span><b>{title}</b></span>
                <span><i>{subtitle}</i></span>
            </div>
            <div className="col-md-3">
                <span><b>{author}</b></span>
            </div>
            <div className="col-md-3">
            <span><b>{publisher}</b></span>
            <span><i>{published}</i></span>
            </div>
        </div>
        <div className="row border" style={{marginBottom: 15}}>
            <div className="col-md-9">
            <span>{description} <a href={website}>Website</a></span>
            <span><i>Page Count: {pages}</i></span>
            </div>
            <div className="col-md-3">
            <span><b>Add to Cart:</b></span>
            <span><button>$ {price}.00</button></span>
            </div>
        </div>
    </div>
    )
}