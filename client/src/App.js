import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BikeProvider } from './contexts/BikeContext';
import { PartsProvider } from './contexts/PartsContext';

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

import { AllBikesList } from './components/Bikes/AllBikesList/AllBikesList';
import { BikeDetails } from './components/Bikes/Bike-details/BikeDetails';
import { CreateBikeAd } from './components/Create/BikeAdCreate/BikeAdCreate';
import { EditBikeAd } from './components/EDIT/EditBikeAd/EditBikeAd';

import { MyAds } from './components/MyAds/MyAds';
import { PrivateGuard } from './PrivateGuard/PrivateGuard';

function App() {

  return (

    <AuthProvider >
      <div>

        <Header />
        <PartsProvider>
          <BikeProvider >
            <Routes>

              <Route path='/' element={<Home />}></Route>
              <Route path='*' element={<PageNotFound />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>

              <Route element={<PrivateGuard />}>

                <Route path='/myads' element={<MyAds />}></Route>
                <Route path='/bikes/:id/edit' element={<EditBikeAd />}></Route>
                <Route path='/createBikeAd' element={<CreateBikeAd />}></Route>
                <Route path='/parts/:id/edit' element={<EditPartAd />}></Route>
                <Route path='/createPartAd' element={<CreatePartAd />}></Route>
                <Route path='/logout' element={<Logout />}></Route>

              </Route>

              <Route path='/bikes' element={<AllBikesList />}></Route>
              <Route path='/bikes/:id' element={<BikeDetails />}></Route>

              <Route path='/parts' element={<PartsList />}></Route>
              <Route path='/parts/:id' element={<PartDetails />}></Route>

            </Routes>
          </BikeProvider>
        </PartsProvider>
        <Footer />
      </div>
    </AuthProvider >
  );
}
export default App;





