import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
    width:65px;
    height:60px;
    border-radius 6px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    margin-left: 4px;
`

export  const ImageCard = ({backgroundImage}) => <Card  backgroundImage={backgroundImage} />

export default ImageCard;