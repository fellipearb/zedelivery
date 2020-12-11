import styled from 'styled-components'
import Colors from '../theme/Colors';
import MediaQueries from '../theme/MediaQueries';

const HomePageStyle = styled.main`
    height: 100vh;
    background: url(/images/banner.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    font-size: 18px;
    color: ${Colors.tertiary};
    text-align: center;
    line-height: 25px;

    .container {
        height: 100%;
        padding: 20px 15px;
        background-color: rgba(0, 0, 0, .6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logo {
            width: 140px;
            margin-bottom: 20px;
            
            @media(${MediaQueries.desktop.minWidth}) {
                width: 350px;
            }
        }

        .form {
            width: 100%;
            position: relative;

            @media(${MediaQueries.desktop.minWidth}) {
                width: 800px;
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }
        }        

        .pin-icon {
            position: absolute;
            top: 30px;
            left: 10px;

            @media(${MediaQueries.desktop.minWidth}) {
                top: 10px;
            }
        }

        .search-location {
            width: 100%;
            height: 40px;
            font-size: 16px;
            background: none;
            border: 1px solid ${Colors.tertiary};
            color: ${Colors.tertiary};
            border-radius: 5px;
            margin-top: 20px;
            padding: 0 10px 0 35px;

            @media(${MediaQueries.desktop.minWidth}) {
                width: 550px;
                margin-top: 0;
            }
            
            &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: ${Colors.tertiary};
                opacity: 1; /* Firefox */
            }
            
            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: ${Colors.tertiary};
            }
            
            &::-ms-input-placeholder { /* Microsoft Edge */
                color: ${Colors.tertiary};
            }
        }

        .autocomplete-dropdown-container {
            position: absolute;
            z-index: 1;
            background: #fff;
            color: #000;
            max-height: 40vh;
            overflow: auto;
            width: 100%;
            border-radius: 5px;

            .suggestion-item {
                font-size: 14px;
                color: #000;
                margin: 5px 0;
                padding: 5px;
                border-radius: 5px;

                &:first-child {
                    margin-top: 0;
                }

                &:last-child {
                    margin-bottom: 0;
                }

                &--active {
                    color: ${Colors.tertiary};
                    background: ${Colors.primary};
                }
            }
        }
    }
`;

export default HomePageStyle;