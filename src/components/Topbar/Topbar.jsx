import { Link } from "react-router-dom";
import React from "react";
import "./Topbar.css";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
const Topbar = () => {
  const [cartItem, setCartItem] = React.useState(0);
  const [Navbar, setNavbar] = React.useState(false);
  const [searchData, setSearchData] = React.useState("");
  const dispatch = useDispatch();
  const { CartData, ProductData } = useSelector((state) => ({
    CartData: state.user.CartData,
    ProductData: state.user.ProductData,
  }));

  const searchHandleChange = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: searchData });
  };

  React.useEffect(() => {
    const item =
      localStorage.getItem("Cart") === null
        ? []
        : JSON.parse(localStorage.getItem("Cart"));

    setCartItem(item.length);
  }, [CartData]);

  return (
    <div className="nav-bar">
          <header>
   
   <div id="logo">
     <h1>
       <Link to="/">
         <span className="blue-text">SHOP</span>LANE
       </Link>
     </h1>
   </div>
   <nav>
     <Link to="/">CLOTHINGS</Link>
     <Link to="/">ACCESSORIES</Link>
   </nav>
   <div id="DehazeIcon" onClick={() => setNavbar(!Navbar)}>
     <DehazeIcon />
   </div>
   {Navbar && (
     <>
       {" "}
       <div className="DehazeIcon-Navbar">
         <div>
           <span id="CloseIcon" onClick={() => setNavbar(!Navbar)}>
             <CloseIcon />
           </span>
           <div>
             <Link to="/cart">
               <span className="white-text"> Cart</span>
               <span className="blue-text">{cartItem}</span>
             </Link>
           </div>
         </div>
       </div>
     </>
   )}
   <div id="link">
     <div className="search-wrapper">
       <input type="text" onChange={(e) => setSearchData(e.target.value)} />
       <span onClick={searchHandleChange}>
         <SearchIcon />
       </span>
     </div>
     <div>
       <AccountCircleIcon />
     </div>
     <div>
       <Link to="/cart">
         <ShoppingCartIcon />
       </Link>
       <span id="cart">
         <h6>{cartItem}</h6>
       </span>
     </div>
   </div>
 </header>
    </div>

  );
};

export default Topbar;
