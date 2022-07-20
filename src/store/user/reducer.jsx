// Set initial state
const initialState = {
  ProductData: [],
  ProductDataById:[],
  CartData:[],
  SearchQuery:[]
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GOT_PRODUCT": {
      return {
        ...state,
        ProductData: action.data,
      };
    }
    case"GOT_PRODUCT_BY_ID":{
     
      return {
        ...state,
        ProductDataById:action.data
      }
    }
    case"GOT_CART_DATA":{
      return {
        ...state,
        CartData:action.data
      }
    }
    case "SEARCH_QUERY":{
    
      return{
        ...state,
        SearchQuery:action.data
      }
    }
    default:
      return state;
  }
}
