import { useState,useEffect } from "react";
import { apiUrl } from "../../Utils/Config";
import "./User.css"

function Users() {
  const[users,setUsers]= useState([])
  const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
  useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
     
      try {
        const response = await fetch(`${apiUrl}/api/users/getall`,{
          method: 'GET',
            credentials:'include'
            });
            const data = await response.json();
            if (data.success === true){
              console.log(data.data)
              setUsers(data.data);
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

      const deleteuser = async(id)=>{
          try {
          const response = await fetch(`${apiUrl}/api/users/deleteuser/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
          const data = await response.json();
          if (data.success === true) {
            setUsers(users.filter((user) => user.id !== id));

            alert("user has been deleted successfully")
      
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
            
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
           
            </tr>
        </thead>
       

        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    {/* <td>{user.id}</td> */}
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><button onClick={() => deleteuser(user.id)}>Delete</button></td>
                  
                </tr>
                ))}
        </tbody>
        </table>   
    </div>
   </section>
  )
}
  


export default Users
