import React from "react";
import { useState } from "react";
import { Input, DatePicker, Button } from "antd";

const AddToPortfolio = () => {
  const [coinName, setCoinName] = useState();
  const [coinQuantity, setCoinQuantity] = useState();
  const [coinPrice, setCoinPrice] = useState();
  const [coinDate, setCoinDate] = useState();

  const handleInputName = e => {
    setCoinName(e.target.value);
  };

  const handleInputQuantity = e => {
    setCoinQuantity(e.target.value);
  };

  const handleInputPrice = e => {
    setCoinPrice(e.target.value);
  };

  const handleDateInput = (value, dateString) => {
    setCoinDate(dateString);
  };

  // function adjustPrice(price) {
  //   const newPrice = price.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     minimumFractionDigits: 1,
  //     maximumFractionDigits: 8,
  //   });
  //   return newPrice;
  // }

  const handleSubmit = () => {
    const coinData = {
      name: coinName,
      quantity: coinQuantity,
      price: coinPrice,
      date: coinDate,
    };

    fetch("http://localhost:8000/portfolio/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coinData),
    }).then(() => {
      
    });

    setCoinName("")
    setCoinQuantity("")
    setCoinPrice("")
    setCoinDate("")
  };

  return (
    <div className="formAddToPortfolio">
      <p className="form-header">Add Coin to your portfolio</p>
      <form className="coin-form">
        <div className="form-row">
          <p>Coin name</p>
          <Input
            id="coin-name"
            name="name"
            className="input"
            placeholder="Coin"
            allowClear={true}
            value={coinName}
            onChange={handleInputName}
          />
        </div>
        <div className="form-row">
          <p>Quantity</p>
          <Input
            id="quantity"
            name="quantity"
            className="input"
            placeholder="e.g 0.44"
            allowClear={true}
            value={coinQuantity}
            onChange={handleInputQuantity}
          />
        </div>
        <div className="form-row">
          <p>Price</p>
          <Input
            id="price"
            name="price"
            className="input"
            placeholder="e.g 125.44"
            allowClear={true}
            value={coinPrice}
            onChange={handleInputPrice}
          />
        </div>
        <div className="form-row">
          <p>Date of purchase</p>
          <DatePicker
            className="date-picker"
            name="date"
            onChange={handleDateInput}
          />
        </div>
      </form>
      <Button type="primary" className="form-button" onClick={handleSubmit}>
        Add to portfolio
      </Button>
      
    </div>
  );
};

export default AddToPortfolio;
