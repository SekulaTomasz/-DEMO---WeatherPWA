import React, { createContext, useEffect, useState } from 'react';
import { language } from '../shared/index';
import { localStorageType } from '../enums/index';

export const CitiesContext = createContext({});


export const CitiesProvider = ({ children }) => {

    const getIntialData = () => {
        const result = window.localStorage.getItem(localStorageType.cities);
        return result ? JSON.parse(result) : []  
    }

    const [cities, setCities] = useState(getIntialData);

    const updateLocalStorage = () => {
        window.localStorage.setItem(localStorageType.cities, JSON.stringify(cities));
    }

    useEffect(() => {
        updateLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cities])

    

    const addCityToDatabase = (newRow) => {
        if(cities.some(x => x === newRow)) throw new Error(language.pl.errorMessages.cityExistInDb)
        setCities([...cities,newRow])
    }

    const removeCityFromDatabase = (cityName) => {
        const filteredCities = cities.filter(x => x.name !== cityName);
        setCities(filteredCities);
    }

    const getCities = () => cities;

    return (
        <CitiesContext.Provider value={{addCityToDatabase, removeCityFromDatabase, getCities}}>
            {children}
        </CitiesContext.Provider>
    )
}