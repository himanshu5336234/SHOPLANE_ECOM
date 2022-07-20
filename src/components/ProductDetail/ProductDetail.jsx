import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
export const ProductDetail = (props) => {
  const { ProductDataById } = useSelector((state) => ({
    ProductDataById: state.user.ProductDataById,
  }));

  const dispatch = useDispatch();

  const { id } = useParams();
  const [activeImage, setActiveImage] = React.useState(0);
  const [prewiewImage, setPrewiewImage] = React.useState("");

  React.useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_ID", payload: id });
  }, []);
React.useEffect(()=>{
  if(ProductDataById.data){

    setPrewiewImage(ProductDataById.data.preview)
  }
},[ProductDataById.data])
  return (
  
  <>
  {ProductDataById.data &&     <div>
        <div id="detail-section">
          <div>
            <img
              className="product-image"
              src={prewiewImage}
              alt={ProductDataById.data.preview}
            />
          </div>
          <div className="info-wrapper">
            <h1 className="title">{ProductDataById.data.name}</h1>
            <h3 className="brand">{ProductDataById.data.brand}</h3>
            <h3 className="price ">Price: Rs {ProductDataById.data.price}</h3>
            <h3 className="description">Description</h3>
            <p>{ProductDataById.data.description}</p>
            <h3 className="preview">Product Preview</h3>
            <div className="product-images" >
                    {ProductDataById.data.photos?.map((item,index)=> <img id={index} key={index.toString()} className={index===activeImage?"active-image":""} src={item} alt="product-preview" onClick={() => {setActiveImage(index);setPrewiewImage(item)}} />)}
                </div>
            <button className="add-to-cart" onClick={()=>dispatch({type:"ADD_PRODUCT_CART",payload:ProductDataById.data})}>Add To Cart</button>
          </div>
        </div>
      </div>}
  
  </>
  );
};
