import React, { useEffect, useState } from 'react';
import AutoCompleteInput from '../component/AutoCompleteInput';
import styled from 'styled-components';


const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    > button {
        margin: 1rem;
    }
`

const NewCityForm = () => {

    useEffect(() => {
        return () => {
            setSelectedCity('');
        }
    }, [])

    const [selectedCity, setSelectedCity] = useState('');

    

    return(
        <div>
            <AutoCompleteInput onCityChange={setSelectedCity} value={selectedCity}/>
            <StyledButtonContainer>
                <button>Cancel</button>
                <button>Add</button>
            </StyledButtonContainer>
        </div>
    )
}

export default NewCityForm;