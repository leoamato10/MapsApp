import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState({});

    const handleModal = marker => {
        setSelectedMarker(marker);
        setModalVisible(!modalVisible);
    };


    const values = { modalVisible, setModalVisible, selectedMarker, handleModal }
    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    );
};
