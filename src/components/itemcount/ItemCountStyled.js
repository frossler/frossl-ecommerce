import styled from 'styled-components';

export const StyledItemCount = styled.div`
width: 300px;
margin-top: 40px;
padding: 20px;
color: #000;
display: flex;
flex-direction: column;
background-color: #E5E5E5;
border-radius: 15px;
.stock-setter-cnt {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 7px;
    border-radius: 10px;
    column-gap: 20px;
    align-items: center;
    background-color: #80ED99;
    button {
        padding: 0px 35px;
        background-color: #80ED99;
        color: #22577A;
        font-size: 40px;
        line-height: 45px;
        border: none;
        cursor: pointer;
    }
    .counter {
        margin-top: 20px;
        background-color: #80ED99;
        font-weight: 400;
    }
}
.add-to-cart-btn {
    background-color: #22577A;
    color: #80ED99;
    font-size: 20px;
    padding: 13px 0px;
    margin-top: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    border-radius: 10px;
    text-decoration: none;
    border: 0;
    &:hover {
        background-color: #22577A;
        box-shadow: none;
        color: #57CC99;
        transition: all .3s ease-in-out;
        font-weight: 500;
    }
}
`