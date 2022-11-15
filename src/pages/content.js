import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Restaurants from "./Restaurants";
import Category from "./Category";
import Orders from "./Orders";
import Offer from "./Offer";
import Header from "../shared/components/Header/header";
import Page404 from "./404";
import Login from "./Login";

const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Header toggleSidebar={toggleSidebar} />

      <Routes toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}>
        <Route path="/panel/dashboard" element={<Dashboard />} />
        <Route path="/panel/products" element={<Products />} />
        <Route path="/panel/restaurants" element={<Restaurants />} />
        <Route path="/panel/category" element={<Category />} />
        <Route path="/panel/orders" element={<Orders />} />
        <Route path="/panel/offer" element={<Offer />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
};

export default Content;
