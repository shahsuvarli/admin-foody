import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { setLogin } from "../../../store/slice/loginSlice";
import "./sidebar.css";
import dashboardIcon from "../../../Image/icon/dashboard.svg";
import productIcon from "../../../Image/icon/product.svg";
import restaurantIcon from "../../../Image/icon/restaurant.svg";
import offerIcon from "../../../Image/icon/offer.svg";
import orderIcon from "../../../Image/icon/order.svg";
import categoryIcon from "../../../Image/icon/category.svg";
import logoutIcon from "../../../Image/icon/logout.svg";
import logo from "../../../Image/logo/logo.svg";
import eacamp from "../../../Image/logo/eacamp.svg";

const SideBar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("isLogin");
    dispatch(setLogin(false));
    navigate("/login");
  };

  const { t } = useTranslation();
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
      </div>
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="side-menu">
        <Link to="/panel/dashboard">
          <img src={dashboardIcon} alt={t("menu.dashboard")} />{" "}
          {t("menu.dashboard")}
        </Link>
        <Link to="/panel/products">
          <img src={productIcon} alt={t("menu.products")} />{" "}
          {t("menu.products")}
        </Link>
        <Link to="/panel/restaurants">
          <img src={restaurantIcon} alt={t("menu.restaurants")} />{" "}
          {t("menu.restaurants")}
        </Link>
        <Link to="/panel/category">
          <img src={categoryIcon} alt={t("menu.category")} />{" "}
          {t("menu.category")}
        </Link>
        <Link to="/panel/orders">
          <img src={orderIcon} alt={t("menu.orders")} /> {t("menu.orders")}
        </Link>
        <Link to="/panel/offer">
          <img src={offerIcon} alt={t("menu.offers")} /> {t("menu.offers")}
        </Link>
        <button onClick={() => logoutUser()}>
          <img src={logoutIcon} alt={t("menu.logout")} /> {t("menu.logout")}
        </button>
      </div>

      <div className="side-footer text-center">
        <img src={eacamp} alt="eacamp" />
        <p>Version: 1.0.</p>
        <p className="year">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default SideBar;
