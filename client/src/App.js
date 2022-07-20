
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AllBikes } from './components/Bikes/allbikes/AllBikes';
import { Bike } from './components/Bikes/bike/Bike';
import { Details } from './components/Bikes/details/Details';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import * as bikeService from "./services/BikeService"


function App() {

 

 return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bikes' element={<AllBikes />}></Route>
        <Route path='/login' element={<Login />}></Route>


        <Route path='/bikes/:id' element={<Details  />}></Route>



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
