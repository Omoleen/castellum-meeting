// src/App.js
import React from 'react';
import SignIn from './SignIn';
import { Route, Routes } from 'react-router-dom';
import Phished from './Phished';

const App = () => {
  return (
    
      <div>
        <Routes>
        {/* <SignIn /> */}
        <Route path='/:id' element={<SignIn />} />
        <Route path='/:id/phished' element={<Phished />} />
        </Routes>
      </div>
    
  );
};

export default App;
