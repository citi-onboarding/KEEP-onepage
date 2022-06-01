import React from "react";
import { FooterContainer, FooterContent, Signature, InstagramIcon, YoutubeIcon, WhatsappIcon } from "./styles";
import {LogoKEEP, Insta, Whatsapp, Youtube, Citi, Heart } from '../../assets';

export const Footer: React.FC = () => {
    const changeImg = () => {
        document.getElementById('instagram')
    }
    
    return (
        <FooterContainer>
            <FooterContent>
                <img src={LogoKEEP} alt="Logo da KEEP Movement"/>

                <nav>
                    <p>Onde você pode nos achar</p>
                    <ul>
                        <li><a href="https://www.instagram.com/keep.movement/" target="_blank"><InstagramIcon></InstagramIcon></a></li>
                        <li><a href="https://api.whatsapp.com/send/?phone=5581988161476&text&app_absent=0" target="_blank"><WhatsappIcon></WhatsappIcon></a></li>
                        <li><a href="https://www.youtube.com/channel/UCY9IUqGI5QNf1A4lR_WvFiQ" target="_blank"><YoutubeIcon></YoutubeIcon></a></li>
                    </ul>
                </nav>
            </FooterContent>

            <div></div>

            <Signature>
                Made with 
                {' '}
                &lt; &#x0002F; &gt; 
                {' '}
                and 
                {'  '}
                <img src={ Heart } alt="Love"/>
                {'  '}
                by 
                {'  '}
                <img src={Citi} alt="CITi"/> 
            </Signature>

            
        </FooterContainer>
          
    
    );
}
