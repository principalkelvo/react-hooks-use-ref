import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
   // create the ref and set its initial value
   const prevPriceRef = useRef(price);

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    // we need some way to get the prevPrice...
     // use the current value of the ref
     const prevPrice = prevPriceRef.current;
    if (price > prevPrice) {
      setColor("green");
    } else if (price < prevPrice) {
      setColor("red");
    } else {
      setColor("black");
    }
  }, [price]);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
