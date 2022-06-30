import styled from 'styled-components'; 
import { ActiveBanner, HoverBanner, Union} from '../../assets';

export const BannerContainer = styled.div`
    height: 100%;
    width: 100%;
    font-family: Monument Extended;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    scroll-behavior: smooth;
    video{
        width: 100%;
        height: 100%;
        padding-bottom: 0%;
    }
`;
export const Text = styled.div`
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
    h1{
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
    }
`;
export const Button = styled.div`
    padding-top: 30px;
    background: linear-gradient(360deg, #141414 0%, rgba(33, 33, 33, 0) 100%);
    width: 100%;
    height: 97px;
`;
export const Aux= styled.div` 
    width: 100%;
    height: 97px;
    display: flex;
    justify-content: center;
    a{
        background-image: url(${Union});
        height: 56px;
        width: 56px;
        background-color: transparent;
        border: 0ch;
        scroll-behavior: smooth;
        &:hover{
            background-image: url(${HoverBanner});
        }
        &:active{
            background-image: url(${ActiveBanner});
        }
    }
`; 
export const Icon= styled.div`
    
`;
export const FLEX=styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
`;
