import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

type AppProviderProps = {
    children: ReactNode;
}

const AppContext = createContext({})

export default function AppProvider({children}:AppProviderProps) {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}
