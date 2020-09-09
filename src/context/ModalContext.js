import React, {createContext, useState} from 'react';
import Modal from '../component/Modal';

export const ModalContext = createContext({});

export const ModalProvider = ({children}) => {

    const [isModalVisible, toggleModal] = useState(false);

    return (
        <ModalContext.Provider value={{toggleModal}}>
            <Modal visible={isModalVisible}/>
            {children}
        </ModalContext.Provider>
    )
}