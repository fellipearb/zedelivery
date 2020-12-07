import React from 'react';
import { HeaderTag, Logo } from './HeaderStyle';

function Header() {
    return (
        <HeaderTag>
            <Logo 
                src="/images/zedeliverylogo.png"
                alt="Zé Delivery de Bebidas"
            />
        </HeaderTag>
    )
}

export default Header;