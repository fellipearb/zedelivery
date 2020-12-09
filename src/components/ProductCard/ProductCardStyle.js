import styled from 'styled-components'
import Colors from '../../theme/Colors';
import MediaQueries from '../../theme/MediaQueries';

export const ProductCardStyle = styled.div`
    width: 200px;
    flex: 0 50%;
    padding: 10px;

    @media(${MediaQueries.desktop.minWidth}) {
        flex: 0 25%;
    }
    
    .product {
        border: 1px solid ${Colors.tertiary};
        padding: 15px;
        border-radius: 5px;

        &:hover {
            border: 2px solid ${Colors.tertiary};

            .add {
                background: ${Colors.primary};
            }
        }
    }

    a {
        text-decoration: none;
    }

    .image {
        width: 100%;
    }

    .name {
        color: ${Colors.primary};
        font-size: 14px;
        height: 30px;
        margin: 15px 0;
    }

    .price {
        font-size: 14px;
        font-weight: bold;
        color: #000;
    }

    .add {
        width: 100%;
        margin-top: 10px;
        border: none;
        background: ${Colors.quaternary};
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: background .3s, border .3s;
    }
`;