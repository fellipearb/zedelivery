import styled from 'styled-components'
import Colors from '../../../theme/Colors';

export const HeaderTag = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Colors.primary};
    padding: 15px 0;
`;

export const Logo = styled.img`
    width: 150px;
`;

export const Button = styled.button`
    border: none;
    background: none;
`;