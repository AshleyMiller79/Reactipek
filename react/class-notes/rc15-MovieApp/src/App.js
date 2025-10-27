import React from "react";

import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import Register from "./pages/Register";
// package.json a toast kütüphanesini yükledik, indek.js ye import teşekkürü ettik, App.js ye <ToastContainer/> ekledik, bütün toastları kendimize göre ayarlayıp helper dosyasının altına topladık
const App = () => {
  return (
    <div >
      <AuthContext>
      
        <Register/>
          <ToastContainer />
       
      </AuthContext>
    </div>
  );
};

export default App;
