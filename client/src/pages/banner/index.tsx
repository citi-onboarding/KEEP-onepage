import React, {useState, useEffect} from "react";
import axios from "axios";
import { BannerContainer, Text, Button, Aux, FLEX} from "./style";
import { LAUNCH } from "../../assets";
import { title } from "process";

type BannerData = {
    media: string;
    title: string;
};

export const Banner: React.FC = () => {
    const [infos, setInfos] = useState<BannerData[]>([]);
    const Getinfo = async()=>{
        const Response= await axios.get('http://localhost:3001/banner')
        setInfos(Response.data)
        console.log(Response)
    }
    useEffect(() => {
        Getinfo()
     }, []);
    return(
        <BannerContainer id="top">
            <video src={LAUNCH} autoPlay loop muted  />
            <FLEX>
            <Text><h1 id="title">{infos[0]?.title}</h1></Text>
            <Button><Aux><a href='#title'></a></Aux></Button></FLEX>          
        </BannerContainer>
        
    );
}

