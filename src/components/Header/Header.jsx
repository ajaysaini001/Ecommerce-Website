import "./Header.scss";
import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import CartItem from "../Cart/CartItem/CartItem";
 
const Header = () => {
    const {cartCount}=useContext(Context);
    const navigate=useNavigate();
    const[scroll,setScroll]=useState(false);
    const[showcart,setShowcart]=useState(false);
    const[showsearch,setShowsearch]=useState(false);
    const handScroll=()=>{
        const offset=window.scrollY;
        if(offset>200){
            setScroll(true);
        }
        else
            setScroll(false);
        
    }
    useEffect(()=>{
        window.addEventListener("scroll",handScroll);
    },[])
    
    return (
        <>
    <header className={`main-header ${scroll ? 'sticky-header' : ""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=>navigate("/")}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" onClick={()=>navigate("/")}>ASDEVSTORE</div>
            <div className="right">
                <TbSearch  onClick={()=>setShowsearch(true)}/>
                <AiOutlineHeart />
                   <span className="cart-icons" onClick={()=>setShowcart(true)}>
                    <CgShoppingCart/>
                    {!!cartCount && <span>{cartCount}</span>}
                   </span>
           </div>
        </div>
        {showcart && <Cart setShowcart= {setShowcart}/>}
        {showsearch && <Search setShowsearch={setShowsearch}/>}
    </header>
    </>
    );
};

export default Header;
