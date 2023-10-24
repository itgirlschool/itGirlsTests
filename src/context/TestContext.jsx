import {createContext, useState} from "react";


export const TestContext = createContext({})


export function  ContextComponent({children}){
    const [context,setContext] = useState(false)
    const value = {context,setContext}
    return (
        <TestContext.Provider value ={value}>
            {children}
        </TestContext.Provider>
    )
}