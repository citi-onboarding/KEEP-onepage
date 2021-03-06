import styled from 'styled-components';
import { Insta, InstaHover, Whatsapp, WhatsappHover, Youtube, YoutubeHover } from '../../assets';


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
            justify-content: flex-end;
            align-items: flex-end;
            margin-left: 20px;
        } 
    }

    @media (max-width: 700){
        nav{
            display: flex;
            flex-direction: column;
            justify-content: center;

            ul{
                justify-content: center;
                align-items: center;
                margin-left: 0px;
            }

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

  @media (max-width: 700px) {
      img{
          display: none;
      }
  }

    
  
`;


export const Signature = styled.p`
    align-self: center;
    p{
        font-size: 18px;
        margin-top: 24px;
       
        font-weight: 400;
        font-family: 'Sora', sans-serif;
        color: #FFFFFF;  
    }
    
`;

export const InstagramIcon = styled.div`
    background-image: url(${Insta});
    background-size: cover;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;

    &:hover{
        background-image: url(${InstaHover});
    }
`;

export const WhatsappIcon = styled.div`
    background-image: url(${Whatsapp});
    background-size: cover;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;

    &:hover{
        background-image: url(${WhatsappHover});
    }
`;

export const YoutubeIcon = styled.div`
    background-image: url(${Youtube});
    background-size: cover;
    background-repeat: no-repeat;
    width: 54px;
    height: 40px;

    &:hover{
        background-image: url(${YoutubeHover});
    }
`;