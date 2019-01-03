import React from 'react'

export default function CartItem (props) {
    return (
        <div className="collection-item">
            <div className="row border">
                <div className="col-md-8">{props.book.title}</div>
                <div className="col-md-4">$ {props.book.price}.00</div>
                {/* <div className="col-md-2"><button onClick={() => props.deleteitem(props.cartitem)}>X</button></div> */}
            </div>
        </div>
    )
}