import { useNavigate } from "react-router-dom"
import pedicureImg from "../../assets/pedicure.jpeg"
import "./Home.css"
function Hero() {
  const navigate = useNavigate();
  function handleNavigation () {
    navigate("/contacts")
  }
  return (
   <section className="hero">
    
    <div className="hero-container">
      <h3 className="hero-title">Welcome to NeuSkin Beauty Parlor</h3>
      <h2 className="maintitle">Beauty & Spa Wellness</h2>
      <p className="hero-text">We are a beauty parlor that offers a wide range
        of services to help you look and feel your best.</p>
        <button onClick={handleNavigation}>Make An Appointment</button>
    </div>
    <div className="hero-image">
      <img src={pedicureImg} alt="" />
    </div>
   </section>
  )
}

export default Hero
