import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { language } from '../shared/index';
import { debounce } from '../utils/index';
import { getCitiesByName } from '../api/GeoDbApi';

const StyledInput = styled.input`
    width: 100%;
    border-radius: 10px;
    border: 0px;
    min-height: 40px;
    user-select: none;
    outline: none;
    text-indent: 10px;

    &:hover {
        outline: none;
    }
    &:active {
        outline: none;
    }
`
const StyledAutoCompleteContainer = styled.div`
    position:relative;
`

const StyledHintContainer = styled.div`
    background-color:white;
    position: absolute;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
`

const StyledHintElement = styled.span`

    color: black;
    background-color: white;
    cursor: pointer;
    padding: 10px;

    &:hover {
        color: white;
        background-color: #457b9d;
    }
`

const AutoCompleteInput = ({onCityChange,value}) => {

    const [inputActive, setInputActive] = useState(false);
    const [cities, setCities] = useState([]);

    let inputRef = useRef(null);

    useEffect(() => {
        if(cities.length === 0) return setInputActive(false);
        return setInputActive(true);
    }, [cities])

    const onInputHandlerDebounced = (value) => {

        if (inputActive) {
            if(value.length > 0) return;
            return setCities([]);
        }
        getCitiesByName(value).then(({data: {data}}) => {
            const fetchCities = data.map((x) => {
                return {
                   city: x.city,
                   country: x.country,
                   id: x.id,
                   geometry: {
                       latitude: x.latitude,
                       longitude: x.longitude
                   }
                }
            });
            setCities(fetchCities);
        });
    }

    const onInputHandler = useCallback(debounce(onInputHandlerDebounced, 1000), []);

    const onHintSelectedHandler = (selectedObject) => {
        setCities([]);
        onCityChange(selectedObject);
    }

    return (
        <>
            <StyledAutoCompleteContainer className="form-element-container">
                <StyledInput ref={inputRef} 
                    onInput={({target: {value}}) => onInputHandler(value)} placeholder={language.pl.autocompletePlaceholder}></StyledInput>
                {inputActive && 
                    <StyledHintContainer>
                        {cities.map((x) => <StyledHintElement key={x.id} onClick={() => onHintSelectedHandler(x)}>{x.city}</StyledHintElement>)}
                    </StyledHintContainer>
                }
            </StyledAutoCompleteContainer>
        </>
    )
}

export default AutoCompleteInput;