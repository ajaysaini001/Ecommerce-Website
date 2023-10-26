import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import {MdClose} from "react-icons/md";
import { Context } from "../../utils/Context";
import {BsCartXFill, BsStripe} from "react-icons/bs";
import { useContext } from "react";
import {loadStripe} from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
const Cart = ({setShowcart}) => {

    const {cartItems,cartSubTotal}=useContext(Context);

    const stripePromis=loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    const handlePayment=async()=>{
        try{
            const stripe=await stripePromis;
            const res=await makePaymentRequest.post("/api/orders",{
                products:cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId:res.data.stripeSession.id,

            });
        }catch(error){
            console.log(error);
        }
    }
    return <div className="cart-pannel">
        <div className="opac-layer"></div>
        <div className="cart-content"> 
        <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={()=>setShowcart(false)}>
                <MdClose/>
                <span className="text">close</span>
            </span>
        </div>
        {!cartItems.length && <div className="empty-cart">
            <BsCartXFill/>
            <span>No produsts in the cart</span>
            <button className="return-cta">RETURN TO SHOP</button>
        </div>}
        { !!cartItems.length &&<>
        <CartItem/>
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text">SubTotal</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
            </div>
        </div>
        </>}
        </div>
    </div>
};

export default Cart;
