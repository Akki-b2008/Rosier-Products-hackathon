import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">ROSIER</h2>
          <p className="footer-description">
            Delivering wholesome Indian flavors straight from our farms to your
            table. Quality you can trust. Taste you’ll remember.
          </p>
          <div className="footer-socials">
            <FaYoutube className="icon" size={34} />
            <FaFacebook className="icon" size={34} />
            <FaInstagram className="icon" size={34} />
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <h3>Helpful Links</h3>
            <ul>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3> Policy</h3>
            <ul>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">shipping Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Term of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact us</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIiPLY3hKj17VG1kfakH7W1rp0w-BCz0pJZHeAdtwyEka76w/viewform">Careers</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

        <div className="footer-bottom">
          <p>© 2025 RosierFoods. All rights reserved.</p>
        </div>

      
      {/* <div className="footer-watermark">
        <h1 >Rosier</h1>
      </div> */}
    </footer>
  );
};

export default Footer;
