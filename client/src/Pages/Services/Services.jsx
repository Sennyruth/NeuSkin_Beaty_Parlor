import pedicureImg from "../../assets/pedicure.jpeg"
import facialsImg from "../../assets/facials.jpeg"
import manicureImg from "../../assets/manicure.jpeg"
import makeupImg from "../../assets/makeup.jpeg"
import waxingImg from "../../assets/waxing.jpeg"
import massageImg from "../../assets/massage.jpeg"
import browImg from "../../assets/brow.jpeg"
import earImg from "../../assets/ear.jpeg"
import { useNavigate } from "react-router-dom";
import  "./Services.css"
const Services =() => {
  const navigate =useNavigate();
  function handleNavigation () {
    navigate("/contacts")
  }
  const services = [
    {
      id: 1,
      img:pedicureImg,
      title: "Pedicure",
      price:"ksh500"
      },
      {
        id: 1,
        img:facialsImg,
        title: "Facials",
        price:"ksh500"
        },
        {
          id: 1,
          img:manicureImg,
          title: "Manicure",
          price:"ksh500"
          },
          {
            id: 1,
            img:massageImg,
            title: "Massage",
            price:"ksh500"
            },
            {
              id: 1,
              img:browImg,
              title: "Eybrow shaping",
              price:"ksh500"
              },
              {
                id: 1,
                img:makeupImg,
                title: "Makeup",
                price:"ksh500"
                },
                {
                  id: 1,
                  img:waxingImg,
                  title: "Waxing",
                  price:"ksh500"
                  },
                  {
                    id: 1,
                    img:earImg,
                    title: "Piercing",
                    price:"ksh500"
                    },
  ];

  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="text-center">Our Services</h1></div>
        <div className="card-items">
        <div className="service-cards">
          {services.map((service) => (
            <div className="card" key={service.id}>
              <img src={service.img} alt={service.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.price}</p>
                <button onClick={handleNavigation}>Make an appointment</button>
                </div>
                </div>
                ))}
        </div>
        </div>
        

    </div>
    
   
  )
}

export default Services
