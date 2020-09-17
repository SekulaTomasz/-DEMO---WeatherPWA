import React from 'react';
import styled from 'styled-components';
import {Add} from '@material-ui/icons';

const StyledFabContainer = styled.div`
    position: fixed;
    background-color: #457b9d;
    bottom: 0;
    right: 0;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;   
    border-radius: 50%; 
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px #ccc;
`

const Fab = ( props) => {

    return(
        <StyledFabContainer {...props}>
            <Add style={{fontSize: '2rem', color: "white"}}/>
        </StyledFabContainer>
    )
}

export default Fab;