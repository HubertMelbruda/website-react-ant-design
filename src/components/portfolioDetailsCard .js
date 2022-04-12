import React from "react";
import { Card } from "antd";

const PortfolioDetailsCard = props => {
  const { name, quantity} = props;

  return (
    <div className="page-container">
      <div className="portfolio-card-container">
        <Card
          title={name}
          size="small"
          extra={`Quantity: ${quantity}`}
          className="card"
        >
          <div className="card-details">
            <p>Value $: </p>
            <p>Value PLN: </p>
            <p>Invested $: </p>
            <p>Balance: </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioDetailsCard;
