import React from "react";
import PortfolioDetailsCard from "../components/portfolioDetailsCard ";
import useFetch from "../components/useFetch";
import { useState } from "react";
import {
  Divider,
  Button,
  DatePicker,
  InputNumber,
  AutoComplete,
} from "antd";

const AppPortfolio = () => {
  const coinsApi =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false";

  const { data: portfolio } = useFetch("http://localhost:8000/portfolio/");
  const { data: coinData } = useFetch(coinsApi);

  const [coinName, setCoinName] = useState("");
  const [coinQuantity, setCoinQuantity] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinDate, setCoinDate] = useState();

  const [coins, setCoins] = useState(portfolio);

  const [options, setOptions] = useState([]);

  // ===== Auto Complete Input ====
  const coinsNames = coinData.map(coin => {
    return { label: coin.name, value: coin.name };
  });

  const handleSearch = value => {
    setOptions(coinsNames);
  };

  const onSelect = value => {
    setCoinName(value);
  };

  const handleCoinQuantity = value => {
    setCoinQuantity(value);
  };

  const handleCoinPrice = value => {
    setCoinPrice(value);
  };

  const handleCoinDate = (value, dateString) => {
    setCoinDate(dateString);
  };

  const handleSubmit = () => {
    const coinData = {
      name: coinName,
      quantity: coinQuantity,
      price: coinPrice,
      date: coinDate,
    };

    if (
      coinData.name === "" ||
      coinData.quantity === 0.0 ||
      coinData.price === 0.0
    ) {
      alert("Please fill up all required fields");
    } else {
      fetch("http://localhost:8000/portfolio/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coinData),
      });

      setCoinName("");
      setCoinQuantity();
      setCoinPrice();
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
        setCoins(data);
      })
      .catch(err => {
        if (err === "AbortError") {
          console.log("Fetch aborted");
        }
      });
  };

  // const portfolioDetailsCard = coin.map(coin => {
  //   return (
  //     <PortfolioDetailsCard
  //       key={coin.id}
  //       id={coin.id}
  //       name={coin.name}
  //       quantity={coin.quantity}
  //       price={coin.price}
  //     />
  //   );
  // });

  const portfolioDetailsCard = coins.map(coin => {
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
      <div className="portfolio">
        <p className="portfolio__header">Add Coin to your portfolio</p>
        <form className="portfolio__form">
          <div className="portfolio-element">
            <p className="portfolio-element__input-name">Coin name</p>
            <AutoComplete
              id="coin-name"
              name="name"
              className="portfolio-element__input"
              placeholder="Coin"
              allowClear={true}
              value={coinName}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            />
          </div>
          <div className="portfolio-element">
            <p className="portfolio-element__input-name">Quantity</p>
            <InputNumber
              id="quantity"
              name="quantity"
              className="portfolio-element__input"
              step="0.0001"
              value={coinQuantity}
              onChange={handleCoinQuantity}
            />
          </div>
          <div className="portfolio-element">
            <p className="portfolio-element__input-name">Price $</p>
            <InputNumber
              id="price"
              name="price"
              className="portfolio-element__input"
              step="0.0001"
              value={coinPrice}
              onChange={handleCoinPrice}
            />
          </div>
          <div className="portfolio-element">
            <p className="portfolio-element__input-name">Date of purchase</p>
            <DatePicker
              className="portfolio-element__date-picker"
              name="date"
              onChange={handleCoinDate}
            />
          </div>
        </form>
        <Button type="primary" className="form-button" onClick={handleSubmit}>
          Add to portfolio
        </Button>
      </div>
      <Divider className="divider">Portfolio</Divider>

      <Button type="primary" className="form-button" onClick={handleRefreshBtn}>
        Refresh
      </Button>
      <div className="portfolio-card-container">{portfolioDetailsCard}</div>
    </div>
  );
};

export default AppPortfolio;
