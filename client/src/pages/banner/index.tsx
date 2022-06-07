import React from "react";
import { BannerContainer, Text, Button, Aux, Icon, FLEX} from "./style";
import { LAUNCH } from "../../assets";

export const Banner: React.FC = () => {

    return(
        <BannerContainer>
            <video autoPlay loop muted >
                <source src={LAUNCH} />
            </video>
            <FLEX>
            <Text><h1>Feito por quem entende</h1></Text>
            <Button><Aux><Icon id="scrollaboutus"/></Aux></Button></FLEX>          
        </BannerContainer>
        
    );

}

const btnscrollaboutus= document.querySelector("#scrollaboutus");
btnscrollaboutus?.addEventListener('click', function() {
    window.scrollTo({
        top: 666.19,
        left: 0,
        behavior: 'smooth'
    });
})