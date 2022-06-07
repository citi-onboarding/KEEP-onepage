import React from "react";
import {OptionContainer} from './styles'

type OptionProps = {
    text: string;
}

export const Option: React.ElementType = ({text, ...props}: OptionProps) => {
    return(

    <OptionContainer {...props}>
       <p>{text}</p> 
    </OptionContainer>

    );
    
}