import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Home from "./Pages/HomePage/Home";
import CustomerReview from "./Pages/HomePage/Review/CustomerReview";
import Login from "./Pages/Login/Login";
import PrivateLogin from "./Pages/Login/PrivateLogin";
import Register from "./Pages/Login/Register";
import MyOrder from "./Pages/MyOrder/MyOrder";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadMyOrder from "./Pages/DashBoard/LoadMyOrder";
import ManageOrders from "./Pages/DashBoard/ManageOrders";
import Users from "./Pages/DashBoard/Users";
import Payment from "./Pages/DashBoard/Payment";
import NotFound from "./Pages/Not Found/NotFound";
import ManageProducts from "./Pages/DashBoard/ManageProducts";
import AddProduct from "./Pages/DashBoard/AddProduct";
import MyProfile from "./Pages/DashBoard/MyProfile";
import UpdateProfile from "./Pages/DashBoard/UpdateProfile";
import UpdateProduct from "./Pages/DashBoard/UpdateProduct";
import Portfolio from "./Pages/Portfolio.js/Portfolio";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        {/* nested route */}
        <Route path='/dash' element={<PrivateLogin><DashBoard /></PrivateLogin>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='/dash/updateProfile/:email' element={<UpdateProfile />}></Route>
          <Route path='/dash/review' element={<CustomerReview></CustomerReview>}></Route>
          <Route path='/dash/myorder' element={<LoadMyOrder />}></Route>
          <Route path='/dash/payment/:orderId' element={<Payment />}></Route>
          <Route path='/dash/manage' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='/dash/user' element={<Users></Users>}></Route>
          <Route path='/dash/manageProduct' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='/dash/updateProduct/:productId' element={<UpdateProduct />}></Route>
          <Route path='/dash/addProduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        {/* nested route  */}

        <Route path='/myorder/:id' element={<PrivateLogin><MyOrder /></PrivateLogin>}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
