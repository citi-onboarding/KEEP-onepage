import React from "react";
import { NavbarContainer, Contact, KEEP, Aux } from './styles';
import { LogoKEEPNavbar } from '../../assets';
import { Navbar_Button } from "../../components";


export const Navbar: React.FC = () => {
    const scrollcontact= document.querySelector("#contact");
    scrollcontact?.addEventListener('click', ()=>{
        window.scrollTo({
            top: 3081,
            left: 0,
            behavior: "smooth"
        });
    });
    return (
        <NavbarContainer>
            <KEEP><img src={LogoKEEPNavbar} alt="" /></KEEP>
            <Navbar_Button/><Aux>
            <Contact>
            <button id="contact"><p>Contato</p></button>
            </Contact></Aux>
        </NavbarContainer>
    );
}
