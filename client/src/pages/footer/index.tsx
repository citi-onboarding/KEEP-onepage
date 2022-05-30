import React from "react";
import { FooterContainer } from "./styles";
import {LogoKEEP, Insta, Whatsapp, Youtube, Citi } from '../../assets';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <div className="">
                <img src={LogoKEEP} alt="Logo da KEEP Movement"/>

                <div>
                    <p>Onde você pode nos achar</p>
                    <ul>
                        <li><a href=""><img src={Insta} alt="Ícone do Instagram"/></a></li>
                        <li><a href=""><img src={Whatsapp} alt="Ícone do Whatsapp"/></a></li>
                        <li><a href=""><img src={Youtube} alt="Ícone do Youtube"/></a></li>
                    </ul>
                </div>
            </div>

            <div className="line"></div>

            <p>
                Made with 
                &lt; &#x0002F; &gt; 
                and 
                &hearts; 
                by 
                <span><img src={Citi} alt="logo do CITi"/></span>
            </p>
        </FooterContainer>
    );
}

