import React from "react";
import { Card } from "antd";

const PortfolioDetailsCard = props => {
  const { name, quantity, price } = props;

  const valueInDollar = price * quantity

  return (
    <div className="page-container">
      <div className="portfolio-card">
        <Card
          title={name}
          size="small"
          extra={`Quantity: ${quantity}`}
          className="card"
        >
          <div className="portfolio-card__details">
            <p className="portfolio-card__item">Value in $: {valueInDollar}</p>
            <p className="portfolio-card__item">Value PLN: </p>
            <p className="portfolio-card__item">Invested $: </p>
            <p className="portfolio-card__item">Balance: </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioDetailsCard;
