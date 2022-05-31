import React from "react";
import { FooterContainer, FooterContent, Signature } from "./styles";
import {LogoKEEP, Insta, Whatsapp, Youtube, Citi, Heart } from '../../assets';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <img src={LogoKEEP} alt="Logo da KEEP Movement"/>

                <nav>
                    <p>Onde você pode nos achar</p>
                    <ul>
                        <li><a href=""><img src={Insta} alt="Ícone do Instagram"/></a></li>
                        <li><a href=""><img src={Whatsapp} alt="Ícone do Whatsapp"/></a></li>
                        <li><a href=""><img src={Youtube} alt="Ícone do Youtube"/></a></li>
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

