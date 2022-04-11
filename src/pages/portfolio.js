import React from "react";
import AddToPortfolio from "../components/addToPortfolio";
import PortfolioCards from "../components/portfolioCards";
import PortfolioDetailsCard from "../components/portfolioDetailsCard ";
import useFetch from "../components/useFetch";
import { useState } from "react";
import { Divider, Button } from "antd";

const AppPortfolio = () => {
  const { data: portfolio } = useFetch("http://localhost:8000/portfolio/");

  
  const [coin, setCoin] = useState(portfolio);

  

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
      <AddToPortfolio />
      <Divider className="divider">Portfolio</Divider>
      <div className="portfolio-container"></div>
      {/* <PortfolioCards/> */}
      <Button type="primary" className="form-button" onClick={handleRefreshBtn}>
        Refresh
      </Button>
      <div className="portfolio-card-container">{portfolioDetailsCard}</div>
    </div>
  );
};

export default AppPortfolio;
