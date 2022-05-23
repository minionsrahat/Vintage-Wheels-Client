import './App.css';

import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Nabvar from './Components/Navbar/Nabvar';



function App() {
  return (
    <>
      <Nabvar></Nabvar>
      <Banner></Banner>
      <Routes>
      </Routes>
    </>
  );
}

export default App;
