import  styled  from 'styled-components';

export const StyledItemDetail = styled.div`
display: flex;
flex-direction: column;
padding: 30px 60px;
align-items: center;
#info {
    display: flex;
    align-items: center;
    column-gap: 240px;
    margin-top: 50px;
    margin-left: 30px
}
#left-side {
    display: flex;
    flex-direction: column;
    img {
        width: 350px;
        height: 450px;
    }
}
#right-side {
    display: flex;
    flex-direction: column;
    h1 {
        margin-bottom: 15px;
        font-weight: 400;
        letter-spacing: -0.2px;
    }
    h2 {
        padding-bottom: 30px;
    }
    h3 {
        width: 80%;
        text-align: justify;
        letter-spacing: 0.2px;
        line-height: 29px;
        margin-bottom: 20px;
    }
    .ctas-post-compra {
        margin: 10px 0;
        background-color: #22577A;
        color: #80ED99;
        text-decoration: none;
        width: 250px;
        text-align: center;
        font-size: 20px;
        padding: 13px 0px;
        border-radius: 10px;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: #80ED99;
            color: #22577A;
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
    }
}
`