import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartTag } from './CartStyle';

function Cart(props) {
    const { cartItems } = props;
    
    return (
        <CartTag data-testid="Cart">
            <span className="count" data-testid="CartCount">{cartItems.length}</span>
            <FontAwesomeIcon icon="shopping-cart" className="icon" data-testid="CartIcon" />
        </CartTag>
    )
}

export default Cart;