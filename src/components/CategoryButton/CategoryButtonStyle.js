import styled from 'styled-components'
import Colors from '../../theme/Colors';

export const CategoryButtonStyle = styled.button`
    background: none;
    padding: 10px 20px;
    margin: 5px;
    color: ${Colors.quaternary};
    border-radius: 5px;
    border: 2px solid ${Colors.tertiary};

    &:hover {
        background: ${Colors.tertiary};
    }
`;

export default CategoryButtonStyle;