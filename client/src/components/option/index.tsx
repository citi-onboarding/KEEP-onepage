import React from "react";
import {OptionContainer} from './styles'

type OptionProps = {
    text: string;
}

export const Option: React.ElementType = ({text}: OptionProps) => {
    return(

    <OptionContainer>
       <p>{text}</p> 
    </OptionContainer>

    );
    
}