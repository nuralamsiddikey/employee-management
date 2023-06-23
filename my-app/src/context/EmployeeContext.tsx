import React,{ createContext,useContext } from "react";

type EmployeeContextProviderProps = {
    children:React.ReactNode
}


const EmployeeContext = createContext("")

export const EmployeeContextProvider =({children}:EmployeeContextProviderProps)=>{

    return <EmployeeContext.Provider value="theis is context">{children}</EmployeeContext.Provider>
}

export const UseEmployeeContext = ()=>{
    const value = useContext(EmployeeContext)

    return value
}