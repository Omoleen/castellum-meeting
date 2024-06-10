// src/App.js
import React from 'react';
import SignIn from './SignIn';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    
      <div>
        <Routes>
        {/* <SignIn /> */}
        <Route path='/:id' element={<SignIn />} />
        </Routes>
      </div>
    
  );
};

export default App;
