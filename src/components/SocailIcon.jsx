import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import "./SocailIcon.css"
const SocialIcon = () => {
  return (
    <div className="socail-card">
      <div className="background"></div>

      <div className="logo">Socials</div>

      <a href="#">
        <div className="box box1">
          <span className="icon">
            <FaInstagram className="svg" />
          </span>
        </div>
      </a>

      <a href="##">
        <div className="box box2">
          <span className="icon">
            <FaTwitter className="svg" />
          </span>
        </div>
      </a>

      <a href="###">
        <div className="box box3">
          <span className="icon">
            <FaDiscord className="svg" />
          </span>
        </div>
      </a>

      <div className="box box4"></div>
    </div>
  );
};

export default SocialIcon;