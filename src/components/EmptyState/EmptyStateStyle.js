import styled from 'styled-components'
import MediaQueries from '../../theme/MediaQueries';

const EmptyStateStyle = styled.div`
    padding: 40px 15px;

    @media(${MediaQueries.desktop.minWidth}) {
        margin: 0 auto;
        width: ${MediaQueries.desktop.container};
    }

    p {
        font-size: 16px;
        text-align: center;
    }
`;

export default EmptyStateStyle;