import styled from 'styled-components'; 
import { ActiveBanner, HoverBanner, Union} from '../../assets';

export const BannerContainer = styled.div`
    height: 829px;
    width: 100%;
    font-family: Monument Extended;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    background-color: #000;
    video{
        height: 829px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        source{
            zoom: 150%;
        }
    }
`;
export const Text = styled.div`
    width: 100%;
    height: 93.62;
    position: absolute;
    top: 620.59px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
    }
`;
export const Button = styled.div`
    position: absolute;
    height: 136px;
    width: 100%;
    top: 695.5px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(360deg, #141414 0%, rgba(33, 33, 33, 0) 100%);

`;
export const Aux= styled.div` 
    height: 133.5px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`; 
export const Icon= styled.div`
    background-image: url(${Union});
    height: 56px;
    width: 56px;
    
    &:hover{
        background-image: url(${HoverBanner});
    }
    &:active{
        background-image: url(${ActiveBanner});
        scroll-behavior: smooth;
    }
`;
export const FLEX=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;