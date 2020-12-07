import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartTag } from './CartStyle';

class Cart extends Component {
    render() {
        return (
            <CartTag>
                <span className="count">1</span>
                <FontAwesomeIcon icon="shopping-cart" className="icon" />
            </CartTag>
        )
    }
}

export default Cart;