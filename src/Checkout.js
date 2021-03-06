import React from "react";
import { useStateValue } from "./StateProvider";
import Checkoutproduct from "./CheckoutProduct";
import "./Checkout.css";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>

        {basket?.length === 0 ? (
          <div className="checkout_title">
            <h2>Your Shopping basket is empty</h2>
          </div>
        ) : (
          <div className="checkout_title">
            <h2>Your Shopping Basket</h2>
            {basket?.map((item) => (
              <Checkoutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
