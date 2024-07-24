import { Link, useNavigate } from "react-router-dom";
import useAuthorizeStore from "../../Pages/Store/authorizeStore";
import useCredentialsStore from "../../Pages/Store/credentialsStore";
import useclientadminStore from "../../Pages/Store/clientadminStore";
import { FaUserCircle } from "react-icons/fa";

import "./Header.css";

function Header() {((state) => state.auth);
  const setAuth = useAuthorizeStore((state) => state.setAuth);
  const auth = useAuthorizeStore
  const setRole = useclientadminStore((state) => state.setRole);
  const role = useclientadminStore((state) => state.role);

  const Credentials = useCredentialsStore((state) => state.Credentials);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    setRole(false);
    navigate("/login");
  };

  return (
    <div>
      <header className="header">
        <div className="title">
          <h1>NeuSkin Beauty Parlor</h1>
        </div>

        <div className="navigation">
          {auth ? (
            <div>
              {role ? (
                <nav className="navlist">
                  <ul className="list-container">
                    <li className="navigationlist-items">
                      <span>{Credentials.firstname}</span>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/allappointments">AllAppointments</Link>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/orders">Orders</Link>
                    </li>
                    
                    <li className="navigationlist-items">
                      <Link to="/users">Clients</Link>
                    </li>

                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </ul>
                </nav>
              ) : (
                <nav className="navlist">
                  <ul className="list-container">
                    <li className="navigationlist-items">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/products">Shop</Link>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/contacts">Contacts</Link>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/appointments">Appointments</Link>
                    </li>
                    <li className="navigationlist-items">
                      <Link to="/orders">Cart</Link>
                    </li>

                    <li className="navigationlist-items">
                    <FaUserCircle /> <span style={{color:"red"}}>{Credentials.firstname}</span>
                    </li>

                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </ul>
                </nav>
              )}
            </div>
          ) : (
            <ul className="list-container">
              <li className="navigationlist-items">
                <Link to="/">Home</Link>
              </li>
              <>
                <li className="navigationlist-items">
                  <Link to="/register">Sign Up</Link>
                </li>
                <li className="navigationlist-items">
                  <Link to="/login">Sign In</Link>
                </li>
              </>
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
