import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import axios from "axios";

export default function Exchanges() {
  const [exchange, setExchange] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then(res => setExchange(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(exchange, "ex data");

  return (
    <>
      {exchange.map(coin => (
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <Card>
            <CardBody>
              <CardTitle>{coin.id}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
            <img width='100%' src='/assets/318x180.svg' alt='Logo' />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href='#'>Card Link</CardLink>
              <CardLink href='#'>Another Link</CardLink>
            </CardBody>
          </Card>
        </div>
      ))}
    </>
  );
}
