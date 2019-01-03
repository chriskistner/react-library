import React from 'react';
import CartItem from './CartItem'

export default function CartItems(props) {
    const cart = props.shoppingCart;
    const costs = cart.map(target => target.price);
    const total = costs.reduce((a, b) => a + b, 0);

    const cartIsEmpty = ( 
        <div className="row border">
            <div className="col-md">Your Cart Is Empty</div>
        </div>
        );
    
        const cartHasStuff = (
        <div className="row border text-white bg-dark">
            <div className="col">Total $ {total}.00</div>
        </div>
        )

    return (
        <div className="container">
            <h1>Your Cart</h1>
        <div className="collection-item">
            <div className="row border text-white bg-dark">
                <div className="col-md-8">Book Name</div>
                <div className="col-md-4">Price</div>
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