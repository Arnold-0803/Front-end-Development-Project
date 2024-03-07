import { Link } from "react-router-dom";
import banner from "./image/Banner.png";
import { BsFacebook, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <h2 style={{color: '#fff'}}>About Us</h2>
      <div className="container">
        <div className="col-left">
          <img src={banner} alt="Banner" />
        </div>
        <div className="col-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Consequatur, laudantium voluptas. Animi nisi consequuntur 
          nobis odio quas repellat aliquam corporis voluptate quia, aut 
          dignissimos provident aperiam corrupti odit doloribus eveniet.</p>
          <Link>Lear more</Link>
        </div>
      </div>
      <div className="contact">
        <h2>Contacts & Social media</h2>
        <div className="connect-box">
          <div>
            <h4>Location</h4>
            <ul>
              <li><a href="#">Nairobi</a></li>
              <li><a href="#">Tokyo</a></li>
              <li><a href="#">Ottawa</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacts</h4>
            <ul>
              <li><a href="#">+25714387538</a></li>
              <li><a href="#">+0123456789</a></li>
              <li><a href="#">+1@6%&$*^&</a></li>
            </ul>
          </div>
          <div>
            <h4>Info-Email</h4>
            <ul>
              <li><a href="#">arnoldkells4@gmail.com</a></li>
              <li><a href="#">info@.co.ke</a></li>
              <li><a href="#">recipe@yummy.com</a></li>
            </ul>
          </div>
          <div>
            <h4>Social media</h4>
            <ul>
              <li><a href="#"><BsTwitterX /></a></li>
              <li><a href="#"><BsFacebook /></a></li>
              <li><a href="#"><BsYoutube /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright" style={{color: '#fff', textAlign: 'center'}}>
        <h3>©copyright Kiritu .Inc @ 2024, Alrights reserved</h3>
      </div>
    </div>
  );
}
 
export default Footer;