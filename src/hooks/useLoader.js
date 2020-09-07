import {
    useContext
} from 'react';
import {
    LoaderContext
} from '../contexts/LoaderContext';

const useLoader = () => useContext(LoaderContext);

export default useLoader;