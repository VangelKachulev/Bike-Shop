import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BikeContext } from './contexts/BikeContext';
import { React, useState, useEffect } from 'react';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Footer } from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound/PageNotFound';


import { PartsList } from './components/Parts/AllPartsList/PartsList';
import { PartDetails } from './components/Parts/PartsDetails/PartsDetails';
import { CreatePartAd } from './components/Create/PartAdCreate/PartCreateForm';
import { EditPartAd } from './components/EDIT/EditPartAd/EditPartAd';
import * as partsService from './services/PartsService';

import { AllBikesList } from './components/Bikes/AllBikesList/AllBikesList';
import { BikeDetails } from './components/Bikes/Bike-details/BikeDetails';
import { CreateBikeAd } from './components/Create/BikeAdCreate/BikeAdCreate';
import { EditBikeAd } from './components/EDIT/EditBikeAd/EditBikeAd';
import * as bikeService from './services/BikeService';

import { MyAds } from './components/MyAds/MyAds';


function App() {
  //bikes
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    bikeService.getAll()
      .then(data => {

        setBikes(Object.values(data))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addBikeHandler = (bikeData) => {
    setBikes(state => [
      ...state,
      bikeData]);
  };
  const emptyBikeState = (id) => {

    setBikes(state => state.filter(x => x._id !== id));
  };

  const editBikeState = (id, bikeData) => {
    setBikes(state => state.map(x => x._id === id ? bikeData : x));
  };

  //parts
  const [parts, setParts] = useState([]);
  useEffect(() => {
    partsService.getAll()
      .then(data => {

        setParts(Object.values(data))

      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const addPartHandler = (partData) => {
    setParts(state => [
      ...state,
      partData]);
  };

  const editPartState = (id, partData) => {
    setParts(state => state.map(x => x._id === id ? partData : x));
  };

  const emptyPartsState = (id) => {
    setParts(state => state.filter(x => x._id !== id));
  };

  return (

    <AuthProvider >
      <div>

        <Header />
        <BikeContext.Provider value={{ bikes, addBikeHandler, emptyBikeState, editBikeState }}>
          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/myads' element={<MyAds parts={parts} />}></Route>

            <Route path='/bikes' element={<AllBikesList />}></Route>
            <Route path='/bikes/:id' element={<BikeDetails />}></Route>
            <Route path='/bikes/:id/edit' element={<EditBikeAd />}></Route>
            <Route path='/createBikeAd' element={<CreateBikeAd />}></Route>

            <Route path='/parts' element={<PartsList parts={parts} />}></Route>
            <Route path='/parts/:id' element={<PartDetails emptyPartsState={emptyPartsState} />}></Route>
            <Route path='/parts/:id/edit' element={<EditPartAd editPartState={editPartState} />}></Route>
            <Route path='/createPartAd' element={<CreatePartAd addPartHandler={addPartHandler} />}></Route>

          </Routes>
        </BikeContext.Provider>
        <Footer />
      </div>
    </AuthProvider>
  );
}
export default App;





