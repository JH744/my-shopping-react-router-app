function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    const url = process.env.REACT_APP_API_URL + `?q=${searchQuery}`;
    // const url = process.env.REACT_APP_API_URL;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("Action에서 데이터를 dispatch에 넘김");
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: data });
  };
}

export const productAction = { getProducts };
