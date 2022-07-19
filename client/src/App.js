
import { Routes, Route } from 'react-router-dom';

import { AllBikes } from './components/Bikes/allbikes/AllBikes';
import { Details } from './components/Bikes/details/Details';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bikes' element={<AllBikes />}>

          <Route path='/bikes/:id' element={<Details />}></Route>
        </Route>
        



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
