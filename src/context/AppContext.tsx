import {createContext} from "react";


const AppContext = createContext({})

function AppContextProvider(props: any) {

    return <AppContext.Provider value={{}}>
        {props.children}
    </AppContext.Provider>

}

export {AppContext, AppContextProvider}