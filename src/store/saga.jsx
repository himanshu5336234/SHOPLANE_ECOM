import * as Users from "../Api/index";
import { takeLatest, takeEvery, all } from "redux-saga/effects";



function* userActionWatcher() {
 yield takeLatest("GET_PRODUCT", Users.getProduct);
 yield takeLatest("GET_CART_DATA", Users.getCartProduct);
 yield takeLatest("GET_PRODUCT_BY_ID", Users.getProductById);
 yield takeLatest("ADD_PRODUCT_CART", Users.addProductToCart);
 yield takeLatest("CHECKOUT", Users.getCheckOut);
 yield takeLatest("SEARCH_PRODUCT", Users.getSearchData);
 yield takeLatest("REMOVE_PRODUCT_IN_CART", Users.removeProductInCart);
}













export default function* rootSaga() {
  yield all([
    userActionWatcher()
  ]);
}
