import styled from 'styled-components';
import MediaQueries from './MediaQueries';

export const ProductPageStyle = styled.div`
    width: 100%;
    padding: 15px;
    
    @media(${MediaQueries.desktop.minWidth}) {
        margin: 0 auto;
        width: ${MediaQueries.desktop.container};
    }
    
    .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
`;