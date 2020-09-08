import React from 'react';
import styled from 'styled-components';

const StyledModalContainer = styled.div`
    position:absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledModalOverlay = styled.div`
    position:absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.8;
`
const StyledModalBody = styled.div`
    z-index: 2;
    min-width: 55%;
    min-height: 40%;
    background-color: #f0efeb;
    border-radius: 1rem;
    padding: 1rem;
`


const Modal = ({ children }) => {
    return (<StyledModalContainer>
        <StyledModalOverlay />
        <StyledModalBody>
            <p>dasdsa</p>
            {children}
        </StyledModalBody>
    </StyledModalContainer>);
}

export default Modal;