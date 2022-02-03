import styled from 'styled-components';

export const CartDiv = styled.div`
#cart-navlink {
    padding: 10px 15px;
    margin-right: 10px;
    text-align: center;
    text-decoration: none;
    color: #38A3A5;
    display: flex;
    column-gap: 20px;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        color: #80ED99;
        background-color: #38A3A5;
        border: 1px;
        border-radius: 15px;
        transition: all .3s ease-in-out;
    }
    p {
        margin-top: 12px;
        font-size: 20px;
    }
}
`