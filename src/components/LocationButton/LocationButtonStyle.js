import styled from 'styled-components'
import Colors from '../../theme/Colors';
import MediaQueries from '../../theme/MediaQueries';

const LocationButtonStyle = styled.button`
    width: 100%;
    padding: 10px 15px;
    background: ${Colors.primary};
    color: ${Colors.tertiary};
    border-radius: 5px;
    margin-top: 15px;
    border: none;

    @media(${MediaQueries.desktop.minWidth}) {
        width: 200px;
        margin-top: 0;
    }

    &:disabled {
        opacity: .6;
    }
`;

export default LocationButtonStyle;