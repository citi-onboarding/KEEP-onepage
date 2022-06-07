import styled from 'styled-components'; 


export const NavbarContainer = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0) 100%);
    height: 124px;
    left: 0px;
    top: 0px;
    font-size: 18px;
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
    :active{
        button{
            background-color: #1A1A1A;
            border: #1A1A1A;
        }
        p{
            color: #FFFFFF;
        }
    }
`;
export const KEEP = styled.div`
    height: 124px;
    display: flex;
    align-items: center;
`;