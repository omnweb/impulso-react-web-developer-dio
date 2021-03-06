import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(78, 89, 131, 0.5);
    backdrop-filter: blur(5px); 
    z-index: 999;
    
    display: flex;
    justify-content: center;
    align-self: center;
`

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: calc(100% - 85%);
    margin-top: 15%;
    width: 500px;
    padding: 24px;
    background-color: ${ (props) => props.theme.colors.white};
    box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
    border-radius: 6px;
    border: solid 5px ${(props) => props.theme.colors.background};
`