import React from "react";
import cn from "classnames";
import styles from "./CartBottom.module.scss";

import { Link } from "react-router-dom";

import { CART_BOTTOM } from "./CartBottom.constants";

const CartBottom = ({ totalPrice, pizzasCount }) => (
  <div className="container">
    <div className={cn("row justify-content-center mb-5 ", styles.allPizzas)}>
      <div className="col-6">
        {CART_BOTTOM.TOTAL_PIZZA}{" "}
        <b>
          {pizzasCount} {CART_BOTTOM.THING}
        </b>
      </div>
      <div className={cn(styles.price, "col-6 d-flex justify-content-end")}>
        {CART_BOTTOM.ORDER_PRICE}
        <b>
          {totalPrice} {CART_BOTTOM.RUB}
        </b>
      </div>
    </div>

    <div className="row justify-content-center ">
      <div className="col-6">
        <Link className={cn(styles.goBack ,'d-flex justify-content-center align-items-center')} to="/">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{CART_BOTTOM.GO_BACK}</span>
        </Link>
      </div>

      <div className="col-6 d-flex justify-content-end">
        <div className={cn(styles.buyNow ,'d-flex justify-content-center align-items-center' )}>
          <span>{CART_BOTTOM.BUY_NOW}</span>
        </div>
      </div>
    </div>
  </div>
);

export default CartBottom;
