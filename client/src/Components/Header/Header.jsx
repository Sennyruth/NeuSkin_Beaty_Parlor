
import { Link } from 'react-router-dom'
// import useAuthorizeStore from '../../authorizeStore'
import "./Header.css"

function Header() {
  // const auth = useAuthorizeStore((state) => state.auth);
  // return (
  //   <div>
  //     {auth ? <div>Hello you are logged in</div> : <div>Please login</div>}
  //   </div>
  // );



  return (
    <div>
         <header className="header">
        <div className="title">
            <h1>NeuSkin Beauty Parlor</h1>

        </div>
        <div className="navigation">
            <nav className="navlist">
            <ul className="list-container">
                <li className="navigationlist-items"><Link to="/">Home</Link></li>
                <li className="navigationlist-items"><Link to="/services">Services</Link></li>
                <li className="navigationlist-items"><Link to="/gallery">Gallery</Link></li>
                <li className="navigationlist-items"><Link to="/contacts">Contacts</Link></li>
                <li className="navigationlist-items"><Link to="/appointments">Appointments</Link></li>
                <li className="navigationlist-items"><Link to="/register">Sign Up</Link></li>
                <li className="navigationlist-items"><Link to="/login">Sign In</Link></li>

            </ul>
            </nav>
            
        </div>
      </header>
      
    </div>
  )
}

export default Header
