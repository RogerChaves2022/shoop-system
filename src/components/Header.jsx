import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: crimson;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 70px;
    color: white;

    a{  
        font-size: 2em;
        text-decoration: none;
        color: white;
        margin: 0 -.25rem;
        padding: 0 .25rem;
        &:hover {
            color: white;
        }
    }
`;

export const Header = () => {
    return(
    <HeaderArea>
        <h1>Market.com</h1>
        <Link to="/">Loja</Link>
        <Link to="/myCart">Meu Carrinho</Link>
    </HeaderArea>
    )
}