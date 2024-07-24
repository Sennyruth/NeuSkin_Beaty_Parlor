import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contacts from "./Pages/Contacts/Contacts";
import Register from "./Pages/Sign/Register";
import Login from "./Pages/Sign/Login";
import Appointments from "./Pages/Appointments/Appointments";
import Footer from "./Components/Footer/Footer";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import AllAppointments from "./Pages/Admin/AllAppointments";
import Users from "./Pages/Admin/Users";
import Products from "./Pages/Products/Products"
import Orders from "./Pages/Orders/Orders";
import Update from "./Pages/Update/Update";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<ProtectedRoutes />}>

            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/appointments" element={<Appointments />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/allappointments" element={<AllAppointments />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/update" element={<Update />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
