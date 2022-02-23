import styled from 'styled-components'

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: 2% 2% 0% 2%;
    padding: 16px;
    background-color : ${(props) => props.theme.colors.white};
    border-left: solid 5px transparent;
    :hover {
        border-left: solid 5px ${props => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.background};
    }
`
export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2`
    font-family: ${(props) => props.theme.font.regular};
    color:  ${(props) => props.theme.colors.text};
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    max-width:100%;

`
export const Rate = styled.span`
    font-family: ${(props) => props.theme.font.regular};
    color:  ${(props) => props.theme.colors.text};
    line-height: 25px;
    font-weight: bold;
`
export const Address = styled.p`
    font-family: ${(props) => props.theme.font.regular};
    color:  ${(props) => props.theme.colors.text};
    line-height: 17px;
    font-size: 14px;
    max-width:80%;
    text-align:justify;
    margin-top:1%;  
`
export const RestaurantImage = styled.img`
    width:100px;
    height: 100px;
    border-radius:6px;
    display: flex;
    justify-content: center;
    align-self: center;
    object-fit: cover;
`