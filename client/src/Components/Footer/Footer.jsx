import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
        <div className="media">
        <FaSquareInstagram />
        <FaSquareXTwitter />
        <FaSquareWhatsapp />
        <FaSquareFacebook />
        </div>
        <div className="container">
            <p>&copy;Neuskin Beauty parlor@2024</p>
        </div>
    </footer>
  )
}

export default Footer
