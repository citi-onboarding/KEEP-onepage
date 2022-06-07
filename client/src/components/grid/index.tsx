import React from 'react';
import {GridContainer, Media1, Media2, Media3, Media4, Media5, Media6, Media7, Media8} from './styles';
import {Imagem, Video, Storie} from '../../assets';

type GridProps = {
    media1: string,
    media2: string,
    media3: string,
    media4: string,
    media5: string,
    media6: string,
    media7: string,
    media8: string,

};

export const Grid: React.ElementType = ({media1, media2, media3, media4, media5, media6, media7, media8}: GridProps) => {
    return(
        <GridContainer>
        <Media1><img src={media1}/></Media1>
        <Media2><img src={media2}/></Media2>
        <Media3><img src={media3}/></Media3>
        <Media4><img src={media4}/></Media4>
        <Media5><img src={media5}/></Media5>
        <Media6><img src={media6}/></Media6>
        <Media7><img src={media7}/></Media7>
        <Media8><img src={media8}/></Media8>
        </GridContainer>
    );
}