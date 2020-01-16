import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
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
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "2%",
          fontSize: "4rem"
        }}>
        Exchange Marketplace
      </h1>
      <p
        style={{
          textAlign: "center",
          width: "70%",
          fontSize: "2rem",
          margin: "0 auto",
          paddingTop: "1%"
        }}>
        What Is an Exchange? <br /> <br /> An exchange is a marketplace where
        securities, commodities, derivatives and other financial instruments are
        traded. The core function of an exchange is to ensure fair and orderly
        trading and the efficient dissemination of price information for any
        securities trading on that exchange. Exchanges give companies,
        governments, and other groups a platform from which to sell securities
        to the investing public.
      </p>
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          color: "black"
        }}>
        {exchange.map(coin => (
          <Card key={coin.id}>
            <CardBody>
              <CardTitle>
                <h2>{coin.name}</h2>
              </CardTitle>
              <CardSubtitle style={{ fontSize: "1rem" }}>
                {coin.year_established}
              </CardSubtitle>
            </CardBody>
            <img width='100%' src={coin.image} alt='Logo' />
            <CardBody>
              <CardText> {coin.country}</CardText>
              <CardText>Ranking: {coin.trust_score_rank} </CardText>
              <CardText>Trust Score: {coin.trust_score}</CardText>
            </CardBody>
            <Button
              color='primary'
              size='lg'
              block
              href={coin.url}
              target='_blank'>
              Shop Now
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
