import React from "react";
import { Cards } from "../Cards/Cards";
import { useSelector } from "react-redux";
import "./products.css";

export const Product = (Props) => {
  const { ProductData, SearchQuery } = useSelector((state) => ({
    ProductData: state.user.ProductData,
    SearchQuery: state.user.SearchQuery,
  }));
  const [productData, setProductData] = React.useState([]);
  React.useEffect(() => {
    if (Array.isArray(SearchQuery)) {
      setProductData(ProductData.data);
    } else {
      const Data = ProductData.data.filter((res) => {
      return res.name.toUpperCase().includes(SearchQuery.toUpperCase());
   
      });
      const c=
      Data.sort((a,b)=>{
        return a.price-b.price})
     
     setProductData(c);
    }
  }, [SearchQuery, ProductData]);
  return (
    <>
      <div className="Products">
        <h1>Clothes And Accessories</h1>

        <div className="Product-wrapper">
          {productData &&
            productData.map((item, index) => (
              <Cards key={index.toString()} data={item} />
            ))}
        </div>
      </div>
    </>
  );
};
