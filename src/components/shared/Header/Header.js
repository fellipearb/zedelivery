import React from 'react';
import Cart from '../../Cart/Cart';
import { HeaderTag } from './HeaderStyle';

function Header() {
    return (
        <HeaderTag>
            <div className="container">
                <img 
                    src="/images/zedeliverylogo.png"
                    alt="Zé Delivery de Bebidas"
                    className="logo"
                />
                <Cart />
            </div>
        </HeaderTag>
    )
}

export default Header;