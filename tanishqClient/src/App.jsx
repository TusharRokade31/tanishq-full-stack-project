import Appbar from "./components/Appbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/HomeDesignComps/Home";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";
import NotFound from "./components/NotFound";
import DetailProduct from "./components/jewelleryComps/DetailProduct.jsx";
import More from "./components/jewelleryComps/More.jsx";
import Cart from "./components/Cart.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import ProtectedLayout from "./components/ProtectedLayout.jsx";
import AuthRoute from "./components/AuthRoute.jsx";
import LoginWithOtp from "./components/LoginWithOtp.jsx";
import CartCheckout from "./components/CartCheckout.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DashboardInfo from "./components/DashboardInfo.jsx";
import FormComponent from "./components/FormComponent.jsx";

function App() {
  // const location = useLocation()
  // console.log(location)
  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:category" element={<AllProducts />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/cart-checkout" element={<FormComponent />} />
            <Route path="/more" element={<More />} />
            <Route path="/payment" element={<CartCheckout />} />
          </Route>
          <Route path="/product/:product_id" element={<DetailProduct />} />
          <Route path="/" element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/otp-login" element={<LoginWithOtp />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
