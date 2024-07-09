import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponetLearning from './pages/ComponetLearning';
import UseState from './pages/hooks/useState.jsx';
import UseRef from './pages/hooks/UseRef.jsx';
import UseEffect from './pages/hooks/UseEffect.jsx';
import Home from './pages/Home.jsx';
import Navigation from './layout/Navigation.jsx';
import UseCallback from './pages/hooks/UseCallback.jsx';
import UseMemo from './pages/hooks/UseMemo.jsx';
import CustomHook from './pages/hooks/CustomHook.jsx';



function App() {

  return (
    <div>
      
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/component' element={<ComponetLearning/>} />
      <Route path='/useState' element={<UseState/>} />
      <Route path='/useEffect' element={<UseEffect/>} />
      <Route path='/useRef' element={<UseRef/>} />
      <Route path='/useCallback' element={<UseCallback/>}/>
      <Route path='/useMemo' element={<UseMemo />} />
      <Route path='/custom' element={<CustomHook />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
