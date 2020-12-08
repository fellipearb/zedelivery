import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartTag } from './CartStyle';

function Cart(props) {
    return (
        <CartTag>
            <span className="count">{props.cartItems.length}</span>
            <FontAwesomeIcon icon="shopping-cart" className="icon" />
        </CartTag>
    )
}

export default Cart;