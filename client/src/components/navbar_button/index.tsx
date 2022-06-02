import React from "react";
import { Button_Container } from "./styles";


export const Navbar_Button: React.FC = () => {
    return(
        <Button_Container className="nav_button">
            <button ><p>Home</p></button>
            <button><p>Sobre nós</p></button>
            <button><p>Portifólio</p></button>
        </Button_Container>
    );
}