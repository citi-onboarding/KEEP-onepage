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
    max-width: 1780px;
    max-height: 1400px;
    padding-left: 120px;
    padding-right: 120px;
    box-sizing: border-box;
    justify-content: stretch;
    justify-items: stretch;


    img{
        max-width: 100%;
        display: block;
        height: 100%;

    };

    iframe{
        max-width: 743px;
        display: block;
        max-height: 530px;
    
    }


`;

export const Media1 = styled.div`
   grid-area: Media1;

   .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 496.66px;
        max-height: 354.64px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }

`;
export const Media2 = styled.div`
    grid-area: Media2;

    .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 496.66px;
        max-height: 354.64px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }
`;
export const Media3 = styled.div`
     grid-area: Media3;

     .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 496.66px;
        max-height: 354.64px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }
`;
export const Media4 = styled.div`
    grid-area: Media4;

    .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 496.66px;
        max-height: 354.64px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }
`;
export const Media5 = styled.div`
    grid-area: Media5;

    img{
        max-width: 2048px;
        max-height: 1463px;
    }

    .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 1018px;
        max-height: 720px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }
`;
export const Media6 = styled.div`
     grid-area: Media6;

    .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 177%;
    

    iframe{
        width: 359px;
        max-height: 685px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }
`;
export const Media7 = styled.div`
     grid-area: Media7;

     .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 496.66px;
        max-height: 354.64px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }

`;
export const Media8 = styled.div`
     grid-area: Media8;

     .iframecontainer{
        position: relative;
        width: 100%;
        padding-bottom: 71.42%;
    

    iframe{
        max-width: 496.66px;
        max-height: 354.64px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   }
`;