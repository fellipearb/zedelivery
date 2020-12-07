import styled from 'styled-components'
import Colors from '../../../theme/Colors';

export const FooterTag = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${Colors.primary};
    padding: 15px;

    .logo {
        width: 250px;
    }

    .text {
        font-size: 14x;
        color: ${Colors.tertiary};
        margin: 15px 0;
        text-align: center;
    }

    .social-list {
        width: 200px;
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const SocialListItems = styled.ul`
`;

export const SvgStyle = {
    width: '40px',
    height: '40px',
}

export const SvgFill = {
    fill: Colors.tertiary
}