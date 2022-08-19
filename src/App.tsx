import React, { useState, useEffect } from 'react'; import './App.css';
import {HashRouter, BrowserRouter, Route, Routes} from "react-router-dom"
/*Personal Libraries*/
import * as Exe from './tools/functions';
import Home from './pages/Home';
/*App Function*/
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
