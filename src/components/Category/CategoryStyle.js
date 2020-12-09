import styled from 'styled-components';
import MediaQueries from '../../theme/MediaQueries';

export const CategoryStyle = styled.div`
    width: 100%;
    padding: 15px;
    
    @media(${MediaQueries.desktop.minWidth}) {
        margin: 0 auto;
        width: ${MediaQueries.desktop.container};
    }
    
    p {
        margin: 0 5px 10px;
        text-align: center;
    }
    
    .categories {
        text-align: center;
    }
`;

export default CategoryStyle;