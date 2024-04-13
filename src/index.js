import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ BrowserRouter, Route, Routes} from "react-router-dom";
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<App/>}/> 
   <Route path='/about-page' element={<About/>}/> 
   
     {/* <UserListing/> */}
    </Routes> 
</BrowserRouter>
);


