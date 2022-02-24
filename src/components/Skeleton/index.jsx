import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFramesLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`
const LoadingSkeleton = styled.div`
    background-color: ${props => props.theme.colors.background};
    border-radius: 6px;
    min-width: ${props => props.width};
    height: ${props => props.height};
    animation: ${KeyFramesLoading}. 500ms infinity alternate. 
`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({width, height}) => <LoadingSkeleton width={width} height={height} />;