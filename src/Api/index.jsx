import { put } from "redux-saga/effects";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
export function* getProduct() {
  const data = yield axios
    .get(`${API}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
  yield put({ type: "GOT_PRODUCT", data });
}

export function* getProductById({ payload }) {
  const data = yield axios
    .get(`${API}/${payload}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
  yield put({ type: "GOT_PRODUCT_BY_ID", data });
}

export function* getCartProduct() {
  const CartData = JSON.parse(localStorage.getItem("Cart"));
  yield put({ type: "GOT_CART_DATA", data: CartData });
}

export function* addProductToCart({ payload }) {
  // console.log(payload)
  const cartData =
    localStorage.getItem("Cart") === null
      ? new Array()
      : JSON.parse(localStorage.getItem("Cart"));

  if (cartData.length != 0) {
    const productIsInCart = cartData.find((item) => payload.id == item.id);
    if (productIsInCart == undefined) {
      payload.quantity = 1;
      const newCartData = [...cartData, payload];
      localStorage.setItem("Cart", JSON.stringify(newCartData));
      yield put({ type: "GOT_CART_DATA", data: newCartData });
    } else {
      const productIndex = cartData.findIndex((item) => item.id === payload.id);
      const productIsInCart = cartData.find((item) => payload.id == item.id);
      cartData.splice(productIndex, productIndex + 1);
      productIsInCart.quantity += 1;
      const newCartData = [...cartData, productIsInCart];
      localStorage.setItem("Cart", JSON.stringify(newCartData));
      yield put({ type: "GOT_CART_DATA", data: newCartData });
    }
  } else {
    payload.quantity = 1;
    const newCartData = [payload];
    localStorage.setItem("Cart", JSON.stringify(newCartData));
    yield put({ type: "GOT_CART_DATA", data: newCartData });
  }
}

export function* getCheckOut() {
  localStorage.setItem("Cart", "[]");

  yield put({ type: "GOT_CART_DATA", data: [] });
}
export function* getSearchData({ payload }) {
  yield put({ type: "SEARCH_QUERY", data: payload });
}



export function* removeProductInCart({payload}){

  const cartData =JSON.parse(localStorage.getItem("Cart"));
  const productIndex = cartData.findIndex((item) => item.id === payload);
  const productIsInCart = cartData.find((item) => payload == item.id);
  cartData.splice(productIndex, productIndex + 1);
  if(productIsInCart.quantity>1){
    productIsInCart.quantity -= 1;
    const newCartData = [...cartData, productIsInCart];
    localStorage.setItem("Cart", JSON.stringify(newCartData));
    yield put({ type: "GOT_CART_DATA", data: newCartData });
  }
 else{
  const newCartData = [...cartData];
  localStorage.setItem("Cart", JSON.stringify(newCartData));
  yield put({ type: "GOT_CART_DATA", data: newCartData });
 }

}