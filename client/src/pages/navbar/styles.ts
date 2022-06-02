import styled from 'styled-components'; 


export const NavbarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0) 100%);
    width: 1366px;
    height: 124px;
    left: 0px;
    top: 0px;
    font-size: 18px;
`;
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 400px;
    height: 124px;
    p{
        font-size: 18px;
        font-weight: 400;  
        font-family: Monument Extended;
        color: #FFFFFF;
        position: relative;
        text-decoration: none;
        font-weight: 400;
        transition: all .35s ease;
        &::before {
            content: ""; 
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #FFFFFF;
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s; 
            transition: all 0.3s ease-in-out 0s; 
        }   
    
        &:hover {
            color: white;
    
            &::before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }   
        } 
    }
    button{
        margin-top: 49px;
        height: 24px;
        background-color: transparent;
        border: 0;
    }
    
`;
export const Aux = styled.div`
    height: 124px;
`;
export const Contact = styled.div`
        p{
            font-size: 14px;
            color: #FFFFFF;
            font-family: Monument Extended;
        }
    button{
        margin-top: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #F5F5F5;
        width: 128px;
        height: 33px;
        padding: 8px 24px;
        background-color: transparent;
    }
    &:hover {
            background-color: #FFFFFF;
            p{
                color: #1A1A1A;
                border-color: #1A1A1A;
            }
        }
`;
export const KEEP = styled.div`
    height: 124px;
    display: flex;
    align-items: center;
`;

