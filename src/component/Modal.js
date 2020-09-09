import React from 'react';
import styled, { css } from 'styled-components';
import {typography} from '../shared/index';
import useModal from '../hooks/useModal';

const StyledModalContainer = styled.div`
    position:absolute;
    z-index: ${({visible}) => visible ? 1 : -1};
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
    opacity: 0;
    transition: opacity .3s ease-out;
    ${props => props.visible && css`
        opacity: 0.8;
    `}
    
`
const StyledModalContent = styled.div`
    z-index: 2;
    min-width: 40%;
    min-height: 40%;
    background-color: #f0efeb;
    border-radius: 1rem;
    position:relative;
    top: -600px;
    transition: all .3s ease-out;
    ${props => props.visible && css`
         top: 0px;
    `}
`



const StyledModalHeader = styled.div`
    
    display:flex;
    align-items: center
`
const StyledModalBody = styled.div`
    padding: 1rem;
`

const StyledModalTitle = styled.div`
    font-size: ${typography.H4};
    padding: 1rem;
    font-weight: 600;
`

const Modal = ({ children,visible }) => {

    const { toggleModal } = useModal();

    return (<StyledModalContainer visible={visible}>
        <StyledModalOverlay visible={visible} onClick={() => toggleModal((prevState) => !prevState)}/>
        <StyledModalContent visible={visible}>
            <StyledModalHeader>
                <StyledModalTitle>Title</StyledModalTitle>
            </StyledModalHeader>
            <StyledModalBody>
                {children}
            </StyledModalBody>
        </StyledModalContent>
    </StyledModalContainer>);
}

export default Modal;