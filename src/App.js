import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.less";
import "./css/main.css";
import AppHeader from "./components/header";
import AppDashboard from "./pages/dashboard";
import AppWallet from "./pages/wallet";
import AppPortfolio from "./pages/portfolio";
import AppCalendar from "./pages/calendar";
import AppNotes from "./pages/notes";
import AppProfile from "./pages/profile";
import AppPrices from "./pages/prices";
const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Layout className="mainLayout">
        <Content className="page-container">
          <Routes>
            <Route exact path="/dashboard" element={<AppDashboard />} />
            <Route path="/prices" element={<AppPrices/>} />
            <Route path="/wallet" element={<AppWallet />} />
            <Route path="/portfolio" element={<AppPortfolio />} />
            <Route path="/calendar" element={<AppCalendar />} />
            <Route path="/notes" element={<AppNotes />} />
            <Route path="/userprofile" element={<AppProfile />} />
          </Routes>
        </Content>
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
