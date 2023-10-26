import "./Newsletter.scss";
import{FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">
                Signup for latest update and offers
            </span>
            <div className="form">
                <input type="text" placeholder="Email Address"/>
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordence with our privecy policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter size={14}/>

                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>
        </div>
};

export default Newsletter;
