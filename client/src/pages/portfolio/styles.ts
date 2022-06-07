import styled from "styled-components";

export const PortfolioContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 180px;

    h1{
        width: 742px;
        font-family: 'Monument Extended', sans-serif;
        color: #f5f5f5;
        font-size: 32px;
        font-weight: 400px;
        text-align: center;
    }
    nav{
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        gap:40px;
    }

    section{
        margin-top: 40px;
    }

    button{
        width: 136px;
        height: 33px;
        border: 2px solid #F5F5F5;
        margin-top: 80px;
        background-color: transparent;
        p{
            font-size: 14px;
            font-family: 'Monument Extended', sans-serif;
            font-weight: 400;
            color:#f5f5f5;
            display: inline;
        }

        &:hover{
            background-color: #F5F5F5;
            p{
                color: #1a1a1a;
            }
        }
    }

`;