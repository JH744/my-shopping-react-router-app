import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <div className="item-card" onClick={onClickCard}>
      <div className="item-card-img">
        <img width={200} height={300} src={item?.img} />
      </div>
      <div>{item?.choice ? "console choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
};

export default ProductCard;
