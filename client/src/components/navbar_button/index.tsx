import React from "react";
import { Button_Container } from "./styles";


export const Navbar_Button: React.FC = () => {
    const scrollhome= document.querySelector("#home");
    scrollhome?.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
    const scrollaboutus= document.querySelector("#aboutus");
    scrollaboutus?.addEventListener('click', ()=>{
        window.scrollTo({
            top: 666.19,
            left: 0,
            behavior: "smooth"
        });
    });
    const scrollmedia= document.querySelector("#media");
    scrollmedia?.addEventListener('click', ()=>{
        window.scrollTo({
            top: 1466.188,
            left: 0,
            behavior: "smooth"
        });
    });
    return(
        <Button_Container>
            <button id="home"><p>Home</p></button>
            <button id="aboutus"><p>Sobre nós</p></button>
            <button id="media"><p>Portifólio</p></button>
        </Button_Container>
        
    );
}