import styled from 'styled-components'

export const StyledItem = styled.div`
margin: 30px;
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: 300px;
overflow: hidden;
border: 1px solid #00263B;
border-color: #FF5200;
background-color: #e5e5e5;
border-radius: 50px;
cursor: pointer;
.seemore-btn {
    display: flex;
    .prod-img {
        width: 300px;
        height: 300px;
    }
    .hover-card {
        position: absolute;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        background: linear-gradient(180deg, rgba(8, 11, 20, 0), rgba(8, 11, 20, 0.5));
        color: #FFF;
        opacity: 1;
        border-radius: 50px;
        // &:hover {
        //     opacity: 1;
        //     transition: all .3s ease-in-out;
        // }
        .prod-title {
            margin-top: 10px;
            font-weight: 200;
        }
        .prod-price {
            font-weight: 900;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}
`