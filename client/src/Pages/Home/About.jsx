import facialsImg from "../../assets/facials.jpeg"
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleNavigation =()=>{
    navigate("/services")
  }
  return (
    <section className="about">
        <div className="about-image">
            <img src={facialsImg} alt="" />
        </div>
        <div className="about-content">
        <h2>Why Our Clients Choose Us</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste rem temporibus laborum dolore doloribus. Dolor dicta earum nulla consectetur.</h3>
        <p>Our clients choose us because we are the best at what we do. We have
            a proven track record of success and we are dedicated to providing the
            highest level of service to our clients.</p>
            <button onClick={handleNavigation}>View Our Services</button>
        </div>
       
    </section>
  )
}

export default About
