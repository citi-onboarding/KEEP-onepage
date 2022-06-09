import React from "react";
import { Button_Container } from "./styles";


export const Navbar_Button: React.FC = () => {
    return(
        <Button_Container>
            <button onClick={()=>{ window.scrollTo({top:0, left:0, behavior:'smooth'}) }}><p>Home</p></button>
            <button onClick={()=>{window.scrollTo({top:666.19, left:0, behavior:"smooth"})}}><p>Sobre nós</p></button>
            <button onClick={()=>{window.scrollTo({top:1488.188, left:0, behavior:"smooth"})}}><p>Portifólio</p></button>
        </Button_Container>
        
    );
}