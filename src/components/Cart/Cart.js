import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartTag } from './CartStyle';

function Cart(props) {
    const { cartItems } = props;
    
    return (
        <CartTag>
            <span className="count">{cartItems.length}</span>
            <FontAwesomeIcon icon="shopping-cart" className="icon" />
        </CartTag>
    )
}

export default Cart;