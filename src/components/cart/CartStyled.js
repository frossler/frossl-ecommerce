import styled from 'styled-components';

export const StyledCartItemContainer = styled.div`
margin: 30px;
.bottom-div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: end;
    .total-price {
        
    }
    .btn-empty-cart {
        width: 150px;
        margin: 10px 0;
        background-color: #22577A;
        color: #80ED99;
        text-decoration: none;
        text-align: center;
        font-size: 15px;
        padding: 10px 0px;
        border-radius: 10px;
        border: none;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: #80ED99;
            color: #22577A;
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
    }
}
.empty-cart-container {
    display: flex;
    flex-direction: column;
    row-gap: 70px;
    align-items: center;
    .cart-title {
        margin-top: 20px;
    }
    .shop-link {
        text-decoration: none;
        background-color: #57CC99;
        color: #22577A;
        padding: 30px 60px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: #22577A;
            color: #80ED99;
            transition: all .3s ease-in-out;
        }
    }
}
`