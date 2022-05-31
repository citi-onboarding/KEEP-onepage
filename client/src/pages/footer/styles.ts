import styled from 'styled-components';


export const FooterContainer = styled.div` 
    
    margin:0px;
    
    width: 100%;
    height: 256px;

    box-sizing:border-box;
    padding-left: 120px;
    padding-right:120px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #101010;

    nav{
        display: flex;
        flex-direction: column;
        justify-content: right;
        
        p{
            margin-bottom:23px;
            font-size: 16px;
            font-family: 'Sora', sans-serif;
            color: #FFFFFF;
        }

        ul{
            width: 197px;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            gap: 32px;
            margin-left: 20px;
        }
    }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-sizing: border-box;
  padding-bottom: 40px;
  border-bottom: 1px solid #FFFFFF;
    
  
`;


export const Signature = styled.p`
    font-size: 18px;
    margin-top: 24px;
    align-self: center;
    font-weight: 400;
    font-family: 'Sora', sans-serif;
    color: #FFFFFF;
`;