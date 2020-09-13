import React, { useEffect, useState, useContext } from 'react';
import AutoCompleteInput from '../component/AutoCompleteInput';
import styled from 'styled-components';
import {typography, colors, language} from '../shared/index'
import { CitiesContext } from '../context/CitiesContext';

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
        cursor: pointer;
    }
`

const NewCityForm = ({toggleModal}) => {

    useEffect(() => {
        return () => {
            setSelectedCity({name: ''});
        }
    }, [])

    const [selectedCity, setSelectedCity] = useState({
        name: ''
    });

    const {addCityToDatabase} = useContext(CitiesContext);

    const AddButtonClickHandler = (value) => {
        try{
            addCityToDatabase(value);
            toggleModal();
        }
        catch(ex){
            console.log(ex.message);
        }
    }


    return(
        <div>
            <AutoCompleteInput onCityChange={setSelectedCity} value={selectedCity.name}/>
            <StyledButtonContainer>
                <button style={{backgroundColor:colors.danger}} onClick={toggleModal}>{language.pl.cancel}</button>
                <button style={{backgroundColor:colors.success}} onClick={() => AddButtonClickHandler(selectedCity)}>{language.pl.add}</button>
            </StyledButtonContainer>
        </div>
    )
}

export default NewCityForm;