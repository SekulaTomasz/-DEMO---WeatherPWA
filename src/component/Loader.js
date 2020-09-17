import React from 'react';
import '../style/loader.css';
import styled from 'styled-components';

const StyledLoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`


const Loader = () => {
    return (
        <StyledLoaderContainer>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </StyledLoaderContainer>
    );
}


export default Loader;