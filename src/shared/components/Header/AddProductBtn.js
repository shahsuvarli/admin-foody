import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import plusIcon from "../../../Image/icon/plus.svg";
import { CategoryModal } from "../../CategoryModal";
import { OfferModal } from "../../OfferModal";
import { ProductModal } from "../../ProductModal";
import { RestaurantModal } from "../../RestaurantModal";

export function AddProductBtn({ name, pagename, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="add-btn">
        <img src={plusIcon} alt="plus" />{" "}
        <span className="mobile-add-btn">{name.toUpperCase()}</span>
      </Button>
      <Offcanvas
        className="right-sidebar"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            {
              products: (
                <ProductModal
                  createname={"create " + pagename}
                  closeFunc={handleClose}
                />
              ),
              category: (
                <CategoryModal
                  createname={"create " + pagename}
                  closeFunc={handleClose}
                />
              ),
              restaurant: (
                <RestaurantModal
                  createname={"create " + pagename}
                  closeFunc={handleClose}
                />
              ),
              offers: (
                <OfferModal
                  createname={"create " + pagename}
                  closeFunc={handleClose}
                />
              ),
            }[pagename]
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
