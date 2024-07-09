import React,{createContext,useState} from 'react';

const ExampleContext = createContext();

export const ExampleContextProvider = ({children}) => {
    const [values,setValues] = useState(0);
  return (
    <ExampleContext.Provider value={{values,setValues}}>
        {children}
    </ExampleContext.Provider>
  )
}

export default ExampleContext;