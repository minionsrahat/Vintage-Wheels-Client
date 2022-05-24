import './App.css';

import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Nabvar from './Components/Navbar/Nabvar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/MyOrders/MyOrders';
import AddReview from './Components/AddReview/AddReview';
import ManageUser from './Components/ManageUser/ManageUser';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='manageusers' element={<ManageUser></ManageUser>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
