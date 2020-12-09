import React from 'react';
import Cart from '../../Cart/Cart';
import { HeaderTag } from './HeaderStyle';

function Header(props) {
    const { cartItems } = props;
    
    return (
        <HeaderTag>
            <div className="container">
                <img 
                    src="/images/zedeliverylogo.png"
                    alt="Zé Delivery de Bebidas"
                    className="logo"
                />
                <Cart cartItems={cartItems} />
            </div>
        </HeaderTag>
    )
}

export default Header;