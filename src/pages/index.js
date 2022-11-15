import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "../shared/components/Sidebar/sidebar";
import Content from "./content";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import { useSelector } from "react-redux";
import PageAuth from "./AuthError";

const Pages = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const [auth, setAuth] = useState([]);
  useEffect(() => {
    setAuth(localStorage.getItem("isLogin"));
  }, []);

  const state = useSelector((state) => state);
  return (
    <>
      {state.loginSlice.isLogin || auth === "true" ? (
        <div className="d-flex container-fluid">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="login" />} />
          <Route path="*" element={<PageAuth />} />
        </Routes>
      )}
    </>
  );
};

export default Pages;
