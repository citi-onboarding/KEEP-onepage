import React from "react";
import { Button_Container } from "./styles";


export const Navbar_Button: React.FC = () => {
    return(
        <Button_Container>
            <a href=""><p>Home</p></a>
            <a href=""><p>Sobre nós</p></a>
            <a href=""><p>Portifólio</p></a>
        </Button_Container>
        
    );
}