import React from 'react';
import styled from 'styled-components';
import { typography } from '../../shared/index';

const StyledMainHeaderRowContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledLeftHeaderColumn = styled.div`
    flex: auto;
    display: flex;
    flex-direction: column; 
`

const StyledRightHeaderColumn = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledRemoveButton = styled.div`
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
`

const StyledCardTitle = styled.span`
    font-size: ${typography.H5};
`

const StyledCardSubtitle = styled.span`
    font-size: ${typography.subtitle1}
    font-style: italic;
`

const CardHeader = ({ actions, title, subtitle = "" }) => {
    return (
        <StyledMainHeaderRowContainer>
            <StyledLeftHeaderColumn>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardSubtitle>{subtitle}</StyledCardSubtitle>
            </StyledLeftHeaderColumn>
            <StyledRightHeaderColumn>
                <StyledRemoveButton onClick={() => actions.removeCityFromDatabase(title)}>
                    <span style={{
                        fontSize: typography.H5,
                        fontWeight: 600
                    }}>x</span>
                </StyledRemoveButton>
            </StyledRightHeaderColumn>
        </StyledMainHeaderRowContainer>
    )
}

export default CardHeader;