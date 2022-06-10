import React, {useState, useEffect} from "react";
import axios from 'axios';
import { AboutUsContainer, BiggerContainer } from './styles';
import { Audiovisual, Design, Fotografia } from '../../assets';

type AboutUsData = {
    mission_title: string;
    mission_description: string;
    grid_title: string;
};

export const AboutUs: React.FC = () => {

    const [infos, setInfos] = useState<AboutUsData[]>([]);
    
    const getInfos = async () => {
        const response = await axios.get("http://localhost:3001/aboutus")
        setInfos(response.data)
        console.log(response)
    }

    useEffect(() => {
       getInfos()
    }, []);
    return (
        <BiggerContainer>
            <AboutUsContainer> 
                <div className="title">
                    <h1>{infos[0]?.mission_title}</h1>
                </div>
                <div className="description">
                    <p>{infos[0]?.mission_description}<br></br>
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

            <h1 className="gridTitle">{infos[0]?.grid_title}</h1>
        </BiggerContainer>
        
    );
}
