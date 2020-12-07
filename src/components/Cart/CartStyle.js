import styled from 'styled-components'
import Colors from '../../theme/Colors';

export const CartTag = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .count {
        position: absolute;
        top: 0;
        right: 0;
        background: ${Colors.quaternary};
        border-radius: 100%;
        width: 20px;
        height: 20px;
        z-index: 1;
        font-size: 12px;
        color: ${Colors.tertiary};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        color: #fff;
        font-size: 24px;
    }
`;