import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img width={200} src={item?.img} />
      <div>console choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
};

export default ProductCard;
