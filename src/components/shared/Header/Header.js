import React, { Component } from 'react';
import Cart from '../../Cart/Cart';
import { HeaderTag } from './HeaderStyle';

class Header extends Component {
    render() {
        console.log( this.props.cartItems )
        return (
            <HeaderTag>
                <div className="container">
                    <img 
                        src="/images/zedeliverylogo.png"
                        alt="Zé Delivery de Bebidas"
                        className="logo"
                    />
                    <Cart cartItems={this.props.cartItems} />
                </div>
            </HeaderTag>
        )
    }
}

export default Header;