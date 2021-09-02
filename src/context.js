import React, { createContext, useState, useContext } from 'react'


const AppContext = createContext();


const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const showSidebar = () =>{
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return(
        <AppContext.Provider value={{
            isModalOpen, 
            isSidebarOpen, 
            showModal, 
            closeModal, 
            showSidebar, 
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};