import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';

import MasterLayout from './layout/admin/MasterLayout';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path="/admin/*" element={<MasterLayout />} />  
         
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
