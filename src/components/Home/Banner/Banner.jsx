import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                A quick brown fox jumps over the ledzy dog
                    A quick brown fox jumps over the ledzy dog
                    A quick brown.
                </p>
                <div className="ctas">
                    <div className="banner-cta">ReadMore</div>
                    <div className="banner-cta v2" >ShopNow</div>
                </div>
                   
            
                </div>
                <img src={BannerImg} alt="" className="banner-img"/>
        </div>
    </div>;
};

export default Banner;
