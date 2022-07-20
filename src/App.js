import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from '../src/store/index';
import rootSaga from '../src/store/saga';
import './App.css'
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import ConfirmPage from "./components/confirmPage/Confirm";
function App() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(appReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);


  return (
    <div className="container" >

      <BrowserRouter>
        <StoreProvider store={store}>
          <Topbar />
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/confirm" element={<ConfirmPage />} />
            <Route exact path="/productDetails/product=:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </StoreProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
