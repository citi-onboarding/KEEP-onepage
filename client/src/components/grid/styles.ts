import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "Media1 Media2 Media3"
    "Media4 Media5 Media5"
    "Media6 Media5 Media5"
    "Media6 Media7 Media8"
    ;
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
    }


`;

export const Media1 = styled.div`
   grid-area: Media1;
`;
export const Media2 = styled.div`
    grid-area: Media2;
`;
export const Media3 = styled.div`
     grid-area: Media3;
`;
export const Media4 = styled.div`
    grid-area: Media4;
`;
export const Media5 = styled.div`
    grid-area: Media5;
`;
export const Media6 = styled.div`
     grid-area: Media6;
`;
export const Media7 = styled.div`
     grid-area: Media7;
`;
export const Media8 = styled.div`
     grid-area: Media8;
`;