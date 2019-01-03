import React from 'react';
import CartItem from './CartItem'

export default function CartItems(props) {
    const cart = props.shoppingCart;

    const cartIsEmpty = ( 
        <div className="row border">
            <div className="col-md">Your Cart Is Empty</div>
        </div>
        );
    
        const cartHasStuff = (
        <div className="row border text-white bg-dark">
            <div className="col">TOTAL $</div>
        </div>
        )

    return (
        <div className="container">
            <h1>Your Cart</h1>
        <div className="collection-item">
            <div className="row border text-white bg-dark">
                <div className="col-md-8">PRODUCT NAME</div>
                <div className="col-md-4">PRODUCT PRICE</div>
            </div> 
        </div>
        {
            cart.map(item => <CartItem book={item} dropBook={() => props.dropFromCart(item.id)}/>)
    }
    {
        cart.length === 0 ? cartIsEmpty :  cartHasStuff
    }
    </div>
    )
}