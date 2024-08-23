import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProducAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q") || "";
  const getProducts = async () => {
    const url = process.env.REACT_APP_API_URL + `?q=${searchQuery}`;
    // const url = process.env.REACT_APP_API_URL;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    let dd = process.env.REACT_APP_API_URL;
    console.log(dd);
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((item, index) => {
            return (
              <Col key={index} lg={3}>
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProducAll;
