import React from "react";
import { Input, DatePicker   } from "antd";

const AddToPortfolio = () => {
  const handleSubmit = () => {};

  return (
    <div className="formAddToPortfolio">
      <p>Add a Coin</p>
      <form className="coin-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <p>Coin name</p>
        <Input
          id="coin-name"
          className="input"
          placeholder="Coin"
          allowClear={true}
          />
        </div>
        <div className="form-row">
          <p>Quantity</p>
        <Input
          id="quantity"
          className="input"
          placeholder="Coin"
          allowClear={true}
          />
        </div>
        <div className="form-row">
          <p>Price</p>
        <Input
          id="price"
          className="input"
          placeholder="Price"
          allowClear={true}
        />
        </div>
        <div className="form-row">
          <p>Price</p>
        <Input
          id="price"
          className="input"
          placeholder="Price"
          allowClear={true}
        />
        </div>
        
        <div className="form-row">
        <p>Price</p>
        <DatePicker className="data-picker" />
        </div>
      </form>
    </div>
  );
};

export default AddToPortfolio;
