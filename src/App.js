// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Pages/LoginPage/Components/Login.js";
import ForgotPassword from "./Pages/LoginPage/Components/ForgotPassword.jsx";
import CreateAccount from "./Pages/LoginPage/Components/CreateAccount.jsx";
import Header from './Pages/Homepage/header+menu/Header.jsx';
import Index from './Pages/index.jsx';

function App() {
  return (
    
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='/' element={<Login />}/>
      //     <Route path="/forgotpassword" element={<ForgotPassword />} />
      //     <Route path="/createaccount" element={<CreateAccount />} />
      //   </Routes>
      // </BrowserRouter>
      <Index/>
  );
}

export default App;
