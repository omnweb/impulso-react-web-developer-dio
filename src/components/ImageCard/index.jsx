import React,  { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton'

export const Card = styled.div`
    width:65px;
    height:60px;
    border-radius 6px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    margin-left: 4px;

    display:flex;
    align-items: center;
`
export const Title = styled.span`
    font-family: ${props => props.theme.font.regular};
    color: ${(props) => props.theme.colors.white};
    font-size: 12px;
    margin-left: 4px;

`
const ImageCard = ({backgroundImage, title}) => {

    const [imageLoad, setImageLoad] = useState(false)

    useEffect(() => {
        const imageLoading = new Image();
        imageLoading.src = backgroundImage;
        imageLoading.onload = () => setImageLoad(true);
    }, [backgroundImage])
    
    return (
        <>
            {   imageLoad ? (                
                    <Card  backgroundImage={backgroundImage} >
                    <Title>{title}</Title>
                    </Card>
                ) : ( <Skeleton width="65px" height="60px"/> )
            }
        </>
    )
}
    

export default ImageCard;