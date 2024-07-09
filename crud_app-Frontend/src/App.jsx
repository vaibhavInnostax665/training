import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./component/models/UserDetail";
import UserDelete from "./component/models/UserDelete";

const App = () => {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details" element={<UserDetail />} />
          <Route path="/user-delete" element={<UserDelete />} />
        </Routes>
      </BrowserRouter>
      {/* <Toaster /> */}
    </div>
  );
};

export default App;
