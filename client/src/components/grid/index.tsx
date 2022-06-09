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
    media8: string
};

export const Grid: React.ElementType = ({media1, media2, media3, media4, media5, media6, media7, media8, tag1}: GridProps) => {
    return(
        <GridContainer>
        <Media1>{media1?.indexOf('youtube') !== -1? <iframe src={media1} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media1}/>}</Media1>
        <Media2>{media2?.indexOf('youtube') !== -1?  <iframe src={media2} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media2}/>}</Media2>
        <Media3>{media3?.indexOf('youtube') !== -1?  <iframe src={media3} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media3}/>}</Media3>
        <Media4>{media4?.indexOf('youtube') !== -1?  <iframe src={media4} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media4}/>}</Media4>
        <Media5>{media5?.indexOf('youtube') !== -1?  <iframe src={media5} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media5}/>}</Media5>
        <Media6>{media6?.indexOf('youtube') !== -1?  <iframe src={media6} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media6}/>}</Media6>
        <Media7>{media7?.indexOf('youtube') !== -1?  <iframe src={media7} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media7}/>}</Media7>
        <Media8>{media8?.indexOf('youtube') !== -1?  <iframe src={media8} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={media8}/>}</Media8>
        </GridContainer>
    );
}

//