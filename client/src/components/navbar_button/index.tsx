import React from "react";
import { Button_Container } from "./styles";


export const Navbar_Button: React.FC = () => {
    return(
        <Button_Container>
            <a href="#top"><p>Home</p></a>
            <a href="#title"><p>Sobre nós</p></a>
            <a href="#gridTitle"><p>Portfólio</p></a>
        </Button_Container>
        
    );
}