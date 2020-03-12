import styled from 'styled-components';

export const Botoes = styled.header`

    button {
        background-color: transparent;
        color: #fff;
        padding: 15px 20px;
        margin: 10px;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        font-family: cursive;
    }


    .btn1 {
        background-color: ${props => `${props.backgroundBotoes1}`};
    }

    .btn2 {
        background-color: ${props => `${props.backgroundBotoes2}`};
    }

    .btn3 {
        background-color: ${props => `${props.backgroundBotoes3}`};
    }

    .btn7 {
        background-color: #192a56;
    }


`;

export const Edicao = styled.main`



`; 

export const Resultado = styled.aside`

    font-weight: ${props => `${props.fontWeight}`};
    text-decoration: ${props => `${props.textDecoration}`};
    font-style: ${props => `${props.fontStyle}`};
    font-family: ${props => `${props.fontFamily}`};

`;