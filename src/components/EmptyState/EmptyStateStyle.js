import styled from 'styled-components'
import MediaQueries from '../../theme/MediaQueries';
import Colors from '../../theme/Colors';

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

    .changeLocation {
        display: block;
        margin: 0 auto;
        margin-top: 40px;
        border: 1px solid ${Colors.primary};
        width: 200px;
        text-align: center;
        padding: 10px 0;
        text-decoration: none;
        color: ${Colors.primary};

        &:hover {
            background: ${Colors.primary};
            color: #fff;
        }
    }
`;

export default EmptyStateStyle;