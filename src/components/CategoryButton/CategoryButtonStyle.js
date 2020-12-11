import styled from 'styled-components'
import Colors from '../../theme/Colors';

const CategoryButtonStyle = styled.button`
    background: none;
    padding: 10px 20px;
    margin: 5px;
    color: ${Colors.quaternary};
    border-radius: 5px;
    border: 2px solid ${Colors.tertiary};

    &.active {
        color: #fff;
        background: ${Colors.primary};
        border-color: ${Colors.primary};

        &:hover {
            background: ${Colors.primary};
            border-color: ${Colors.primary};
        }
    }

    &:hover {
        background: ${Colors.tertiary};
    }
`;

export default CategoryButtonStyle;