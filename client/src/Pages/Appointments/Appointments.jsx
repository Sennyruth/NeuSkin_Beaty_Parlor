import "./Appointments.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../Utils/Config";
import useUpdateId from "../Store/updateStore";

function Appointments() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const catchId = useUpdateId((state) => state.catchId);
  const setCatch = useUpdateId((state) => state.setCatch);

  const handleNavigation = (appointment) => {
    setCatch(appointment.id);
    console.log(catchId);


    
    navigate("/update");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${apiUrl}/api/users/specicificappo`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.success === true) {
          console.log(data.data);
          setAppointments(data.data);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/users/deleteappointment/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success === true) {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
        alert("appointment has been deleted successfully");
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="appointments">
      <h2>Appointments</h2>

      {appointments.map((appointment) => (
        <div key={appointment.id} className="appointment-item">
          <p>Email: {appointment.clientEmail}</p>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>PhoneNumber: {appointment.number}</p>
          <p>Service: {appointment.service}</p>

          <button onClick={() => handleDelete(appointment.id)}>Delete</button>
          <button onClick={() => handleNavigation(appointment)}>Update</button>
        </div>
      ))}
    </section>
  );
}

export default Appointments;
