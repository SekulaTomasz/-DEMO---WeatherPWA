import React, { useState } from 'react';
import AutoCompleteInput from '../component/AutoCompleteInput';

const NewCityForm = () => {

    const [selectedCity, setSelectedCity] = useState('');

    const onCitySelectHandler = (value) => setSelectedCity(value);

    return(
        <div>
            <AutoCompleteInput onCityChange={onCitySelectHandler} value={selectedCity}/>
        </div>
    )
}

export default NewCityForm;