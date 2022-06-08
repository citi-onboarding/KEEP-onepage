import React from "react";

import { AboutUsContainer } from './styles';
import { Audiovisual, Design, Fotografia } from '../../assets';

export const AboutUs: React.FC = () => {
    return (
        <AboutUsContainer> 
            <div className="title">
                <h1>Frase impactante sobre quem é a keep e missão</h1>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore na aliqua.<br></br>
                <br></br></p>
            <p style={{fontWeight: 600, fontStyle: 'italic'}}>Serviços que oferecemos:</p>
            <div className="services">
                <img style={{paddingLeft: 15, paddingTop: 53}} src={Audiovisual} alt="Audivisual"/>
                <img style={{paddingLeft: 59, paddingTop: 40}} src={Design} alt="Design"/>
                <img style={{paddingLeft: 69, paddingTop: 45}} src={Fotografia} alt="Fotografia"/> 
            </div>
            <div className="servicesdescription">
                <h2>Audiovisual</h2>
                <h2 style={{paddingLeft: 40}}>Design</h2>
                <h2 style={{paddingLeft: 40}}>Fotografia</h2>
            </div>

            <button type="button">Quero contratar</button>

            </div>    
        </AboutUsContainer>
    );
}
