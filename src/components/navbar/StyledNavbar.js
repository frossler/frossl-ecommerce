import styled from 'styled-components'

export const StyledNabvar = styled.header`
background-color: #22577A;
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
.word {
    color: #38A3A5;
}
.span {
    color: #80ED99;
}
.p-welcome {
    margin-left: 30px;
    margin-top: 9px;
}
.header-left-side {
    display: flex;
    text-decoration: none;
    align-items: center;
    column-gap: 15px;
    color: #FFFFFF;
}
nav {
    margin-right: 30px;
    display: flex;
    column-gap: 50px;
    align-items: center;
    a {
        text-decoration: none;
        font-size: 20px;
        color: #57CC99;
        opacity: 0.6;
        transition: 0.3s;
        &:hover {
            opacity: 1;
        }
    }
}
.hidden {
    visibility: hidden;
}
`