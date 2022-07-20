import React from "react";
import { Product } from "../Product/Product";
import { useDispatch } from "react-redux";
import { Banner } from "../Banner/Banner";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: "GET_PRODUCT" });
  }, []);
  return (
    <>
      <Banner />
      <Product />
    </>
  );
}
