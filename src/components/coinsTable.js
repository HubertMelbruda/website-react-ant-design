import React from "react";
import { Table, Image } from "antd";
import useFetch from "../components/useFetch";

const CoinTable = () => {
  const { data } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ['descend'],
    },
    { title: "Coin", dataIndex: "symbol", colSpan: 3, className: 'symbol', },
    { title: "", dataIndex: "image", colSpan: 0 },
    {
      dataIndex: "name",
      colSpan: 0,
      className: "coin-name",
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "24h Change",
      dataIndex: "percentage24h",
      // className: 'percentage24hColor',

    },
    {
      title: "24h Volume",
      dataIndex: "volume24h",
    },
    {
      title: "Market",
      dataIndex: "marketCap",
    },
    {
      title: "ATH",
      dataIndex: "ath",
    },
  ];

  function adjustPrice(price) {
    const newPrice = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 1,
      maximumFractionDigits: 8,
    });
    return newPrice;
  }

  function adjustLargeValue(value) {
    const newPrice = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    return newPrice;
  }

  function adjustPercentageValue(value) {
    const change24 = value / 100
    const newPrice = change24.toLocaleString("en-GB", {
      style: "percent",
      maximumFractionDigits: 1,
    }) ;
    return newPrice;
  }


  const coinDetails = [];

  data.forEach(coin => {
    coinDetails.push({
      key: coin.id,
      id: coin.market_cap_rank,
      symbol: coin.symbol,
      image: <Image width={35} src={ coin.image } />,
      name: coin.name,
      price: adjustPrice(coin.current_price),
      percentage24h: adjustPercentageValue(coin.price_change_percentage_24h),
      volume24h: adjustLargeValue(coin.total_volume),
      marketCap: adjustLargeValue(coin.market_cap),
      ath: adjustPrice(coin.ath),
    });
  });

  return (
    <div className="pricesTable">
      <Table dataSource={coinDetails} columns={columns} />
    </div>
  );
};

export default CoinTable;
