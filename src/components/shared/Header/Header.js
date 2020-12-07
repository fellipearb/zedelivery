import React from 'react';
import { HeaderTag } from './HeaderStyle';

function Header() {
    return (
        <HeaderTag>
            <img 
                src="/images/zedeliverylogo.png"
                alt="Zé Delivery de Bebidas"
                className="logo"
            />
        </HeaderTag>
    )
}

export default Header;