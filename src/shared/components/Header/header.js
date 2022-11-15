import React from "react";
import { useTranslation } from "react-i18next";
import { AddProductBtn } from "./AddProductBtn";
import "./header.css";
import az from "../../../Image/flag/az.svg";
import en from "../../../Image/flag/en.svg";
import fr from "../../../Image/flag/fr.svg";
import adminIcon from "../../../Image/icon/admin.svg";
import menuIcon from "../../../Image/icon/menu.svg";
import {
  Navbar,
  Button,
  Collapse,
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

const flags = {
  az,
  en,
  fr,
};

const Header = ({ toggleSidebar }) => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);

  return (
    <Navbar className="navbar mobile-nav" expand="md">
      <Button className="sidebar-btn" onClick={toggleSidebar}>
        <img src={menuIcon} alt="menu" />
      </Button>

      <Collapse className="d-flex justify-content-end align-items-center">
        <AddProductBtn
          name={t("add product")}
          pagename="products"
          placement="end"
        />
        <Dropdown className="lang-btn" isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>
            <img
              src={flags[i18n.resolvedLanguage]}
              alt={flags[i18n.resolvedLanguage]}
            />
          </DropdownToggle>
          <DropdownMenu className="lang-dropdown">
            {Object.keys(lngs).map((lng) => (
              <DropdownItem
                type="submit"
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
              >
                <img src={flags[lng]} alt={flags[lng]} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <img src={adminIcon} alt={t("admin")} />
        <span className="admin-name">{t("admin")}</span>
      </Collapse>
    </Navbar>
  );
};

export default Header;
