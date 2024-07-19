import Header from "./Components/Header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Contacts from "./Pages/Contacts/Contacts"
import Register from "./Pages/Sign/Register"
import Login from "./Pages/Sign/Login"
import Appointments from "./Pages/Appointments/Appointments"
import Gallery from "./Pages/Gallery/Gallery"
import Footer from "./Components/Footer/Footer"
import ProtectedRoutes from "./Utils/ProtectedRoutes"

function App() {
 

  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
       </Route>
       <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
