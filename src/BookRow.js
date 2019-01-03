import React from 'react';

export default function BookRow({title, subtitle, author, published, publisher, pages, description, website, price, inCart, id}) {
    return (
        <div className="collection-item">
        <div className="row border">
            <div className="col-md-2">TITLE: {title}</div>
            <div className="col-md-2">SUBTITLE: {subtitle}</div>
            <div className="col-md-2">AUTHOR: {author}</div>
            <div className="col-md-2">PUBLISHED: {published}</div>
            <div className="col-md-2">PUBLISHER:{publisher}</div>
        </div>
        <div className="row border" style={{marginBottom: 15}}>
            <div className="col-md-6">DESC: {description}</div>
            <div className="col-md-2"># PAGES: {pages}</div>
            <div className="col-md-2">WEBSITE: {website}</div>
            <div className="col-md-2">PRICE: {price}</div>
        </div>
    </div>
    )
}