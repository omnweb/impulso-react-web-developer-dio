import styled from 'styled-components';
import Slider from "react-slick";


export const Wrapper = styled.div`
    display: flex;
    flex-direction:row;
`

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    background-color: ${(props) => props.theme.colors.white};   
    padding:15px;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    Align-items: center;
`
export const TextFieldContainer = styled.div`
    margin-top: 5%;
`

export const SliderContainer = styled.section`
    // background-color: ${(props) => props.theme.colors.white};  
    align-self: center;
    margin: 0 10%;
`
export const CarrouselTitle = styled.h2`
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.text};
    font-weight:bold;
    margin: 5% 2%;
    font-size: 24px;
    line-height:29px;
`
export const Carousel = styled(Slider)`
    .slick-prev:before, .slick-next:before  {
        color:  ${(props) => props.theme.colors.text};
    }
    margin-bottom: 10%;
`

export const ModalTitle =styled.h2`
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.text};
    letter-space: .11px;
    text-transform: none;
    // line-height: 16px;
    margin: 14px 0;
    font-size: 24px;
    font-weight: bold;
`
export const ModalContent =styled.p`
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    margin: 1% 0;
    font-size: 14px;
    font-weight: regular;
`