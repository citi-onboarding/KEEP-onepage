import styled from 'styled-components'; 
import { ActiveBanner, HoverBanner, Union} from '../../assets';

export const BannerContainer = styled.div`
    height: 100%;
    width: 100%;
    font-family: Monument Extended;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    video{
        width: 1348px;
    }
`;
export const Text = styled.div`
    height: 48px;
    width: 1348px;
    margin-top: 618.19px;
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

    background: linear-gradient(360deg, #141414 0%, rgba(33, 33, 33, 0) 100%);
    width: 100%;
    height: 97px;
`;
export const Aux= styled.div` 
    width: 100%;
    height: 97px;
    display: flex;
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
    position: absolute;
    display: flex;
    flex-direction: column;
`;