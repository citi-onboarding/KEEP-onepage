import React from "react";
import { NavbarContainer, Contact, KEEP, Aux } from './styles';
import { LogoKEEPNavbar } from '../../assets';
import { Navbar_Button } from "../../components";


export const Navbar: React.FC = () => {
    
    return (
        <NavbarContainer>
            <KEEP><img src={LogoKEEPNavbar} alt="" /></KEEP>
            <Navbar_Button/><Aux>
            <Contact>
            <button><p>Contato</p></button>
            </Contact></Aux>
        </NavbarContainer>
    );
}
