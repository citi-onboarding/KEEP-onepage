import styled from 'styled-components'; 

export const Button_Container = styled.div`
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
            color: #FFFFFF;;
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
        :active{
            p{
                color: #1a1a1a;
                &::before{
                    content: ""; 
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #1a1a1a;
                    visibility: hidden;
                    -webkit-transform: scaleX(0);
                    transform: scaleX(0);
                    -webkit-transition: all 0.3s ease-in-out 0s; 
                    transition: all 0.3s ease-in-out 0s; 
                }
                &:hover {
                    color: #1a1a1a;;
                    
                    &::before {
                        visibility: visible;
                        -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                    }   
                } 
            }
        }
    }
`;