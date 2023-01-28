import styled from 'styled-components';

export const ProductsArea = styled.div`
    display:flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    margin-bottom: 70px;
    margin-top: 30px;

    div {
        height: 320px;
        width: 230px;
        border: 1px solid rgb(194, 193, 193);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: white;
         
        img{
            width: 100px;
            heigth: 100px;
            opacity: 0.75;
        }
        
        button {
            font-size: 30px;
            background: transparent;
            border: none;
            color: crimson;
            &:hover{
        transform: scale(1.5);
            }
        }
    }

    `;