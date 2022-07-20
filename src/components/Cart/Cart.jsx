import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { CartData } = useSelector((state) => ({
    CartData: state.user.CartData,
  }));

  React.useEffect(() => {
    dispatch({ type: "GET_CART_DATA" });
  }, []);

  const CheckOut = () => {
    dispatch({ type: "CHECKOUT" });
    return navigate("/confirm");
  };
   const removeProductInCart =(id)=>{
     dispatch ({type:"REMOVE_PRODUCT_IN_CART",payload:id})
   }
  return (
    <>
      {CartData ? (
        <>
          {CartData.length !== 0 ? (
            <div id="checkout-section">
              <h1 id="heading">Checkout</h1>
              <div id="cart-detail">
                <div id="cart-item-wrapper">
                <p>Total Items: {CartData?.reduce((acc,item) => acc + item.quantity, 0)}</p>
                  {CartData?.map((item,index) => (
                    <div className="cart-item" key={index.toString()}>
                      <img src={item.preview} alt={item.name} />
                      <div className="detail">
                        <h3>{item.name}</h3>
                        <p>x {item.quantity}</p>
                        <p>
                          Amount: Rs{" "}
                          <span className="blue-text">{item.price}</span>{" "}
                        </p>
                        <button className="remove-btn" onClick={()=>removeProductInCart(item.id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div id="product-total">
                  <div id="price-detail">
                    <h2>Total Amount</h2>
                    <p>Total Amount: Rs <span id="total-amount">{CartData?.reduce((acc,item) => acc + (item.quantity * item.price) , 0)}</span> </p>

                    <button id="place-order-btn" onClick={CheckOut}>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="Empty-Cart">
                <div>
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png"
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="Empty-Cart">
            <div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png"
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
