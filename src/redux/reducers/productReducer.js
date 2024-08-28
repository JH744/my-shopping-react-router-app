let initialState = {
  productList: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  console.log("리듀서에서 수행됨" + payload);
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload };
    default:
      return { ...state };
  }
}

export default productReducer;
