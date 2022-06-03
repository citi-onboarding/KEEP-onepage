import React from "react";

import { AboutUsContainer, Content } from './styles';
import { Audiovisual, Design, Fotografia } from '../../assets';

export const AboutUs: React.FC = () => {
    return (
        <AboutUsContainer> 
            <Content>
                <div className="sidea">
                <h1>Frase impactante sobre quem é a keep e missão</h1>
                </div>
                <div className="sideb">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore na aliqua.<br></br>
                <br></br>
                Serviços que oferecemos:</p>

                <div className="services">
                    <div className="audiovisual">
                        <img style={{paddingLeft: 15}} src={Audiovisual}/>
                        <h2>Audiovisual</h2>
                    </div>

                    <div className="design">
                        <img style={{paddingLeft: 40}} src={Design}/>
                        <h2>Design</h2>
                    </div>
                    <div className="fotografia">
                        <img style={{paddingLeft: 40}} src={Fotografia}/>
                        <h2>Fotografia</h2>
                    </div>
                    
                </div>

                <button type="button">Quero contratar</button>

                </div>
            </Content>
        </AboutUsContainer>
    );
}
