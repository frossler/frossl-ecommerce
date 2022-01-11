import styled from 'styled-components'

export const StyledNabvar = styled.header`
background-color: #FF5200;
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
.it-span {
    color: #6F0000;
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
        color: #FFFFFF;
        &:hover {
            text-decoration: underline 1px solid;
        }
    }
}
.hidden {
    visibility: hidden;
}
`