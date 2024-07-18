import Header from "./Components/Header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Contacts from "./Pages/Contacts/Contacts"
import Register from "./Pages/Sign/Register"
import Login from "./Pages/Sign/Login"
import Appointments from "./Pages/Appointments/Appointments"
import Gallery from "./Pages/Gallery/Gallery"

function App() {
 

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
       

      </Routes>
    </Router>
      
    </>
  )
}

export default App
