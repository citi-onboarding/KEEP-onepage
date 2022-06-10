import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "Media1 Media2 Media3"
    "Media4 Media5 Media5"
    "Media6 Media5 Media5"
    "Media6 Media7 Media8";
    grid-gap:25px;
    width: 100%;
    height: fit-content;
    padding-left: 120px;
    padding-right: 120px;
    box-sizing: border-box;


    img{
        max-width: 100%;
        display: block;
        height: fit-content;
    };
    iframe{
        max-width: 743px;
        display: block;
        max-height: 530px;
    
    }

`;

export const Media1 = styled.div`
   grid-area: Media1;

   iframe{
        max-width: 300px;
        max-height: 223px;
        position: absolute;
        width: 100%;
        height: 100%;
    }

`;
export const Media2 = styled.div`
    grid-area: Media2;

    position: relative;
    width: 100%;

    iframe{
        max-width: 300px;
        max-height: 223px;
        position: absolute;
        width: 100%;
        height: 100%;
        
    }
`;
export const Media3 = styled.div`
     grid-area: Media3;

    iframe{
        max-width: 300px;
        max-height: 223px;
        position: absolute;
        width: 100%;
        height: 100%;
        
    }
`;
export const Media4 = styled.div`
    grid-area: Media4;

    iframe{
        max-width: 300px;
        max-height: 223px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
export const Media5 = styled.div`
    grid-area: Media5;

    position: relative;
    width: 100%;

    iframe{
        max-width: 625px;
        max-height: 446.09px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
export const Media6 = styled.div`
     grid-area: Media6;

     position: relative;
     width: 100%;

    iframe{
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
export const Media7 = styled.div`
     grid-area: Media7;

     iframe{
        max-width: 300px;
        max-height: 223px;
        position: absolute;
        width: 100%;
        height: 100%;
        
    }

`;
export const Media8 = styled.div`
     grid-area: Media8;

     iframe{
        max-width: 300px;
        max-height: 223px;
        position: absolute;
        width: 100%;
        height: 100%;
        
    }
`;