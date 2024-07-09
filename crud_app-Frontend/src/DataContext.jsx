import React,{createContext,useState} from 'react';

const DataContext = createContext();

export const DataContextProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [sNo,setSNo] = useState();
    const [update,setUpdate] = useState(false);
 console.log(data);
  return (
    <DataContext.Provider value={{data,setData,sNo,setSNo,update,setUpdate}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext;