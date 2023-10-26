import "./Footer.scss";
import{FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
        
            <div className="col">
                <div className="tittle">About</div>
                <div className="text">
                    voluptatem accusantium doloremque loadantium, totam rem
                    aparium, eaque ipsa que ab ille invetore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo eaque
                    ipsa quea ab ille
                </div>
            </div>
            <div className="col">
                <div className="contact">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        House no. 45 ,dalbir nagar ,kutani road ,panipat
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                        Phone:+91 92 584 56457
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        Email: ajaysingh@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Ctegories</div>
                <span className="text">Headphones</span>
                <span className="text">smart watches</span> 
                <span className="text">Bluetooth speakers</span>
                <span className="text">Wireless Earbirds</span>
                <span className="text">Home theater</span>
                <span className="text">Projecters</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span> 
                <span className="text"> Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Term & Condition</span>
                <span className="text">Contact-us</span>
            </div>
            </div>
            <div className="bottem-bar">
                <div className="bottem-bar-content">
                    <div className="text">
                        AJDEVSTORE 2023 CREATED BY AS DEV, PREMIUM ECOMMERCE
                        SOLUTION.
                    </div>
                    <img src={Payment} alt=""/>
                </div>
            </div>
    </footer>;
};

export default Footer;
