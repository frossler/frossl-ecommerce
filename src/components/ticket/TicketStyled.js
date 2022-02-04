import styled from 'styled-components'

export const StyledTicket = styled.div`
background-color: #80ED99;
margin: 80px auto;
padding: 40px;
width: 60%;
color: #22577A;
border-radius: 25px;
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
`