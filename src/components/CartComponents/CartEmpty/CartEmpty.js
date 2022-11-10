import React from "react";
import { Link } from "react-router-dom";

import cn from "classnames";
import styles from "./CartEmpty.module.scss";
import emptyCartSvg from "../../../assets/img/empty-cart.png";

import { CART_EMPTY } from "./CardEmpty.constants";

const CartEmpty = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center">
    <div className="row">
      <h2 className={cn(styles.cartIsEmpty, "d-flex justify-content-center")}>
        {CART_EMPTY.CART_IS_EMPTY} <icon>😕</icon>
      </h2>

      <div
        className={cn(styles.text, "d-flex flex-column justify-content-center")}
      >
        <p>{CART_EMPTY.NEED_TO_ORDER}</p>
        <p>{CART_EMPTY.GO_TO_MAIN_TO_ORDER}</p>
      </div>
    </div>

    <img className="row mb-4" src={emptyCartSvg} alt="Empty cart" />
    <Link to="/" className={cn(styles.goBack, "row d-flex justify-content-center align-items-center")}>
      {CART_EMPTY.GO_TI_MAIN}
    </Link>
  </div>
);

export default CartEmpty;
