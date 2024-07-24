import "./AllAppointments.css"
import { useState,useEffect } from "react";
import { apiUrl } from "../../Utils/Config";

function AllAppointments() {
    const[allappointments,setAllappointments]= useState([])
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true)
       
        try {
          const response = await fetch(`${apiUrl}/api/users/appointments`,{
            method: 'GET',
              credentials:'include'
              });
              const data = await response.json();
              if (data.success === true){
                console.log(data.data)
                setAllappointments(data.data);
                setLoading(false)
              }
              else
              {
                setError(true)
                setLoading(false)
                }
          
        } catch (error) {
          setError(error);
          setLoading(false)
          
        }
      };
      fetchData();
      }, []);
      if (loading){
        return <div>Loading...</div>;
      }
      else if (error){
        return <div>Error: {error.message}</div>;
        }


    const deleteAppointment = async (id) =>{
      try {
        const response = await fetch(`${apiUrl}/api/users/deleteappointment/${id}`, {
          method: "DELETE",
          credentials: "include",
        });
        const data = await response.json();
        if (data.success === true) {
          setAppointments((prevAppointments)=>
          prevAppointments.filter((appointment)=>appointment.id !== id)
         
          );
          alert("appointment has been deleted successfully")
    
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
    <section className="allusers">
    <div className="table-content">
     <table>
      
        <thead>
        <tr>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>PhoneNumber</th>
            <th>Delete Appointment</th>
            </tr>
        </thead>
        

        <tbody>
            {allappointments.map((appointment) => (
                <tr key={appointment._id}>
                    <td>{appointment.clientEmail}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.service}</td>
                    <td>{appointment.number}</td>
                    <td><button onClick={() => deleteAppointment(appointment.id)}>Delete</button></td>

                </tr>
            ))} 
        </tbody>
        </table>   
    </div>
   </section>
   
)
}
export default AllAppointments
