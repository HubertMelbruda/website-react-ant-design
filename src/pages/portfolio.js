import React from "react";
import PortfolioDetailsCard from "../components/portfolioDetailsCard ";
import useFetch from "../components/useFetch";
import { useState } from "react";
import { Divider, Button, DatePicker, Input } from "antd";

const AppPortfolio = () => {
  const { data: portfolio } = useFetch("http://localhost:8000/portfolio/");
  const [coinName, setCoinName] = useState("");
  const [coinQuantity, setCoinQuantity] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinDate, setCoinDate] = useState();
  const [coin, setCoin] = useState(portfolio);
  const [isCoinSend, setIsCoinSend] = useState(false);

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

  const handleSubmit = () => {
    const coinData = {
      name: coinName,
      quantity: coinQuantity,
      price: coinPrice,
      date: coinDate,
    };

    if (coinData.name === "" || coinData.quantity === 0) {
      alert("Please fill up all required fields");
    } else {
      fetch("http://localhost:8000/portfolio/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coinData),
      });

      setCoinName("");
      setCoinQuantity(0);
      setCoinPrice(0);
      setCoinDate("");
    }
  };

  const handleRefreshBtn = () => {
    fetch("http://localhost:8000/portfolio/")
      .then(response => {
        if (!response.ok) {
          throw Error("Could not fetch the data from the server");
        }
        return response.json();
      })
      .then(data => {
        setCoin(data);
      })
      .catch(err => {
        if (err === "AbortError") {
          console.log("Fetch aborted");
        }
      });
  };

  const portfolioDetailsCard = coin.map(coin => {
    return (
      <PortfolioDetailsCard
        key={coin.id}
        id={coin.id}
        name={coin.name}
        quantity={coin.quantity}
        price={coin.price}
      />
    );
  });

  return (
    <div className="page-container">
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
      <Divider className="divider">Portfolio</Divider>
      <div className="portfolio-container"></div>
      <Button type="primary" className="form-button" onClick={handleRefreshBtn}>
        Refresh
      </Button>
      <div className="portfolio-card-container">{portfolioDetailsCard}</div>
    </div>
  );
};

export default AppPortfolio;
