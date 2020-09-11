import React, { useEffect, useState } from 'react';
import AutoCompleteInput from '../component/AutoCompleteInput';
import styled from 'styled-components';
import {typography, colors, language} from '../shared/index'

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    > button {
        font-size: ${typography.body1};
        margin-left: 1rem;
        min-height: 2rem;
        margin-left: 1rem;
        border: unset;
        border-radius: 5px;
        color: white;
    }
`

const NewCityForm = ({toggleModal}) => {

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
                <button style={{backgroundColor:colors.danger}} onClick={toggleModal}>{language.pl.cancel}</button>
                <button style={{backgroundColor:colors.success}}>{language.pl.add}</button>
            </StyledButtonContainer>
        </div>
    )
}

export default NewCityForm;