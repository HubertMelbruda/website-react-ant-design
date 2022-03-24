import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Header } = Layout;
const { Item } = Menu;

const AppHeader = () => {
  return (
    <>
      <Header className="header">
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Item key="1">
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item key="2">
            <Link to="/prices">Prices</Link>
          </Item>
          <Item key="3">
            <Link to="/portfolio">Portfolio</Link>
          </Item>
          <Item key="4">
            <Link to="/wallet">Wallet</Link>
          </Item>
          <Item key="5">
            <Link to="/notes">Notes</Link>
          </Item>
          <Item key="6">
            <Link to="/calendar">Calender</Link>
          </Item>
          <Item key="7">
            <Link to="/userprofile">Profile</Link>
          </Item>
        </Menu>
      </Header>
    </>
  );
};

export default AppHeader;