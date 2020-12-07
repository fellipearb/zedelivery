import styled from 'styled-components'
import Colors from '../../theme/Colors';

export const BgLocation = styled.main`
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

        &__logo {
            width: 140px;
            margin-bottom: 20px;
        }

        &__form {
            width: 100%;
        }

        &__search-location {
            width: 100%;
            height: 40px;
            font-size: 16px;
            background: none;
            border: 1px solid ${Colors.tertiary};
            color: ${Colors.tertiary};
            border-radius: 5px;
            margin-top: 20px;
            padding: 0 10px;
            
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

        &__use-search {
            width: 100%;
            padding: 10px 15px;
            background: ${Colors.primary};
            color: ${Colors.tertiary};
            border-radius: 5px;
            margin-top: 15px;
            border: none;
            
            &:disabled {
                opacity: .6;
            }
        }
    }
`;

export const Input = styled.input`
`;