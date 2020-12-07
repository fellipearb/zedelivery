import styled from 'styled-components'
import Colors from '../../../theme/Colors';
import MediaQueries from '../../../theme/MediaQueries';

export const HeaderTag = styled.header`
    width: 100%;
    background: ${Colors.primary};
    padding: 15px;
    display: flex;
    justify-content: center;
    
    .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(${MediaQueries.desktop.minWidth}) {
            width: ${MediaQueries.desktop.container};
        }
    }

    .logo {
        width: 150px;
    }
`;