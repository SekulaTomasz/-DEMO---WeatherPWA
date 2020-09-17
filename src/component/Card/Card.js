import React from 'react';
import styled from 'styled-components';


const StyledCardContainer = styled.div`
    margin: 1rem;
    box-shadow: 1px 1px 2px 2px #ccc;
    padding: 1rem;
    border-radius: 0.5rem
`

const Card = ({children}) => {
    return(
        <StyledCardContainer>
            {children}
        </StyledCardContainer>
    )
}

export default Card;