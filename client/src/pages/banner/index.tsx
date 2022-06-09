import React, {useState, useEffect} from "react";
import axios from "axios";
import { BannerContainer, Text, Button, Aux, Icon, FLEX} from "./style";
import { LAUNCH } from "../../assets";

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
        <BannerContainer>
            <iframe src={infos[0]?.media} allow="autoplay" />
            <FLEX>
            <Text><h1>{infos[0]?.title}</h1></Text>
            <Button><Aux><button onClick={()=>{ window.scrollTo({ top:666.19, left:0, behavior:'smooth'})}} ></button></Aux></Button></FLEX>          
        </BannerContainer>
        
    );

}

