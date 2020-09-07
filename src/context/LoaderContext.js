import React, {createContext, useState} from 'react';
import Loader from '../component/Loader';

export const LoaderContext = createContext({});

export const LoaderProvider = ({children}) => {

    const [isLoaderVisible, toggleLoader] = useState(false);

    return (
        <LoaderContext.Provider value={{toggleLoader}}>
            { isLoaderVisible && <Loader />}
            {children}
        </LoaderContext.Provider>
    )
}