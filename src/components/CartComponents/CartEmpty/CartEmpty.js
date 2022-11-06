import React from "react";
import { Link } from "react-router-dom";

import cn from "classnames";
import styles from "./CartEmpty.module.scss";
import emptyCartSvg from "../../../assets/img/empty-cart.png";

import { CART_EMPTY } from "./CardEmpty.constants";

const CartEmpty = () => (
  <div className={cn(styles.content, "container-fluid")}>
    <h2 className={cn(styles.cartIsEmpty, "row")}>
      {CART_EMPTY.CART_IS_EMPTY} <icon>😕</icon>
    </h2>
    <div className={cn(styles.text,"row-md-5")}>
      <p>{CART_EMPTY.NEED_TO_ORDER}</p>
      <p>{CART_EMPTY.GO_TO_MAIN_TO_ORDER}</p>
    </div>
    <img className="row" src={emptyCartSvg} alt="Empty cart" />
    <Link to="/" className="row">
      {CART_EMPTY.GO_TI_MAIN}
    </Link>
  </div>
);

export default CartEmpty;
