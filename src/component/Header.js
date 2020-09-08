import React from 'react';
import styled from 'styled-components';
import {Refresh} from '@material-ui/icons';
import {typography, language} from '../shared/index';

const StyledHeaderContainer = styled.div`
    width: 100%;
    min-height: 3.5rem;
    background-color: #457b9d;
    position: sticky;
    display: flex;
    justify-content: space-between;
`

const StyledTitle = styled.span`
    font-size: ${typography.H3};
    color: #f1faee;
    padding: 0.5rem;
`

const StyledIconContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

const Header = () => {
    return <StyledHeaderContainer>
        <StyledTitle>{language.pl.appTitle}</StyledTitle>
        <StyledIconContainer>
            <Refresh style={{ fontSize: '3rem', color:"white", cursor: 'pointer' }}/>
        </StyledIconContainer>
    </StyledHeaderContainer>
}

export default Header;
