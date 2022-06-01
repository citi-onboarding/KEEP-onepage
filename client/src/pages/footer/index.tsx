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
                        <li><InstagramIcon><a href=""></a></InstagramIcon></li>
                        <li><WhatsappIcon><a href=""></a></WhatsappIcon></li>
                        <li><YoutubeIcon><a href=""></a></YoutubeIcon></li>
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
