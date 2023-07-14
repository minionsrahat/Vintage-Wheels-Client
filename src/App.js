import './App.css';

import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Nabvar from './Components/Navbar/Nabvar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/Notfound';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/MyOrders/MyOrders';
import AddReview from './Components/AddReview/AddReview';
import ManageUser from './Components/ManageUser/ManageUser';
import AddProduct from './Components/AddProduct/AddProduct';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyProfile from './Components/MyProfile/MyProfile';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import WelcomeDashboard from './Components/WelcomeDashboard/WelcomeDashboard';
import Payment from './Components/Payment/Payment';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import Blogs from './Components/Blogs/Blogs';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}>

          <Route path='' element={<WelcomeDashboard></WelcomeDashboard>}></Route>
          <Route path='manageprofile' element={<MyProfile></MyProfile>}></Route>

          {/* User routes */}
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='myorders/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>


          {/* Admin routes */}
          <Route path='manageusers' element={<RequireAdmin><ManageUser></ManageUser></RequireAdmin>
         }></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>


        </Route>
        <Route path='/productdetails/:id' element={
          <RequireAuth><ProductDetails></ProductDetails></RequireAuth>
        }></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
