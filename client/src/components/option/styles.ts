import styled from "styled-components";

export const OptionContainer = styled.div`



background-color: transparent;
    p{
        font-size: 18px;
        font-weight: 400;  
        font-family: 'Monument Extended';
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
            color: #FFFFFF;
            cursor: pointer;
            
            &::before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }   
        }
    }

`;